import Vue from 'vue'
import App from './App'
import router from './router'

import VueFlatpickr from 'vue-flatpickr'
import 'vue-flatpickr/theme/airbnb.css'

Vue.use(VueFlatpickr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
