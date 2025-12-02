const sharebutton = document.getElementById("sharebutton")
const savebutton = document.getElementById("savebutton")
let x = 0
let y = 0
let velocityX = 3
let velocityY = 2
const button = sharebutton
function LocationCalculation() {
    x = x + velocityX * 3
    x = x - 4
    y = y + velocityY * 3
    y = y - 4

}

function FWya() {
    const textarea = document.getElementById("long-textbox")
    textarea.value = "WOBILLY WIGGLY WOBBLILT WIGGLY HUUHU";
    textarea.style.color = "coral";

    // Download the text.     



}

sharebutton.onclick = () => {
    LocationCalculation()
    sharebutton.style.left = x + 'px'
    sharebutton.style.top = y + 'px'
}

savebutton.onclick = () => {
    FWya()


}
