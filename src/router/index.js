import Vue from 'vue'
import VueRouter from 'vue-router'
//import Entrance from '../views/Entrance.vue'
//import Application from '../views/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (Login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (Register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/application',
    name: 'Application',
    // route level code-splitting
    // this generates a separate chunk (Application.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Application" */ '../views/Application.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
