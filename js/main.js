(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const yearEl = document.getElementById("year");
  const themeToggle = document.querySelector(".theme-toggle");
  const root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    setTheme(storedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      navToggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      navMenu.classList.toggle("is-open", !open);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        navMenu.classList.remove("is-open");
      });
    });
  }

  const sections = document.querySelectorAll(
    ".section-header, .timeline-item, .project-card, .skill-group, .edu-card, .certs, .contact-card, .about-highlights li, .about-aside"
  );

  sections.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  sections.forEach((el) => observer.observe(el));

  const header = document.querySelector(".site-header");

  window.addEventListener(
    "scroll",
    () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
    },
    { passive: true }
  );
})();