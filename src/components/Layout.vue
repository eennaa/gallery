////TREBA URADITI:
// logicnije pozicionirati linkove
//u v-show proslediti da li je korisnik ulogovan ili ne
//srediti href za logout

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
      <a class="navbar-brand" href="#">
        <i class="fas fa-images"/> Gallery
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/gallery">All Galleries</a>
          </li>
        </ul>
        <ul class="navbar-nav mr" v-show=!isLoggedIn> 
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-show=isLoggedIn>
          <li class="nav-item">
            <a class="nav-link" href="/my-galleries">My Galleries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/create">Create New Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>        
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    logout() {
      console.log('logged out', this.isLoggedIn)
    }
  }
}
</script>

<style>

</style>
