// Get the current page
const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll("nav ul li a");

// Loop through each link
navLinks.forEach(link => {
  const href = link.getAttribute("href");

  // If the page matches the link's href
  if (href === pageName) {
    link.classList.add("active");

    // If it's a dropdown item (Joena, Joy, Marian)
    const parentDropdown = link.closest(".dropdown");
    if (parentDropdown) {
      const parentLink = parentDropdown.querySelector(".dropbtn");
      if (parentLink) {
        parentLink.classList.add("active"); // Highlight the main "Christian Influencers" button too
      }
    }
  }
});
