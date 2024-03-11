function expandContent(button) {
    var parentDiv = button.parentNode;
    parentDiv.classList.toggle("expand");
    if (parentDiv.classList.contains("expand")) {
        button.textContent = "Collapse";
    } else {
        button.textContent = "Expand";
        parentDiv.classList.remove("expand");
    }
}