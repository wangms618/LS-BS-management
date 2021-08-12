import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assignments: {
      plan: '',
      pushDate:'',
    }
  },
  mutations: {
    onChange(state,obj) {
      state.assignments = obj
    }
  },
  actions: {
  },
  modules: {
  }
})
