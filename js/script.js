$ (document).ready(function(){
    $('.eventsSlider').slick({
        speed: 800,
        slidesToShow:3,
        slidesToScroll: 3,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.slider').slick({
        speed: 300,
        slidesToShow:4,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(".prev-btn").click(function () {
        $(".slider").slick("slickPrev");
    });
    $(".next-btn").click(function () {
        $(".slider").slick("slickNext");
    });

    $ (document).ready(function(){
        $('.sliderArticle').slick({
            dots: true,
            speed: 300,
            arrows: false,
            slidesToShow: 1
        });
        $(".prev-btnArt").click(function () {
            $(".sliderArticle").slick("slickPrev");
        });
        $(".next-btnArt").click(function () {
            $(".sliderArticle").slick("slickNext");
        });
    });
});
