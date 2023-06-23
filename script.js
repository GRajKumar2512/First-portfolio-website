const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav__links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show"); // Toggle the visibility of the navigation links
});
