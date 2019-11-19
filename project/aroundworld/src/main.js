import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/header'
import lunbo from './components/lunbo'
import footer from './components/footer'
import mokuai from './components/mokuai'
import pubu from './components/pubu'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:3000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios

Vue.component('my-header',header);
Vue.component('lunbo',lunbo);
Vue.component('my-footer',footer);
Vue.component('mokuai',mokuai);
Vue.component('pubu',pubu);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
