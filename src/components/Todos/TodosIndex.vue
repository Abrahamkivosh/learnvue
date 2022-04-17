<template>
  <div>
      <div class="todos">
        <div class="todo" v-for="(todo,index) in allTodos" :key="index"  >
          <span v-text="todo.title">

          </span>
          <i class="fa fa-trash" aria-hidden="true"></i>
          <!-- <i class="fa-solid fa-trash-list"></i> -->
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
    ...mapActions(['fetchTodos'])
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