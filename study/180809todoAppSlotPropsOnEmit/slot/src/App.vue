<template>
  <div id="app">
    <modal v-if="onOff">
      <p slot="header">헤더</p>
      <p slot="bottom">바텀</p>
    </modal>
    <button @click="onf()">버튼</button>
  </div>
</template>

<script>
import modal from './modal'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      onOff:false
    }
  },
  methods:{
    onf(){
     
      this.onOff = !this.onOff;
    }
  },
  components:{
    modal
  }
}
</script>

<style> 
</style>
