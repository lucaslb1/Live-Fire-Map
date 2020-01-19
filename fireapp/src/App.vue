<template>
  <div id="app">
         <div class="header">
      <div class="container">
        <div class="logo">Fire Map</div>
        <div class="nav">
          <nav>
          <ul id="tabs">
            <li><a href="#home" @click="next">Home</a></li>
            <li><a href="#about" @click="next2">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
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
      this.$router.push('/about');
    },
  }
}
</script>

