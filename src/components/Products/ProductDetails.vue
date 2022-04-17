<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img :src="Image" :alt="product" />
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p>Shipping : {{ Shipping }}</p>
        <p v-if="inStock">InStock</p>
        <p v-else>Out Of stock</p>
        <ul v-for="(detail, index) in details" :key="index">
          <li v-text="detail"></li>
        </ul>
        <div class="variants" >
 <div
          v-for="(variant, index) in variants"
          :key="index"
          class="color-circle "
          :style="{ backgroundColor: variant.color, cursor: 'pointer' }"
          @mouseover="updateVariant(index)"
        ></div>
        </div>
       
        <button
          class="button"
          @click="addToCart()"
          :class="[!inStock ? 'disabledButton' : '']"
          :disabled="!inStock"
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    premium: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return {
      product: "Socks",

      selectedVariant: 0,
      details: ["50% Cotton", "30% wool", "20% Polyester"],
      variants: [
        {
          id: 1,
          color: "Green",
          image: require("@/assets/images/socks_green.jpg"),
          quantity: 50,
        },
        {
          id: 2,
          color: "Blue",
          image: require("@/assets/images/socks_blue.jpg"),
          quantity: 0,
        },
      ],
    };
  },

  methods: {
    addToCart() {
      this.cart += 1;
      this.$emit('addToCart',this.variants[this.selectedVariant].id )
      
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    Image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0 ? true : false;
    },
    Shipping: {
      get() {
        return this.premium ? "Free" : 2.99;
      },
    },
  },
};
</script>

<style>
</style>