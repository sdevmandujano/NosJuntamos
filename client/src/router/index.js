import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CreateEvent from '@/components/CreateEvent'
import GetEvent from '@/components/GetEvent'
import Vota from '@/components/Vota'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/event',
      name: 'CreateEvent',
      component: CreateEvent
    },
    {
      path: '/event/:id',
      name: 'GetEvent',
      component: GetEvent
    },
    {
      path: '/vota',
      name: 'vota',
      component: Vota
    }
  ]
})
