<template>
  <div class="container">
    <div v-if="galleries[0]">
      <!-- <h2>{{ gallery.user.first_name }}'s Galleries</h2> -->
      <br><br>
      <SearchFilter :query.sync="query"/> <br><br>      
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
          <router-link :to="{ name: 'author', params: { id: gallery.user_id }}">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
          </router-link>
        </li>
        <li>
          Created: {{ gallery.created_at | formatDate }}
        </li>
      </ul>
      <pagination :shownGalleries.sync="shownGalleries" :page.sync="page" :getGalleries="getGalleries" :last_page="last_page" />
    </div>
    <div v-else>
      <p>This user doesn't have any galleries.</p>
    </div>
  </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
import { DateMixin } from '../mixins'
import SearchFilter from './../components/SearchFilter.vue'

export default {
  name: 'author-page',
  components: {
    SearchFilter
  },
  props: {
    query: String
  },

  data() {
    return {
      galleries: [],
    }
  },
  
  mixins: [ DateMixin ],

  created: function() {
      galleriesService
      .getUsersGalleries(this.$route.params.id)
      .then((response) => {
        this.galleries = response.data.data
      });
  }

}
</script>

<style>

</style>
