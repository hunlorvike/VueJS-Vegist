<script>
export default {
    name: "OrderComplete"
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
                                <span>Order Complete</span>
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
                    <div class="order-area">
                        <div class="order-price">
                            <ul class="total-order">
                                <li>
                                    <span class="order-no">Order no. 1724</span>
                                    <span class="order-date">23th jan 2021 3:04 pm</span>
                                </li>
                                <li>
                                    <span class="total-price">Order total</span>
                                    <span class="amount">$1199.00</span>
                                </li>
                            </ul>
                        </div>
                        <div class="order-details">
                            <span class="text-success order-i"><i class="fa fa-check-circle"></i></span>
                            <h4>Thank you for order</h4>
                            <span class="order-s">Your order will ship within few hours</span>
                            <a href="tracking.html" class="tracking-link btn btn-style1">Tracking details</a>
                        </div>
                        <div class="order-delivery">
                            <ul class="delivery-payment">
                                <li class="delivery">
                                    <h5>Delivery address</h5>
                                    <p>Lorem ipsum</p>
                                    <span class="order-span">7003 fairway street</span>
                                    <span class="order-span">New york</span>
                                    <span class="order-span">NY 10033</span>
                                    <span class="order-span">USA</span>
                                    <span class="order-span">Mobile no :+11-123456789</span>
                                </li>
                                <li class="pay">
                                    <h5>Payment summary</h5>
                                    <p class="transition">Transaction no : 66282856617</p>
                                    <span class="order-span p-label">
                                        <span class="n-price">Price</span>
                                        <span class="o-price">$876.00</span>
                                    </span>
                                    <span class="order-span p-label">
                                        <span class="n-price">Shipping charge</span>
                                        <span class="o-price">$100.00</span>
                                    </span>
                                    <span class="order-span p-label">
                                        <span class="n-price">Order Total</span>
                                        <span class="o-price">$100.00</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Order complete end -->
</template>

<style scoped>

/* order complete page css */
.order-area .order-price ul.total-order {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.order-area .order-price ul.total-order li:last-child {
    text-align: right;
}

.order-area .order-price ul.total-order li span.order-no {
    display: block;
    font-weight: 600;
}

.order-area .order-price ul.total-order li span.order-date {
    color: #bbbbbb;
    margin-top: 5px;
}

.order-area .order-price ul.total-order li span.total-price {
    display: block;
    text-align: right;
    font-weight: 600;
}

.order-area .order-price ul.total-order li span.amount {
    margin-top: 5px;
    text-align: right;
    font-weight: 600;
}

.order-area .order-details {
    margin-top: 24px;
    padding-top: 28px;
    border-top: 1px solid #eee;
    text-align: center;
}

.order-area .order-details span.order-i {
    font-size: 30px;
    line-height: 1;
}

.order-area .order-details span.order-s {
    display: block;
    margin-top: 8px;
}

.order-area .order-details a.tracking-link {
    margin-top: 24px;
}

.order-area .order-details a.tracking-link:hover {
    background-color: transparent;
    color: #000;
}

.order-area .order-delivery {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
}

.order-area .order-delivery ul.delivery-payment {
    display: flex;
    flex-wrap: wrap;
    margin: -30px 0px 0px -30px;
}

.order-area .order-delivery ul.delivery-payment li {
    width: calc(50% - 30px);
    margin: 30px 0px 0px 30px;
    border-right: 1px solid #eee;
}

.order-area .order-delivery ul.delivery-payment li:last-child {
    border-right: none;
}

.order-area .order-delivery ul.delivery-payment li h5 {
    font-size: 16px;
}

.order-area .order-delivery ul.delivery-payment li p {
    margin-top: 6px;
}

.order-area .order-delivery ul.delivery-payment li.delivery p {
    font-weight: 600;
}

.order-area .order-delivery ul.delivery-payment li.pay p {
    color: #bbb;
}

.order-area .order-delivery ul.delivery-payment li span.order-span {
    display: block;
    margin-top: 9px;
}

.order-area .order-delivery ul.delivery-payment li span.order-span:first-of-type {
    margin-top: 7px;
}

.order-area .order-delivery ul.delivery-payment li span.p-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.order-area .order-delivery ul.delivery-payment li span.p-label span.o-price {
    font-weight: 600;
}
</style>