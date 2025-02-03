const header = document.querySelector("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const logo = document.querySelector(".logo"); // Target the logo element

// Scroll event listener to change the header, nav links, logo color
window.addEventListener("scroll", () => {
  const navLinks = document.querySelectorAll(".nav-menu li a"); // Get all the navbar links

  if (window.scrollY > 50) {
    header.style.backgroundColor = "#f7a440"; // Set the header background color
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"; // Set box shadow on scroll

    // Change the text color to black, and remove underline on nav links
    navLinks.forEach((link) => {
      link.style.color = "black";
      link.style.textDecoration = "none"; // Ensure no underline is visible
    });

    // Change logo text color
    if (logo) {
      logo.style.color = "black"; // Change logo text color to black
    }
  } else {
    header.style.backgroundColor = "#212121"; // Set the header background color when at the top
    header.style.boxShadow = "none"; // Remove box shadow

    // Change the text color back to white, and remove underline on nav links
    navLinks.forEach((link) => {
      link.style.color = "#fff";
      link.style.textDecoration = "none"; // Remove underline
    });

    // Change logo text color back to white
    if (logo) {
      logo.style.color = "#fff"; // Change logo text color back to white
    }
  }
});

// Toggle navigation menu for mobile view
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
