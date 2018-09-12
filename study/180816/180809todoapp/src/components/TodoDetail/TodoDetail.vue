<template>
  <div class="wrap">
    <div class="le">
      <textarea v-model="changeValue" rows="20" cols="30" required></textarea>
      <p>
        <!-- <input type="radio" id="impt2" name="impt" value="2">
        <label for="impt2">중요</label>
        <input type="radio" id="impt1" name="impt" value="1">
        <label for="impt1">보통</label>
        <input type="radio" id="impt0" name="impt" value="0">
        <label for="impt0">안중요</label> -->
      </p>
      <p>
        <button @click="update()">수정</button>
        <button @click="backLink()">뒤로</button>
      </p>
    </div>
    <div>

    </div>
  </div>
</template>


<script>
 
export default {
  name: "TodoDetail",
  data() {
    return {
      changeValue: "",
      currentValue: "",
      index: 0
    };
  },
  created() {
    this.index = this.$route.params.index;
    this.currentValue = this.$route.params.todoItem.value;
    this.changeValue = this.$route.params.todoItem.value;
  },
  methods: {
    backLink() {
      this.$router.go(-1);
    },
    update() {  
      console.log('수신인덱스',this.index)

     for (var i = 0; i < localStorage.length; i++) {
        var str = localStorage[localStorage.key(i)];
        if (this.index === Number(str.replace(/[^0-9]/g, ""))) {
          str = `{"index":${this.index},"value":"${this.changeValue}"}`;
          localStorage.removeItem(this.currentValue);
          localStorage.setItem(this.changeValue, str);
          this.$router.push('/')
        }
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  height: 100%;
}
button {
  margin: 0 auto;
}
.le {
  float: left;
  height: 100%;
  background: red;
}
input[type="text"] {
  display: block;
}
</style>
