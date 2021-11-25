import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import getters from "@/store/getters";
import actions from "@/store/actions";


Vue.use(Vuex)
const state = {
  chackk:true
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
