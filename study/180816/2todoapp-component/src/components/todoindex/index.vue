<template>
    <section class="wrap">
        <todoHeader></todoHeader>
        <todoInput @emitAddTodo="appTodo"></todoInput>
        <todoList :propsdata="todoItems" @emitRemoveTodo="removeTodo" @emitChangeComponent="emitChangeComponent"></todoList>
        <todoFooter @emitClearAll="clearAll"></todoFooter>
    </section>
</template>

<script>
import todoHeader from "./todoHeader.vue";
import todoInput from "./todoInput.vue";
import todoList from "./todoList.vue";
import todoFooter from "./todoFooter.vue";

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
    setTodoItems() {
      delete localStorage["loglevel:webpack-dev-server"];
      var len = localStorage.length;
      for (var i = 0; i < len; i++) {
        var value = localStorage[localStorage.key(i)];
        this.todoItems.push({ k: localStorage.key(i), val:value });
      }
    },
    appTodo(val) {
      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
      var dateNow = Date.now().toString();
      this.todoItems.push({ k: dateNow, val: val });
      localStorage.setItem(dateNow, val);
    },
    removeTodo(item) {
      var keyVal = item.k;
      var todoItems = this.todoItems;

      todoItems.forEach(function(item, index) {
        if (keyVal === item.k) {
          todoItems.splice(index, 1);
        }
      });

      localStorage.removeItem(keyVal);
    },
    emitChangeComponent(val){
      this.$emit('emitChangeComponent',val)
    },
    clearAll() {
      this.todoItems = [];
      localStorage.clear();
    }
  }
};
</script>
