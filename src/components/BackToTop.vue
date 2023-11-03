<script>
export default {
    name: "BackToTop",
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // Add smooth scrolling behavior
            });
        },
    },
};
</script>

<template>
    <!-- back to top start -->
    <a href="javascript:void(0)" class="scroll" @click="scrollToTop" id="top">
        <span><i class="fa fa-angle-double-up"></i></span>
    </a>
    <!-- back to top end -->
</template>

<style scoped>

</style>