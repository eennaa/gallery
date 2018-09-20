import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import GalleryList from './pages/GalleryList.vue'
import SingleGallery from './pages/SingleGallery.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/gallery', redirect: '/' },  
  { path: '/', component: GalleryList , name: 'gallery'},
  { path: '/gallery/:id', component: SingleGallery, name: 'singleGallery'},  
  { path: '/login', component: Login },
]

export const router = new VueRouter({  
  mode: 'history',
  routes
})