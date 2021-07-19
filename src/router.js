import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Orthogonal = ()=>import('components/Orthogonal')
const Monitor = ()=>import('components/docsComponents/Monitor')
const RedisOption = ()=>import('components/redisComponents/RedisOption')
const Transform = ()=>import('components/Transform')
const BatchRegister =()=> import('components/BatchRegister')

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
     {
      path: '/redisOption',
      name: 'redisOption',
      component: RedisOption
    },
    {
      path: '/transform',
      name: 'transform',
      component: Transform
    },
    {
      path: '/batchRegister',
      name: 'batchRegister',
      component: BatchRegister
    },

  ]
})
