class Circle {

    constructor(d, x, y, location, boundary) {

        // Random values
        this.d = d
        this.r = this.d / 2
        this.x = x
        this.y = y
        this.dx = this.getDirection(-5, 5)
        this.dy = this.getDirection(-5, 5)

        // Append location
        this.location = location

        // DOM Element
        this.element = this.buildCircle()

        // Boundaries
        this.boundary = boundary
    }

    buildCircle() {

        // Create Circle
        const circle = document.createElement("div")

        // Circle Coordinates
        circle.style.width = this.d + "px"
        circle.style.translate = "-50% -50%"
        circle.style.left = this.x + "px"
        circle.style.top = this.y + "px"

        // Circle Style
        circle.style.position = "absolute"
        circle.style.aspectRatio = 1
        circle.style.borderRadius = "50%"
        circle.style.border = this.d / 6 + "px solid"

        // Append Circle
        this.location.append(circle)


        return circle

    }

    deleteCircle() {
        this.element.remove()
    }

    // Get Random Direction, Exclude 0
    getDirection(min, max) {

        let n = 0
        while (!n) { n = rand(min, max) }
        return n
    }

    // Move Circle, Bounce against Window Boundaries
    moveCircle() {

        // Right Boundary
        if (this.x + this.dx > this.boundary.clientWidth - this.r) {
            this.x = this.boundary.clientWidth - this.r
            this.dx = -this.dx
        }

        // Left Boundary
        if (this.x + this.dx < this.r) {
            this.x = this.r
            this.dx = -this.dx
        }

        // Bottom Boundary
        if (this.y + this.dy > this.boundary.clientHeight - this.r) {
            this.y = this.boundary.clientHeight - this.r
            this.dy = -this.dy
        }

        // Top Boundary
        if (this.y + this.dy < this.r) {
            this.y = this.r
            this.dy = -this.dy
        }

        // Increment Position
        this.x += this.dx
        this.y += this.dy
        this.element.style.left = this.x + "px"
        this.element.style.top = this.y + "px"

    }
}