import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

import WorldMap from '@/components/WorldMap.vue'
import JapanMap from '@/components/JapanMap.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { path: '/world-map', component: WorldMap },
  { path: '/japan-map', component: JapanMap }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
