// Select elements
const cartIcon = document.getElementById("cartIcon");
const cartSidebar = document.getElementById("cartSidebar");
const closeBtn = document.getElementById("closeBtn");

// Open cart sidebar
cartIcon.addEventListener("click", () => {
  cartSidebar.style.right = "0";
});

// Close cart sidebar
closeBtn.addEventListener("click", () => {
  cartSidebar.style.right = "-350px";
});




//hbjhbhj

document.addEventListener('DOMContentLoaded', function() {
  console.log("Page Loaded Successfully!");

  // Add functionality here (e.g., dynamic content loading)
  const logoutLink = document.querySelector('.logout');
  logoutLink.addEventListener('click', function() {
      alert('You have been logged out!');
  });
});
