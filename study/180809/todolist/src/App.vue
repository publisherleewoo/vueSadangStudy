<template>
  <div id="abc">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-on:deleteTodo="deleteTodo" v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "todoapp",
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    delete localStorage['loglevel:webpack-dev-server']
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo(value) {
      localStorage.setItem(value, value);
      this.todoItems.push(value);
    },
    deleteTodo(value, index) {
      localStorage.removeItem(value);
      this.todoItems.splice(index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItem = [];
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
