// EmailJS setup (replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with your actual IDs from EmailJS dashboard)
const serviceID = 'ogservice_abc123';  // e.g., 'service_abc123' - Get from Email Services
const templateID = 'template_b1jdwlh';  // e.g., 'template_xyz789' - Get from Email Templates
const publicKey = 'hFJwWMb6MB3TbaJO9';  // Your Public Key

// Initialize EmailJS
emailjs.init(publicKey);

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

// Handle contact form submission with EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default submission
    const statusDiv = document.getElementById('form-status');
    statusDiv.innerHTML = 'Sending...';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        statusDiv.innerHTML = '<p style="color: green;">Thank you! Your message has been sent. I\'ll get back to you soon.</p>';
        this.reset(); // Clear the form
      }, (error) => {
        console.error('EmailJS Error:', error);  // For debugging
        statusDiv.innerHTML = '<p style="color: red;">Failed to send message. Please try again or email me directly.</p>';
      });
  });
}