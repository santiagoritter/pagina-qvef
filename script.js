let slideIndex = 0;
const slidesToShow = 3; // Number of slides to show at once
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides - slidesToShow + 1) {
        slideIndex = 0; // Loop back to the start
    } else if (index < 0) {
        slideIndex = totalSlides - slidesToShow; // Loop to the end
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * (100 / slidesToShow);
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

// Initialize
showSlide(slideIndex);

// Autoplay functionality
const autoplayInterval = 5000; // Change slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, autoplayInterval);
