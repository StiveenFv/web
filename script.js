// script.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.card');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').substring(1);
            showSection(sectionId);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Mostrar la primera sección por defecto
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});
