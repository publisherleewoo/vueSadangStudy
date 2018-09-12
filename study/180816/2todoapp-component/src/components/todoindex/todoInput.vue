<template>
    <div>
        <input type="text" v-model.trim="inputVal" @keyup.enter="inputAddTodo">
        <button @click="inputAddTodo">추가</button>
    </div>
</template>

<script>
export default {
  name: "todoInput",
  data() {
    return { inputVal: "" };
  },
  methods: {
    inputAddTodo() {
      this.$emit("emitAddTodo", this.inputVal);
      this.inputVal="";
      document.getElementsByTagName('input')[0].focus();
    }
  }
};
</script>
