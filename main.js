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
            { id: 2234, color: 'green' },
            { id: 2235, color: 'blue' }
        ])
        const sizes = ref([
            'S',
            'M',
            'L'
        ])

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
            sizes
        }
    }
}).mount('#app') // เชื่อม Vue กับ HTML ที่มี id="app"
