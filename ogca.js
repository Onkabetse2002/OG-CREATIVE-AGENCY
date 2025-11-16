document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For now, just log to console (replace with email service)
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    alert('Thank you! Your message has been sent.'); // Replace with actual sending logic

    // To make it functional, integrate with Formspree or similar:
    // 1. Sign up at formspree.io
    // 2. Replace the form action in HTML with your Formspree endpoint
    // Example: <form action="https://formspree.io/f/your-form-id" method="POST">
});