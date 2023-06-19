$(document).ready(function () {
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        mobileFirst: true,
        arrows: false,
        responsive: [{
            breakpoint: 700,
            settings: {
                arrows: true,
                prevArrow: `<i class="slick-prev fa-solid fa-circle-arrow-left"></i>`,
                nextArrow: `<i class="slick-next fa-solid fa-circle-arrow-right"></i>`
            }
        }],

    });
})