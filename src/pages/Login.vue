// predugacka polja za input
// login button nije podesen
<template>
  <div class="container">  
    <form @submit.prevent="onLogin">
      <br>
      <div class="form-group">
        <label for="email">email</label> 
        <div class="input-group">
          <div class="input-group-addon">
            <i class="fa fa-address-card"></i>
          </div> 
          <input id="email" name="email" placeholder="your email" required="required" class="form-control here" type="text">
        </div>
      </div>
      <div class="form-group">
        <label for="password">password</label> 
        <div class="input-group">
          <div class="input-group-addon">
            <i class="fa fa-lock"></i>
          </div> 
          <input id="password" name="password" placeholder="your password" required="required" class="form-control here" type="password">
        </div>
      </div> 
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { authService } from './../services/Auth'

export default {
data () {
  return {
    loginCredentials: {}
  }
},

methods: {
  onLogin(){
    authService
    .login(this.loginCredentials.email, this.loginCredentials.password)
    .then((response) => {
      this.$emit('userLoggedIn', true)
      this.$router.push('/')
      })
    .catch((error) => this.errors = error.response.data.errors)
  }
}
}
</script>

<style>

</style>
