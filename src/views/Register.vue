<script>
export default {
    name: "Register"
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
                                <span>Register</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- register start -->
    <section class="section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="register-area">
                        <div class="register-box">
                            <h1>Create account</h1>
                            <p>Please register below account detail</p>
                            <form>
                                <input type="text" name="name" placeholder="Firts name">
                                <input type="text" name="l-name" placeholder="Last name">
                                <input type="text" name="email" placeholder="Email address">
                                <input type="text" name="password" placeholder="Password">
                                <a href="account.html" class="btn-style1">Create</a>
                            </form>
                        </div>
                        <div class="register-account">
                            <h4>Already an account holder?</h4>
                            <a href="login.html" class="ceate-a">Log in</a>
                            <div class="register-info">
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
    <!-- register end -->
</template>

<style scoped>
.register-area {
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.register-area .register-box {
    width: 50%;
    padding: 30px;
    border: 1px solid #eee;
}

.register-area .register-box h1 {
    font-size: 30px;
    text-align: center;
}

.register-area .register-box p {
    margin-top: 10px;
    text-align: center;
}

.register-area .register-box form {
    margin-top: 22px;
}

.register-area .register-box form input {
    width: 100%;
    padding: 10px 15px;
    margin-top: 20px;
    font-size: 13px;
    border: 1px solid #eee;
    border-radius: 3px;
}

.register-area .register-box form input:first-child {
    margin-top: 0px;
}

.register-area .register-box a.btn-style1 {
    width: 100%;
    margin-top: 30px;
    text-align: center;
}

.register-area .register-account {
    width: calc(50% - 30px);
    margin-left: 30px;
}

.register-area .register-account h4 {
    font-size: 16px;
    text-align: center;
}

.register-area .register-account a.ceate-a {
    position: relative;
    color: #5fa800;
    width: 100%;
    padding: 13px 25px;
    margin-top: 30px;
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

.register-area .register-account a.ceate-a::after {
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

.register-area .register-account a.ceate-a:hover::after {
    opacity: 0.1;
    visibility: visible;
    -webkit-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
}

.register-area .register-account .register-info a.terms-link span {
    color: #000;
    line-height: 1;
    font-size: 12px;
}

.register-area .register-account .register-info a.terms-link {
    color: #5fa800;
    margin-top: 30px;
    font-size: 12px;
    font-weight: 600;
}

.register-area .register-account .register-info p {
    font-size: 13px;
    margin-top: 10px;
}

.register-area .register-account .register-info p a {
    color: #5fa800;
    font-weight: 600;
}
</style>