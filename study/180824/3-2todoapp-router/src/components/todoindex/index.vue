<template>
  <section class="wrap">
    <todoHeader></todoHeader>
    <todoInput @emitAddTodo="addTodo"></todoInput>
    <todoList :propsdata="todoItems" @emitRemoveTodo="removeTodo"></todoList>
    <todoFooter @emitClearAll="clearAll"></todoFooter>
  </section>
</template>

<script>
import todoHeader from "./todoHeader.vue";
import todoInput from "./todoInput.vue";
import todoList from "./todoList.vue";
import todoFooter from "./todoFooter.vue";
import {setTodoItems,addTodo,removeTodo,clearAll} from "./setting/settodo.js";
export default {
  name: "index",
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    this.setTodoItems();
  },
  components: {
    todoHeader,
    todoInput,
    todoList,
    todoFooter
  },
  methods: {
    setTodoItems,
    addTodo,
    removeTodo,
    clearAll
  }
};
</script>
