import Vue from 'vue'
import VueRouter from 'vue-router'
import region from '../views/region.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/region',component:region},
]

const router = new VueRouter({
  routes
})

export default router
