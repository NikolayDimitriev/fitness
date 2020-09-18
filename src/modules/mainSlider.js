const mainSlider = () => {
    const slide = document.querySelectorAll('.main-slider>.slide');

    let currentSlide = 0;

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    setInterval(autoPlaySlide, 2000);

};

export default mainSlider;