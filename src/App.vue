<template>
  <span>
    <div class="nav-bar"></div>

    <div class="cart" > cart ({{ cart }})</div>

    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <!-- image goes here -->
          <img :src ="image" :alt="product">
        </div>
        <div class="product-info">
          <h1>{{ product }}</h1>
          <p v-if="inStock" >
            InStock
          </p>
          <p v-else >
            Out Of stock
          </p>
          <ul v-for="(detail, index) in details" :key="index" >
            <li v-text="detail" ></li>
          </ul>
          <div v-for="(variant, index) in variants" :key="index" class="color-circle" :style="{backgroundColor:variant.color, cursor:'pointer'}"  @mouseover="updateVariant(index)" ></div>
          <button class="button" @click="addToCart()" :class="[!inStock ? 'disabledButton' : '']" :disabled="!inStock" >Add To Cart</button>
        </div>
        
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      cart:0,
      product: "Socks",
      
      selectedVariant:0 ,
      details:['50% Cotton', "30% wool","20% Polyester"],
      variants:[
        {id:1,color:'Green',image: require('./assets/images/socks_green.jpg'), quantity:50 },
        {id:2,color:'Blue',image: require('./assets/images/socks_blue.jpg'), quantity:0 },
      ]

    };
  },
  methods: {
    addToCart(){
      this.cart +=1
    },
    updateVariant(index){
      this.selectedVariant = index
    },
    
  },
  computed: {
    image(){
      return this.variants[this.selectedVariant].image
    },
     inStock(){
      return this.variants[this.selectedVariant].quantity >0 ? true : false
    }
   
  },
};
</script>

<style>
@import url("@/assets/styles.css");
</style>
