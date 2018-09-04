import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoItems: []
  },
  actions: {
    addTodo(store, newTodoItem) {
      store.commit('addTodo', newTodoItem)
    }
  },
  mutations: {
    addTodo(state, payload) {
      localStorage.setItem(payload, payload);
      state.todoItems.push(payload);
    }
  }
})

export default store
