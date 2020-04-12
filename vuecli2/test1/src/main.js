// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//liangxifeng 引入axios组件负责读取json
import axios from 'axios'

//设置全局vue属性$http=axios
Vue.prototype.$http = axios
//部署到服务器上的二级目录名,访问方式: http://domain/lxftest
Vue.prototype.$subDir = '/lxftest'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
