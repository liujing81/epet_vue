import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/MockServer'

console.log(store)
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,
})
