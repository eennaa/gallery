<template>
    <div class="container">
        <form>
            <br><br>
            <div class="form-group row">
                <label for="text" class="col-5 col-form-label">First name</label> 
                <div class="col-7">
                <input id="text" name="text" placeholder="your first name" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text1" class="col-5 col-form-label">Last name</label> 
                <div class="col-7">
                <input id="text1" name="text1" placeholder="your last name" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text2" class="col-5 col-form-label">Email</label> 
                <div class="col-7">
                <input id="text2" name="text2" placeholder="your email address" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-5 col-form-label">Password</label> 
                <div class="col-7">
                <input id="text3" name="text3" placeholder="your password" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-5 col-form-label">Confirm password</label> 
                <div class="col-7">
                <input id="text4" name="text4" placeholder="your password, again" required="required" class="form-control here" type="text">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-5">I am accepting terms and conditions</label> 
                <div class="col-7">
                <label class="custom-control custom-checkbox">
                    <input name="checkbox" checked="checked" required="required" class="form-check-input" value="termsAndConditions" type="checkbox"> 
                    <span class="custom-control-indicator"></span> 
                    <span class="custom-control-description">I trully do</span>
                </label>
                </div>                
            </div> 
            <div class="form-group row">
                <div class="offset-5 col-7">
                <button name="submit" type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>