document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la sección de introducción al cargar la página
    document.querySelector('#intro').classList.remove('hidden');

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // Ocultar todas las secciones
            document.querySelectorAll('main section').forEach(section => section.classList.add('hidden'));
            // Mostrar la sección correspondiente
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});

