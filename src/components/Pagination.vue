<template>
    <div>
        <button class="btn btn-warning btn-lg btn-block" 
            @click="loadMore"
            v-show="page !== last_page">
            Load more
        </button> <br> <br> <br>
    </div>
</template>

<script>
export default {
props:{
    shownGalleries: Array,
    page: Number,  
    last_page: Number,
    getGalleries: Function
},
methods: {
    loadMore() {  
        // this.page += 1;
        this.$emit('update:page', this.page += 1)
        this.getGalleries()
            .then((newGalleries) => {
                newGalleries.map(gallery => {
                this.shownGalleries.push(gallery);
                });
        })
        .catch(error => {
                this.errors = error.response.data.errors;
                });

        return this.shownGalleries;
    }
}
}
</script>
l