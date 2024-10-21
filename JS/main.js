document.getElementById('navbarToggle').addEventListener('click', function () {
    const navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('show');
});

// script.js
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });
    });
});
