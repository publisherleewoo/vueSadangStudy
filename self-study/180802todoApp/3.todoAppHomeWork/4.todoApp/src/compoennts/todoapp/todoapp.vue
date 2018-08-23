<template>
    <section>
       <h1>{{todotitle}}</h1>
       <inputcomponent v-on:addTodo="add"></inputcomponent>
       <listcomponent :todoData="todoData"></listcomponent>
       <button>clearAll</button>
    </section>
</template>

<script>

import inputcomponent from './inputcomponent'
import listcomponent from './listcomponent'
   
   export default {
        name:'todoapp',
        props:['todotitle','localCopy'],
        data(){
            return {
                todoData: this.localCopy,
            }
        },
        components:{
            inputcomponent,
            listcomponent
        },
        methods:{
            add(payload){
                this.localCopy[payload]=payload
                localStorage[payload]=payload
                console.log(this.localCopy)
            }
        },
        watch:{
            todoData(){
                console.log('값이 바뀜')
            }
        }
       
        
    }
</script>
