////TREBA URADITI:
// logicnije pozicionirati linkove
//u v-show proslediti da li je korisnik ulogovan ili ne
//search form prebaciti u home page
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
            <a class="nav-link" href="/">All Galleries</a>
          </li>
        </ul>
        <ul class="navbar-nav mr" v-show=true> 
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Register</a>
          </li>
        </ul>
        <ul class="navbar-nav mr-auto" v-show=true>
          <li class="nav-item">
            <a class="nav-link" href="/my-galleries">My Galleries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/create">Create New Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
        <!-- <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
