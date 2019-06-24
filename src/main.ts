import Vue from 'vue';
import Vuetify from 'vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.use(Vuetify)

// currency filter
Vue.filter('toCurrency', function (value: number) {
  if (typeof value !== "number") {
      return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
