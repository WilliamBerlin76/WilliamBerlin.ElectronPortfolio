import Vue from 'vue'
import App from './App.vue'
import VueQRCodeComponent from 'vue-qrcode-component'
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);

Vue.config.productionTip = false

Vue.component('qr-code', VueQRCodeComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
