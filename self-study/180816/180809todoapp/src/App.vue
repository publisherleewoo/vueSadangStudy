<template>
  <div id="app">
    리스트목록 한개 제거후 수신인덱스와 발신인덱스의 차이가있음. 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "todoapp",
  data() {
    return {
      todoItems: []
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
