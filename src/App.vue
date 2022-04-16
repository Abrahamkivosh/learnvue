<template>
  <span>
    <div class="nav-bar"></div>

    <div class="cart" > cart ({{ cart }})</div>
    <product-details :premium="premium" />
    
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
</style>
