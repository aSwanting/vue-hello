// const { createApp } = Vue

const createApp = Vue.createApp

  createApp({
    data() {
      return {
        pageHeader: 'Vue Test Page'
      }
    }
  }).mount('#app')

  console.log(createApp)