import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VMicroFrontend  from 'vue-micro-frontend'

Vue.config.productionTip = false

Vue.use(VMicroFrontend);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
