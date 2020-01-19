<template>
    <div class="live">
      {{addys}}
        {{res}}
        {{markers}}
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        res: '',
        markers: [],
        bruh: '',
        addys: [],
    }
  },
  async mounted () {
    const lh = 'https://quantum-star-265521.appspot.com/view_endpoint';
    await axios.get(lh).then(response => (this.res = response.data));
    //eslint-disable-next-line
    for (const [key, val] of Object.entries(this.res)){
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
          address: val.address,
          key:'AIzaSyAoV6IqyfJMAcGznrt3JOU6912GQszXoeA',
        }
      })
      .then(response => this.markers.push({position: {lat: response.data.results[0].geometry.location.lng, lng: response.data.results[0].geometry.location.lat}}, this.addys.push({ addy: response.data.results[0].formatted_address})))
      .catch(function (error){
          //eslint-disable-next-line
      console.log(error);
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.live{
    position: absolute;
    top:100px;
    font-size:15px;
}
</style>
