const slides = document.querySelectorAll('.galeria__img');
const galleryButtonLeft = document.querySelector('.galeria__btn--left');
const galleryButtonRight = document.querySelector('.galeria__btn--right');

// Carousel Function
const carousel = function () {
    // Se hace visible el primer slide
    slides[0].classList.add('galeria__img--visible');

    let position = 0;
    // Numero de Slides totales
    const totalSlides = slides.length;

    // Logica para ver la imagen siguiente
    const moveRightSlide = function () {
        slides[position].classList.remove('galeria__img--visible');
        if (position < totalSlides) {
            position++;
        }
        if (position >= totalSlides) {
            position = 0;
        }
        slides[position].classList.add('galeria__img--visible');

        clearInterval(autoSlides);
        autoSlides = setInterval(moveRightSlide, timeSlide);
    };

    // Logica para ver la imagen anterior
    const moveLeftSlide = function () {
        slides[position].classList.remove('galeria__img--visible');
        if (position > 0) {
            position--;
        } else if (position <= 0) {
            position = totalSlides - 1;
        }
        slides[position].classList.add('galeria__img--visible');
    };

    const timeSlide = 5000;
    let autoSlides = setInterval(moveRightSlide, timeSlide);

    // Se agrega evento a boton derecho del carrusel
    galleryButtonRight.addEventListener('click', function () {
        moveRightSlide();
    });

    // Se agrega evento a boton izquierdo del carrusel
    galleryButtonLeft.addEventListener('click', function () {
        moveLeftSlide();
    });
};

carousel();
