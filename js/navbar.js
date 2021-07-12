// Global elements
hamburger_menu = document.getElementById("navbar-burger")
navbar_menu = document.getElementById("navbar-menu")
// Event listeners
hamburger_menu.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
  hamburger_menu.classList.toggle("is-active");
  navbar_menu.classList.toggle("is-active");
  console.log("here")
}
