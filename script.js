"use strict";

console.log("portfolio website");

const projectsSection = document.getElementById("projects");
const contactsSection = document.getElementById("contact");

function navigateToProjects() {
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

function navigateToContacts() {
  contactsSection.scrollIntoView({ behavior: "smooth" });
}
