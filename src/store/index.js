import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    email: null,
    password: null
  },

  mutations: {
    registerEmail(store, email){
      store.email = email;
    },
    registerPassword(store, password){
      store.password = password
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ]
})
