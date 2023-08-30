$ (document).ready(function(){
    $('.eventsSlider').slick({
        speed: 800,
        slidesToShow:3,
        slidesToScroll: 3,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    });

    $('.slider').slick({
        speed: 300,
        slidesToShow:4,
        arrows: false
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
