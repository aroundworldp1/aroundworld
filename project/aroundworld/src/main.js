import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/header'
import lunbo from './components/lunbo'
import lunbo2 from './components/lunbo2'
import footer from './components/footer'
import mokuai from './components/mokuai'
import mokuai2 from './components/mokuai2'
import pubu from './components/pubu'
import pubu2 from './components/pubu2'
import detail from './components/detail'
import tanchu from './components/tanchu'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './common/font/font.css'
axios.defaults.baseURL="http://127.0.0.1:3000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios

Vue.component('my-header',header);
Vue.component('lunbo',lunbo);
Vue.component('lunbo2',lunbo2);
Vue.component('my-footer',footer);
Vue.component('mokuai',mokuai);
Vue.component('mokuai2',mokuai2);
Vue.component('pubu',pubu);
Vue.component('pubu2',pubu2);
Vue.component('detail',detail);
Vue.component('tanchu',tanchu);

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
