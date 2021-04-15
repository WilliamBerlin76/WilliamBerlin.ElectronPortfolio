<template>
    <button 
        class="screenshot-button" 
        v-on:click="click"
    >Take screenshot!</button>
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
.screenshot-button{
    background: #72BB44;
    color: #ffffff;
    border: 2px solid #72BB44;
    box-shadow: 0 0 2px 1px #72BB44;
    padding: 5px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1.3rem;
    transition: .2s
}
.screenshot-button:hover{
    
    color: #72BB44;
    background: #ffffff 
}
</style>