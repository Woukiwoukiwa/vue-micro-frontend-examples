import Vue from 'vue'
import Router from 'vue-router'
import HomeJS from './views/HomeJS.vue'
import HomeTS from './views/HomeTS.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homeJS',
      component: HomeJS
    },
    {
      path: '/homeTS',
      name: 'homeTS',
      component: HomeTS
    }
  ]
})
