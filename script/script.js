"use strict";

//Function to scroll up after page reload
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 100); //The elements are loaded and ready for the scroll to execute correctly
};
//hide title if responsive
document.addEventListener("DOMContentLoaded", function () {
  let navbarCollapse = document.querySelector(".navbar-collapse");
  let heroTitle = document.querySelector(".hero_title");

  navbarCollapse.addEventListener("shown.bs.collapse", function () {
    heroTitle.classList.add("hidden");
  });

  navbarCollapse.addEventListener("hidden.bs.collapse", function () {
    heroTitle.classList.remove("hidden");
  });
});

// Function to add the "navbarDark" class to the navbar on scroll
function handleNavbarScroll() {
  const header = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    const top = window.scrollY;
    if (top >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  });
}

// Function to handle navbar collapse on small devices after a click
function handleNavbarCollapse() {
  const navLinks = document.querySelectorAll(".nav-item");
  const menuToggle = document.getElementById("navbarSupportedContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      new bootstrap.Collapse(menuToggle).hide(); // Changed toggle() to hide()
    });
  });
}

function createFromJSON(data, containerSelector, includeButton, buttonLabel) {
  const container = document.querySelector(containerSelector);
  let row = document.createElement("div");
  row.classList.add("row");

  // Iterate through the JSON data and create HTML elements
  data.forEach((item, index) => {
    const linkHtml = `<a href="${item.link}" target="_blank" class="btn btn-success">${buttonLabel}</a>`;
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "mt-4");
    card.innerHTML = `
      <div class="card portfolioContent">
        <img class="card-img-top" src="images/${
          item.image
        }" alt="img" style="width:100%">
        <div class="card-body">
          <h4 class="card-title">${item.title}</h4>
          <p class="card-text">${item.text}</p>
          <div class="text-center"> 
          ${includeButton ? linkHtml : ""}
        </div>
        </div>
      </div>
    `;

    // Append the card to the current row
    row.appendChild(card);

    // If the index is a multiple of 3 .or it's the last element, create a new row
    if ((index + 1) % 3 === 0 || index === data.length - 1) {
      container.appendChild(row);
      row = document.createElement("div");
      row.classList.add("row");
    }
  });
}

// Call the functions to execute the code
handleNavbarScroll();
handleNavbarCollapse();
