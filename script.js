// Select sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

// Update navigation links on scroll
window.addEventListener('scroll', () => {
    // Check each section's position
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if section is in the viewport
        if (top >= offset && top < offset + height) {
            // Activate corresponding navigation link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });

    // Add sticky behavior to the header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
});