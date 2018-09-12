<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="Type what you have to do">
        <button v-on:click="addTodo">추가</button>
       
    </div>
</template>


<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo',value);
        this.clearInput();
      }
    },
    clearInput(){
        this.newTodoItem="";
    }
  }
};
</script>

<style>
</style>
