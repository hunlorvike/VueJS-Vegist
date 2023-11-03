<script>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeSlide from "@/components/HomeSlide.vue";
import Dialog from "@/components/Dialog.vue";

export default {
    name: "Home",
    components: {
        Dialog,
        HomeSlide,
        HomeBanner
    }
}
</script>


<template>
    <!--Slide-->
    <HomeSlide/>
    <!--Banner-->
    <HomeBanner/>

    <!-- service start -->
    <section class="service-section">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="service">
                        <div class="service-box">
                            <div class="s-box">
                                <i class="ti-truck"></i>
                                <div class="service-content">
                                    <span>Free delivery</span>
                                    <p>Orders from all item</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-box">
                            <div class="s-box">
                                <i class="ti-money"></i>
                                <div class="service-content">
                                    <span>Return & refund</span>
                                    <p>Money back guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-box">
                            <div class="s-box">
                                <i class="ti-headphone"></i>
                                <div class="service-content">
                                    <span>Quality support</span>
                                    <p>Alway online 24/7</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-box">
                            <div class="s-box">
                                <i class="ti-email"></i>
                                <div class="service-content">
                                    <span>Join newslleter</span>
                                    <p>20% off by subscribing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- service end -->

    <!-- trending product start -->
    <section class="section-tb-padding trending-pro">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <h2>Trending products</h2>
                    </div>
                    <div class="home2-trending owl-carousel owl-theme">
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-01.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh organic fruit (50gm)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$130.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-2.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-02.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh & healty food</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$126.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-03.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-20%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$130.00 USD</span>
                                    <span class="old-price"><del>$150.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-04.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh litchi 100% organic</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$117.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-5.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-05.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-12%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Vegetable tomato fresh</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$133.00 USD</span>
                                    <span class="old-price"><del>$145.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-6.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-06.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-21%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Vegetable tomato fresh</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$139.00 USD</span>
                                    <span class="old-price"><del>$160.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-07.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-10%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$580.00 USD</span>
                                    <span class="old-price"><del>$590.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-08.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$93.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-09.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-12%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$167.00 USD</span>
                                    <span class="old-price"><del>$179.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image"
                                             src="../assets/image/pro/pro-img-010.jpg" alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$230.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-11.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image"
                                             src="../assets/image/pro/pro-img-011.jpg" alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Sp.red fresh guava</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$45.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-12.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image"
                                             src="../assets/image/pro/pro-img-012.jpg" alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-25%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh mussel (500g)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$245.00 USD</span>
                                    <span class="old-price"><del>$270.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- trending product end -->

    <!-- category image start -->
    <section class="section-b-padding home2-category">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <h2>Shop by category</h2>
                    </div>
                    <div class="home2-cate-image owl-carousel owl-theme">
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image1.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Organic dryfruit</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image2.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Green seafood</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image3.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Organic juice</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image4.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Dairy & chesse</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image5.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Fresh vegetable</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image6.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Fresh meat</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image7.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Sea & fish</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image8.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Summer fruit</span>
                                </a>
                            </div>
                        </div>
                        <div class="items">
                            <div class="cate-image">
                                <a href="grid-list-2.html">
                                    <img src="../assets/image/category-image/home-2/image9.jpg" class="img-fluid"
                                         alt="cate-image">
                                    <span>Fresh vegetable</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- category image end -->

    <!-- deal of the day start -->
    <section class="home2-deal">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="deal-back-image" style="background: url(src/assets/image/dealbanner2.jpg) no-repeat;">
                        <div class="deal">
                            <div class="deal-content">
                                <h2>Deal of the day!</h2>
                                <span>We offer a hot dael offer every festival</span>
                            </div>
                            <ul class="contdown_row">
                                <li class="countdown_section">
                                    <span id="days" class="countdown_timer">254</span>
                                    <span class="countdown_title">Days</span>
                                </li>
                                <li class="countdown_section">
                                    <span id="hours" class="countdown_timer">11</span>
                                    <span class="countdown_title">Hours</span>
                                </li>
                                <li class="countdown_section">
                                    <span id="minutes" class="countdown_timer">33</span>
                                    <span class="countdown_title">Minutes</span>
                                </li>
                                <li class="countdown_section">
                                    <span id="seconds" class="countdown_timer">36</span>
                                    <span class="countdown_title">Seconds</span>
                                </li>
                            </ul>
                            <a href="grid-list-2.html" class="btn btn-style1">Shop collection</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- deal of the day end -->

    <!-- our product tab star -->
    <section class="section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="our-tab">
                        <div class="section-title">
                            <h2>Our products</h2>
                        </div>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#home">New product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#profile">Special product</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact">Bestseller</a>
                            </li>
                        </ul>
                        <div class="tab-content tab-pro-slider">
                            <div class="tab-pane fade show active" id="home">
                                <div class="our-products-tab swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-04.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-03.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-20%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                        <span class="old-price"><del>$150.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-01.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-5.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-05.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Vegetable tomato fresh</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$133.00 USD</span>
                                                        <span class="old-price"><del>$145.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-6.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-06.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-21%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Natural grassbean</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$139.00 USD</span>
                                                        <span class="old-price"><del>$160.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-08.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$93.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-09.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$167.00 USD</span>
                                                        <span class="old-price"><del>$179.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-010.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$230.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-04.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-03.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-20%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                        <span class="old-price"><del>$150.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-01.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-buttons">
                                    <div class="content-buttons">
                                        <div class="swiper-button-next" tabindex="0" role="button"
                                             aria-label="Next slide" aria-disabled="false"></div>
                                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0"
                                             role="button" aria-label="Previous slide" aria-disabled="true"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile">
                                <div class="our-products-tab swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-08.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$93.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-09.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$167.00 USD</span>
                                                        <span class="old-price"><del>$179.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-010.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$230.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-01.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh organic fruit (50gm)</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-2.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-02.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh & healty food</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$126.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-04.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-03.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-20%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                        <span class="old-price"><del>$150.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-01.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-03.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-20%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                        <span class="old-price"><del>$150.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-04.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-5.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-05.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Vegetable tomato fresh</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$133.00 USD</span>
                                                        <span class="old-price"><del>$145.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-6.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-06.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-21%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Natural grassbean</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$139.00 USD</span>
                                                        <span class="old-price"><del>$160.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-08.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$93.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-09.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$167.00 USD</span>
                                                        <span class="old-price"><del>$179.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-010.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$230.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-buttons">
                                    <div class="content-buttons">
                                        <div class="swiper-button-next" tabindex="0" role="button"
                                             aria-label="Next slide" aria-disabled="false"></div>
                                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0"
                                             role="button" aria-label="Previous slide" aria-disabled="true"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="contact">
                                <div class="our-products-tab swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-08.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$93.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-09.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$167.00 USD</span>
                                                        <span class="old-price"><del>$179.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-010.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$230.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-2.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-02.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh organic fruit (50gm)</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh & healty food</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$126.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-03.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-20%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                        <span class="old-price"><del>$150.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-04.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-5.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-05.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Vegetable tomato fresh</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$133.00 USD</span>
                                                        <span class="old-price"><del>$145.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-6.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-06.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-21%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Natural grassbean</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$139.00 USD</span>
                                                        <span class="old-price"><del>$160.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-2.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-02.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-08.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star b-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$93.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-04.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-07.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-10%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$580.00 USD</span>
                                                        <span class="old-price"><del>$590.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-03.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-20%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$130.00 USD</span>
                                                        <span class="old-price"><del>$150.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-01.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Fresh litchi 100% organic</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                        <i class="fa fa-star e-star"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$117.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-09.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-discount">-12%</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a>
                                                    </h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star d-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$167.00 USD</span>
                                                        <span class="old-price"><del>$179.00 USD</del></span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="tab-product">
                                                <div class="tred-pro">
                                                    <div class="tr-pro-img">
                                                        <a href="product-style-2.html">
                                                            <img src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1"
                                                                 class="img-fluid">
                                                            <img src="../assets/image/pro/pro-img-010.jpg"
                                                                 alt="additional image"
                                                                 class="img-fluid additional-image">
                                                        </a>
                                                    </div>
                                                    <div class="Pro-lable">
                                                        <span class="p-text">New</span>
                                                    </div>
                                                </div>
                                                <div class="tab-caption">
                                                    <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                                    <div class="rating">
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star c-star"></i>
                                                        <i class="fa fa-star-o"></i>
                                                        <i class="fa fa-star-o"></i>
                                                    </div>
                                                    <div class="pro-price">
                                                        <span class="new-price">$230.00 USD</span>
                                                    </div>
                                                    <div class="pro-icn">
                                                        <a href="wishlist.html" class="w-c-q-icn"><i
                                                            class="fa fa-heart"></i></a>
                                                        <a href="cart.html" class="w-c-q-icn"><i
                                                            class="fa fa-shopping-bag"></i></a>
                                                        <a href="javascript:void(0)" class="w-c-q-icn"
                                                           data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                                            class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-buttons">
                                    <div class="content-buttons">
                                        <div class="swiper-button-next" tabindex="0" role="button"
                                             aria-label="Next slide" aria-disabled="false"></div>
                                        <div class="swiper-button-prev swiper-button-disabled" tabindex="0"
                                             role="button" aria-label="Previous slide" aria-disabled="true"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- our product tab end -->

    <!-- testimonial start -->
    <section class="home2-testimonial testimonial2-bg section-tb-padding">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <h2>Our customer say</h2>
                    </div>
                    <div class="home2-testi owl-carousel owl-theme">
                        <div class="items">
                            <div class="testimonial-area">
                                <span class="tsti-title">“Flexibility”</span>
                                <p>“ I love this theme. Higly customizable, Easy to use and very flexible theme. Great
                                    support ! Excellent response times. Very professional and helpful in all queries,
                                    absolutely awesome. Highly recommended! The theme is really amazing. Thank you
                                    Spacingtech Webify.”</p>
                                <div class="testi-name">
                                    <h6>By disarak</h6>
                                    <span>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="testimonial-area">
                                <span class="tsti-title">“Customer support”</span>
                                <p>“ I love this theme. Higly customizable, Easy to use and very flexible theme. Great
                                    support ! Excellent response times. Very professional and helpful in all queries,
                                    absolutely awesome. Highly recommended! The theme is really amazing. Thank you
                                    Spacingtech Webify.”</p>
                                <div class="testi-name">
                                    <h6>By cremica_foods</h6>
                                    <span>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="testimonial-area">
                                <span class="tsti-title">“Frendly support”</span>
                                <p>“ I love this theme. Higly customizable, Easy to use and very flexible theme. Great
                                    support ! Excellent response times. Very professional and helpful in all queries,
                                    absolutely awesome. Highly recommended! The theme is really amazing. Thank you
                                    Spacingtech Webify.”</p>
                                <div class="testi-name">
                                    <h6>By sametin8</h6>
                                    <span>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="testimonial-area">
                                <span class="tsti-title">“Frendly support”</span>
                                <p>“ I love this theme. Higly customizable, Easy to use and very flexible theme. Great
                                    support ! Excellent response times. Very professional and helpful in all queries,
                                    absolutely awesome. Highly recommended! The theme is really amazing. Thank you
                                    Spacingtech Webify.”</p>
                                <div class="testi-name">
                                    <h6>By amirzano</h6>
                                    <span>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="testimonial-area">
                                <span class="tsti-title">“Design quality”</span>
                                <p>“ I love this theme. Higly customizable, Easy to use and very flexible theme. Great
                                    support ! Excellent response times. Very professional and helpful in all queries,
                                    absolutely awesome. Highly recommended! The theme is really amazing. Thank you
                                    Spacingtech Webify.”</p>
                                <div class="testi-name">
                                    <h6>By nestheboza</h6>
                                    <span>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                            <i class="fa fa-star e-star"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial end -->

    <!-- featured products start -->
    <section class="section-tb-padding featured-products">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <h2>Featured products</h2>
                    </div>
                    <div class="featured owl-carousel owl-theme">
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-8.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-08.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Orange juice (5ltr)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$93.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-9.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-09.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-12%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Organic coconet (5ltr) juice</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$167.00 USD</span>
                                    <span class="old-price"><del>$179.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-10.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image"
                                             src="../assets/image/pro/pro-img-010.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Shrimp jumbo (5Lb)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$230.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-11.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image"
                                             src="../assets/image/pro/pro-img-011.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Sp.red fresh guava</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$45.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-12.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image"
                                             src="../assets/image/pro/pro-img-012.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-25%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh mussel (500g)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star d-star"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$245.00 USD</span>
                                    <span class="old-price"><del>$270.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-1.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-01.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh organic fruit (50gm)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$130.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-2.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-02.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh & healty food</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$126.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-3.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-03.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-20%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh apple</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$130.00 USD</span>
                                    <span class="old-price"><del>$150.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-4.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-04.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-text">New</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh litchi 100% organic</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$117.00 USD</span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-5.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-05.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-12%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Vegetable tomato fresh</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star b-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$133.00 USD</span>
                                    <span class="old-price"><del>$145.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-6.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-06.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-21%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Natural grassbean</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star c-star"></i>
                                    <i class="fa fa-star-o"></i>
                                    <i class="fa fa-star-o"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$139.00 USD</span>
                                    <span class="old-price"><del>$160.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="tred-pro">
                                <div class="tr-pro-img">
                                    <a href="product-style-2.html">
                                        <img class="img-fluid" src="../assets/image/pro/pro-img-7.jpg" alt="pro-img1">
                                        <img class="img-fluid additional-image" src="../assets/image/pro/pro-img-07.jpg"
                                             alt="additional image">
                                    </a>
                                </div>
                                <div class="Pro-lable">
                                    <span class="p-discount">-10%</span>
                                </div>
                                <div class="pro-icn">
                                    <a href="wishlist.html" class="w-c-q-icn"><i class="fa fa-heart"></i></a>
                                    <a href="cart.html" class="w-c-q-icn"><i class="fa fa-shopping-bag"></i></a>
                                    <a href="javascript:void(0)" class="w-c-q-icn" data-bs-toggle="modal"
                                       data-bs-target="#exampleModal"><i class="fa fa-eye"></i></a>
                                </div>
                            </div>
                            <div class="caption">
                                <h3><a href="product-style-2.html">Fresh dryed almod (50gm)</a></h3>
                                <div class="rating">
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                    <i class="fa fa-star e-star"></i>
                                </div>
                                <div class="pro-price">
                                    <span class="new-price">$580.00 USD</span>
                                    <span class="old-price"><del>$590.00 USD</del></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- featured products end -->

    <!-- blog start -->
    <section class="section-b-padding home2-blog">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="section-title">
                        <h2>Recent news</h2>
                    </div>
                    <div class="blog2 owl-carousel owl-theme">
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-1.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 Jan 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 6 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">Green onion knife and salad plased</a>
                                        </h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-2.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 fab 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 1 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">All time fresh every time healthy</a>
                                        </h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-3.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 march 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 0 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">Health and skin for your organic</a>
                                        </h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-4.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 april 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 0 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">Health and skin for your organic</a>
                                        </h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-5.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 may 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 0 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">Organic mix masala fresh & soft</a></h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-6.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 fab 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 0 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">Fresh organic brand and picnic</a></h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="blog-start">
                                <div class="blog-image">
                                    <a href="blog-style-2-details.html">
                                        <img src="../assets/image/blog-image/blog-7.jpg" alt="blog-image"
                                             class="img-fluid">
                                    </a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-date-comment">
                                        <span class="blog-date"><i class="ti-calendar"></i> 8 march 2021</span>
                                        <a href="javascript:void(0)"><i class="ti-comment-alt"></i> 0 Comment</a>
                                    </div>
                                    <div class="blog-title">
                                        <h6><a href="blog-style-2-details.html">Vegist special liquide fresh
                                            vegetable</a></h6>
                                    </div>
                                    <p class="blog-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                        doli. Aenean commodo ligula eget dolor...</p>
                                    <div class="more-blog">
                                        <a href="blog-style-2-details.html" class="read-link">
                                            <span>Read more</span>
                                            <i class="ti-arrow-right"></i>
                                        </a>
                                        <span class="blog-admin">By <span
                                            class="blog-editor">Andrew louise</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="all-blog2">
                        <a href="blog-style-2-3-grid.html" class="btn btn-style1">View all</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog end -->

    <Dialog/>
</template>
