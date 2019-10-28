import Vue from 'vue'
import Vuex from 'vuex'
import {HomeModule} from './Home'
import {BMapModule} from './BMap'
import {SearchModule} from './Search'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    env: process.env.NODE_ENV,
    title: 'jerome tesing',
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home: HomeModule,
    bMap: BMapModule,
    search: SearchModule,
  },
})
