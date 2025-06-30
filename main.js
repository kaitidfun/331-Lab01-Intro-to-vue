const { createApp, ref } = Vue

createApp({
    setup() {
        const product = ref('Boots') // สร้างตัวแปร product ที่เก็บค่าแบบ reactive
        const description = ref('cream boots boots')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
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
            toggleInStock
        }
    }
}).mount('#app') // เชื่อม Vue กับ HTML ที่มี id="app"
