<script>
export default {
    name: "Login"
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
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- login start -->
    <section class="section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="login-area">
                        <div class="login-box">
                            <h1>Login</h1>
                            <p>Please login below account detail</p>
                            <form>
                                <label>Email address</label>
                                <input type="text" name="email" placeholder="Email address">
                                <label>Password</label>
                                <input type="text" name="password" placeholder="Password">
                                <a href="login.html" class="btn-style1">Sign in</a>
                                <a href="forgot-password.html" class="re-password">Forgot your password?</a>
                            </form>
                        </div>
                        <div class="login-account">
                            <h4>Don't have an account?</h4>
                            <a href="register.html" class="ceate-a">Create account</a>
                            <div class="login-info">
                                <a href="terms-conditions.html" class="terms-link"><span>*</span> Terms &
                                    conditions.</a>
                                <p>Your privacy and security are important to us. For more information on how we use
                                    your data read our <a href="privacy-policy.html">privacy policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- login end -->
</template>

<style scoped>

/* login page css */
.login-area {
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-area .login-box {
    width: 50%;
    padding: 30px;
    border: 1px solid #eee;
}

.login-area .login-box h1 {
    font-size: 30px;
    text-align: center;
}

.login-area .login-box p {
    margin-top: 10px;
    text-align: center;
}

.login-area .login-box form {
    margin-top: 17px;
}

.login-area .login-box form label {
    margin-top: 15px;
}

.login-area .login-box form label:first-child {
    margin-top: 0px;
}

.login-area .login-box form input {
    width: 100%;
    padding: 10px 15px;
    font-size: 13px;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 3px;
}

.login-area .login-box a.btn-style1 {
    width: 100%;
    margin-top: 30px;
    text-align: center;
}

.login-area .login-box a.re-password {
    color: #5fa800;
    margin-top: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.login-area .login-account {
    width: calc(50% - 30px);
    margin-left: 30px;
}

.login-area .login-account h4 {
    font-size: 16px;
    text-align: center;
}

.login-area .login-account a.ceate-a {
    position: relative;
    color: #5fa800;
    width: 100%;
    padding: 13px 25px;
    margin-top: 23px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #5fa800;
    border-radius: 3px;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
}

.login-area .login-account a.ceate-a::after {
    background-color: #5fa800;
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
}

.login-area .login-account a.ceate-a:hover::after {
    opacity: 0.1;
    visibility: visible;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
}

.login-area .login-account .login-info {
    margin-top: 24px;
}

.login-area .login-account .login-info a.terms-link span {
    color: #000;
    line-height: 1;
    font-size: 12px;
}

.login-area .login-account .login-info a.terms-link {
    color: #5fa800;
    font-size: 12px;
    font-weight: 600;

}

.login-area .login-account .login-info p {
    font-size: 13px;
    margin-top: 6px;
}

.login-area .login-account .login-info p a {
    color: #5fa800;
    font-weight: 600;
}
</style>