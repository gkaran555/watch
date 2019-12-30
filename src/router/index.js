import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/TableSection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/singlesat/:satId',
    name: 'singlesat',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../components/SingleSat.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
