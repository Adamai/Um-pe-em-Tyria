<template>
<div class="info-home">
<b-container class="info-home-data">
  <b-row>
    <b-col cols="2">
    </b-col>
    <b-col cols="8" id="caixa">
      <h2>Bem vindo ao GW2: Pé em Tyria</h2>
<h5>Insira a sua chave de API ou faça login para continuar</h5>
<p><b-button variant='danger' href="#/login">Login</b-button></p>
<p><b-button variant='danger'>Utilizar Chave</b-button></p>
<p><b-form-input v-model="chave" placeholder="Chave"></b-form-input></p>
</b-col>
<b-col cols="2">
</b-col>
</b-row>
</b-container>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      // msg: 'Componente de Teste!!!',
      // showDismissibleAlert: false
    }
  }
}
</script>

<style>
.info-home {
  text-align: left;
  background-image: url('../assets/home.jpg');
  background-position: fixed;
  background-repeat: round;
  background-size: auto;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  color: #000;
}

.info-home-data {
  margin-left: 10px;
  margin-top: 10px;
}

#caixa {
  background-color: rgba(0, 0, 0, 0.15);

}

</style>
