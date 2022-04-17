<template>
  <div>
      <div class="todos">
        <div class="todo" v-for="(todo,index) in allTodos" :key="index" v-text="todo.title" ></div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['allTodos'])
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
</style>