const { createApp, ref } = Vue

const app = createApp({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id) {
            cart.value.push(id)
        }

        function removeFromCart(id) {
            const index = cart.value.indexOf(id)
            if (index !== -1) {
                cart.value.splice(index, 1)
            }
        }

        return { cart, premium, updateCart, removeFromCart }
    }
})

// ✅ Register component
app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)

// ✅ Mount app
app.mount('#app')
