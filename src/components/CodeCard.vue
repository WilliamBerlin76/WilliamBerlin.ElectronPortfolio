<template class="card">
    <div>
        <p>{{name}}</p>
        <p>{{price}}</p>
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
            size: 200
        }
    }
}
</script>

<style scoped>
.card{
    width:25%
}

</style>