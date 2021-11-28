import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fire from '../views/Fire.vue'
import Water from '../views/Water.vue'
import Eletric from '../views/Eletric.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/fire',
    name: 'Fire',
    component: Fire
  },

  {
    path: '/water',
    name: 'Water',
    component: Water
  },

  {
    path: '/eletric',
    name: 'Eletric',
    component: Eletric
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
