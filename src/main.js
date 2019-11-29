import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { ValidationProvider } from 'vee-validate';
import VueMeta from 'vue-meta';
import VueBootstrapDatetimePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(VueMeta)
 
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueBootstrapDatetimePicker)

Vue.component('date-picker', VueBootstrapDatetimePicker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
