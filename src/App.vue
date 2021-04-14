<template>
  <div id="app">
    <h1>WilliamBerlin.ElectronPortfolio</h1>
    <QrCodes/>
  </div>
</template>

<script>
import QrCodes from './components/QrCodes.vue'

export default {
  name: 'App',
  components: {
    QrCodes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
