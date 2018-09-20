<template>
  <div v-if="gallery.images">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <div v-for="imageURL in gallery.images" :key="imageURL.id" :imageURL="imageURL">
        <a :href="imageURL.url" target="_blank">
          <b-carousel-slide :caption="gallery.title"
                        :text="'by: ' + gallery.user.first_name + '  ' + gallery.user.last_name"
                        :img-src="imageURL.url"
                          
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
  data () {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->