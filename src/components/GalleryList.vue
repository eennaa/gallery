<template>
  <div>
    <ul v-for="gallery in galleries" :key="gallery.id">
      <li>ID: {{ gallery.id }}</li>
      <li>Title: {{ gallery.title }}</li>
      <li>Description: {{ gallery.description }}</li>
      <li>User's ID: {{ gallery.user_id }}</li>
    </ul>
  </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
export default {
  
  data() {
    return {
      galleries: [],
    }
  },

  created(to, from, next) {
      galleriesService
      .getAll()
      .then((galleries) => this.galleries = galleries.data)   
    }
}



</script>
