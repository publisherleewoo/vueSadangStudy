<template>
  <div id="app">
    <h1 class="h1">Bootstrap heading</h1>
    <router-link class="btn btn-primary" to="/A">Go to A</router-link>
    <router-link class="btn btn-primary" to="/B">Go to B</router-link>
    <router-link class="btn btn-primary" to="/C">Go to C</router-link>
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
