window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Collapse & Expand Projects
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.toggle-details-container').forEach(function (container) {
    container.addEventListener('click', function () {
      const projectDetails = this.nextElementSibling;
      if (projectDetails.classList.contains('hidden')) {
        projectDetails.classList.remove('hidden');
        projectDetails.style.height = projectDetails.scrollHeight + 'px';
        this.querySelector('.toggle-details').textContent = '▲';
        projectDetails.addEventListener('transitionend', function () {
          projectDetails.style.height = 'auto';
        }, { once: true });
      } else {
        projectDetails.style.height = projectDetails.scrollHeight + 'px';
        requestAnimationFrame(() => {
          projectDetails.style.height = '0';
        });
        projectDetails.classList.add('hidden');
        this.querySelector('.toggle-details').textContent = '▼';
      }
    });
  });
});

// OPEN & CLOSE NAV MOBILE
var sidemenu = document.getElementById("sidemenu")

function openMenu() {
  sidemenu.style.right = "0";
}

function closeMenu() {
  sidemenu.style.right = "-200px";
}