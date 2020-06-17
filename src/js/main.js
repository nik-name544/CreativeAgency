$(function () {
    $('.header__menu-btn').on('click', function () {
        $('.header__list').toggleClass("off");
    });

    $('.like-slider__inner').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
});