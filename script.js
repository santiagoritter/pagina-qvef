const images1 = [
    'img/botineslolo.jpg',
    'img/camiseta_boca_lolo.jpg',
    'img/canilleras_lolo.jpg'
];

const images2 = [
    'img/pelota_lolo.jpg',
    'img/pelota_fran.jpg',
];

const images3 = [
    'img/camiseta_river_fran.jpg',
    'img/botines_blancos_fran.jpg',
    'img/guantes_nike_fran.jpg'
];

function setupGallery(imageIds, buttonIds, images) {
    let currentIndex = 0;
    
    document.getElementById(buttonIds).addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById(imageIds).src = images[currentIndex];
    });
}

setupGallery('botines', 'next', images1);
setupGallery('botines-2', 'next-2', images2);
setupGallery('botines-3', 'next-3', images3);