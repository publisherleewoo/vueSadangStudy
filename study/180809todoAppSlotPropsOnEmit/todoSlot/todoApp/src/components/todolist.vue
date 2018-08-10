<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoitem,index) in todoitems" :key="todoitem" >{{todoitem}}<span @click="deleteTodo(todoitem,index)">X</span></li>
        </transition-group>
    </div>
</template>


<script>
    export default {
        name:'todolist',
        props:['todoitems'],
        methods:{
            deleteTodo(todoitem,index){
                this.$emit('deleteTodo',todoitem,index)
            }
        }
    }
</script>

<style>
.list-enter-active,.list-leave-active{
    transition:all 1s;
}
.list-enter,.list-leave{
    opacity:0;
    transform:translateY(30px)
}

span{float:right;}
</style>
