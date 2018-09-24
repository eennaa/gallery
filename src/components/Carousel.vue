<template>
  <div v-if="gallery.images">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="720"
                img-height="560"
    >

      <div v-for="image in gallery.images" :key="image.id" :image="image">
        <a :href="image.url" target="_blank">
          <b-carousel-slide :caption="gallery.title"
                            :text="'by: ' + gallery.user.first_name + '  ' + gallery.user.last_name"
                            :img-src="image.url"
                          
          />          
        </a>
      </div>

    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Object,
      required: true
    }
  },
  
  
}
</script>