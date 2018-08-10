<template>
  <div id="app">
    <todoapp :todotitle="todoListHeading" :localCopy="localCopy" ></todoapp>
  </div>
</template>

<script>
import localCopy from './compoennts/todoapp/data.js'
import todoapp from './compoennts/todoapp/todoapp'

export default {
  name: 'app',
  data () {
    return {
      todoListHeading:'todoList',
      localCopy
    }
  },
  components:{
    todoapp
  } 
  
}
</script>

<style>
 
</style>
