import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Home = ()=>import('views/Home')
const Index = ()=>import('components/Index')

export default new Router({
  mode:"history",
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
  ]
})
