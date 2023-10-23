// const { createApp } = Vue

const createApp = Vue.createApp

  createApp({
    data() {
      return {
        pageHeader: 'Vue Test Page',
        imageSRC: "https://picsum.photos/200",
        imageClass: "rounded-img"
      }
    }
  }).mount('#app')

  console.log(createApp)