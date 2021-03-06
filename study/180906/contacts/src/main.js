import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

Vue.prototype.$axios = axios

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
