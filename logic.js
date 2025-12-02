const shareButton = document.getElementById("sharebutton")
let x = 0
let y = 0
let velocityX = 3
let velocityY = 2

function AnimateElement() {
    // Update position
    x = x + velocityX
    y = y + velocityY

    // Get button dimensions
    const buttonWidth = shareButton.offsetWidth
    const buttonHeight = shareButton.offsetHeight

    // Bounce off right and left edges
    if (x + buttonWidth >= window.innerWidth || x <= 0) {
        velocityX = -velocityX
    }

    // Bounce off top and bottom edges
    if (y + buttonHeight >= window.innerHeight || y <= 0) {
        velocityY = -velocityY
    }

    // Apply position
    shareButton.style.left = x + 'px'
    shareButton.style.top = y + 'px'

    requestAnimationFrame(AnimateElement)
}

shareButton.onclick = () => {
    shareButton.style.position = "absolute"
    AnimateElement()
}   