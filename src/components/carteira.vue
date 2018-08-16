<template>
<div class="carteira">
  <b-container id="janelaCarteira">
    <b-row>
      <b-col>
    <ul id="listaMoedas">
      <li class="moeda" v-for="coin in wallet">
        <img class="money" v-bind:src="moedas[coin.id-1].icon"/> {{moedas[coin.id-1].name}}: {{coin.value}}
      </li>
    </ul>
  </b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
export default {
  name: 'carteira',
  data () {
    return {
      wallet: [],
      moedas: []
      // msg: 'Componente de Teste!!!',
      // showDismissibleAlert: false
    }
  },
  created () {
    this.$http.get('https://api.guildwars2.com/v2/account/wallet?access_token=9FFAAB07-FFC3-B942-A206-AB924A2E555E5D379892-1FCA-425D-AE2E-2741B50FFFF7'
  ).then(response => {
    this.wallet = response.body
  }, response => {
      // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/currencies?ids=1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46'
).then(response => {
  this.moedas = response.body
}, response => {
    // error callback
})
  }

}

</script>

<style>
.carteira {
	font-family: fantasy;
	font-size: 19px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 20.9px;
  color: #000000;
  background-image: url('../assets/wallet.jpg');
  background-position: fixed;
  background-repeat: round;
  background-size: auto;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
}

#janelaCarteira {
  background-color: rgba(255, 255, 255, 0.3);
  margin-left: 15px;
  margin-top: 15px;
}

.money {
  height: 50px;
  width: 50px;
}

.moeda {
  float: left;
  padding: 5px;
}

#listaMoedas{
  list-style-type: none;
}

</style>
