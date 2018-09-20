<template>
  <div id="app">
    <layout/>
    <router-view/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  },

  
}
</script>

<style>

</style>
