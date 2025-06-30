const productDisplay = {
    template: `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" :class="{ 'out-of-stock-img': !inStock }" />
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{shipping}}</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>

          <button
            class="button"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            @click="addToCart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  `,
    props: {
        premium: Boolean
    },

    setup(props) {
        const product = Vue.ref('Boots')
        const brand = Vue.ref('SE 331')
        const inventory = Vue.ref(100)
        const details = Vue.ref(['50% cotton', '30% wool', '20% polyester'])
        const variants = Vue.ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = Vue.ref(0)

        const title = Vue.computed(() => `${brand.value} ${product.value}`)
        const image = Vue.computed(() => variants.value[selectedVariant.value].image)
        const inStock = Vue.computed(() => variants.value[selectedVariant.value].quantity > 0)

        const addToCart = () => {
            console.log('Added to cart')
        }

        const updateVariant = (index) => {
            selectedVariant.value = index
        }

        const shipping = Vue.computed(() => {
            if (props.premium) {
                return 'Free'
            } else {
                return 30
            }
        })

        return {
            title, image, inStock, inventory, details, variants,
            addToCart, updateVariant, shipping
        }
    }
}
