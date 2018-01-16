import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'

import translations from './i18n/translations.js'

import VueFlatpickr from 'vue-flatpickr'

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-exp.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import 'vue-flatpickr/theme/airbnb.css'

import operationsPlugin from 'store/plugins/operations'

import store from 'store'

store.addPlugin(operationsPlugin)

export const eventBus = new Vue()
export const localStore = store

Vue.use(VueI18n)
Vue.use(VueFlatpickr)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: translations // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
