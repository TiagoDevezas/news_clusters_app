import Vue from 'vue'
import App from './App'
import router from './router'

import VueFlatpickr from 'vue-flatpickr'

import 'vue-flatpickr/theme/airbnb.css'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

import store from 'store'

export const eventBus = new Vue()
export const localStore = store

Vue.use(VueFlatpickr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
