let arrOfSlides = Array.from(document.getElementsByClassName('slider__item'));
let nextSlideButton = document.getElementsByClassName('slider__arrow_next')[0];
let prevSlideButton = document.getElementsByClassName('slider__arrow_prev')[0];

nextSlideButton.onclick = function() {
    let activeIndex = arrOfSlides.findIndex(item=> item.classList.contains('slider__item_active'))
    arrOfSlides[activeIndex].classList.remove('slider__item_active');
    let nextSlideIndex = activeIndex==(arrOfSlides.length-1) ? 0 : (activeIndex+1);
    arrOfSlides[nextSlideIndex].classList.add('slider__item_active')
};

prevSlideButton.onclick = function() {
    let activeIndex = arrOfSlides.findIndex(item=> item.classList.contains('slider__item_active'))
    arrOfSlides[activeIndex].classList.remove('slider__item_active');
    let nextSlideIndex = activeIndex==0 ? (arrOfSlides.length-1) : (activeIndex-1);
    arrOfSlides[nextSlideIndex].classList.add('slider__item_active')
};
