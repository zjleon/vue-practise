import Vue from 'vue'
import Vuex from 'vuex'
import {HomeModule} from './Home'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    env: process.env.NODE_ENV,
    bmapKey: '8drjX1Gw29zdVH4qqniZEqW6fNqEu9xj',
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
  },
})
