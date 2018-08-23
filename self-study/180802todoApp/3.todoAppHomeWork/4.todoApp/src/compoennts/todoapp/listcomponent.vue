<template>
    <table>
        <tr>
            <th>제목</th>
            <th>삭제</th>
        </tr>
        <tr v-for="(todo,index) in showData" :key="todo">
            <td>{{todo}}</td>
            <td>{{index}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name:'todoapp',
        props:['todoData'],
        data(){
            return {
                showData:this.todoData
            }
        },
        created(){
            console.log(this.showData)
        },
        methods:{
            addTodo(){
                console.log('lst 에드투두')
            }
        }
         
      
    }
</script>
