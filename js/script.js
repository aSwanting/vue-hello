// Random Number Function
function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const createApp = Vue.createApp

createApp({
  data() {
    return {
      pageHeader: 'Vue Test Page',
      imageSRC: "https://picsum.photos/200",

      classes: [
        "header-text",
        "rounded-img",
        "body-text",
        "test-box"
      ],

      flexWrapper: {
        display: "flex",
        gap: "40px",
        padding: "0px 30px"
      },

      flexButton: {
        flexGrow: 1,
        cursor: "pointer",
      },

      num: 0,


      // circle: {
      //   width: "30px",
      //   // translate: "-50% -50%",
      //   left: 0,
      //   top: 0,
      //   position: "absolute",
      //   aspectRatio: 1,
      //   borderRadius: "50%",
      //   backgroundColor: "black",
      // }

      dx: 1,
      dy: 1,
    }
  },

  methods: {
    numPlus() {
      this.num++
    },

    addCircle() {

      const testBox = document.getElementById("test-box")

      const d = rand(20, 40)
      const r = d / 2
      let x = rand(r, testBox.clientWidth - r)
      let y = rand(r, testBox.clientHeight - r)

      console.log(d, r)

      // Create Circle
      const circle = document.createElement("div")
      circle.id = "circle"

      // Circle Coordinates
      circle.style.width = d + "px"
      circle.style.translate = "-50% -50%"
      circle.style.left = x + "px"
      circle.style.top = y + "px"

      // Circle Style
      circle.style.position = "absolute"
      circle.style.aspectRatio = 1
      circle.style.borderRadius = "50%"
      circle.style.border = d / 10 + "px solid black"

      // Draw Circle
      testBox.append(circle)

      // // Move Circle
      // if (x > testBox.clientWidth - r) {
      //   this.dx = -this.dx
      // }

      // if (x < r) {
      //   this.dx = -this.dx
      // }

      // if (y > testBox.clientHeight - r) {
      //   this.dy = -this.dy
      // }
      // if (y < r) {
      //   this.dy = -this.dy
      // }

      // x += this.dx
      // y += this.dy
      // circle.style.left = x + "px"
      // circle.style.top = y + "px"

      return circle

    },

    removeCircle() {

      const circle = document.getElementById("circle")
      if (circle) {
        circle.remove()
      }

    }


  }
}).mount('#app')

