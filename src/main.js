import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = axios

import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {});

Vue.use(Vuelidate)


//navigation routes
const routes = {
}


new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
