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
    },
    removeTodo(store,payload){
      store.commit('removeTodo',payload)
    },
    removeAll(store){
      store.commit('removeAll')  
    }
  },
  mutations: {
    addTodo(state, payload) {
      localStorage.setItem(payload, payload);
      state.todoItems.push(payload);
    },
    removeTodo(state,payload){
      localStorage.removeItem(payload.todoItem);
      state.todoItems.splice(payload.index, 1);
    },
    removeAll(state){
      localStorage.clear();
      state.todoItems = [];
    }
  }
})

export default store
