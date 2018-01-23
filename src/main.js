// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/smartadmin/scss/bootstrap.scss'
import './assets/smartadmin/css/font-awesome.min.css'
import './assets/smartadmin/scss/smartadmin-production-plugins.scss'
import './assets/smartadmin/scss/smartadmin-production.scss'
import './assets/smartadmin/scss/smartadmin-skins.scss'
import 'fastclick'
import 'jquery'
import 'bootstrap'
import 'babel-polyfill'
import SmartConfig from './assets/smartadmin/config/config'
import store from './store';

window.SMARTADMIN_GLOBALS = SmartConfig
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
