document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");
  const navmenu = document.getElementById("navmenu");
  const icon = hamburger.querySelector("i");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navmenu.classList.toggle("active")
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-bars-staggered")
  });
});
