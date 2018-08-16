<template>
<div class="conquistas">
<b-container id="janelaConquistas">
<b-row>
  <b-col cols="3" class="abaLista">
    <ul id="listaConquistas">
      <li class="itemConquista" v-for="conq in conqs">
        <b-button v-if="conq.completo == 'Sim'" class="listaButton" variant="outline-warning" v-on:click="exibirConq(conq.requerimento,conq.recompensas,conq.completo)">{{conq.nome}}</b-button>
        <b-button v-else class="listaButton" variant="outline-danger" v-on:click="exibirConq(conq.requerimento,conq.recompensas,conq.completo)">{{conq.nome}}</b-button>
      </li>
    </ul>
  </b-col>
  <b-col class="descricaoConq">
      <p>Pré-requisitos: {{conquista.requerimento}}</p>
      <p>Recompensas: {{conquista.recompensas}}</p>
      <p>Completo: {{conquista.completo}}</p>
  </b-col>
</b-row>
</b-container>
</div>
</template>

<script>
export default {
  name: 'conquistas',
  data () {
    return {
      conquista: {requerimento: '', recompensa: '', completo: ''},
      conqs: [
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'},
        {nome: 'Daily Kryta Vista Viewer', requerimento: 'View a vista in one of the following Kryta maps: Queensdale, Kessex Hills, Gendarran Fields, Harathi Hinterlands, Bloodtide Coast, and Southsun Cove.', recompensas: 'Item(id)', completo: 'Ainda não :('},
        {nome: 'Tequatl the Sunless', requerimento: 'Complete Tequatl Achievments', recompensas: 'Mastery(id) and Title(id)', completo: 'Sim'}
      ]
      // msg: 'Componente de Teste!!!',
      // showDismissibleAlert: false
    }
  },
  methods: {
    exibirConq: function (requerimento, recompensa, completo) {
      this.conquista.requerimento = requerimento
      this.conquista.recompensas = recompensa
      this.conquista.completo = completo
    }
  }
}

</script>

<style>
.conquistas {
    font-family: fantasy;
  	font-size: 19px;
  	font-style: normal;
  	font-variant: normal;
  	font-weight: 400;
  	line-height: 20.9px;
    color: #FFFFFF;
    background-image: url('../assets/achievements.jpg');
    background-position: fixed;
    background-repeat: round;
    background-size: fixed;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    background-attachment: fixed;
    position: fixed;
}

#janelaConquistas {
  background-color: rgba(0, 0, 0, 0.70);
  margin-left: 15px;
  margin-top: 15px;
  text-align: left;
}

.descricaoConq {
  background-color: rgba(0, 0, 0, 0.3);
}

#listaConquistas{
  list-style-type: none;
}

.listaButton{

}

.itemConquista {
  padding: 3px;
}

.abaLista {
  overflow-y: scroll;
  height: 570px;
}

</style>
