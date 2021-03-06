// Global elements
const hamburger_menu = document.getElementById("navbar-burger");
const navbar_menu = document.getElementById("navbar-menu");
// navbar buttons
const navbar_home = document.getElementById("home");
const navbar_education = document.getElementById("education");
const navbar_experience = document.getElementById("experience");
const navbar_projects = document.getElementById("projects");
const navbar_references = document.getElementById("references");
const navbar_posts = document.getElementById("posts");
// page content
const page_content = document.getElementById("content");

// Event listeners
hamburger_menu.addEventListener("click", toggleHamburgerMenu);
navbar_home.addEventListener("click", changePageContent);
navbar_education.addEventListener("click", changePageContent);
navbar_experience.addEventListener("click", changePageContent);
navbar_projects.addEventListener("click", changePageContent);
navbar_references.addEventListener("click", changePageContent);
navbar_posts.addEventListener("click", changePageContent);

function toggleHamburgerMenu() {
  hamburger_menu.classList.toggle("is-active");
  navbar_menu.classList.toggle("is-active");
}

function closeHamburgerMenu() {
  hamburger_menu.classList.remove("is-active");
  navbar_menu.classList.remove("is-active");
}

function clearPageContent() {
  page_content.innerHTML = "";
}

async function changePageContent(event) {
  clearPageContent();
  closeHamburgerMenu();
  $(page_content).load("./html/" + event.target.id + ".html");
  if (event.target.id == "education") {
    await new Promise((r) => setTimeout(r, 10));
    setProgress();
  }
}

//load on js load
function init() {
  $(page_content).load("./html/home.html");
}
