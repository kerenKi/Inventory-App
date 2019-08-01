const app = new Vue({
  el:"#app",
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    image:'./assets/Socks-green-onWhite.jpg',
    description: 'warm and fuzzy. good for the winter',
    details: ["80% cotton", "20% polyester", "Gener-neutral"],
    inventory: 12,
    inStock: true,
    sizes: ["32-34","36-38","40-42","44-46"],
    onSale: false,
    variants: [
      {
        variantId: 1,
        variantColor: "green",
        variantImage: "./assets/Socks-green-onWhite.jpg"

      },
      {
        variantId: 2,
        variantColor: "blue",
        variantImage: "./assets/Socks-blue-onWhite.jpg"
      }
    ],
    cart: 0,
    },
  methods: {
    addToCart () {
      this.cart += 1
      this.inventory -= 1
      if (this.inventory === 0){
        this.inStock = false
      }
    },
    removeFromCart() {
      if(this.cart > 0){
        this.cart -= 1
      }
    },
    updateProduct: function(variantImage) {
      this.image = variantImage
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }
})