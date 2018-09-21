<template>
    <div class="container">
        <form @submit.prevent="onSubmit">
            <br><br>
            <div class="form-group row">
                <label for="text" class="col-5 col-form-label">First name</label> 
                <div class="col-7">
                <input v-model="newUser.first_name" id="text" name="text" placeholder="your first name" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-5 col-form-label">Last name</label> 
                <div class="col-7">
                <input v-model="newUser.last_name" id="text1" name="text1" placeholder="your last name" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text2" class="col-5 col-form-label">Email</label> 
                <div class="col-7">
                <input v-model="newUser.email" id="text2" name="text2" placeholder="your email address" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-5 col-form-label">Password</label> 
                <div class="col-7">
                <input v-model="newUser.password" id="password" name="password" placeholder="your password" required="required" class="form-control here" type="password">
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-5 col-form-label">Confirm password</label> 
                <div class="col-7">
                <input v-model="newUser.password_confirmation" id="password_conformation" name="password_conformation" placeholder="your password, again" required="required" class="form-control here" type="password">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-5">I am accepting terms and conditions</label> 
                <div class="col-7">
                <label class="custom-control custom-checkbox">
                    <input v-model="newUser.checkbox" name="checkbox" checked="checked" required="required" class="form-check-input" value="termsAndConditions" type="checkbox"> 
                    <span class="custom-control-indicator"></span> 
                    <span class="custom-control-description">I truly do</span>
                </label>
                </div>                
            </div> 
            <div class="form-group row">
                <div class="offset-5 col-7">
                <button name="submit" type="submit" class="btn btn-warning">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { authService } from './../services/Auth'
export default {
    props: {
        isLoggedIn: Boolean
    },

    data () {
        return {
            newUser: {},
            errors: {}
        }
    },

    methods: {
        onSubmit () {                                                                                                                                                     
            authService
            .register(this.newUser) 
            .then((response) => {
                authService
                .login(this.newUser.email, this.newUser.password)
                .then((response) => {
                this.$emit('userLoggedIn', true)
                this.$router.push('/')
                })
            })
            // .catch((error) => this.errors = error.response.data.errors)     
        }
    },
}
</script>