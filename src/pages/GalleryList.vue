<template>
  <div>
    <ul v-for="gallery in galleries" :key="gallery.id">
      <li>Gallery's ID: {{ gallery.id }}</li>
      <li>
        <router-link :to="{ name: 'singleGallery', params: { id: gallery.id }}">Title: {{ gallery.title }}</router-link>
      </li>
      <li>Description: {{ gallery.description }}</li>
      <li>User's ID: {{ gallery.user_id }}</li>
      <li>Author: {{ gallery.user.first_name }} {{ gallery.user.last_name }}</li>
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

  created() {
      galleriesService
      .getAll()
      .then((galleries) => this.galleries = galleries.data)   
  }
}



</script>
