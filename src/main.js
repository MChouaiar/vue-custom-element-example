/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
*/
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App.vue';

const CustomElement = wrap(Vue, App);

window.customElements.define('custom-element', CustomElement);