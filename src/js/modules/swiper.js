function sliderSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        parallax: true,
        speed: 1000,
        slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 480px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            1000: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        },

        keyboard: {
            enabled: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.slider__btn-next',
            prevEl: '.slider__btn-prew',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

export default sliderSwiper;