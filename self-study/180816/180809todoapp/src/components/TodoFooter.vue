<template>
    <div>
        <button @click="clearTodo">
            clear All
        </button>
    </div> 
</template>


<script>
    export default {
        methods:{
            clearTodo(){
                this.$emit('removeAll')
            }
        }
    }
</script>
