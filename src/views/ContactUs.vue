<script>
export default {
    name: "ContactUs"
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
                                <span>Contact us</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- map area start -->
    <section class="contact section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="map-area">
                        <div class="map-title">
                            <h1>Contact us</h1>
                        </div>
                        <div class="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14906.771505966924!2d105.70149065542782!3d20.92467248988941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31344df57f3430b5%3A0x72084c779c02f904!2zdHQuIENow7pjIFPGoW4sIENoxrDGoW5nIE3hu7ksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1698859317906!5m2!1svi!2s"
                                width="600" height="450" style="border:0;" allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                        </div>
                        <div class="map-details section-t-padding">
                            <div class="contact-info">
                                <div class="contact-details">
                                    <h4>Drop us message</h4>
                                    <form>
                                        <label>Your name</label>
                                        <input type="text" name="name" placeholder="Enter your name">
                                        <label>Email address</label>
                                        <input type="text" name="Email" placeholder="Enter your email address">
                                        <label>Message</label>
                                        <textarea rows="5" placeholder="Your message hare..."></textarea>
                                    </form>
                                    <a href="index1.html" class="btn-style1">Submit <i class="ti-arrow-right"></i></a>
                                </div>
                            </div>
                            <div class="contact-info">
                                <div class="information">
                                    <h4>Get in touch</h4>
                                    <p class="info-description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Rerum earum eveniet dolorum suscipit nesciunt incidunt animi repudiandae
                                        ab at, tenetur distinctio voluptate vel illo similique.</p>
                                    <div class="contact-in">
                                        <ul class="info-details">
                                            <li><i class="fa fa-street-view"></i></li>
                                            <li>
                                                <h4>Address</h4>
                                                <p>255 Parker St. Englishtown, NJ 07726</p>
                                            </li>
                                        </ul>
                                        <ul class="info-details">
                                            <li><i class="fa fa-phone"></i></li>
                                            <li>
                                                <h4>Phone</h4>
                                                <a href="tel:12345678999">+ 0123 4567 8999</a>
                                            </li>
                                        </ul>
                                        <ul class="info-details">
                                            <li><i class="fa fa-envelope"></i></li>
                                            <li>
                                                <h4>Email</h4>
                                                <a href="mailto:yoursite@demo.com">yoursite@demo.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- map area end -->
</template>

<style scoped>

/* contact page css */
.map-area .map-title h1 {
    font-size: 30px;
    margin-bottom: 30px;
    text-align: center;
}

.map-area .map {
    display: flex;
}

.map-area .map iframe {
    width: 100%;
    height: 680px;
}

.map-area .map-details {
    display: flex;
    flex-wrap: wrap;
}

.map-area .map-details .contact-info {
    width: 50%;
}

.map-area .map-details .contact-info .contact-details h4 {
    font-size: 18px;
}

.map-area .map-details .contact-info .contact-details form {
    margin-top: 18px;
}

.map-area .map-details .contact-info .contact-details form label {
    display: block;
    margin-top: 15px;
}

.map-area .map-details .contact-info .contact-details form label:first-child {
    margin-top: 0px;
}

.map-area .map-details .contact-info .contact-details form input {
    width: 100%;
    border-radius: 4px;
    padding: 7px 15px;
    margin-top: 10px;
}

.map-area .map-details .contact-info .contact-details form textarea {
    width: 100%;
    resize: none;
    margin-top: 10px;
    border-radius: 4px;
}

.map-area .map-details .contact-info .contact-details a {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
}

.map-area .map-details .contact-info .contact-details a i {
    margin-left: 5px;
}

.map-area .map-details .contact-info .information {
    margin-left: 30px;
}

.map-area .map-details .contact-info .information h4 {
    font-size: 18px;
}

.map-area .map-details .contact-info .information p.info-description {
    margin-top: 16px;
}

.map-area .map-details .contact-info .information .contact-in {
    margin-top: 22px;
}

.map-area .map-details .contact-info .information .contact-in ul.info-details {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
}

.map-area .map-details .contact-info .information .contact-in ul.info-details:first-child {
    margin-top: 0px;
}

.map-area .map-details .contact-info .information .contact-in ul.info-details li i {
    font-size: 20px;
    margin-right: 20px;
}

.map-area .map-details .contact-info .information .contact-in ul.info-details li h4 {
    font-size: 14px;
    line-height: 1;
}

.map-area .map-details .contact-info .information .contact-in ul.info-details li a {
    margin-top: 7px;
}
</style>