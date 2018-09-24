<template>
    <div class="container">        
        <ul> <br> <h2>{{ gallery.title }}</h2></ul>        
        <ul v-if="gallery.user">        
            Author:
            <router-link :to="{ name: 'author', params: { id: gallery.user_id }}">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
            </router-link>
        </ul>
        <ul>
            Created: {{ gallery.created_at | formatDate }}
        </ul>
        <ul>Description: {{ gallery.description }}</ul>
        <carousel :gallery="gallery"/>
    </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
import { DateMixin } from '../mixins'
import Carousel from './../components/Carousel.vue'


export default {
    components: {
        Carousel
    },

    data () {
        return {
            gallery: {},
        }
    },

    mixins: [ DateMixin ],

    // created () {
    //     console.log(this.galleryId)
    //     galleriesService
    //     .getSingleGallery(this.galleryId)
    //     .then((response) => this.gallery = response.data)
    // }
    beforeRouteEnter (to, from, next) {
        galleriesService
        .getSingleGallery(to.params.id)
        .then((response) => {
            next((vm) => {
            vm.gallery = response.data
            })
        })
  }
}
</script>

<style>

</style>
