// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lodash from 'lodash';
window._ = lodash;
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype._ = lodash;
/* eslint-disable */
new Vue({
  el: '#app',
  router, // 把路由注入到根实例中，启动路由
  components: {
    App
  },
  template: '<App/>'
});
