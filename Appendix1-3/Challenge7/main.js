//Add a new boolean data property `onSale` and create a computed property that takes `brand`, `product` and `onSale` and prints out a string whenever `onSale` is true.

var app = new Vue({
  el: '#app',
  data: {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      // Add onsale data
      onSale: false,
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
          variantQuantity: 10     
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0     
        }
      ],
      cart: 0
  },
  methods: {
      addToCart: function() {
          this.cart += 1
      },
      updateProduct: function(index) {  
          this.selectedVariant = index
          console.log(index)
      }
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product  
      },
      image(){
          return this.variants[this.selectedVariant].variantImage
      },
      inStock(){
          return this.variants[this.selectedVariant].variantQuantity
      },
      // Create on_sale property
      on_sale(){
        if (this.onSale) {
          return this.brand + ' ' + this.product + ' on sale!'
        }
          return this.product 
      }
  }
})