// script.js

// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Stats counter animation
document.querySelectorAll('.stat-number').forEach(counter => {
  const target = parseInt(counter.getAttribute('data-target'));
  let count = 0;
  const increment = target / 150;

  const update = () => {
    if (count < target) {
      count += increment;
      counter.textContent = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.textContent = target;
    }
  };
  update();
});
