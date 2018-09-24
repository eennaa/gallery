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
          <input v-model="loginCredentials.email" id="email" name="email" placeholder="your email" required="required" class="form-control here" type="text">
        </div>
      </div>
      <div class="form-group">
        <label for="password">password</label> 
        <div class="input-group">
          <div class="input-group-addon">
            <i class="fa fa-lock"></i>
          </div> 
          <input v-model="loginCredentials.password" id="password" name="password" placeholder="your password" required="required" class="form-control here" type="password">
        </div>
      </div> 
      <div class="form-group row">
        <div class="offset-5 col-7">
          <button name="submit" type="submit" class="btn btn-warning btn-lg">Login</button>
        </div>
        
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
    .then(() => {
      this.$emit('userLoggedIn', true)
      this.$router.push('/')
      })
    .catch((error) => this.errors = error.response.data.errors)
  }
}
}
</script>

<style>
input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid;
    border-color: #ffc107;
    background-color: #ffff99;
    color: black;
}
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid;
    border-color: #ffc107;
    background-color: #ffff99;
    color: black;
}
</style>
