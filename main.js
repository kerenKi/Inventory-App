Vue.component('product',{
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
  <div class="product">

    <div class="product-image">
      <img v-bind:src="image" alt="Socks">
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      
      <product-details :details="details"></product-details>

      <p>Size range:</p>
      <ul>
        <li v-for="size in sizes">{{size}}</li>
      </ul>
      
      <p>{{ onSale }}</p>

      <div v-for="(variant, index) in variants" 
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)">
      </div>
      
      <p>Shipping: {{ shipping }}</p>

      <p v-if="inStock"> In stock </p>
      <p v-else-if="inventory <= 10 && inventory > 0">Almost gone!</p>
      <p v-else="inventory = 0"
        :class="{ outOfStock: !inStock }"> Out of stock </p>
      

      <button v-on:click="addToCart"
              :disabled="!inStock"
              :class="{ disabledButton: !inStock }"
              >Add to cart</button>
      <button v-on:click="removeFromCart">Remove from cart</button>
      

    </div>

  </div>`,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gener-neutral"],      
      inventory: 12,
      sizes: ["32-34","36-38","40-42","44-46"],
      variants: [
        {
          variantId: 1,
          variantColor: "green",
          variantImage: "./assets/Socks-green-onWhite.jpg",
          variantQuantity: 10,
          onSale: true,
  
  
        },
        {
          variantId: 2,
          variantColor: "blue",
          variantImage: "./assets/Socks-blue-onWhite.jpg",
          variantQuantity: 20,
          onSale: false,
  
  
        }
      ],
     
    }
  },
  methods: {
    addToCart () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      this.inventory -= 1
      if (this.inventory === 0){
        this.inStock = false
      }
    },
    removeFromCart() {
      this.$emit('remove-from-cart',  this.variants[this.selectedVariant].variantId)
      this.inventory += 1
      if (this.inventory === 0){
        this.inStock = false
      }
    },
    updateProduct: function(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale(){
      if (this.variants[this.selectedVariant].onSale)
      return `${this.brand} ${this.product} are on sale now!`
    },
    shipping() {
      if(this.premium) {
        return "Free shipping"
      } else {
        return "3.75 usd"
      }
    }

  }
})

Vue.component('product-details', {
  props:{
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <div>
      <p>{{description ? description : 'No description Available'}}</p> 
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
    </div>
  `,
  data() {
    return {
      description: 'warm and fuzzy. good for the winter',
    }
  }
})

const app = new Vue({
  el:"#app",
  data: {
    premium: false,
    cart: [],
  },
  methods: {
    updateCart(id) {
      return this.cart.push(id)
    },
    removeItem(id) {
      console.log('id',id)
      console.log('cart', this.cart)
      itemIndex = this.cart.findIndex( item => item === id)
        console.log( 'itemIndex', itemIndex)
      return this.cart.splice(itemIndex, 1)  
    }
  }
})