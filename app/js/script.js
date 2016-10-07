$(document).ready(function () {
    $(function () {
        $('.menu').slicknav({
            label: 'Меню',
            prependTo: 'nav'
        });
    });
    if ($('.slider_row').length) {
        $('.slider').slick({
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000
        });
    }
    //слайдер в товаре 2
    if ($('.slider_row').length) {
        $('.slider_row').slick({
            arrows: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                    }
    },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
    },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    },

    },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    },

    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });
    }

    $('body').click(function () {
        alert('this goood');
    });
});