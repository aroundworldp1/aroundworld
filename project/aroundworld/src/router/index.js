import Vue from 'vue'
import VueRouter from 'vue-router'
import region from '../views/region.vue'
import login from '../components/login.vue'
import insert from '../components/insert.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/insert',component:insert},
  {path:'/login',component:login},
  {path:'/region',component:region},
]

const router = new VueRouter({
  routes
})

export default router
