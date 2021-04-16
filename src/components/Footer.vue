<template>
    <div class="link-container">
        <a 
            class="link-item"
            href="https://github.com/WilliamBerlin76" 
            target="_blank" 
            rel="noreferrer"
        >GitHub</a>
        <a 
            class="link-item"
            href="https://www.linkedin.com/in/william-berlin-75695b193/" 
            target="_blank" 
            rel="noreferrer"
        >LinkedIn</a>
        <a 
            class="link-item"
            href="mailto: william.berlin76@gmail.com" 
        >william.berlin76@gmail.com</a>
        <a 
            class="link-item"
            href="https://docs.google.com/document/d/1P5QOnhfT1Dist0tcODGvSyc259zUNsfgEwJDUiIMb74/edit?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
        >Resume</a>
    </div>
</template>

<script>

export default {
    name:"Footer"
}
</script>

<style scoped>
.link-container{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 5px 0;
    background: #72BB44;
    box-shadow: 0 0 5px 5px #72BB44;
    width: 100%;
    bottom: 0;
}
.link-item{
    color: #ffffff;
    text-decoration: none;
}
.link-item:hover{
    color: #43438b
}
</style>