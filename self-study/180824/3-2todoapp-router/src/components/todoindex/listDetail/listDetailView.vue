<template>
  <div id="listDetailView">
    <h2>detail List Component</h2>
    <a class="radioPager" href="#" @click.prevent="radioPagerFunc">All</a>
    <a class="radioPager" href="#" @click.prevent="radioPagerFunc">0</a>
    <a class="radioPager" href="#" @click.prevent="radioPagerFunc">1</a>
    <a class="radioPager" href="#" @click.prevent="radioPagerFunc">2</a>
    <ul>
      <li v-for="(con) in listDetailTodo" :key="con.k">{{con.val.score}}.{{con.val.inputVal}}
        <button @click="removeTodo(con)">x</button>
      </li>
    </ul>
    <button v-show="view" @click="clearAll">clearAll</button>
  </div>
</template>

<script>
import { setTodoItems, removeTodo, clearAll } from "../setting/settodo.js";
export default {
  name: "listDetailView",
  data() {
    return {
      todoItems: [],
      viewtodoItems: [],
      view: true,
      todoCount: "All"
    };
  },
  created() {
    this.setTodoItems();
    this.viewtodoItems = this.todoItems;
  },
  computed: {
    listDetailTodo: {
      get() {
        return this.viewtodoItems;
      },
      set(newValue) {
        if (newValue === "All") {
          this.view = true;
          return (this.viewtodoItems = this.todoItems);
        } else {
          this.view = false;
          var arr = this.todoItems.filter(item => {
            return item.val.score === parseInt(newValue);
          });
          return (this.viewtodoItems = arr);
        }
      }
    }
  },
  methods: {
    setTodoItems,
    removeTodo,
    clearAll,
    radioPagerFunc(e) {
      this.todoCount = e.target.innerText;
      if (e.target.innerText === "All") {
        this.listDetailTodo = "All";
      } else {
        this.listDetailTodo = parseInt(event.target.innerText);
      }
    }
  }
};
</script>

<style scoped>
.active {
  background: red;
}
#listDetailView {
  height: 100%;
  background: orange;
}
li {
  display: block;
  min-height: 20px;
  list-style: none;
  border-bottom: 1px solid black;
}
.radioPager {
  margin-right: 10px;
}
li button {
  float: right;
}
</style>
