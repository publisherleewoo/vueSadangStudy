<template>
    <div id="listDetailUpdate">
        <input type="text" v-model="todoItem.val">

        <button v-if="flag" @click="update">수정</button>

        <button v-if="!flag" @click="addTodo">입력</button>

        <button @click="gotoIndex">뒤로</button>
    </div>
</template>

<script>
export default {
  name: "listDetailUpdate",
  props: {
    propsUpdateData: Object,
    flag: Boolean
  },
  data() {
    return {
      todoItem: this.propsUpdateData
    };
  },

  methods: {
    update() {
      var todoItem = this.todoItem;
      localStorage.setItem(todoItem.k, todoItem.val);
    },
    addTodo() {
      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
      var dateNow = Date.now().toString();
      var todoItem = this.todoItem;
      localStorage.setItem(dateNow, todoItem.val);
    },
    gotoIndex() {
      this.$emit('emitGotoIndex')
    }
  }
};
</script>


<style scoped>
#listDetailUpdate {
  float: left;
  height: 100%;
  background: red;
}
</style>
