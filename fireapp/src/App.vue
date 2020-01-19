<template>
  <div id="app">
         <div class="header">
      <div class="container">
        <div class="logs">
        <div class="logo">Fire Map</div>
        <label class= "sc">Santa Cruz</label>
        </div>
        <div class="nav">
          <nav>
          <ul id="tabs">
            <li><a href="#home" @click="next">Map</a></li>
            <li><a href="#dump" @click="next2">JSON Dump</a></li>
            <li><a href="#about" @click="next3">About</a></li>
            <li><a href="#services" @click="next4">Other Services</a></li>
            <li><a href="#contact" @click="next5">Contact</a></li>
          </ul>
          </nav>
        </div>
      </div>
    </div>
    <Layout/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  },
    methods : {
    next() {
      this.$router.push('/');
    },
    next2() {
      this.$router.push('/dump');
    },
    next3() {
      this.$router.push('/about');
    },
    next4() {
      this.$router.push('/services');
    },
    next5() {
      this.$router.push('/contact');
    },
  }
}
</script>

<style lang="scss">
.logs{
  display:inline-block;
  width:300px;
}
.sc{
  position:absolute;
  top:50px;
  left: 70px;
}
</style>