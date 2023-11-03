<script>
export default {
    name: "ForgotPassword",
}
</script>

<template>
    <!-- breadcumb start -->
    <section class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="breadcrumb-start">
                        <ul class="breadcrumb-url">
                            <li class="breadcrumb-url-li">
                                <a href="index2.html">Home</a>
                            </li>
                            <li class="breadcrumb-url-li">
                                <span>Forgot Password</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- forgot password start -->
    <section class="section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="forgat-password-area">
                        <h4 class="forgot-title">Forgot password?</h4>
                        <div class="forgot-p">
                            <span class="forgot">Reset your password here</span>
                            <form>
                                <input type="text" name="text" placeholder="Username or email">
                            </form>
                            <a href="login.html" class="forgot-link"><span>Get new password <i class="fa fa-unlock"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- forgot password end -->
</template>

<style scoped>

/* forgot password page css */
.forgat-password-area{
    width: 50%;
    margin: 0 auto;
}
.forgat-password-area h4.forgot-title{
    font-size: 20px;
    text-align: center;
}
.forgat-password-area .forgot-p{
    margin-top: 21px;
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;
}
.forgat-password-area .forgot-p span.forgot{
    width: 100%;
    background-color: #5fa800;
    color: #fff;
    padding: 15px;
    text-align: center;
}
.forgat-password-area .forgot-p form{
    width: 100%;
    padding: 30px;
}
.forgat-password-area .forgot-p form input{
    width: 100%;
    font-size: 13px;
    border: 1px solid #eee;
    text-align: center;
}
.forgat-password-area .forgot-p a.forgot-link{
    width: 100%;
    background-color: #5fa800;
    color: #fff;
    padding: 15px;
    font-weight: 400;
    text-align: center;
}
.forgat-password-area .forgot-p a.forgot-link span{
    background-color: #000;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 8px 10px;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}
.forgat-password-area .forgot-p a.forgot-link span i{
    font-size: 18px;
    margin-left: 3px;
}
.forgat-password-area .forgot-p a.forgot-link span:hover{
    background-color: transparent;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}
</style>