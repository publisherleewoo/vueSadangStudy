<template>
  <div id="app">
    <h1 >Bootstrap heading</h1>
    <router-link class="btn btn-outline-secondary" to="/A">Go to A</router-link>
    <router-link class="btn btn-outline-secondary" to="/B">Go to B</router-link>
    <router-link class="btn btn-outline-secondary" to="/contactsList">Go to C</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{margin:30px 0;}
a{ margin:0 10px 30px 10px;}
 
</style>
