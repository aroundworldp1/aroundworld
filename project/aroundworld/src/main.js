import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/header'
import lunbo from './components/lunbo'



Vue.component('my-header',header);
Vue.component('lunbo',lunbo);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
