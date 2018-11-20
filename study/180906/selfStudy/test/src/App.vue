<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addTodoItem="addOneItem"></TodoInput>
    <TodoList :propsdata="todoItems" 
    @removeItem="remoevOneItem" 
    @toggleItem="toggleOneItem"></TodoList>
    <TodoFooter @clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data(){
    return {
      todoItems:[]
    }
  },
  methods:{
    addOneItem(todoItem){
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj)
    },
    remoevOneItem(todoItem,index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem,index){
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      this.todoItems[index].completed = !this.todoItems[index].completed;
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems=[];
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(obj);
        }
      }
    }
  },
  components: { TodoHeader, TodoInput, TodoList, TodoFooter }
};
</script>

<style>
body {
  text-align: center;
  background: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
