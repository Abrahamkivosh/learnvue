<template>
  <nav-bar />
  <div class="container">
    <add-todo />
  <todos-index />
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import AddTodo from './components/Todos/addTodo.vue'
import TodosIndex from './components/Todos/TodosIndex.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TodosIndex,
    AddTodo
  }
}
</script>

<style>
body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #e8f7fa;
}
.container{
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
}
</style>
