import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import GalleryList from './pages/GalleryList.vue'
import SingleGallery from './pages/SingleGallery.vue'
import AuthorsPage from './pages/AuthorsPage.vue'




Vue.use(VueRouter)

const routes = [
  { path: '/gallery', redirect: '/' },  
  { path: '/', component: GalleryList , name: 'gallery'},
  { path: '/galleries/:id', component: SingleGallery, name: 'singleGallery'},  //mozda ovo bude pravilo problem pa vrati na /galleries/:id
  { path: '/authors/:id', component: AuthorsPage, name: 'author'},  
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

export const router = new VueRouter({  
  mode: 'history',
  routes
})