<template>
      <div class="form-group">
        <label for="limit">Filter Todos</label>
        <select class="form-control " v-model="limit" name="limit" id="limit">
            <option selected disabled value="" >Select Filter</option>
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="25">25</option>
          <option value="10">10</option>
          <option value="5">5</option>
         
        </select>
        <h2> {{ Numbers }} </h2>
      </div>

</template>

<script>
export default {
    name:"FilterTodos",
    data() {
        return {
            limit :0
        }
    },
    

}
</script>

<style scoped >
.form-group{
    position: absolute;
    display: flex;
}
.form-group label{
    font-size: 12px;
    color: #094115 ;
    font-weight: bold;
    margin-right: 2rem;
}
.form-group .form-control {
    display: initial;
    width: 10rem;
    border: none;
    background:  #41b883;
    border-radius: 10px;

}
.form-group .form-control option{
    padding: 10px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #a6ebb5;
     border-radius: 10px;
       border: none;
}
</style>