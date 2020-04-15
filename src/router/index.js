import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Terminos from '../views/Terminos.vue';
import Err404 from '../views/Err404.vue';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terminos',
    name: 'terminos',
    component: Terminos
  },
  {
    path: '*',
    name: 'err404',
    component: Err404

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
