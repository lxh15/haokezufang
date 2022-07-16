import Vue from 'vue'
import Vuex from 'vuex'
// import '@/assets/imgs/banner.png'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('token')) || {} // 获取toke
  },
  getters: {},
  mutations: {
    setUser (state, user) {
      state.user = user
      window.localStorage.setItem('token', JSON.stringify(state.user)) // 保存token到Vuex
    }
  },
  actions: {},
  modules: {}
})
