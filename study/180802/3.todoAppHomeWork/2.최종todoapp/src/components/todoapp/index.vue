<template>
    <section class="todoWrap">
        <h1>{{title}}</h1>
        <inputcomponent :eventBus="eventBus"></inputcomponent>
        <listcomponent  :eventBus="eventBus"></listcomponent>
        <button @click="eventBus.clearBtn">clearAll</button>
  
    </section>
</template>

<script>
import eventBus from './eventBus.js'
import inputcomponent from './inputcomponent.vue'
import listcomponent from './listcomponent.vue'  

    export default {
        name:'todoapp',
        props:['title'],
        data(){
            return {eventBus:eventBus}
        },
        components:{
            inputcomponent:inputcomponent,
            listcomponent:listcomponent
        }
    }
</script>

<style>
.todoWrap{width:800px; margin:0 auto}
h1{text-align:center;}
</style>
