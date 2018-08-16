import Vue from 'vue'
import Router from 'vue-router'
import info from '@/components/info'
import conquistas from '@/components/conquistas'
import armario from '@/components/armario'
import carteira from '@/components/carteira'
import login from '@/components/login'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/info/:nome',
      name: 'info',
      component: info
    },
    {
      path: '/conquistas',
      name: 'conquistas',
      component: conquistas
    },
    {
      path: '/armario',
      name: 'armario',
      component: armario
    },
    {
      path: '/carteira',
      name: 'carteira',
      component: carteira
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
