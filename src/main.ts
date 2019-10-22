import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'es6-promise/auto'
import 'ant-design-vue/dist/antd.css'
import store from './store'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // tell the service worker to cache the second prior resources after the page load
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage('serviceWorker_loadResources')
    }
  })
}

new Vue({
  router,
  store,
  render: (h: any) => h(App),
}).$mount('#app')
