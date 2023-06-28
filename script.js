"use strict";

console.log("portfolio website");

const projectsSection = document.getElementById("projects");
const contactsSection = document.getElementById("contact");
const projectsBtn = document.querySelector(".projects-btn");
const contactsBtn = document.querySelector(".contacts-btn");

projectsBtn.addEventListener("click", function () {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

contactsBtn.addEventListener("click", function () {
  contactsSection.scrollIntoView({ behavior: "smooth" });
});
