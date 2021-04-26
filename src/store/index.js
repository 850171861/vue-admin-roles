import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: JSON.parse(window.sessionStorage.getItem('isLogin')) || false,
    menuRouter: JSON.parse(window.sessionStorage.getItem('menuRouter')) || [],
    roles: JSON.parse(window.sessionStorage.getItem('roles')) || ''
  },
  mutations: {
    setIsLogin (state, value) {
      window.sessionStorage.setItem('isLogin', JSON.stringify(value))
      state.isLogin = value
    },
    setMenuRouter (state, value) {
      window.sessionStorage.setItem('menuRouter', JSON.stringify(value))
      state.menuRouter = value
    },
    setRoles (state, value) {
      window.sessionStorage.setItem('roles', JSON.stringify(value))
      state.roles = value
    }
  },
  actions: {
  },
  modules: {
  }
})
