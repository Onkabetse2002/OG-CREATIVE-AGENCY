// Hamburger Menu Toggle Functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Animate hamburger to X
  navMenu.classList.toggle('active'); // Show/hide menu overlay
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active')); // Accessibility update
});

// Close menu when a link is clicked (for better UX on mobile)
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Optional: Close menu on outside click or escape key (enhances usability)
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// Basic Form Handling (Fallback if not using Formspree; remove if unnecessary)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // For demo: Log to console (replace with actual send logic if not using Formspree)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you! Your message has been sent.'); // Replace with real feedback

    // Reset form
    contactForm.reset();
  });
}
