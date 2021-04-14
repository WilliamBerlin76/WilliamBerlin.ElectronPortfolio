<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <qr-code 
      text="React is better than Vue"
      size="300"
      color="#000000"
      bg-color="#ffffff" 
      error-level="L">
    </qr-code>
  </div>
</template>

<script>
export default {
  name: 'QrCodes',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
