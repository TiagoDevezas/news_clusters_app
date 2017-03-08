import Vue from 'vue'
import App from './App'
import router from './router'

import VueFlatpickr from 'vue-flatpickr'

import 'vue-flatpickr/theme/airbnb.css'
import 'spectre.css/dist/spectre.min.css'

export const eventBus = new Vue()

Vue.use(VueFlatpickr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
