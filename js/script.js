// const { createApp } = Vue

const createApp = Vue.createApp

createApp({
  data() {
    return {
      pageHeader: 'Vue Test Page',
      imageSRC: "https://picsum.photos/200",
      classes: ["header-text", "rounded-img", "body-text"],
      num: 0
    }
  },
  methods: {
    numPlus() {
      this.num++
    }
  }
}).mount('#app')

console.log(createApp)