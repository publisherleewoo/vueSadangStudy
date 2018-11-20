<template>
  <div id="app">
    <h1>Bootstrap heading</h1>
    <router-link class="btn btn-outline-secondary" to="/A">Go to A</router-link>
    <router-link class="btn btn-outline-secondary" to="/B">Go to B</router-link>
    <router-link class="btn btn-outline-secondary" to="/contactsList">contactList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
ul{list-style:none}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active{background:skyblue;}
h1 {
  margin: 30px 0;
}
 

.ir{position:absolute; left:-9999px; top:0;}
</style>
