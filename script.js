document.addEventListener('DOMContentLoaded', function() {
  // Animation triggers
  document.querySelectorAll('.fade-in, .slide-up').forEach(function(el) {
    el.classList.add('visible');
  });

  // Set active navigation link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Form submission handler
  const forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would normally send the form data to a server
      alert('Thank you for your message! We will contact you soon.');
      form.reset();
    });
  });
});