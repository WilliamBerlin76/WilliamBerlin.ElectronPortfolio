<template>
    <button v-on:click="click">Take screenshot!</button>
</template>

<script>
import Vue2Img from 'vue-2-img'
import 'vue-2-img/dist/vue-2-img.css'

export default {
    name: "ScreenshotButton",
    methods: {
        click: function(){Vue2Img().image()}
    }
}

</script>

<style scoped>

</style>