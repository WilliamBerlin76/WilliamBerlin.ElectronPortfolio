<template>
    <div class="card">
        <span class="currency-name">{{name}}</span>
        <p class="price">{{price}}</p>
        <qr-code 
            :text=price
            :size=size
            color="#000000"
            bg-color="#ffffff" 
            error-level="L">
        </qr-code>
    </div>
  
</template>
 
<script>

export default {
    name: "CodeCard",
    props: {
        name: String,
        price: String
    },
    data(){
        return {
            size: Number(100)
        }
    }
}
</script>

<style scoped>
.card{
    width:25%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.currency-name{
    font-size: 1.5rem
}

</style>