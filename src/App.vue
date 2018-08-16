<template>
<div id="app">
  <!--<img src="./assets/logo.png">
    <router-view></router-view>-->
  <div>

    <b-nav class="fixed-top navbar">
      <b-nav-item href="#/"><img src="./assets/upet.png" title="Um pé em Tyria"></b-nav-item>
      <b-nav-item-dropdown text="Logado como: (usuário)" right class="ml-auto">
        <b-dropdown-item>Sair</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>

  </div>
  <div class="sidebar">
    <ul class="list-unstyled" id="sidebar-menu">
      <li class="sidebar-item"><b-navbar-toggle target="lista-personagens">Personagens</b-navbar-toggle></li>
        <!-- COLLAPSE FUNCIONANDO -->
        <b-collapse is-nav id="lista-personagens">
      <ul class="list-unstyled">
        <li v-for="char in chars">
          <router-link :to="{ name: 'info', params: { nome: char } }" class="sidebar-link">{{char}}</router-link>
        </li>
      </ul>
    </b-collapse>
      <li class="sidebar-item"><a class="sidebar-link" href="#/conquistas">Conquistas</a></li>
      <li class="sidebar-item"><a class="sidebar-link" href="#/armario">Armário</a></li>
      <li class="sidebar-item"><a class="sidebar-link" href="#/carteira">Carteira</a></li>
    </ul>
  </div>

<router-view class="conteudo"></router-view>


</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      chars: []
    }
  },
  mounted () {
    this.$http.get('https://api.guildwars2.com/v2/characters?access_token=9FFAAB07-FFC3-B942-A206-AB924A2E555E5D379892-1FCA-425D-AE2E-2741B50FFFF7'
  ).then(response => {
    this.chars = response.body
  }, response => {
      // error callback
  })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /webkit-font-smoothing: antialiased;
  /moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 0px;
  padding-top: 50px;

}

.sidebar {
  position: fixed;
  width: 200px;
  height: 100vh;
  padding: 15px;
  background-color: #e80000;
  color: #ffffff;
}

#sidebar-menu {
  font-weight: 400;
  color: #fff;
  text-align: left;
}

.sidebar-item {
  font-family: monospace;
  font-size: 23px;
}

.sidebar-link {
  color: #ffffff;
}

.navbar {
  background-color: #e80000;
  color: #ffffff;
  height: 50px
}

.info-data {

}

.conteudo{
  margin-left: 200px;
}

body, html{
  height: 100%;
}

</style>
