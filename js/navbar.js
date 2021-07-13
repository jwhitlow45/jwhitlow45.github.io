// Global elements
const hamburger_menu = document.getElementById("navbar-burger");
const navbar_menu = document.getElementById("navbar-menu");
// navbar buttons
const navbar_home = document.getElementById("home");
const navbar_education = document.getElementById("education");
const navbar_experience = document.getElementById("experience");
const navbar_projects = document.getElementById("projects");
const navbar_references = document.getElementById("references");
// page content
const page_content = document.getElementById("content");

// Event listeners
hamburger_menu.addEventListener("click", toggleHamburgerMenu);
navbar_home.addEventListener("click", changePageContent);
navbar_education.addEventListener("click", changePageContent);
navbar_experience.addEventListener("click", changePageContent);
navbar_projects.addEventListener("click", changePageContent);
navbar_references.addEventListener("click", changePageContent);

function toggleHamburgerMenu() {
  hamburger_menu.classList.toggle("is-active");
  navbar_menu.classList.toggle("is-active");
}

function clearPageContent() {
  page_content.innerHTML = "";
}

async function changePageContent(event) {
  clearPageContent();
  toggleHamburgerMenu();
  $(page_content).load("./html/" + event.target.id + ".html");
  var interval;
  if (event.target.id == "education") {
    await new Promise(r => setTimeout(r, 10));
    setProgress();
    interval = window.setInterval(() => {
      setProgress();
    }, 60000);
  } else {
    clearInterval(interval);
  }
}
