import Vue from 'vue'
import Router from 'vue-router'
import MainView from 'views/MainView'
import AtomView from 'views/AtomView'
import LSHView from 'views/LSHView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/atom',
      name: 'AtomView',
      component: AtomView
    },
    {
      path: '/lsh',
      name: 'LSHView',
      component: LSHView
    }
  ]
})
