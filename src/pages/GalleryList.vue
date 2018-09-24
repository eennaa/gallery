<template>
  <div class="container">
    <div v-if="galleries[0]">
      <h2>All Galleries</h2>
      <SearchFilter :query.sync="query" :page.sync="page"/> <br><br>
      <ul v-for="gallery in shownGalleries" :key="gallery.id">
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
      <p>Sorry, there are no galleries to show</p>
    </div>
  </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
import { DateMixin } from '../mixins'
import SearchFilter from './../components/SearchFilter.vue'
import Pagination from './../components/Pagination.vue'

export default {
  name: 'gallery-list',
  components: {
    Pagination,
    SearchFilter,
  },
  
  data() {
    return {
      galleries: [],
      shownGalleries: [],
      query: '',
      page: 1,  
      last_page: null
    }
  },
  
  methods: {
    getGalleries () {
      return new Promise((resolve, reject) => {
        galleriesService
          .getSearchedGalleries(this.query, this.page)
          .then((response) => { 
            this.galleries = response.data.data;
            this.last_page = response.data.last_page;
            if(this.page === 1) {
              this.shownGalleries = this.galleries;
            }
            resolve(response.data.data);   
          });
      });
    },    
    
  },

  computed: {
    callGetGalleries: function () {
      this.query
      return this.getGalleries();
    },
  },
  
  mixins: [ DateMixin ],

  created: function() {
      this.getGalleries();
  },

  
}



</script>
