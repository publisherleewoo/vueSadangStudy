<template>
    <div>
        <input type="text" v-model="inputValue" @keyup.enter="addTodo"><button @click="addTodo">추가</button>

        <modal v-if="showModal" @close="showModal=false">
          <h3 slot="header">경고</h3>
          <span slot="footer" @click="showModal=false">
              할일을 입력하세요
          </span>  
        </modal>
    </div>
</template>


<script>
import modal from './modal'
    export default {
        name:'todoinput',
        data(){
            return {
                inputValue:'',
                showModal:false    
            }
        },
        methods:{
            addTodo(){
                this.inputValue = this.inputValue.trim();
          
                if(this.inputValue !== ""){
                    this.$emit('addTodo',this.inputValue)
                    this.inputValue="";
                }else{
                    this.showModal = !this.showModal
                }
            }
        },
        components:{
            modal:modal
        }
    }
</script>