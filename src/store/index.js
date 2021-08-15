import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // assignments: {
    //   plan: '',
    //   pushDate:'',
    // }
    assignments: ''
  },
  mutations: {
    changeAssignment(state, obj) {
      state.assignments = obj
      console.log('修改成功',obj.code);
    }
  },
  actions: {

  },
  getters: {
    getTitle: assignments => assignments.plan,
    getDesc: assignments => assignments.pushDate
  },
  modules: {}
})