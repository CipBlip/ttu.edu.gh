document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
      body.style.overflow = navLinks.classList.contains("show") ? "hidden" : "";

      // Toggle between hamburger and close icons
      const icon = this.querySelector("span");
      if (icon) {
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !menuToggle.contains(e.target) &&
        !navLinks.contains(e.target) &&
        navLinks.classList.contains("show")
      ) {
        navLinks.classList.remove("show");
        body.style.overflow = "";
        const icon = menuToggle.querySelector("span");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Handle dropdown menus in mobile view
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      const link = dropdown.querySelector("a");
      if (link) {
        link.addEventListener("click", function (e) {
          if (window.innerWidth <= 786) {
            e.preventDefault();
            const menu = this.nextElementSibling;
            if (menu) {
              menu.style.display =
                menu.style.display === "flex" ? "none" : "flex";
            }
          }
        });
      }
    });
  }
});
