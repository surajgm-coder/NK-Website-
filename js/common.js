document.addEventListener("DOMContentLoaded", () => {
  fetch("common.html")
    .then(response => response.text())
    .then(data => {
      const temp = document.createElement("div");
      temp.innerHTML = data;

      // Inject header
      const header = temp.querySelector("header");
      if (header) {
        document.getElementById("header").appendChild(header);
      }

      // Inject footer
      const footer = temp.querySelector("footer");
      if (footer) {
        document.getElementById("footer").appendChild(footer);
      }

      setActiveMenu();
      setupMobileMenu();
    })
    .catch(error => console.error("Common HTML load error:", error));
});

// Highlight active menu
function setActiveMenu() {
  const page =
    location.pathname.split("/").pop().replace(".html", "") || "index";

  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}
