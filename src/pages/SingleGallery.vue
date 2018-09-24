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
        <br><br><br>
        <div class="comments" v-for="comment in gallery.comments" :key="comment.id">
            <ul> {{ comment.content }} </ul>
            <ul> 
                <router-link :to="{ name: 'author', params: { id: gallery.user_id }}">
                    {{ comment.user.first_name }} {{ comment.user.last_name }}
                </router-link>
                on {{ comment.created_at | formatDate }}
            </ul>
        </div>
        <div>
            <form @submit.prevent="onPostComment">
                <div class="form-group">
                    <label for="textarea">Write you comment</label> 
                    <textarea v-model="commentContent" id="textarea" name="textarea" cols="40" rows="5" class="form-control" required="required" aria-describedby="textareaHelpBlock"></textarea> 
                    <span id="textareaHelpBlock" class="form-text text-muted">Watch your language, please!</span>
                </div> 
                <div class="form-group">
                    <button name="submit" type="submit" class="btn btn-warning btn-lg">Post comment</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { galleriesService } from './../services/GalleryService'
import { commentService } from './../services/GalleryService'
import { DateMixin } from '../mixins'
import Carousel from './../components/Carousel.vue'


export default {
    components: {
        Carousel
    },
    props: {
        query: String,
        page: Number,
    },
    data () {
        return {
            gallery: {},
            commentContent: ''
        }
    },
    methods: {
        onPostComment () {
            commentService
                .addComment(this.gallery.id, this.commentContent)
                .then(response => {
                    this.gallery.comments.push(response.data[0]);
                    this.commentContent = '';
                    })
                .catch(error => {
                this.errors = error.response.data.errors;
                });
        }

    },
    

    mixins: [ DateMixin ],

    beforeRouteEnter (to, from, next) {
        galleriesService
        .getSingleGallery(to.params.id)
        .then((response) => {
            next((vm) => {
            vm.gallery = response.data
            })
        })
        .catch(error => {
                this.errors = error.response.data.errors;
                });
    } 
}
</script>

<style>
div.comments {
    background-color: #ffff99
}
textarea[id=textarea] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid;
    border-color: #ffc107;
    background-color: #ffff99;
    color: black;
}
</style>
