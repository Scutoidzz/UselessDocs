const savebutton = document.getElementById("savebutton");
const sharebutton = document.getElementById("sharebutton");
const textarea = document.getElementById("long-textbox");
const dropdown = document.getElementById("dropdown");


savebutton.onclick = () => {
    const text = textarea.value;

    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);

    if (text.includes("dooby")) {
        anchor.download = "doobydooby.txt";
    } else if (text.includes("fancy")) {
        anchor.download = "doobit.txt";
    } else {
        anchor.download = "text.txt";
    }
    anchor.click();
    URL.revokeObjectURL(anchor.href);
};

// IMPROVEMENT: Consider checking clipboard API availability before attempting to use it
// if (!navigator.clipboard) { /* show fallback message */ }
sharebutton.onclick = async () => {
    const text = textarea.value;

    try {

        if (browser == "firefox") {
            alert("Sharing isn't supported on firefox. Try again on chromium")
        } else {
            await navigator.clipboard.writeText(text);
            alert("Text copied to clipboard!");
        }
    } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text.");
    }
};

dropdown.onchange = () => {
    const selectedValue = dropdown.value;
    switch (selectedValue) {
        case "white":
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            console.log("Option 1 selected");
            break;
        case "coral":
            document.body.style.backgroundColor = "coral";
            document.body.style.color = "white"
            console.log("Option 2 selected");
            break;
        case "mint":
            document.body.style.backgroundColor = "mintcream";
            document.body.style.color = "white"
            console.log("Option 3");
            break;
        default:
            window.alert("Something went wrong. Try again.")
            console.log("default");
            break;
    }
};
