import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Router from 'vue-router';
import router from './router/index';

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
