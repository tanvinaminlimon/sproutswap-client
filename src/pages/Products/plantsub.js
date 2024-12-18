// Function to toggle content visibility and rotate arrow
function toggleSection(element) {
    const content = element.nextElementSibling; // Find the next sibling (content)
    const icon = element.querySelector('.icon'); // Find the arrow icon
    
    // Toggle content visibility
    if (content.style.display === "block") {
        content.style.display = "none";
        element.classList.remove("open");
    } else {
        content.style.display = "block";
        element.classList.add("open");
    }
}
