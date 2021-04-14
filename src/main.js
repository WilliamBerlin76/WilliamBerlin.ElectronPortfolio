import Vue from 'vue'
import App from './App.vue'
import VueQRCodeComponent from 'vue-qrcode-component'

Vue.config.productionTip = false

Vue.component('qr-code', VueQRCodeComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
