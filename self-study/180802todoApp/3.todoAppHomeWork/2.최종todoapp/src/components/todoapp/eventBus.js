import Vue from 'vue'
localStorage.removeItem("loglevel:webpack-dev-server")
 
var eventBus = new Vue({
    data(){
        return {
            TodoList: JSON.parse(JSON.stringify(localStorage)),
            Input : "",
            TypeName : "추가",
        }
    },
    // created(){
    //     if(localStorage.length == 0) {
    //         console.log('빈값')
    //       }
    // },
    methods:{
        addTodo(){
             this.Input = this.Input.trim();
             if(this.Input == ""){
                 alert('값이 입력되지 않았습니다')
                 document.querySelector('#Input').focus();
                 return false;
             }else if(localStorage[this.Input]===this.Input){
                 alert('같은 값이 있습니다')
                 document.querySelector('#Input').focus();
                 return false;
             }else{
                localStorage.setItem(this.Input,this.Input);
                this.Input ="";
                this.SetList();
            }  
        },
        deleteTodo(index) {
            localStorage.removeItem(index);
            this.SetList();
        },
        clearBtn(){
            localStorage.clear();
            this.SetList();
        },
        SetList(){
            localStorage.removeItem("loglevel:webpack-dev-server")
            this.TodoList = JSON.parse(JSON.stringify(localStorage))
        }
    }
})

export default eventBus