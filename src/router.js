import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Orthogonal = ()=>import('components/Orthogonal')
const Monitor = ()=>import('components/docsComponents/Monitor')

export default new Router({
  mode:"history",
  routes: [
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/orthogonal',
      name: 'Index',
      component: Orthogonal
    },
     {
      path: '/monitor',
      name: 'monitor',
      component: Monitor
    },
  ]
})
