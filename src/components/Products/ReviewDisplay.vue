<template>
  <div v-if="reviews.length > 0" class="review-container">
      <h3>Reviews : </h3>
      <ul v-for="(review, index) in reviews" :key="index" >
          <li  >
             <span v-text=" review.name " > </span> gave <span v-text="review.rating"></span> rating
              <br>
             
              <span v-text="review.review" ></span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        reviews:{
            required:true,
            type:Array
        }
    }

}
</script>

<style scoped >
span{
    color: black;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>