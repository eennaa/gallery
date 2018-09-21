<template>
  <div class="container">
    <div v-if="galleries[0]">
      <h2>All Galleries</h2>
      <SearchFilter :galleries.sync="galleries"/> <br><br>
      <ul v-for="gallery in galleries" :key="gallery.id">
        <li>
          <router-link :to="{ name: 'singleGallery', params: { id: gallery.id }}">
            Title: {{ gallery.title }}
          </router-link>
        </li>
        <li>
          <img :src="gallery.images[0].url" alt="Image is being loaded"> 
        </li>
        <li>        
          Author:
          <router-link :to="{ name: 'author', params: { id: gallery.id }}">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
          </router-link>
        </li>
        <li>
          Created: {{ gallery.created_at | formatDate }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Sorry, there are no galleries to show</p>
    </div>
  </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
import { DateMixin } from '../mixins'
import SearchFilter from './../components/SearchFilter.vue'

export default {
  components: {
    SearchFilter
  },

  data() {
    return {
      galleries: [],
    }
  },
  
  
  mixins: [ DateMixin ],

  created() {
      galleriesService
      .getAll()
      .then((galleries) => this.galleries = galleries.data)
  }

  
}



</script>
