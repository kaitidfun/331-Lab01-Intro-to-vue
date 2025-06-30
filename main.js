const { createApp, ref } = Vue

const app = createApp({
    setup() {
        const cart = ref(0)
        const premium = ref(false)
        return { cart, premium }
    }
})

// ✅ Register component
app.component('product-display', productDisplay)
app.component('product-details', productDetails)

// ✅ Mount app
app.mount('#app')
