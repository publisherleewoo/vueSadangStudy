<template>
    <section class="wrap">
        <listDetailUpdate :propsUpdateData="updateTodoItem" @emitGotoIndex="emitGotoIndex" :flag="flag"></listDetailUpdate>
        <listDetailView></listDetailView>
    </section>
</template>


<script>
import listDetailUpdate from './listDetailUpdate.vue'
import listDetailView from './listDetailView.vue'

export default {
  name: "listDetail", 
  props:['propsData'],
  data() {
    return {
      updateTodoItem: this.propsData,
      flag:false
    };
  },
  mounted(){
    if(this.updateTodoItem['k']){
        this.flag = true
    }
  },
  methods:{
    emitGotoIndex(){
      this.$emit('emitChangeComponent','todoindex')
    }
  },
  components:{
    listDetailUpdate,
    listDetailView
  }
};
</script>

<style scoped>
 section:after{display:block; clear:both; content:'';}
</style>