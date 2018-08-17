<template>
       <section>
           <ul>
               <li v-for="(todoItem,index) in propsdata" :key="todoItem">{{todoItem}}<span v-on:click="removeTodo(todoItem,index)">X</span></li>
              
           </ul>
       </section>
</template>


<script>
    export default {
        props:['propsdata'],
        methods:{
            removeTodo(todoItem,index){
                console.log(todoItem,index)
                this.$emit('deleteTodo',todoItem,index)
            }
        }
    }
</script>

<style scoped>
span{float:right;}
</style>
