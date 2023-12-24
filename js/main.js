$(document).ready(function () {
    //============= header burger ==============
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__link').click(function () {
        $('body').removeClass('lock');
        $('.header__burger, .header__menu').removeClass('active');
    });
    //============= inner slider ==============
    $('.inner__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        appendDots: '.slick-dots-replaced',
        autoplay: false,


    });
    //===================
    $(window).resize(function () {
        if ($(window).width() < 1100) {
            $('.features__photo_source').attr('srcset', 'img/features0.5.png');
        } else {
            $('.features__photo_source').attr('srcset', 'img/features0.75.png');
        }

    });
    // ============ advices slider ============

    $('.advices__slider').slick({
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
        ]

    });
    //============= advices gallery ==============
    $('.fancybox1').fancybox({
        loop: true,
    });
    $('.fancybox2').fancybox({
        loop: true,
    });
    $('.fancybox3').fancybox({
        loop: true,
    });
    var fan = $('.fancybox-thumb');
    fan.mouseenter(function () {
        $(this).parent().children().attr('data-fancybox', 'gallery');

    });


    // ============= quotes slider ===========
    $('.quotes__slider').slick({
        dots: true,
        arrows: false,

    });

    // =============== FAQ ================
    $('.question__text').click(function () {
        $(this).children().children().toggleClass('open');
        $(this).toggleClass('active');
        $(this).parent().children().toggleClass('visible');
    });

});
