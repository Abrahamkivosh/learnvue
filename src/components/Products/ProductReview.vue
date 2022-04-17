<template>
  <div>
    <form
      action=""
      @submit.prevent="submitReview"
      method="post"
      class="review-form"
    >
    <div v-if="isError == true || isSuccess == true" class="messageBox" :class="{error: isError, success:isSuccess}" v-text="message" > </div>
      <h3>Leave a review</h3>
      <label for="name">Name :</label>
      <input type="text"  id="name" v-model="form.name" />
      <label for="review">Review : </label>
      <textarea
        name="review"
        id="review"
        v-model="form.review"
        cols="30"
        rows="10"
      ></textarea>
      <label for="rating">Rating : </label>
      <select name="rating" id="rating" v-model.number="form.rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" class="button" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "productReview",
  data() {
    return {
      form: {
        name: "",
        review: "",
        rating: "",
      },
      isError:false,
      isSuccess:false,
      message:""
    };
  },
  methods: {
      submitReview(){
          if ( this.form.name == "" || this.form.review == "" || this.form.rating == "" ) {
             this.alertResponse(false, true)
              return ;
          }
          var sendData = {
             name :  this.form.name ,
             review : this.form.review ,
             rating : this.form.rating
              
          }
          this.$emit("newReview", sendData)
          this.alertResponse(true, false)
          this.form.name = "" ; this.form.review = "" ; this.form.rating = "";
      },
      alertResponse(success = false , error= false){
          if ( error) {
               this.isError = true
              this.message = "Please Fill All Input Correctly!"
          }
          if (success ) {
              this.isSuccess = true
            this.message = "Review Submitted Successfully."
          }
          setTimeout(() => {
                this.isError = false
                 this.isSuccess = false
          }, 5000 );

      }
  },
};
</script>

<style>
.messageBox{
 width: 70%;
    height: auto;
    padding: 10px 20px;
    font-size: 20px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    position: relative;
    border: none;
    border-radius: 10px;
}

.error{
    background: rgb(227, 104, 85);
    color: rgb(23, 2, 2);

   
}
.success{
    background: rgb(133, 240, 133);
    color: green;

}

</style>