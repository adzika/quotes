import Vue from 'vue'
import App from './App.vue'
import ReadyQuote from './components/ReadyQuote.vue';
import QuoteMaker from './components/QuoteMaker.vue';

Vue.component('app-quote-maker', 'app-ready-quote');

new Vue({
  el: '#app',
  render: h => h(App)
})
