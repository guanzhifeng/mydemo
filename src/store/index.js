import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname:'张三',
    chackk:true
  },
  mutations: {
    setNickName(state){
      state.chackk = !state.chackk;
      state.nickname = state.chackk? '李四':'张三';
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    username(state){
      return state.nickname+'真牛逼';
    }
  }
})
