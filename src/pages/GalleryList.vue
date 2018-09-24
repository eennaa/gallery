<template>
  <div class="container">
    <div v-if="galleries[0]">
      <br>
      <h2>All Galleries</h2>
      <SearchFilter :query.sync="query" :page.sync="page"/> <br><br>
      <fieldset v-for="gallery in shownGalleries" :key="gallery.id">
        <legend>
          Title:
          <router-link :to="{ name: 'singleGallery', params: { id: gallery.id }}">
             {{ gallery.title }}
          </router-link>
        </legend>
        <ol>
          <img :src="gallery.images[0].url" alt="Image is being loaded" style="width:720px;height:560;"> 
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
          })
          .catch(error => {
                this.errors = error.response.data.errors;
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
<style>
fieldset {
  border: 2px solid;
  border-color: #ffc107;
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 2px groove 
}
</style>
