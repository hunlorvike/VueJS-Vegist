<script>
export default {
    name: "NotFound",
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
                                <span>404</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- Order complete start -->
    <section class="section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="fnf-area">
                        <h1 class="fnf-title">4<span class="color-font"> 04</span></h1>
                        <p>Oops, The Page you are looking for can't be found!</p>
                        <form>
                            <input type="text" name="text" placeholder="Search...">
                            <a href="grid-list.html" class="submit"><i class="fa fa-paper-plane"></i></a>
                        </form>
                        <a href="index1.html" class="back-home">Go to home</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Order complete end -->
</template>

<style scoped>

/* fnf page css */
.fnf-area {
    text-align: center;
}

.fnf-area h1.fnf-title {
    font-size: 180px;
    line-height: 1;
}

.fnf-area h1.fnf-title span.color-font {
    color: #5fa800;
}

.fnf-area p {
    margin-top: 16px;
    margin-bottom: 22px;
    font-weight: 500;
}

.fnf-area form {
    width: 30%;
    position: relative;
    margin: 0 auto;
}

.fnf-area form input {
    width: 100%;
    border: 1px solid #eee;
    border-radius: 25px;
}

.fnf-area a.submit {
    background-color: #5fa800;
    color: #fff;
    padding: 9px 25px;
    border-radius: 25px;
    border: 2px solid #5fa800;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
}

.fnf-area a.submit:hover {
    background-color: transparent;
    color: #000;
}

.fnf-area a.back-home {
    margin-top: 30px;
    padding: 12px 25px;
    background-color: #5fa800;
    color: #fff;
    font-weight: 500;
    border: 2px solid #5fa800;
    border-radius: 25px;
}

.fnf-area a.back-home:hover {
    background-color: transparent;
    color: #000;
}
</style>