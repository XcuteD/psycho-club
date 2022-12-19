$(function(){
    $('.reviews__slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        speed: 1000,
        dots: true,
        arrows: false,
        adaptiveHeight: true,
    });

    $('.schedule__timetable-item').on('click', function(event) {
        let height = $(this).next('.schedule__block').children('.schedule__text').outerHeight(true);
        if ($(this).next('.schedule__block').height() == 0) {
            console.log($(this).next('.schedule__block').height());
            $(this).next('.schedule__block').css({transition: `all 0.${parseInt(height)}s`});
            $(this).next('.schedule__block').height(height);
            $(this).next('.schedule__block').addClass('schedule__block_active');
        }
        else {
            $(this).next('.schedule__block').height('0px');
            $(this).next('.schedule__block').removeClass('schedule__block_active');
        }

    })
});

