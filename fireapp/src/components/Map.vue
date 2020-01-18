<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="logo">Fire Map</div>
        <div class="nav">
          <nav>
          <ul id="tabs" v-scroll-spy-active v-scroll-spy-link>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          </nav>
        </div>
      </div>
    </div>
    <div>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>
    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="13.5"
      style="width:100%;  height: 1000px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 36.9541, lng: -122.0308},
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
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
<style>
.tbl{
  display:inline-block;
}
.header {
  background: white;
  overflow: hidden;
  position: fixed;
  top: 0px;
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
  width:100vw;
  height: 120px;
  text-align: center;
  display: inline-block;
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
  display: block;
  color: rgb(235, 70, 11);
  text-align: center;
  padding: 20px;
  text-decoration: none;
}
.nav ul li a:hover, .nav ul li.active a{
  background-color: rgb(144, 247, 247);
}

@media screen and (max-width:500px){
  
  .logo{
    text-align:center;
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