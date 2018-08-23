<template>
  <div id="app">
      <component :is="currentView" :propsData="propsData" @emitChangeComponent="changeComponent"></component>
  </div>
</template>

<script>
import todoindex from './components/todoindex/index.vue'
import listDetail from './components/todoindex/listDetail/listDetailIndex.vue'


export default {
  name: 'app',
  data(){
    return {
      currentView:'todoindex',
      propsData:null
    }
  },
  components:{
    todoindex,
    listDetail
  },
  methods:{
    changeComponent(val){
        if(val === "todoindex"){
          this.currentView=val;
          return false;  
      }

        this.propsData=val
        this.currentView='listDetail'  
      
    },
  }
 
}
</script>

<style>
*{margin:0;padding:0;}
html,body{height:100%;}
#app{height:100%;}
.wrap{height:100%;}
</style>
