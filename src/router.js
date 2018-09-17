import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'


Vue.use(VueRouter)

const routes = [
  
  { path: '/login', component: Login }
]

export const router = new VueRouter({  
  mode: 'history',
  routes
})