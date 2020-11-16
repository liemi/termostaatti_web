import Vue from 'vue'
import App from './App.vue'
import VueMqtt from 'vue-mqtt'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMqtt, 'ws://termostaatti.duckdns.org:12777/ws', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
