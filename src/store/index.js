import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: JSON.parse(window.sessionStorage.getItem("isLogin")) || false,
    menuRouter: JSON.parse(window.sessionStorage.getItem("menuRouter")) || [],
    router: JSON.parse(window.sessionStorage.getItem("router")) || []
  },
  mutations: {
    setIsLogin(state, value) {
      window.sessionStorage.setItem("isLogin", JSON.stringify(value));
      state.isLogin = value
    },
    setMenuRouter(state, value) {
      window.sessionStorage.setItem("menuRouter", JSON.stringify(value));
      state.menuRouter = value
    },
    setRouter(state, value) {
      // window.sessionStorage.setItem("router", JSON.stringify(value));
      state.router = value
    }
  },
  actions: {
  },
  modules: {
  }
})
