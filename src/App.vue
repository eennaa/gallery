<template>
  <div id="app">
    <layout @userLoggedIn="toggleLogin" :isLoggedIn="isLoggedIn"/>
    <router-view @userLoggedIn="toggleLogin" />
  </div>
</template>

<script>
import Layout from './components/Layout.vue'
import { authService } from './services/Auth'


export default {
  name: 'app',
  components: {
    Layout
  },

  data() {
    return {
      userLoggedIn: false,
      isLoggedIn: authService.isAuthenticated()
    }
  },

  methods: {
    toggleLogin (val) { 
      this.isLoggedIn = val
    }
  }
  
}
</script>

<style>

</style>
