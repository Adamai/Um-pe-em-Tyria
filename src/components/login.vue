<template>
<div class="login">
  <b-container class="login-data">
    <b-row>
      <b-col cols="2">
      </b-col>
      <b-col cols="8" id="caixa">
  <h4>Entrar</h4>
  <p>Email:<b-form-input type="email" v-model="email"></b-form-input></p>
  <p>Senha:<b-form-input type="password" v-model="password"></b-form-input></p>
  <p><b-button variant='success' href="#/login">Login</b-button>
     <b-button variant='danger'>Esqueci minha senha</b-button></p>
  <p><b-button variant='alert'>Primeira vez</b-button></p>
  </b-col>
  <b-col cols="2">
  </b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // msg: 'Componente de Teste!!!',
      // showDismissibleAlert: false
    }
  }
}
</script>

<style>
.login {
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

.login-data {
  margin-left: 10px;
  margin-top: 10px;
}

#caixa {
  background-color: rgba(0, 0, 0, 0.15);

}

</style>
