const savebutton = document.getElementById("savebutton");
const sharebutton = document.getElementById("sharebutton");
const textarea = document.getElementById("long-textbox");

savebutton.onclick = () => {
    const text = textarea.value;
    const blob = new Blob([text], { type: "text/plain" });
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    anchor.download = "text.txt";
    anchor.click();
    URL.revokeObjectURL(anchor.href);
};

sharebutton.onclick = async () => {
    const text = textarea.value;
    try {
        await navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text.");
    }
};