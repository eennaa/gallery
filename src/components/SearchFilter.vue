<template>
    <div>  
        <form @submit.prevent="onSubmit" class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" v-model="searchTerm" type="text" placeholder="Search" aria-label="Search">          
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul v-show="searchTerm">
            You are searching for {{ searchTerm }}, and there are {{ filteredGalleries.length }} results.<br>Click on the Search button to see them.
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        galleries: Array,
    },

    data () {
        return {
            searchTerm: '',            
        }
    },

    methods: {
        onSubmit () {                                                                                                                                                     
            this.$emit('update:galleries', this.filteredGalleries)
            console.log(this.filteredGalleries)           
        }
    },

    computed: {
        filteredGalleries: function () {  
            return this.galleries.filter((gallery) => {             
                return gallery.title.toLowerCase().match(this.searchTerm) 
                        || gallery.user.first_name.toLowerCase().match(this.searchTerm)
                        || gallery.user.last_name.toLowerCase().match(this.searchTerm)
                        || gallery.description.toLowerCase().match(this.searchTerm)
            })
        }                                                                                                                                                                                              
    }
}
</script>
