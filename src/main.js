import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'
Vue.use(VueMoment);

import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant'
Vue.use(VueInstant)

// axios 글로벌 설정
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
