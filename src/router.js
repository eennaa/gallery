import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import GalleryList from './components/GalleryList.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/galleryOVO', component: GalleryList },  
  { path: '/login', component: Login },
]

export const router = new VueRouter({  
  mode: 'history',
  routes
})