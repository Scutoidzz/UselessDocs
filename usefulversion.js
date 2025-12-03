// IMPROVEMENT: Add null checks to prevent errors if HTML elements don't exist
// IMPROVEMENT: Consider wrapping in DOMContentLoaded or using defer attribute (already using defer ✓)
const savebutton = document.getElementById("savebutton");
const sharebutton = document.getElementById("sharebutton");
const textarea = document.getElementById("long-textbox");
const dropdown = document.getElementById("dropdown");

// IMPROVEMENT: Add validation to check if textarea has content before saving
// IMPROVEMENT: Consider allowing users to customize the filename
savebutton.onclick = () => {
    const text = textarea.value;

    // IMPROVEMENT: Add check for empty text
    // if (!text.trim()) {
    //     alert("Please enter some text before saving.");
    //     return;
    // }

    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    // IMPROVEMENT: Use a more descriptive filename, maybe with timestamp
    // anchor.download = `notes_${new Date().toISOString().slice(0,10)}.txt`;
    anchor.download = "text.txt";
    anchor.click();
    URL.revokeObjectURL(anchor.href);
    // IMPROVEMENT: Add user feedback that save was successful
    // alert("File downloaded successfully!");
};

// IMPROVEMENT: Consider checking clipboard API availability before attempting to use it
// if (!navigator.clipboard) { /* show fallback message */ }
sharebutton.onclick = async () => {
    const text = textarea.value;

    // IMPROVEMENT: Add check for empty text
    // if (!text.trim()) {
    //     alert("No text to share!");
    //     return;
    // }

    try {
        await navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
        // IMPROVEMENT: Consider using a less intrusive notification (toast/snackbar)
    } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text.");
        // IMPROVEMENT: Provide more helpful error message to user about why it failed
    }
};

// IMPROVEMENT: The dropdown values don't match the case statements
// HTML has value="option1" but switch checks for "white"
// FIX: Update HTML option values to match: <option value="white">
dropdown.onchange = () => {
    const selectedValue = dropdown.value;
    // IMPROVEMENT: This switch statement doesn't do anything useful yet
    // Implement actual theme/color changes based on selection
    switch (selectedValue) {
        case "white":
            // IMPROVEMENT: Apply actual styling changes
            // document.body.style.backgroundColor = "white";
            // document.body.style.color = "black";
            console.log("Option 1 selected");
            break;
        case "coral":
            // IMPROVEMENT: Apply coral theme
            // document.body.style.backgroundColor = "coral";
            console.log("Option 2 selected");
            break;
        case "mint":
            // IMPROVEMENT: Apply mint theme
            // document.body.style.backgroundColor = "mintcream";
            console.log("Option 3")
            // IMPROVEMENT: Missing semicolon ↑
            break;
        default:
            // Handle default case or other options
            console.log("default");
            break;
    }
};
