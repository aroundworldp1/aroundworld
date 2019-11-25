import Vue from 'vue'
import VueRouter from 'vue-router'
import region from '../views/region.vue'
import index from '../views/index.vue'
import spot from '../views/spot.vue'
import userinfo from '../views/userinfo.vue'
import article from '../views/article.vue'
import addcomment from '../views/addcomment.vue'
import addarticle from '../views/addarticle.vue'
import login from '../components/login.vue'
import insert from '../components/insert.vue'



Vue.use(VueRouter)

const routes = [

  {path:'/insert',component:insert},
  {path:'/login',component:login},
  {path:'/region',component:region},
  {path:'/article',component:article},
  {path:'/addarticle',component:addarticle},
  {path:'/index',component:index},
  {path:'/spot',component:spot},
  {path:'/addcomment',component:addcomment},
  {path:'/userinfo',component:userinfo},
]

const router = new VueRouter({
  routes
})

export default router
