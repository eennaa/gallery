<template>
    <div>
        <button class="btn btn-outline-warning my-2 my-sm-0" 
            @click="loadMore"
            v-show="page !== last_page">
            Load more
        </button> <br> <br>
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
        });
        
        return this.shownGalleries;
    }
}
}
</script>
l