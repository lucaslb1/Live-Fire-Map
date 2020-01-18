import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import Scrollspy from 'vue2-scrollspy';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import router from './router'
Vue.use(BootstrapVue);
Vue.use(Scrollspy);
Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBtsdMUy5H9gvpFIafIuRzfbzyqfBvCRTc",
    libraries: "places" // necessary for places input
  }
});
new Vue({
  render: h => h(App)
}).$mount('#app')
