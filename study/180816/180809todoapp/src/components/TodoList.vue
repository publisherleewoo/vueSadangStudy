<template>
       <div>
           <ul>
               <li v-for="(todoItem,index) in propsdata" :key="todoItem.value">
                   {{todoItem.value}}
                   <button v-on:click="removeTodo(todoItem,index)">X</button>
                   <button @click="updateTodo(todoItem,index)">update</button>
                </li>      
           </ul>
       </div>
</template>


<script>
    export default {
        props:['propsdata'],
        methods:{
            removeTodo(todoItem,vindex){
                this.$emit('deleteTodo',todoItem,vindex)
            },
            updateTodo(todoItem,index){
                console.log('발신인덱스:', index)
                this.$router.push({name:'TodoDetail',params:{todoItem,index}})
            }
        }
    }
</script>

<style scoped>
button{float:right;}
</style>
