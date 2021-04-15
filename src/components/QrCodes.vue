<template>
  <div class="codes-container">
    <div class="name-card">
      <p class="my-name">{{myName}}</p>
      <qr-code 
        :text=myName
        :size=size
        color="#000000"
        bg-color="#ffffff" 
        error-level="L">
      </qr-code>
    </div>
    <div class="crypto-cards-container">
      <h3 class="crypto-cards-title">Cryptocurrency Prices</h3>
      <div class="code-cards" >
        <CodeCard 
          :name=item.name
          :price=item.price
          v-for="item in cryptos" 
          v-bind:key="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script>

import Vue from "vue";
import axios from  "axios";
import VueAxios from "vue-axios";
import CodeCard from "./CodeCard";
Vue.use(axios, VueAxios);


export default {
  name: 'QrCodes',
  components: {
    CodeCard
  },
  data(){
    return {
      myName: "William Berlin",
      cryptos: [],
      size: Number(100)
    }
  },
  mounted(){
    // tezos
    axios.get(`https://data.messari.io/api/v1/assets/tezos/metrics`)
    .then(res => {
      this.cryptos.push({
        name: `Tezos`,
        price: `$${res.data.data.market_data.price_usd}`
      });
      
    }).catch(err => {
      console.log(err);
    });

    // burst
    axios.get(`https://data.messari.io/api/v1/assets/burst/metrics`)
    .then(res => {
      this.cryptos.push({
        name: `Burst`,
        price: `$${res.data.data.market_data.price_usd}`
      });
      
    }).catch(err => {
      console.log(err);
    });

    // cardano
    axios.get(`https://data.messari.io/api/v1/assets/cardano/metrics`)
    .then(res => {
      this.cryptos.push({
        name: `Cardano`,
        price: `$${res.data.data.market_data.price_usd}`
      });
    }).catch(err => {
      console.log(err);
    });
  },
}
</script>

<style scoped>
.code-cards{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.name-card{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.my-name{
  font-size: 1.5rem;
}
.crypto-cards-container{
  color: #ffffff;
  background: #72BB44;
  padding: 3px 0 25px;
  box-shadow: 0 0 5px 5px #72BB44;
}
.crypto-cards-title{
  font-size: 1.6rem;
  margin: 25px;
}
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
