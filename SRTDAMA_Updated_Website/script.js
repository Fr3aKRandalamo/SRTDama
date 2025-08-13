document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Animation triggers
  document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
    el.classList.add('visible');
  });

  // Gallery lightbox functionality
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox active';
      lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <img src="${this.src}" alt="${this.alt}" class="lightbox-img">
      `;
      document.body.appendChild(lightbox);
      
      // Close lightbox when clicking X
      lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.remove();
      });
      
      // Close lightbox when clicking outside image
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.remove();
        }
      });
      
      // Close with ESC key
      document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
          lightbox.remove();
          document.removeEventListener('keydown', closeOnEscape);
        }
      });
    });
  });

  // Form submission handling
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will contact you soon.');
      form.reset();
    });
  });
});