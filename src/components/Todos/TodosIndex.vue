<template>
  <div>
      <div class="todos">
        <div class="todo" v-for="(todo,index) in allTodos" :key="index" >
          <span v-text="todo.title">

          </span>
          <span  @click.prevent="deleteTodo(todo.id)" >
 <i class="fa fa-trash trashIcon " aria-hidden="true"  ></i>
          </span>
         
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  created() {
    this.fetchTodos()
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
  methods: {
    ...mapActions(['fetchTodos','deleteTodo'])
  
  },

}
</script>

<style scoped >
.todos{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 1rem;
}
.todo{
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.trashIcon{
  right: 10px;
  bottom: 10px;
  color: red;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
}
.trashIcon:hover{
  font-size: 20px;
  border: 2px dotted #41b883;
  padding: 0px;
  border-radius: 5px;
}
</style>