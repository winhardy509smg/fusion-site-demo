// script.js : JS pour interactions dynamiques

// Demo button that changes the background color
document.getElementById('demoBtn').addEventListener('click', function () {
  document.body.style.background = 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)';
  setTimeout(() => {
    document.body.style.background = '';
  }, 1200);
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formResponse').classList.remove('hidden');
  // Optionally clear fields
  setTimeout(() => {
    document.getElementById('formResponse').classList.add('hidden');
    document.getElementById('contactForm').reset();
  }, 3000);
});