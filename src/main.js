import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = axios

import VCalendar from 'v-calendar';
import router from './router'

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
