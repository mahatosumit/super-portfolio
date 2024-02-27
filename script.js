function toggleNavbar() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Toggle the 'active' class on the navbar element
    navbar.classList.toggle('active');
}

// Add this in your script.js or wherever you handle your JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const checkbox = document.getElementById("check");
  
    menuIcon.addEventListener("click", function () {
      checkbox.checked = !checkbox.checked;
    });
  });
  