<template>
  <div id="app">
    {{msg}}
    <button id="btn">시작</button>
    <p id="pEl"></p>
  </div>
</template>

<script>
 
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
 
    $('#btn').click(function(){
        $('#pEl').text('ok성공')
    })
  }
}
</script>

<style>

</style>
