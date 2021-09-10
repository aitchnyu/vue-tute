import Vue from 'vue'
import App from './components/App.vue'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false

console.log('Testing the sourcemap')

new Vue({
  render: h => h(App)
}).$mount('#app')

window.helloworld = function (id, name, greeting = 'Hello') {
  new Vue({
    render: h => h(HelloWorld, { props: { name, greeting } })
  }).$mount(id)
}
