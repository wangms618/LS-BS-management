import * as types from './types'
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
    [types.CHANGE_ASSIGNMENTS](state, obj) {
      state.assignments = obj;
      console.log('修改任务',obj.code);
    },
    [types.CHANGE_BOOKS](state,obj) {
      state.books = obj;
      console.log('修改书籍',state.books);
    },
    [types.CHANGE_NOTIFICATION](state,obj) {
      state.notification = obj;
      console.log('修改公告',obj);
    },
    // 清空输入栏，原因：点击修改后输入栏会保存之前输入栏的内容
    clearAssignments(state) {
      if (state.assignments) {
        state.assignments=''
      }
    },
    clearBooks(state) {
      if (state.books) {
        state.books=''
      }
    },
    clearNotification(state) {
      if (state.notification) {
        state.notification=''
      }
    }
  },
  actions: {
    changeAM({commit},obj) {
      commit(types.CHANGE_ASSIGNMENTS,obj)
    },
    changeBK({commit},obj) {
      commit(types.CHANGE_BOOKS,obj)
    },
    changeNC({commit},obj) {
      commit(types.CHANGE_NOTIFICATION,obj)
    },
  },
  getters: {

  },
  modules: {
  }
})