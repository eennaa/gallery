<template>
    <div>        
        <ul>
            <li>Gallery's ID: {{ gallery.id }}</li>
            <li>Title: {{ gallery.title }}</li>
            <li>Description: {{ gallery.description }}</li>
            <li>User's ID: {{ gallery.user_id }}</li>
            <li>Author: {{ gallery.user.first_name }} {{ gallery.user.last_name }}</li>

        </ul>
    </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'

export default {
    

    data () {
        return {
            gallery: {},
        }
    },

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
