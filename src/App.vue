<template>
  <nav-bar />
  <div class="container">
  <todos-index />
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import TodosIndex from './components/Todos/TodosIndex.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TodosIndex
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
