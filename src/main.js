import Vue from 'vue'
import Buefy from 'buefy'
import VueCompositionApi from "@vue/composition-api";


import App from './App.vue'

import '@/assets/styles/main.scss'


Vue.use(Buefy)
Vue.use(VueCompositionApi);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
