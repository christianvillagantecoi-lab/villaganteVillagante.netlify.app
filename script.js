document.addEventListener('DOMContentLoaded', function() {
    // 1. **Responsive Navigation Toggle (for Mobile)**
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        // Toggles the 'active' class on the nav menu for mobile view
        navMenu.classList.toggle('active');

        // Update the aria-expanded attribute for accessibility
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // 2. **Simple Form Submission Message**
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default form submission

            // Simple user feedback
            alert('Thank you for your message! I will get back to you soon.');

            // In a real application, you would use fetch() here to send data to a backend server.
            contactForm.reset(); // Clear the form fields
        });
    }

    // 3. **Smooth Scrolling for Nav Links (Optional, modern browsers support it via CSS scroll-behavior: smooth)**
    document.querySelectorAll('#nav-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Optional: Close the mobile menu after clicking a link
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});