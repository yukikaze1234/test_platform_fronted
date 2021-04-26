import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = ()=>import('views/Home')
const Orthogonal = ()=>import('components/Orthogonal')

export default new Router({
  mode:"history",
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/orthogonal',
      name: 'Index',
      component: Orthogonal
    },
  ]
})
