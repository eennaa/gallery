<template>
  <div class="container">
    <div v-if="galleries[0]">
      <br>
      <h2>{{ authorName }}'s Galleries</h2>
      <br><br>
      <!-- <SearchFilter :query.sync="query"/> <br><br>       -->
      <fieldset v-for="gallery in galleries" :key="gallery.id">
        <legend>
          Title:
          <router-link :to="{ name: 'singleGallery', params: { id: gallery.id }}">
             {{ gallery.title }}
          </router-link>
        </legend>
        <ol>
          <img :src="gallery.images[0].url" alt="Image is being loaded"  style="width:720px;height:560;"> 
        </ol>
        <ol>        
          Author:
          <router-link :to="{ name: 'author', params: { id: gallery.user_id }}">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
          </router-link>
        </ol>
        <ol>
          Created: {{ gallery.created_at | formatDate }}
        </ol>
      </fieldset>
      <!-- <pagination :shownGalleries.sync="shownGalleries" :page.sync="page" :getGalleries="getGalleries" :last_page="last_page" /> -->
    </div>
    <div v-else>
      <p>This user doesn't have any galleries.</p>
    </div>
  </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
import { DateMixin } from '../mixins'
// import SearchFilter from './../components/SearchFilter.vue'
// import Pagination from './../components/Pagination.vue'

export default {
  name: 'author-page',
  components: {
    // Pagination,
    // SearchFilter
  },
  props: {
    query: String,
  },

  data() {
    return {
      galleries: [],
      authorName: ''

    }
  },
  
  mixins: [ DateMixin ],

  created: function() {
      galleriesService
      .getUsersGalleries(this.$route.params.id)
      .then((response) => {
        this.galleries = response.data.data;
        this.authorName = response.data.data[0].user.first_name;
      })
      .catch(error => {
                this.errors = error.response.data.errors;
                });
      // .then(() => this.authorName = this.galleries.data.data.user.first_name);
  }

}
</script>

<style>

</style>
