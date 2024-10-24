const images = [
    'img/botines_rojos_phantom1.jpeg',
    'img/botines_rojos_phantom2.jpeg',
    'img/botines_rojos_phantom3.jpeg',
    'img/botines_rojos_phantom4.jpeg',
    'img/botines_rojos_phantom_pezzella.jpeg',
];

let currentIndex = 0;
const mainImage = document.getElementById('mainImage');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function updateMainImage() {
    mainImage.src = images[currentIndex];
    updateActiveThumbnail();
}

function updateActiveThumbnail() {
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

function createThumbnails() {
    images.forEach((src, index) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.classList.add('thumbnail');
        thumb.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage();
        });
        thumbnailsContainer.appendChild(thumb);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage();
});

createThumbnails();
updateMainImage();