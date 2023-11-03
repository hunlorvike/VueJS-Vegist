<script>
export default {
    name: "Checkout"
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
                                <span>Checkout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- checkout page start -->
    <section class="section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="checkout-tab">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#home">1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#profile">2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact">3</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="home">
                            <div class="checkout-style-2">
                                <div class="billing-area">
                                    <form>
                                        <h2>Billing details</h2>
                                        <div class="billing-form">
                                            <ul class="billing-ul input-2">
                                                <li class="billing-li">
                                                    <label>First name</label>
                                                    <input type="text" name="f-name" placeholder="First name">
                                                </li>
                                                <li class="billing-li">
                                                    <label>Last name</label>
                                                    <input type="text" name="l-name" placeholder="Last name">
                                                </li>
                                            </ul>
                                            <ul class="billing-ul">
                                                <li class="billing-li">
                                                    <label>Company name (Optional)</label>
                                                    <input type="text" name="company details"
                                                           placeholder="Company name">
                                                </li>
                                            </ul>
                                            <ul class="billing-ul">
                                                <li class="billing-li">
                                                    <label>Street address</label>
                                                    <input type="text" name="address" placeholder="Street address">
                                                </li>
                                            </ul>
                                            <ul class="billing-ul">
                                                <li class="billing-li">
                                                    <label>Apartment,suite,unit etc. (Optional)</label>
                                                    <input type="text" name="--" placeholder="Optional">
                                                </li>
                                            </ul>
                                            <ul class="billing-ul input-2">
                                                <li class="billing-li">
                                                    <label>Country</label>
                                                    <select>
                                                        <option>Select a country</option>
                                                        <option>United country</option>
                                                        <option>Russia</option>
                                                        <option>italy</option>
                                                        <option>France</option>
                                                        <option>Ukraine</option>
                                                        <option>Germany</option>
                                                        <option>Australia</option>
                                                    </select>
                                                </li>
                                                <li class="billing-li">
                                                    <label>State</label>
                                                    <input type="text" name="--" placeholder="State">
                                                </li>
                                            </ul>
                                            <ul class="billing-ul input-2">
                                                <li class="billing-li">
                                                    <label>City</label>
                                                    <input type="text" name="city" placeholder="City">
                                                </li>
                                                <li class="billing-li">
                                                    <label>Postcode</label>
                                                    <input type="text" name="--" placeholder="Postcode">
                                                </li>
                                            </ul>
                                            <ul class="billing-ul input-2">
                                                <li class="billing-li">
                                                    <label>Email address</label>
                                                    <input type="text" name="mail" placeholder="Email address">
                                                </li>
                                                <li class="billing-li">
                                                    <label>Phone number</label>
                                                    <input type="text" name="phone number" placeholder="Phone number">
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                    <!-- <a href="javascript:void(0)" class="btn-style1">Continue</a> -->
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile">
                            <div class="checkout-style-2">
                                <div class="billing-area">
                                    <div class="billing-details">
                                        <form>
                                            <h2>Shipping details</h2>
                                            <ul class="shipping-form">
                                                <li class="check-box">
                                                    <input type="checkbox" name="--">
                                                    <label>Ship to a different address?</label>
                                                </li>
                                                <li>
                                                    <label>Order notes(Optional)</label>
                                                    <textarea name="comments" rows="4" cols="80"></textarea>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact">
                            <div class="checkout-style-2">
                                <div class="order-area">
                                    <div class="check-pro">
                                        <h2>In your cart (2)</h2>
                                        <ul class="check-ul">
                                            <li>
                                                <div class="check-pro-img">
                                                    <a href="product.html"><img
                                                        src="../assets/image/pro-page-image/check-image-1.jpg" class="img-fluid"
                                                        alt="image"></a>
                                                </div>
                                                <div class="check-content">
                                                    <a href="product.html">Fresh healthy food</a>
                                                    <span class="check-code-blod">Product code: <span>CA70051541B</span></span>
                                                    <span class="check-price">$93.00</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="check-pro-img">
                                                    <a href="product.html"><img
                                                        src="../assets/image/pro-page-image/check-image-2.jpg" class="img-fluid"
                                                        alt="image"></a>
                                                </div>
                                                <div class="check-content">
                                                    <a href="product.html">Fresh healthy food</a>
                                                    <span class="check-code-blod">Product code: <span>CA70051541B</span></span>
                                                    <span class="check-price">$230.00</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="order-history">
                                        <h2>Your order</h2>
                                        <div class="order-inf">
                                            <div class="order-details">
                                                <span>Product:</span>
                                                <span>Total</span>
                                            </div>
                                            <div class="order-details">
                                                <span>Orange juice:</span>
                                                <span>$93.00</span>
                                            </div>
                                            <div class="order-details">
                                                <span>Shrimp jumbo:</span>
                                                <span>$230.00</span>
                                            </div>
                                            <div class="order-details">
                                                <span>Subtotal:</span>
                                                <span>$323.00</span>
                                            </div>
                                            <div class="order-details">
                                                <span>Shipping Charge:</span>
                                                <span>Free shipping</span>
                                            </div>
                                            <div class="order-details last">
                                                <span>Total:</span>
                                                <span>$323.00</span>
                                            </div>
                                            <form>
                                                <div class="order-form">
                                                    <div class="order-checkbox">
                                                        <input type="checkbox" name="--">
                                                        <label>Direct bank transfer</label>
                                                    </div>
                                                    <div class="order-checkbox">
                                                        <input type="checkbox" name="--">
                                                        <label>Cheque payment</label>
                                                    </div>
                                                    <div class="order-checkbox">
                                                        <input type="checkbox" name="--">
                                                        <label>Paypal</label>
                                                    </div>
                                                    <div class="pay-icon">
                                                        <a href="javascript:void(0)"><i
                                                            class="fa fa-credit-card"></i></a>
                                                        <a href="javascript:void(0)"><i class="fa fa-cc-visa"></i></a>
                                                        <a href="javascript:void(0)"><i class="fa fa-cc-paypal"></i></a>
                                                        <a href="javascript:void(0)"><i class="fa fa-cc-mastercard"></i></a>
                                                    </div>
                                                </div>
                                            </form>
                                            <a href="order-complete.html" class="btn-style1">Place order</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- checkout page end -->
</template>

<style scoped>

/* checkout style-2 tab css */
.checkout-tab ul.nav.nav-tabs {
    margin-bottom: 22px;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkout-tab ul.nav.nav-tabs li.nav-item {
    margin-left: 40px;
}

.checkout-tab ul.nav.nav-tabs li.nav-item:first-child {
    margin-left: 0px;
}

.checkout-tab ul.nav.nav-tabs li.nav-item a.nav-link {
    font-size: 18px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fff;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
    font-weight: 600;
    border: none;
}

.checkout-tab ul.nav.nav-tabs li.nav-item a.nav-link.active {
    color: #5fa800;
}

/* billing page css */
.billing-area .billing-title h4 {
    font-size: 20px;
}

.billing-area .billing-address-1 {
    padding-top: 15px;
    margin-top: 12px;
    border-top: 1px solid #eee;
}

.billing-area .billing-address-1 ul.add-name {
    margin-left: -30px;
    display: flex;
    flex-wrap: wrap;
}

.billing-area .billing-address-1 ul.add-name li.billing-name {
    width: calc(50% - 30px);
    margin-left: 30px;
    margin-bottom: 15px;
}

.billing-area .billing-address-1 ul.add-name li.billing-name input {
    width: 100%;
    font-size: 13px;
    margin-top: 10px;
    border: 1px solid #eee;
}

.billing-area .billing-address-1 ul.billing-locatio {
    margin-left: -30px;
    display: flex;
    flex-wrap: wrap;
}

.billing-area .billing-address-1 ul.billing-locatio li.billing-info {
    width: calc(33.33% - 30px);
    margin-left: 30px;
    margin-bottom: 15px;
}

.billing-area .billing-address-1 ul.billing-locatio li.billing-info input {
    width: 100%;
    margin-top: 10px;
    font-size: 13px;
    border: 1px solid #eee;
}

.billing-area .billing-address-1 ul.country-info {
    margin-left: -30px;
    display: flex;
    flex-wrap: wrap;
}

.billing-area .billing-address-1 ul.country-info li.billing-country {
    width: calc(50% - 30px);
    margin-left: 30px;
    margin-bottom: 22px;
}

.billing-area .billing-address-1 ul.country-info li.billing-country input {
    width: 100%;
    margin-top: 10px;
    font-size: 13px;
    border: 1px solid #eee;
}

.billing-area .billing-address-1 ul.country-info li.billing-country select {
    width: 100%;
    margin-top: 10px;
    font-size: 13px;
    border: 1px solid #eee;
}

.billing-area .next-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
}

.billing-area .next-button a {
    background-color: #5fa800;
    color: #fff;
    font-weight: 600;
    padding: 7px 15px;
    border: 2px solid #5fa800;
    border-radius: 3px;

    line-height: 1;
}

.billing-area .next-button a:hover {
    background-color: transparent;
    color: #000;
}


/* checkout style-2 tab css */
.checkout-tab ul.nav.nav-tabs {
    margin-bottom: 22px;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkout-tab ul.nav.nav-tabs li.nav-item {
    margin-left: 40px;
}

.checkout-tab ul.nav.nav-tabs li.nav-item:first-child {
    margin-left: 0px;
}

.checkout-tab ul.nav.nav-tabs li.nav-item a.nav-link {
    font-size: 18px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fff;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
    font-weight: 600;
    border: none;
}

.checkout-tab ul.nav.nav-tabs li.nav-item a.nav-link.active {
    color: #f5ab1e;
}

.checkout-style-2 .billing-area form h2 {
    font-size: 24px;
}

.checkout-style-2 .billing-area form .billing-form {
    margin-top: 16px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul {
    width: 100%;
    margin-top: 15px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul:first-child {
    margin-top: 0px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul.input-2 {
    display: flex;
    flex-wrap: wrap;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul.input-2 li.billing-li {
    width: calc(50% - 15px);
    margin-left: 15px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul.input-2 li.billing-li:first-child {
    margin-left: 0px;
    width: calc(50% - 0px);
    margin-left: 0px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul li.billing-li input {
    width: 100%;
    margin-top: 10px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul li.billing-li select {
    width: 100%;
    margin-top: 10px;
}

.checkout-style-2 .billing-area form .billing-form ul.billing-ul li.billing-li option {
    margin-top: 10px;
}

.checkout-style-2 .billing-area .billing-details form h2 {
    font-size: 24px;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form {
    margin-top: 19px;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form li {
    margin-top: 9px;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form li.check-box {
    display: flex;
    align-items: center;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form li.check-box input {
    margin-right: 5px;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form li:first-child {
    margin-top: 0px;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form li label {
    margin-bottom: 0px;
}

.checkout-style-2 .billing-area .billing-details ul.shipping-form li textarea {
    margin-top: 10px;
    width: 100%;
}

.checkout-style-2 .order-area {
    margin-left: -20px;
}

.checkout-style-2 .order-area .check-pro {
    position: sticky;
    top: 0px;
    width: calc(50% - 30px);
    margin-left: 30px;
}

.checkout-style-2 .order-area .check-pro h2 {
    font-size: 24px;
}

.checkout-style-2 .order-area .check-pro ul.check-ul {
    margin-top: 20px;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li:last-child {
    border: none;
    padding-bottom: 0px;
    margin-bottom: 0px;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li .check-content {
    margin-left: 15px;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li .check-content a {
    display: block;
    font-weight: 400;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li .check-content span.check-code-blod {
    display: block;
    margin-top: 4px;
    font-weight: 600;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li .check-content span.check-code-blod span {
    font-weight: 500;
}

.checkout-style-2 .order-area .check-pro ul.check-ul li .check-content span.check-price {
    font-size: 15px;
    font-weight: 600;
    margin-top: 5px;
}

.checkout-style-2 .order-area {
    display: flex;
    justify-content: space-between;
    margin-left: -30px;
}

.checkout-style-2 .order-area .order-history {
    width: calc(50% - 30px);
    margin-left: 30px;
}

.checkout-style-2 .order-area .order-history h2 {
    font-size: 18px;
}

.checkout-style-2 .order-area .order-history .order-inf {
    margin-top: 23px;
}

.checkout-style-2 .order-area .order-history .order-inf .order-details {
    margin-top: 13px;
    padding-top: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.checkout-style-2 .order-area .order-history .order-inf .order-details:first-child {
    margin-top: 0px;
}

.checkout-style-2 .order-area .order-history .order-inf .order-details span {
    font-size: 16px;
    font-weight: 500;
}

.checkout-style-2 .order-area .order-history .order-inf .order-details.last {
    padding-top: 13px;
    padding-bottom: 13px;
    margin-top: 12px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.checkout-style-2 .order-area .order-history .order-inf .order-details.last span {
    font-weight: 600;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form {
    margin-top: 19px;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .order-checkbox {
    margin-top: 19px;
    display: flex;
    align-items: center;
    line-height: 1;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .order-checkbox :first-child {
    margin-top: 0px;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .order-checkbox input {
    margin-right: 10px;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .order-checkbox label {
    margin-bottom: 0px;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .pay-icon {
    margin-top: 19px;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .pay-icon a {
    font-size: 25px;
    margin-left: 15px;
    line-height: 1;
}

.checkout-style-2 .order-area .order-history .order-inf form .order-form .pay-icon a:first-child {
    margin-left: 0px;
}

.checkout-style-2 .order-area .order-history .order-inf a.btn-style1 {
    margin-top: 28px;
    display: block;
    text-align: center;
}
</style>