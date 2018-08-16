<template>
  <div class="info-char">
    <b-container class="info-char-data">
      <b-row>
        <b-col cols="3">
          <h4>{{nome}}</h4>
          <h5><img v-bind:src="iconprofession" width="15%">{{char.profession}}</h5>

          <table>
            <tr>
              <td><img v-bind:src="iconPower" title="Power (Ataque)"></td>: {{attributes.Power}}
              <td><img v-bind:src="iconPrecision" title="Precision (Precisão)"></td>: {{attributes.Precision}}
            </tr>
            <tr>
              <td><img v-bind:src="iconToughness" title="Toughness (Resistência)"></td>: {{attributes.Toughness}}
              <td><img v-bind:src="iconVitality" title="Vitality (Vitalidade)"></td>: {{attributes.Vitality}}
            </tr>
            <tr>
              <td><img v-bind:src="iconConcentration" title="Concentration (Concentração)"></td>: {{attributes.Concentration}}
              <td><img v-bind:src="iconConditionDmg" title="Condition Damage (Dano de Condições)"></td>: {{attributes.ConditionDamage}}
            </tr>
            <tr>
              <td><img v-bind:src="iconConditionDur" title="Condition Duration (Duração de Condições)"></td>: {{attributes.ConditionDuration}}
              <td><img v-bind:src="iconFerocity" title="Ferocity (Ferocidade)"></td>: {{attributes.Ferocity}}
            </tr>
            <tr>
              <td><img v-bind:src="iconHealing" title="Healing Power (Poder de cura)"></td>: {{attributes.HealingPower}}
              <td><img v-bind:src="iconArmor" title="Armor (Armadura)"></td>: {{attributes.Armor}}
            </tr>
            <tr>
              <td><img v-bind:src="iconBoonDur" title="Boon Duration (Duração de beneficações)"></td>: {{attributes.BoonDuration}}
              <td><img v-bind:src="iconCriticalChc" title="Critical Chance (Chance de Crítico)"></td>: {{attributes.CritChance}}
            </tr>
            <tr>
              <td><img v-bind:src="iconCriticalDmg" title="Critical Damage (Dano Crítico)"></td>: {{attributes.CritDamage}}
              <td><img v-bind:src="iconHealth" title="Health (Saúde)"></td>: {{attributes.Health}}
            </tr>
          </table>
        </b-col>
        <b-col cols="1">
          <p><img v-bind:src="equip[4].icon"></p>
          <p><img v-bind:src="equip[6].icon"></p>
          <p><img v-bind:src="equip[1].icon"></p>
          <p><img v-bind:src="equip[3].icon"></p>
          <p><img v-bind:src="equip[5].icon"></p>
          <p><img v-bind:src="equip[2].icon"></p>

        </b-col>
        <b-col cols="2">
          <p><img v-bind:src="equip[13].icon"> <img v-bind:src="iconOff1"></p>
          <p><img src="../assets/swap.png"></p>
          <p><img v-bind:src="equip[14].icon"> <img v-bind:src="iconOff2"></p>
        </b-col>
        <b-col cols="3">
          <p><img v-bind:src="equip[0].icon"> <img v-bind:src="equip[7].icon"> <img v-bind:src="equip[8].icon"></p>
          <p><img v-bind:src="equip[11].icon"> <img v-bind:src="equip[9].icon"> <img v-bind:src="equip[10].icon"></p>
          <p><ul class="trait1">
            <li class="trait-icon"><img v-bind:src="iconTrait11"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait12"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait13"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait14"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait15"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait16"/></li>
          </ul></p>
          <p><ul class="trait2">
            <li class="trait-icon"><img v-bind:src="iconTrait21"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait22"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait23"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait24"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait25"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait26"/></li>
          </ul></p>
          <p><ul class="trait3">
            <li class="trait-icon"><img v-bind:src="iconTrait31"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait32"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait33"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait34"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait35"/></li>
            <li class="trait-icon"><img v-bind:src="iconTrait36"/></li>
          </ul></p>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import {parseCharacter} from 'gw2e-item-attributes'

var spec1 = document.getElementsByClassName('trait1')[0]
var spec2 = document.getElementsByClassName('trait2')[0]
var spec3 = document.getElementsByClassName('trait3')[0]

export default {
  name: 'info',
  data () {
    return {
      char: [],
      attributes: [],
      equip: [],
      nome: '',
      profession: [],

      iconprofession: '',
      iconPower: require('../assets/atributos/power.png'),
      iconPrecision: require('../assets/atributos/precision.png'),
      iconToughness: require('../assets/atributos/toughness.png'),
      iconVitality: require('../assets/atributos/vitality.png'),
      iconConcentration: require('../assets/atributos/boon_duration.png'),
      iconConditionDmg: require('../assets/atributos/condition_damage.png'),
      iconConditionDur: require('../assets/atributos/condition_duration.png'),
      iconFerocity: require('../assets/atributos/ferocity.png'),
      iconHealing: require('../assets/atributos/healing_power.png'),
      iconArmor: require('../assets/atributos/armor.png'),
      iconBoonDur: require('../assets/atributos/boon_duration.png'),
      iconCriticalChc: require('../assets/atributos/critical_chance.png'),
      iconCriticalDmg: require('../assets/atributos/critical_damage.png'),
      iconHealth: require('../assets/atributos/health.png'),

      iconTrait11: '',
      iconTrait12: '',
      iconTrait13: '',
      /* iconTrait14: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      iconTrait15: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      iconTrait16: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png', */
      iconTrait21: '',
      iconTrait22: '',
      iconTrait23: '',
      /* iconTrait24: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      iconTrait25: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      iconTrait26: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png', */
      iconTrait31: '',
      iconTrait32: '',
      iconTrait33: ''
      /* iconTrait34: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      iconTrait35: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png',
      iconTrait36: 'https://render.guildwars2.com/file/9352ED3244417304995F26CB01AE76BB7E547052/156661.png' */
      // msg: 'Componente de Teste!!!',
      // showDismissibleAlert: false
    }
  },
  mounted () {
    this.nome = this.$route.params.nome.replace('%20', ' ')
    this.$http.get('https://api.guildwars2.com/v2/characters/' + this.nome + '?access_token=9FFAAB07-FFC3-B942-A206-AB924A2E555E5D379892-1FCA-425D-AE2E-2741B50FFFF7'
  ).then(response => {
    this.char = response.body
    /* AQUI */
    this.$http.get('https://api.guildwars2.com/v2/specializations/' + this.char.specializations.pve[0].id
    // BACKGROUND SPECIALIZATION NÃO FUNCIONANDO
  ).then(response => {
    spec1.style.backgroundImage = 'url(' + response.body.background + ')'
  }, response => {
    // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/specializations/' + this.char.specializations.pve[1].id
  ).then(response => {
    spec2.style.backgroundImage = 'url(' + response.body.background + ')'
  }, response => {
    // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/specializations/' + this.char.specializations.pve[2].id
  ).then(response => {
    spec3.style.backgroundImage = 'url(' + response.body.background + ')'
  }, response => {
    // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/professions/' + this.char.profession
).then(response => {
  this.iconprofession = response.body.icon_big
}, response => {
  // error callback
})
  // TRAITS
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[0].traits[0]
  ).then(response => {
    this.iconTrait11 = response.body.icon
  }, response => {
    // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[0].traits[1]
  ).then(response => {
    this.iconTrait12 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[0].traits[2]
  ).then(response => {
    this.iconTrait13 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[1].traits[0]
  ).then(response => {
    this.iconTrait21 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[1].traits[1]
  ).then(response => {
    this.iconTrait22 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[1].traits[2]
  ).then(response => {
    this.iconTrait23 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[2].traits[0]
  ).then(response => {
    this.iconTrait31 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[2].traits[1]
  ).then(response => {
    this.iconTrait32 = response.body.icon
  }, response => {
  // error callback
  })
    this.$http.get('https://api.guildwars2.com/v2/traits/' + this.char.specializations.pve[2].traits[2]
  ).then(response => {
    this.iconTrait33 = response.body.icon
  }, response => {
  // error callback
  })
/* AQUI */

    this.attributes = parseCharacter(this.char.level, this.char.profession, this.char.equipment)
    this.$http.get('https://api.guildwars2.com/v2/items?ids=' + this.char.equipment[1].id + ',' +
      this.char.equipment[2].id + ',' +
      this.char.equipment[3].id + ',' +
      this.char.equipment[4].id + ',' +
      this.char.equipment[5].id + ',' +
      this.char.equipment[6].id + ',' +
      this.char.equipment[7].id + ',' +
      this.char.equipment[8].id + ',' +
      this.char.equipment[9].id + ',' +
      this.char.equipment[10].id + ',' +
      this.char.equipment[11].id + ',' +
      this.char.equipment[12].id + ',' +
      this.char.equipment[13].id + ',' +
      this.char.equipment[14].id + ',' +
      this.char.equipment[15].id + ',' +
      this.char.equipment[16].id + ',' +
      this.char.equipment[17].id
).then(response => {
  this.equip = response.body
}, response => {
    // error callback
})
  }, response => {
      // error callback
  })
  }
}
</script>

<style>

.info-char {
  text-align: left;
  background-image: url('../assets/professions/BGnecromancer.jpg');
  background-position: fixed;
  background-repeat: round;
  background-size: auto;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  color: #ffffff;
}

.info-char-data {
  margin-left: 10px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.25);
}

.trait-icon {
  display: inline-block;
  margin: 10px;
  align-items: middle;
  vertical-align: middle;
  padding-top: 38px;
}

.trait1 {
  text-align: right;
  overflow: hidden;
  list-style-type: none;
  height: 136px;
  width: 540px;

}

.trait2 {
  text-align: right;
  overflow: hidden;
  list-style-type: none;
  height: 136px;
  width: 540px;
}

.trait3{
  text-align: right;
  overflow: hidden;
  list-style-type: none;
  height: 136px;
  width: 540px;
}

#lista-char {
  font-size: 10px;
}


</style>
