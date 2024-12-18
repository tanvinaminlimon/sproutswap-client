document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");
    const searchSubmit = document.getElementById("searchSubmit");
    const searchResult = document.getElementById("searchResult");
    const plantList = ["monstera", "fiddle leaf fig", "snake plant", "pothos", "peace lily"];

    // Show search bar
    searchButton.addEventListener("click", function () {
        searchContainer.style.display = "block";
        searchInput.focus();
    });


    // Prevent click event propagation on search bar
    searchContainer.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    // Search functionality
    searchSubmit.addEventListener("click", function () {
        const query = searchInput.value.trim().toLowerCase();
        if (query === "") {
            searchResult.textContent = "Please enter a plant name!";
            return;
        }

        if (plantList.includes(query)) {
            searchResult.style.color = "green";
            searchResult.textContent = `Plant "${query}" is available!`;
        } else {
            searchResult.style.color = "red";
            searchResult.textContent = "No results found!";
        }
    });
});





