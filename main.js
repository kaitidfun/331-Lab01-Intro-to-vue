const { createApp, ref, computed } = Vue

createApp({
    setup() {
        const product = ref('Boots') // สร้างตัวแปร product ที่เก็บค่าแบบ reactive
        const description = ref('cream boots boots')
        const brand = ref('SE 331')
        const link = ref('https://www.camt.cmu.ac.th')
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0) // เริ่มต้นเลือกตัวแรก
        function updateVariant(index) {
            selectedVariant.value = index
        }
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity > 0
        })
        const onSaleText = computed(() => {
            return onSale.value
                ? `${brand.value} ${product.value} is on sale`
                : `${brand.value} ${product.value} is not on sale`
        })

        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function toggleInStock() {
            inStock.value = !inStock.value
        }

        return {
            product, // ส่งออก product เพื่อให้ใช้ใน template ได้
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleInStock,
            brand,
            title,
            onSaleText,
            updateVariant
        }
    }
}).mount('#app') // เชื่อม Vue กับ HTML ที่มี id="app"
