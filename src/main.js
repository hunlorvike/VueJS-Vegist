// main.js
import { createApp } from "vue";
import App from "./App.vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.mount('#app');

router.beforeEach(async (to, from, next) => {
    if (to.path.startsWith('/admin')) {
        await import('/src/admin/assets/admin-style.css');
        document.title = 'Trang quản trị - Vegist';
    } else {
        // // Import và chờ cho tất cả các tệp CSS hoàn tất
        // await Promise.all([
        //     import('/src/assets/css/bootstrap.min.css'),
        //     import('/src/assets/css/simple-line-icons.css'),
        //     import('/src/assets/css/font-awesome.min.css'),
        //     import('/src/assets/css/themify-icons.css'),
        //     import('/src/assets/css/ionicons.min.css'),
        //     import('/src/assets/css/owl.carousel.min.css'),
        //     import('/src/assets/css/owl.theme.default.min.css'),
        //     import('/src/assets/css/swiper.min.css'),
        //     import('/src/assets/css/animate.css'),
        //     import('/src/assets/css/style2.css'),
        //     import('/src/assets/css/responsive2.css'),
        // ]);

        document.title = 'Vegist - Vue-js';
    }
    next();
});

