  // Auto-dismiss after 3 seconds
  setTimeout(() => {
    document.getElementById("popupMessage").style.display = "none";
  }, 3000);

  // Manual dismiss
  function closePopup() {
    document.getElementById("popupMessage").style.display = "none";
  }

  const toggleBtn = document.getElementById('nav_toggle');
  const navMenu = document.getElementById('nav_menu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navMenu.classList.toggle('show-menu');
  });

  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
