<script setup>
import NotificationBar from "@/components/NotificationBar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import FullScreen from "@/components/FullScreen.vue";
import {useRoute} from 'vue-router';

const route = useRoute();

const isInAdminSection = route.path.startsWith('/admin');

</script>

<template>


    <template v-if="isInAdminSection">
        <NotificationBar/>

        <Header/>

        <router-view></router-view>

        <BackToTop/>

        <Footer/>

        <FullScreen/>
    </template>

    <template v-else>
        <router-view></router-view>
    </template>


</template>

<style scoped>

</style>