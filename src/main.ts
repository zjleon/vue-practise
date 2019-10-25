import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'es6-promise/auto'
import store from './store'
import vuetify from '@/vuetify'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // tell the service worker to cache the second prior resources after the page load
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage('serviceWorker_loadResources')
    }
  })
}

new Vue({
  vuetify,
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app')
