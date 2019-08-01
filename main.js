const app = new Vue({
  el:"#app",
  data: {
    product: 'Socks',
    image:'./assets/Socks-green-onWhite.jpg',
    description: 'warm and fuzzy. good for the winter',
    details: ["80% cotton", "20% polyester", "Gener-neutral"],
    videoLink: "https://youtu.be/CL4hENeteno",
    inventory: 10,
    onSale: true,
    variants: [
      {
        variantId: 1,
        variantColor: "green"
      },
      {
        variantId: 2,
        variantColor: "blue"
      }
    ]
  }
})