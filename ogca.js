// ================= EMAILJS CONFIG =================
const serviceID = 'service_cnixn9e';
const adminTemplateID = 'template_6t6x5kq';
const clientTemplateID = 'template_aqhupw5';
const publicKey = 'hFJwWMb6MB3TbaJO9';

emailjs.init(publicKey);

// ================= HAMBURGER MENU =================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  hamburger.setAttribute(
    'aria-expanded',
    hamburger.classList.contains('active')
  );
});

navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

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

// ================= CONTACT FORM WITH MODAL =================
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('form-modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show sending message in modal
    modalMessage.textContent = 'Sending message...';
    modal.style.display = 'block';

    // 1️⃣ Send email to admin
    emailjs.sendForm(serviceID, adminTemplateID, this)
      .then(() => {
        // 2️⃣ Send confirmation email to client
        return emailjs.sendForm(serviceID, clientTemplateID, contactForm);
      })
      .then(() => {
        modalMessage.innerHTML = '✅ Thank you! Your message has been sent. We’ll get back to you shortly.';
        contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        modalMessage.innerHTML = '❌ Failed to send message. Please try again later.';
      });
  });
}

// Close modal when X is clicked
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
