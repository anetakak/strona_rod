$(document).ready(function () {
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        prevArrow: `<i class="slick-prev fa-solid fa-circle-arrow-left"></i>`,
        nextArrow: `<i class="slick-next fa-solid fa-circle-arrow-right"></i>`,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],

    });
})