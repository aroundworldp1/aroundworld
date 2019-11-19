import Vue from 'vue'
import VueRouter from 'vue-router'
import region from '../views/region.vue'
import spot from '../views/spot.vue'
import login from '../components/login.vue'
import insert from '../components/insert.vue'


Vue.use(VueRouter)

const routes = [

  {path:'/insert',component:insert},
  {path:'/login',component:login},
  {path:'/region',component:region},
  {path:'/spot',component:spot},
]

const router = new VueRouter({
  routes
})

export default router
