import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false


import VCalendar from 'v-calendar';


// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {});

new Vue({

  render: h => h(App),
}).$mount('#app')
