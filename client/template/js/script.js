$(document).on('ready', function () {

    var sidebar = $('.sidebar')
    var navbarLinks = $('.nav a.link')
    sidebar.on('mouseenter', function () {
        navbarLinks.css('color', '#fff')
    })
    sidebar.on('mouseleave', function () {
        navbarLinks.css('color', '#2D2D2D')
    })


    //Slider config
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });


})