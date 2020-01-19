import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import BootstrapVue from 'bootstrap-vue'
import FireMap from './components/FireMap.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Temp from './components/Temp.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: FireMap,
    name: 'home'
  },
  { 
    path: '/dump',
    beforeEnter: (to, from, next) => {

    next();
  },
   component: Temp
  },
  { 
    path: '/about',
    beforeEnter: (to, from, next) => {

    next();
  },
   component: About
  },
  { 
    path: '/contact',
    beforeEnter: (to, from, next) => {
 
    next();
  },
   component: Contact
  },
  { 
    path: '/services',
    beforeEnter: (to, from, next) => {

    next();
  },
   component: Services
  },
  
]

const router = new VueRouter({
  routes
})

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAoV6IqyfJMAcGznrt3JOU6912GQszXoeA",
    libraries: "places",
  }
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
