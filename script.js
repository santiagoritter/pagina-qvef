let currentIndex = 0;
let visibleImages = 5; // Por defecto para pantallas grandes

function updateVisibleImages() {
    const width = window.innerWidth;

    if (width <= 480) {
        visibleImages = 1; // Para pantallas muy pequeñas
    } else if (width <= 768) {
        visibleImages = 2; // Para pantallas pequeñas
    } else {
        visibleImages = 5; // Para pantallas grandes
    }

    // Actualiza el desplazamiento para reflejar el número de imágenes visibles
    moveSlide(0); // Para recalcular el desplazamiento
}

function moveSlide(direction) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = totalImages - visibleImages; // Ir al final
    } else if (newIndex > totalImages - visibleImages) {
        newIndex = 0; // Volver al principio
    }

    currentIndex = newIndex;

    const offset = -currentIndex * (100 / visibleImages);
    images.style.transform = `translateX(${offset}%)`;
}

// Llama a esta función al cargar la página y al redimensionar
updateVisibleImages();
window.addEventListener('resize', updateVisibleImages);
