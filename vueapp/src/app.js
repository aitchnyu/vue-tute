import Vue from 'vue'
import App from './components/App.vue'

Vue.config.productionTip = false

console.log('Testing the sourcemap')

new Vue({
  render: h => h(App)
}).$mount('#app')
