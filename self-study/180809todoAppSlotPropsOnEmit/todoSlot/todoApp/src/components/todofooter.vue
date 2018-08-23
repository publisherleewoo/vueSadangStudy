<template>
    <div>
        <button @click="clearAll()">clear All</button>
    </div>
</template>


<script>
    export default {
        name:'todofooter',
        methods:{
            clearAll(){
                this.$emit('clearAll')
            }  
        }
    }
</script>