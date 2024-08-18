let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const slideWidth = slides[0].clientWidth;
    const carouselInner = document.getElementById('carousel-inner');

    carouselInner.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializar el carrusel y los slides
showSlide(currentSlide);

// Opcional: Configurar el cambio automático de imagen
setInterval(nextSlide, 3000); // Cambia automáticamente cada 3 segundos
