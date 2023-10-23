///////////////////////////////////////// FUNCTION /////////////////////////////////////////

// Random Number Function
function rand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

///////////////////////////////////////// VUE /////////////////////////////////////////

const { createApp } = Vue

createApp({

  data() {
    return {
      pageHeader: 'Vue Test Page',
      imageSRC: "./img/northen-lights.jpg",

      classes: [
        "header-text",
        "rounded-img",
        "body-text",
        "test-box"
      ],

      flexWrapper: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
      },

      flexButton: {
        flexBasis: "20%",
        padding: "5px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "50px",
      },

      num: 0,

      circles: []

    }
  },

  methods: {
    numPlus() {
      this.num++
    },

    addCircle() {
      const testBox = document.getElementById("test-box")
      const d = rand(20, 40)
      let x = rand(d / 2, testBox.clientWidth - d / 2)
      let y = rand(d / 2, testBox.clientHeight - d / 2)
      this.circles.push(new Circle(d, x, y, testBox, testBox))

    },

    removeCircle() {
      let lastCircle
      if (this.circles.length > 0) {
        lastCircle = this.circles[this.circles.length - 1].element
        lastCircle.remove()
        this.circles.pop()
      }
    },

    clearCircles() {
      const testBox = document.getElementById("test-box")
      testBox.innerHTML = ""
      this.circles = []
    },

    animate() {
      this.circles.forEach(circle => {
        circle.moveCircle()
      });
      requestAnimationFrame(this.animate)
    }

  },

  mounted() {
    this.addCircle()
    requestAnimationFrame(this.animate)
  },

}).mount('#app')

