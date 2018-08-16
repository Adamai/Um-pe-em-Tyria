<template>
<div class="armario">
  <b-container id="janela">
    <b-row>
  <b-col>
    <b-button v-if="!showArmor" variant='dark' v-on:click="showArmadura">Armadura</b-button>
  <b-button v-if="showArmor" variant='primary' v-on:click="showArmadura">Armadura</b-button>
</b-col>
  <b-col>
    <b-button v-if="!showWeapon" variant='dark' v-on:click="showArma">Armas</b-button>
  <b-button v-if="showWeapon" variant='primary' v-on:click="showArma">Armas</b-button>
</b-col>
  <b-col>
    <b-button v-if="!showOutfit" variant='dark' v-on:click="showRoupa">Roupas</b-button>
  <b-button v-if="showOutfit" variant='primary' v-on:click="showRoupa">Roupas</b-button>
</b-col>
</b-row>

<b-row>
  <b-col>
  <ul id="listaArmario">
    <li class="itemArmario" v-for="(skin, index) in skins">
      <!-- <img v-if="skin.type == 'Weapon' && showWeapon" v-bind:src="skin[index].icon"/> -->
      <img v-if="skin[index].type == 'Armor' && showArmor" v-bind:src="skin[index].icon"/>
      <!-- <img v-if="item.type == 'roupa' && showOutfit" v-bind:src="skin[index].icon"/> -->
    </li>
  </ul>
</b-col>
</b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'armario',
  data () {
    return {
      showArmor: false,
      showWeapon: false,
      showOutfit: false,
      ownedskins: '',
      skins: []
      // msg: 'Componente de Teste!!!',
      // showDismissibleAlert: false
    }
  },
  created () {
    this.$http.get('https://api.guildwars2.com/v2/account/skins?access_token=9FFAAB07-FFC3-B942-A206-AB924A2E555E5D379892-1FCA-425D-AE2E-2741B50FFFF7'
  ).then(response => {
    this.ownedskins = response.body.toString().replace('[', '').replace(']', '')
    var nArrays
    nArrays = Math.ceil(this.ownedskins.length / 200)
    var chamadas
    var index
    var indexEnd
    index = 0
    indexEnd = 0
    for (chamadas = 0; chamadas < nArrays; chamadas++) {
      if (index + 200 > this.ownedskins.length) {
        indexEnd = response.body.length
      } else {
        indexEnd = index + 200
      }
      this.$http.get('https://api.guildwars2.com/v2/skins?ids=' + this.ownedskins.slice(index, indexEnd)).then(response => {
        this.skins.push(response.body)
        index = index + 200
      }, response => {
        // error callback
      })
    }
  }, response => {
      // error callback
  })
  },
  methods: {
    showArmadura: function () {
      this.showArmor = !this.showArmor
    },
    showArma: function () {
      this.showWeapon = !this.showWeapon
    },
    showRoupa: function () {
      this.showOutfit = !this.showOutfit
    }
  }
}
</script>

<style>
.armario {
  font-family: fantasy;
	font-size: 19px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 20.9px;
  color: #000000;
  background-image: url('../assets/wardrobe.jpg');
  background-position: fixed;
  background-repeat: round;
  background-size: auto;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
}

#janela {
  background-color: rgba(50, 50, 50, 0.25);
  margin-left: 15px;
  margin-top: 15px;
}

.icone {
  padding: 5px;
}

#listaArmario {
  list-style-type: none;
}

.itemArmario {
  width: 9%;
  float: left;
  padding: 5px;
  display: inline-block;
}

</style>
