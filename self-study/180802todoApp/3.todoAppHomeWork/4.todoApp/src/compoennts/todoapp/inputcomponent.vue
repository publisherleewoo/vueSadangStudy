<template>
    <div>
        <input type="text" v-model="inputData" @keyup.enter="addTodo">
        <button @click="addTodo">추가</button>
    </div>
</template>

<script>
    export default {
        name:'todoapp',
        data(){
            return {
                inputData:''
            }
        },
        methods:{
            addTodo(){
                this.$emit('addTodo',this.inputData)
            }
        }
    }
</script>
