<template>
<div class="logado">
  <b-container class="login-data">
    <b-row>
      <b-col cols="2">
      </b-col>
      <b-col cols="8" id="caixa">
  <h4>Logado como:</h4>
  <p>Id: {{id}}</p>
  <p>Email: {{user.email}}</p>
  <p>Nickname: {{user.nickname}}</p>
  <p>API-KEY: {{user.key}}</p>
  </b-col>
  <b-col cols="2">
  </b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>

export default {
  name: 'logado',
  data () {
    return {
      id: '',
      user: []
    }
  },
  mounted () {
    this.$http.get('http://localhost:9090/user/' + this.id
  ).then(response => {
    this.user = response.body
  }, response => {
      // error callback
  })
  }
}
</script>

<style>

.logado {
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
