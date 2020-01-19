import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import BootstrapVue from 'bootstrap-vue'
import FireMap from './components/FireMap.vue'
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
    path: '/about',
    beforeEnter: (to, from, next) => {
    if (from.name !== 'home') {
      next('/')
    }
    next()
  },
   component: Temp
  },
]

const router = new VueRouter({
  routes
})

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBtsdMUy5H9gvpFIafIuRzfbzyqfBvCRTc",
    libraries: "places",
  }
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
