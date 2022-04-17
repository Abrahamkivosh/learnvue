<template>

      <form @submit.prevent="onSubmit()" method="post">
          <input type="text" v-model="title" placeholder="add Todo.." >
          <button type="submit" :class="{disabledButton:disableButton}" :disabled="disableButton" class="submit">Submit</button>
      </form>
 
</template>

<script>
// import { mapActions } from 'vuex'
export default {
    data() {
        return {
            title:""
        }
    },
    methods: {
        onSubmit(){
        if ( this.title == "") {
            alert("Please type title")
        }
      
    }
    },
    computed: {
        disableButton(){
            return this.title == "" ? true :false ;
        }
    },

}
</script>

<style scoped >
form{
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
}
input[ type="text" ]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
.submit{
    border: 1px solid #41b883;
    flex: 2;
    background: #41b883;
    color: #ffffff;
    cursor: pointer;
    padding: 10px 0px;

}
.disabledButton{
    cursor: not-allowed;
    background: #c2d1ca;
}
</style>