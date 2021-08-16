import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assignments: '',
    books: '',
    notification:''
  },
  mutations: {
    changeAssignment(state, obj) {
      state.assignments = obj;
      console.log('修改成功',obj.code);
    },
    changeBooks(state,obj) {
      state.books = obj;
      console.log('修改成功',obj);
    },
    changeNotification(state,obj) {
      state.notification = obj;
      console.log('修改成功',obj);
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