import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import App from './App.vue'

import MapOfTheWorld from '@/components/basic/MapOfTheWorld.vue'
import MapOfJapan from '@/components/basic/MapOfJapan.vue'
import MapOfTokyoInJapan from '@/components/basic/MapOfTokyoInJapan.vue'
import MapOfJapanExcludingKyushu from '@/components/basic/MapOfJapanExcludingKyushu.vue'
import ChoiceMapOfJapan from '@/components/tutorial/ChoiceMapOfJapan.vue'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.config.productionTip = false

const routes = [
  { path: '/map-of-the-world', component: MapOfTheWorld },
  { path: '/map-of-japan', component: MapOfJapan },
  { path: '/map-of-tokyo-in-japan', component: MapOfTokyoInJapan },
  { path: '/map-of-japan-excluding-kyushu', component: MapOfJapanExcludingKyushu },
  { path: '/choice-map-of-japan', component: ChoiceMapOfJapan },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
