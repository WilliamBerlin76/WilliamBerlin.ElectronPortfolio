<template>
  <div class="codes-container">
    <div class="name-card">
      <p>{{myName}}</p>
      <qr-code 
        :text=myName
        size=200
        color="#000000"
        bg-color="#ffffff" 
        error-level="L">
      </qr-code>
    </div>
    <div class="code-cards" >
      <CodeCard 
        :name=item.name
        :price=item.price
        v-for="item in cryptos" 
        v-bind:key="item.name"
      />
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
      cryptos: []
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
