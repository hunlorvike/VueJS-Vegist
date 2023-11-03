import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Products from "@/views/Products.vue";
import AboutUs from "@/views/AboutUs.vue";
import Cart from "@/views/Cart.vue";
import NotFound from "@/views/NotFound.vue";
import ContactUs from "@/views/ContactUs.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import OrderHistory from "@/views/ProfileOrderHistory.vue";
import ProfileAddress from "@/views/ProfileAddress.vue";
import ProfileWishlist from "@/views/ProfileWishlist.vue";
import ProfileTicket from "@/views/ProfileTicket.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import Blogs from "@/views/Blogs.vue";
import BlogDetail from "@/views/BlogDetail.vue";
import Checkout from "@/views/Checkout.vue";
import OrderComplete from "@/views/OrderComplete.vue";
import Search from "@/views/Search.vue";
import AdminDashboard from "@/admin/views/AdminDashboard.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: 'Trang chủ - Vegist',
        },
    },
    {
        path: "/product-detail",
        name: "ProductDetail",
        component: ProductDetail,
        meta: {
            title: 'Trang chi tiết sản phẩm - Vegist',
        },
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
        meta: {
            title: 'Sản phẩm - Vegist'
        }
    },
    {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
        meta: {
            title: 'Về chúng tôi - Vegist'
        }
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: {
            title: "Giỏ hàng - Vegist"
        }
    },
    {
        path: "/not-found",
        name: "NotFound",
        component: NotFound,
        meta: {
            title: "Không tìm thấy trang - Vegist"
        }
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: ContactUs,
        meta: {
            title: "Liên hệ với chúng tôi - Vegist"
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Đăng nhập - Vegist"
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            title: "Đăng ký - Vegist"
        }
    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            title: "Quên mật khẩu - Vegist"
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: {
            title: "Trang cá nhân - Vegist"
        }
    },
    {
        path: "/order-history",
        name: "OrderHistory",
        component: OrderHistory,
        meta: {
            title: "Lịch sử đặt hàng - Vegist"
        }
    },
    {
        path: "/profile-address",
        name: "ProfileAddress",
        component: ProfileAddress,
        meta: {
            title: "Địa chỉ - Vegist"
        }
    },
    {
        path: "/profile-wishlist",
        name: "ProfileWishlist",
        component: ProfileWishlist,
        meta: {
            title: "Danh sách yêu thích - Vegist"
        }
    },
    {
        path: "/profile-ticket",
        name: "ProfileTicket",
        component: ProfileTicket,
        meta: {
            title: "Địa chỉ cá nhân - Vegist"
        }
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
        meta: {
            title: "Blogs - Vegist"
        }
    },
    {
        path: "/blog-detail",
        name: "BlogDetail",
        component: BlogDetail,
        meta: {
            title: "BlogDetail - Vegist"
        }
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout,
        meta: {
            title: "Thanh toán - Vegist"
        }
    },
    {
        path: "/order-complete",
        name: "OrderComplete",
        component: OrderComplete,
        meta: {
            title: "Complete - Vegist"
        }
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
        meta: {
            title: "Tìm kiếm - Vegist"
        }
    },
    {
        path: "/admin",
        name: "AdminDashboard",
        component: AdminDashboard
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
