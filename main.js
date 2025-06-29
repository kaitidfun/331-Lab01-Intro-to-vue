const { createApp, ref } = Vue

createApp({
  setup() {
    const product = ref('Boots') // สร้างตัวแปร product ที่เก็บค่าแบบ reactive
    const description = ref('cream boots boots')
    return {
      product, // ส่งออก product เพื่อให้ใช้ใน template ได้
      description
    }
  }
}).mount('#app') // เชื่อม Vue กับ HTML ที่มี id="app"
