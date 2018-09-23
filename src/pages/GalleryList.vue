<template>
  <div class="container">
    <div v-if="galleries[0]">
      <h2>All Galleries</h2>
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
  name: 'gallery-list',
  components: {
    SearchFilter
  },
  
  data() {
    return {
      galleries: [],

      url: '/api/gallery',
      pagination: [],
      query: ''
    }
  },
  
  methods: {
    getGalleries () {
        galleriesService
        .getSearchedGalleries(this.query)
        .then((response) => { this.galleries = response.data.data })
    }
  },
  // events: {
  //     eventName: function (argument) {
  //         // logic
  //     },
  // },
  computed: {
    callGetGalleries: function () {
      this.query
      return this.getGalleries();
    }

    // makePagination(data) {
    //   let pagination = {
    //     current_page: data.current_page,
    //     last_page: data.last_page,
    //     next_page_url: data.next_page_url,
    //     prev_page_url: data.prev_page_url
    //   }

    //   this.pagination = pagination
    // }
    
  },
  
  mixins: [ DateMixin ],

  created() {
    this.getGalleries();
  }

  
}



</script>
