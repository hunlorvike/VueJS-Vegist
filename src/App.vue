<script setup>
import NotificationBar from "@/components/NotificationBar.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import FullScreen from "@/components/FullScreen.vue";

</script>

<template>


        <NotificationBar/>

        <Header/>

        <router-view></router-view>

        <BackToTop/>

        <Footer/>

        <FullScreen/>

</template>

<style scoped>

</style>