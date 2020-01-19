<template>
  <div>
    <div class="search">
      <label>
        <gmap-autocomplete
          @place_changed="setPlace" placeholder="Add a new location">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>
    </div>
    <gmap-map class="gmap"
      :center="center"
      :zoom="13.9"
      :options="{
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      }"
      style="width:100%;  height: 800px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
        :icon="markerOptions"

      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import axios from 'axios';
const flame = require('../../public/flame.png');
export default {
  data() {
    return {
      center: { lat: 36.9741, lng: -122.0308},
      markers: [],
      places: [],
      currentPlace: '',
      res: '',
      markerOptions: {
      url: flame,
      arr2: [],
      addys: [],
      size: {width: 60, height: 90, f: 'px', b: 'px',},
      scaledSize: {width: 60, height: 90, f: 'px', b: 'px',},
    },
    };
  },

  async mounted() {
    const lh = 'https://quantum-star-265521.appspot.com/view_endpoint';
    await axios.get(lh).then(response => (this.res = response.data));
    //eslint-disable-next-line
    for (const [key, val] of Object.entries(this.res)){
        await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
          address: val.address,
          key:'AIzaSyAoV6IqyfJMAcGznrt3JOU6912GQszXoeA',
        }
      })
      .then(response => this.markers.push({position: {lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng}}))
      .catch(function (error){
        //eslint-disable-next-line
        console.log(error);
      });
    }
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss">
.header {
  background: rgb(238, 239, 235);
  overflow: hidden;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
  border-bottom: 1px solid rgb(235, 70, 11);
}
.logo {
  color: rgb(235,70,11);
  font: small-caps;
  text-align: left;
  font-size: 40px;
  z-index: -2;
  margin-left:50px;
}

.container {
  overflow: hidden;
  height: 80px;
  display: inline-flex;
  z-index: 10 ;
}
#tabs{
  margin-right:25px;
  margin-top:5px;
}

.nav ul {
  float: right;
  list-style-type: none;
}
.nav li {
  float: left;
}
.nav li a {
  display: flex;
  color: rgb(235, 70, 11);
  text-align: center;
  padding: 20px;
  text-decoration: none;
}
.nav ul li a:hover, .nav ul li.active a{
  background-color: rgb(216, 209, 207);
}
.search{
  position:fixed;
  top:100px;
  left:45%;
  z-index:2;
}
.gmap{
  position:absolute;
  top:82px;
}
@media screen and (max-width:500px){
  
  .logo{
    text-align:left;
    margin-left:0px;
  }
  .nav {
    margin:0 auto;
    display:inline-block;
  }
  #tabs{
    font-size:6px;
    margin-right:none;
    margin-top:none;
  }

}

</style>