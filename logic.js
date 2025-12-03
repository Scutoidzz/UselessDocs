
const sharebutton = document.getElementById("sharebutton");
const savebutton = document.getElementById("savebutton");

if (!savebutton || !sharebutton)
    console.error("Required buttons not found in DOM");
savebutton.remove();
sharebutton.remove();
window.alert("The great dooby has begun!")





savebutton.onclick = () => {
    window.alert("dooby dooby");
};

sharebutton.onclick = () => {
    window.alert("DOOBY DOOBY!");
};
