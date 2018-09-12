<template>
    <table>
        <tr>
            <th>할일</th>
            <th>삭제</th>
        </tr>
        <tr v-for="(todo,index) in eventBus.TodoList" :key="todo">
            <td>{{todo}}</td>
            <td><a href="#" @click="eventBus.deleteTodo(index)">삭제</a></td>
        </tr>
    </table>
</template>


<script>
export default {
  name: "inputcomponent",
  props:['eventBus']
};
</script>












<style scoped>
a{text-decoration: none}
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr th:nth-child(2),table tr td:nth-child(2){
    width:50px;
    text-align:center;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
