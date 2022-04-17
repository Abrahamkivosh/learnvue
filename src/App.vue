<template>
  <span>
    <div class="nav-bar"></div>
    <div class="cart" > cart ({{ cart }})</div>
    <div class="all-products" >
 <product-details :premium="premium" />
    <product-details :premium="premium" />
    </div>

    

   
    
  </span>
</template>

<script>
import ProductDetails from './components/Products/ProductDetails.vue'
export default {
  name: "App",
  components: {ProductDetails},
  data() {
    return {
      cart:0,
      premium:true
    };
  }
};
</script>

<style>
@import url("@/assets/styles.css");
.all-products{
  height: 495px;
  position: absolute;
  overflow-y: auto;
}
</style>
