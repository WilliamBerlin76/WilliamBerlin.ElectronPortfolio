<template>
  <div id="app">
    <h1 class="app-title">WilliamBerlin.ElectronPortfolio</h1>
    <ScreenshotButton />
    <QrCodes />
    <TwitterFeeds />
    <Footer />
  </div>
</template>

<script>
import ScreenshotButton from "./components/ScreenshotButton.vue";
import QrCodes from "./components/QrCodes.vue";
import TwitterFeeds from "./components/TwitterFeeds.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    ScreenshotButton,
    QrCodes,
    TwitterFeeds,
    Footer
  }
}
</script>

<style>
.app-title{
  font-size: 1.6rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
