<script>
export default {
    name: "ProfileWishlist"
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
                                <span>Profile Wishlist</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- breadcumb end -->

    <!-- order history start -->
    <section class="order-histry-area section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="order-history">
                        <div class="profile">
                            <div class="order-pro">
                                <div class="pro-img">
                                    <a href="javascript:void(0)"><img src="../assets/image/user-ava.jpg" alt="img"
                                                                      class="img-fluid"></a>
                                </div>
                                <div class="order-name">
                                    <h4>Andrew louise</h4>
                                    <span>Joined april 06, 2021</span>
                                </div>
                            </div>
                            <div class="order-his-page">
                                <ul class="profile-ul">
                                    <li class="profile-li"><a href="order-history.html"><span>Orders</span> <span
                                        class="pro-count">5</span></a></li>
                                    <li class="profile-li"><a href="profile.html">Profile</a></li>
                                    <li class="profile-li"><a href="pro-addresses.html">Address</a></li>
                                    <li class="profile-li"><a href="pro-wishlist.html"
                                                              class="active"><span>Wishlist</span> <span
                                        class="pro-count">3</span></a></li>
                                    <li class="profile-li"><a href="pro-tickets.html"><span>My tickets</span> <span
                                        class="pro-count">4</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="profile-wishlist">
                            <div class="wishlist-area">
                                <div class="wishlist-details">
                                    <div class="wishlist-item">
                                        <span class="wishlist-head">My wishlist:</span>
                                        <span class="wishlist-items">3 item</span>
                                    </div>
                                    <div class="wishlist-all-pro">
                                        <div class="wishlist-pro">
                                            <div class="wishlist-pro-image">
                                                <a href="product.html"><img
                                                    src="../assets/image/cart-page/cart-1/image1.jpg" class="img-fluid"
                                                    alt="image"></a>
                                            </div>
                                            <div class="pro-details">
                                                <h4><a href="product.html">Vegetable tomato fresh</a></h4>
                                                <span class="all-size">Size: <span class="pro-size">5kg</span></span>
                                                <span class="wishlist-text">Petro demo</span>
                                            </div>
                                        </div>
                                        <div class="qty-item">
                                            <a href="cart.html" class="add-wishlist">Add to cart</a>
                                            <a href="checkout-1.html" class="add-wishlist">Buy now</a>
                                        </div>
                                        <div class="all-pro-price">
                                            <span class="new-price">$384.51 USD</span>
                                            <span class="old-price"><del>$405.00 USD</del></span>
                                            <span><i class="ion-android-close"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wishlist-area">
                                <div class="wishlist-details">
                                    <div class="wishlist-all-pro">
                                        <div class="wishlist-pro">
                                            <div class="wishlist-pro-image">
                                                <a href="product.html"><img
                                                    src="../assets/image/cart-page/cart-1/image3.jpg" class="img-fluid"
                                                    alt="image"></a>
                                            </div>
                                            <div class="pro-details">
                                                <h4><a href="product.html">Fresh healthy food</a></h4>
                                                <span class="all-size">Size: <span class="pro-size">6kg</span></span>
                                                <span class="wishlist-text">Multiwebinfo</span>
                                            </div>
                                        </div>
                                        <div class="qty-item">
                                            <a href="cart.html" class="add-wishlist">Add to cart</a>
                                            <a href="checkout-1.html" class="add-wishlist">Buy now</a>
                                        </div>
                                        <div class="all-pro-price">
                                            <span class="new-price">$460.00 USD</span>
                                            <span class="old-price"><del>$400.00 USD</del></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wishlist-area">
                                <div class="wishlist-details">
                                    <div class="wishlist-all-pro">
                                        <div class="wishlist-pro">
                                            <div class="wishlist-pro-image">
                                                <a href="product.html"><img
                                                    src="../assets/image/cart-page/cart-1/image2.jpg" class="img-fluid"
                                                    alt="image"></a>
                                            </div>
                                            <div class="pro-details">
                                                <h4><a href="product.html">Fresh green orange</a></h4>
                                                <span class="all-size">Size: <span class="pro-size">3kg</span></span>
                                                <span class="wishlist-text">Vegist store</span>
                                            </div>
                                        </div>
                                        <div class="qty-item">
                                            <a href="cart.html" class="add-wishlist">Add to cart</a>
                                            <a href="checkout-1.html" class="add-wishlist">Buy now</a>
                                        </div>
                                        <div class="all-pro-price">
                                            <span class="new-price">$109.20 USD</span>
                                            <span class="old-price"><del>$99.99 USD</del></span>
                                        </div>
                                    </div>
                                    <div class="other-link">
                                        <ul class="c-link">
                                            <li class="wishlist-other-link"><a href="grid-list.html">Continue
                                                shopping</a></li>
                                            <li class="wishlist-other-link"><a href="index1.html">Clear wishlist</a>
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
    <!-- order history end -->
</template>

<style scoped>
/* order history page css */
.order-histry-area .order-history {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-left: -30px;
}

.order-histry-area .order-history .profile {
    width: calc(35% - 30px);
    margin-left: 30px;
    border: 1px solid #eee;
    border-radius: 5px;
}

.order-histry-area .order-history .profile .order-pro {
    padding: 30px;
    display: flex;
    align-items: center;
}

.order-histry-area .order-history .profile .order-pro .pro-img img {
    border: 3px solid #eee;
    border-radius: 100%;
}

.order-histry-area .order-history .profile .order-pro .order-name {
    margin-left: 15px;
}

.order-histry-area .order-history .profile .order-pro .order-name h4 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    line-height: 1;
}

.order-histry-area .order-history .profile .order-pro .order-name span {
    font-size: 13px;
    color: #9da9b9;
    margin-top: 12px;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a {
    position: relative;
    width: 100%;
    padding: 15px 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid #ddd;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a:after {
    background-color: #5fa800;
    content: '';
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 18px;
    width: 2px;
    height: 15px;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a.active:after {
    background-color: #fff;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a:hover {
    background-color: #f5f5f5;
    color: #333;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a.active {
    background-color: #5fa800;
    color: #fff;
    border-color: #5fa800;
    -webkit-transition: all 0.3s ease-in-out 0s;
    -o-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a span.pro-count {
    background-color: #5fa800;
    width: 25px;
    height: 25px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
}

.order-histry-area .order-history .profile .order-his-page ul.profile-ul li.profile-li a.active span.pro-count {
    background-color: #fff;
    color: #333;
}

.order-histry-area .order-history .order-info {
    width: calc(65% - 30px);
    margin-left: 30px;
}

.order-histry-area .order-history .order-info .table {
    border-top: 1px solid #eee;
}

.order-histry-area .order-history .order-info .table thead {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.order-histry-area .order-history .order-info .table thead tr th {
    padding-top: 11px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.order-histry-area .order-history .order-info .table tbody tr td {
    padding-top: 11px;
    padding-bottom: 10px;
}

.order-histry-area .order-history .order-info .table tbody tr td.canceled {
    color: #ff5252;
}

.order-histry-area .order-history .order-info .table tbody tr td.process {
    color: #50c6e9;
}

.order-histry-area .order-history .order-info .table tbody tr td.delayed {
    color: #5fa800;
}

.order-histry-area .order-history .order-info .table tbody tr td.delivered {
    color: #43d9a3;
}

/* profile wishlist page css */
.order-histry-area .order-history .profile-wishlist {
    width: calc(65% - 30px);
    margin-left: 30px;
}

/* wishlist page css */
.wishlist-area {
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.wishlist-area:last-child {
    border-bottom: none;
}

.wishlist-area .wishlist-details .wishlist-item {
    padding: 13px 0px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wishlist-area .wishlist-details .wishlist-item span.wishlist-head {
    font-size: 16px;
    font-weight: 700;
}

.wishlist-area .wishlist-details .wishlist-item span.c-items {
    border-bottom: 1px solid #000;
    margin-bottom: 3px;
}

.wishlist-area .wishlist-details .wishlist-all-pro {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.wishlist-area .wishlist-details .wishlist-all-pro .wishlist-pro {
    width: 60%;
    margin-top: 20px;
    display: flex;
}

.wishlist-area .wishlist-details .wishlist-all-pro .wishlist-pro .wishlist-pro-image {
    margin-right: 15px;
}

.wishlist-area .wishlist-details .wishlist-all-pro .wishlist-pro .pro-details h4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
}

.wishlist-area .wishlist-details .wishlist-all-pro .wishlist-pro .pro-details span.all-size {
    font-size: 14px;
    margin-top: 8px;
    font-weight: 600;
    display: block;
}

.wishlist-area .wishlist-details .wishlist-all-pro .wishlist-pro .pro-details span.all-size span.pro-size {
    font-weight: 400;
}

.wishlist-area .wishlist-details .wishlist-all-pro .wishlist-pro .pro-details span.wishlist-text {
    margin-top: 8px;
    line-height: 1;
}

.wishlist-area .wishlist-details .wishlist-all-pro .qty-item {
    width: 20%;
}

.wishlist-area .wishlist-details .wishlist-all-pro .qty-item a.add-wishlist {
    color: #5fa800;
    margin-top: 7px;
    text-decoration: underline;
    display: block;
    text-align: center;
}

.wishlist-area .wishlist-details .wishlist-all-pro .qty-item a.add-wishlist:first-child {
    margin-top: 0px;
}

.wishlist-area .wishlist-details .wishlist-all-pro .all-pro-price {
    width: 20%;
    text-align: right;
}

.wishlist-area .wishlist-details .wishlist-all-pro .all-pro-price span.new-price {
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
}

.wishlist-area .wishlist-details .wishlist-all-pro .all-pro-price span.old-price {
    color: #999;
}

.wishlist-area .wishlist-details .other-link {
    margin-top: 20px;
    padding: 15px 0px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
}

.wishlist-area .wishlist-details .other-link ul.c-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>