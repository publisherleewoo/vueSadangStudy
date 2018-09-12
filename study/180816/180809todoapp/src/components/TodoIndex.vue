<template>
  <div id="innerWrap">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-on:deleteTodo="deleteTodo" v-bind:propsdata="todoItems"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import viewData from "./data/data.js";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export default {
  name: "todoapp",
  data() {
    return {
      todoItems: "",
      index: 0
    };
  },
  created() {
    function copyObj(obj) {
      var copy = {};
      if (typeof obj === "object" && obj !== null) {
        for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = copyObj(obj[attr]);
          }
        }
      } else {
        copy = obj;
      }
      return copy;
    }

    const localStorageCopy = copyObj(localStorage);
    delete localStorageCopy["loglevel:webpack-dev-server"];
    let viewData = [];

    for (var keys in localStorageCopy) {
      var key = JSON.parse(localStorageCopy[keys]);
      var value = key.value;
      var index = key.index;
      viewData.push({
        value: value,
        index: index
      });
    }

    viewData.sort(function(a, b) {
      return a.index - b.index;
    });

    this.todoItems = viewData;
    this.index = viewData.length;

    alert('진행 테스트시 locaStorage.clear() 사용후 진행')
  },
  methods: {
    addTodo(val) {
      if (localStorage[val]) {
        alert("이미 같은값이 있습니다");
        return false;
      }
      var resultval = JSON.stringify({ index: this.index, value: val });
      localStorage.setItem(val, resultval);
      this.todoItems.push({ index: this.index, value: val });
      this.index++;
    },
    deleteTodo(val, vindex) {
      localStorage.removeItem(val.value);
      this.todoItems.splice(vindex, 1);
      this.localStorageSortFunc();
      this.index--;
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
      this.index = 0;
    },

    localStorageSortFunc() {
      delete localStorage["loglevel:webpack-dev-server"];
      for (var i = 0; i < localStorage.length; i++) {
        var str = localStorage[localStorage.key(i)];
        var changeIndex = str.replace(/\d+/, i);
        localStorage.setItem(localStorage.key(i), changeIndex);
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
#innerWrap {
  height: 100%;
}
button:hover {
  color: red;
  cursor: pointer;
}
</style>
