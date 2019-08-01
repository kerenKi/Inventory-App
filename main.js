const app = new Vue({
  el:"#app",
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    description: 'warm and fuzzy. good for the winter',
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
        variantQuantity: 0,
        onSale: false,


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
      return `${this.brand} ${this.product} is on sale now!`
    }

  }
})