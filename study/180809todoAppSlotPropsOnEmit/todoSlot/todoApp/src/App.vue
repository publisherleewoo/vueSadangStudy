<template>
  <div id="app">
    <todoheader></todoheader>
    <todoinput v-on:addTodo="addTodo"></todoinput>
    <todolist :todoitems="todoitems" @deleteTodo="deleteTodo"></todolist>
    <todofooter v-on:clearAll="clearAll"></todofooter>
  </div>
</template>

<script>
import todoheader from "./components/todoheader";
import todoinput from "./components/todoinput";
import todolist from "./components/todolist";
import todofooter from "./components/todofooter";

export default {
  name: "app",
  data() {
    return {
      todoitems: []
    };
  },
  created() {
    delete localStorage['loglevel:webpack-dev-server'] 
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoitems.push(localStorage.key(i));
      }
    }
    console.log(this.todoitems);
  },
  components: {
    todoheader,
    todoinput,
    todolist,
    todofooter
  },
  methods:{
    addTodo(value){
      console.log(value)
      if(localStorage[value]===value){
        alert('같은 값이 있습니다')
        return false;
      }
      this.todoitems.push(value)
      localStorage.setItem(value,value)
    },
    deleteTodo(todoitem,index){
      localStorage.removeItem(todoitem)
      this.todoitems.splice(index,1)
     
    },
    clearAll(){
      this.todoitems="";
      localStorage.clear()
    }
  }
};
</script>

<style>
</style>
