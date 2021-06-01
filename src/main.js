import Vue from 'vue'
import App from './App.vue'
import excel from 'vue-json-excel'

Vue.use(excel)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
