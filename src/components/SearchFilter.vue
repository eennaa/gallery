<template>
    <div>  
        <form @submit.prevent="onSubmit" class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" v-model="searchTerm" type="text" placeholder="Search" aria-label="Search">          
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form>        
    </div>
</template>

<script>
export default {
    props: {
        query: String,
    },

    data () {
        return {
            searchTerm: '',            
        }
    },

    methods: {
        onSubmit () {                                                                                                                                                     
            return this.$emit('update:query', this.searchTerm)
        }
    },

    
}
</script>
