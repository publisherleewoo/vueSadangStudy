<template>
  <div id="app">
     <todoapp title="todoApp"></todoapp>
  </div>
</template>

<script>
import todoapp from './components/todoapp/'
 export default {
   name:"app",
   components:{
     todoapp:todoapp
   }
 }
</script>

<style lang="scss">
 *{margin: 0;padding: 0;}

</style>
