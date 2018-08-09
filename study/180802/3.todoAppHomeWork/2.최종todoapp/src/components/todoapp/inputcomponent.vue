<template>
    <div>
        <input type="text" id="Input" v-model="eventBus.Input"  @keyup.enter="eventBus.addTodo">
        <button @click="eventBus.addTodo">{{eventBus.TypeName}}</button>
    </div>
</template>


<script>
    export default {
        name:'inputcomponent',
        props:['eventBus'],
        
    }
</script>

<style scoped>
div{text-align:center; margin-bottom:20px;}
</style>
