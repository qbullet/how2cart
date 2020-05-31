import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import cartModule from './modules/cart'

Vue.use(Vuex)
let vuexLocal = null
if (process.browser) {
  vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })
}

const store = () => {
  return new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      Cart: cartModule
    },
    plugins: process.browser ? [vuexLocal.plugin] : []
  })
}
export default store
