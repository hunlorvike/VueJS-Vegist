<script>
export default {
    name: "FullScreen",
    methods: {
        closeFullscreen() {
            this.$emit("closeFullscreen"); // Emit a custom event to notify the parent component
        },
    },
};
</script>

<template>
    <div class="mm-fullscreen-bg" @click="closeFullscreen"></div>
</template>

<style scoped>

</style>