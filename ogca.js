// ========================
// OG CREATIVE AGENCY JS
// ========================

// ---------- EmailJS Setup ----------
const serviceID = 'service_cnixn9e';
const adminTemplateID = 'template_6t6x5kq';  // Sends email to you
const clientTemplateID = 'template_aqhupw5'; // Sends confirmation to client
const publicKey = 'hFJwWMb6MB3TbaJO9';

emailjs.init(publicKey);

// ---------- Hamburger Menu ----------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
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

// ---------- Contact Form ----------
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('form-modal');
const modalMessage = document.getElementById('modal-message');
const modalClose = document.getElementById('modal-close');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    modalMessage.textContent = 'Sending message...';
    modal.style.display = 'block';

    // Send email to admin first
    emailjs.sendForm(serviceID, adminTemplateID, this)
      .then(() => {
        // Send confirmation email to client
        return emailjs.sendForm(serviceID, clientTemplateID, this);
      })
      .then(() => {
        modalMessage.innerHTML = '✅ Thank you! Your message has been sent. We’ll get back to you shortly.';
        contactForm.reset();
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        modalMessage.innerHTML = '❌ Failed to send message. Please check your input and try again.';
      });
  });
}

// ---------- Modal Close ----------
modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
window.addEventListener('click', (e) => { if(e.target === modal){ modal.style.display = 'none'; } });
