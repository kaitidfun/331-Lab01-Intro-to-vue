const productDetails = {
  props: {
    details: Array
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
}
