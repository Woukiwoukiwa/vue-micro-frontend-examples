import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VMicroFrontend from 'vue-micro-frontend';

Vue.config.productionTip = false;

Vue.use(VMicroFrontend);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
