import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

import MapOfTheWorld from '@/components/MapOfTheWorld.vue'
import MapOfJapan from '@/components/MapOfJapan.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { path: '/map-of-the-world', component: MapOfTheWorld },
  { path: '/map-of-japan', component: MapOfJapan }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
