$(document).ready(function () {

    $('.goTop').click((e) => {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    })

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})