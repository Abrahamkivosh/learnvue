<template>
  <span>
    <div class="nav-bar"></div>
    <div class="cart" > cart ({{ calculateItemsInCart }})</div>
    <div class="all-products" >
 <product-details :premium="premium" @add-to-cart="updateCart"  />
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
      cart:[],
      premium:true
    };
  },
  methods: {
    updateCart(productId){
      this.cart.push(productId)
    }
  },
  computed: {
    calculateItemsInCart(){
      return this.cart.length
    }
  },
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
