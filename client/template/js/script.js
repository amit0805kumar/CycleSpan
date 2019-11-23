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

    //Rellax.js config
    var rellax1 = new Rellax('.circle', {
        speed: 1,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    var rellax2 = new Rellax('.helmet', {
        speed: 2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    var rellax3 = new Rellax('.glass', {
        speed: -1,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    var rellax3 = new Rellax('.save', {
        speed: 2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });
    var rellax4 = new Rellax('.zigzag', {
        speed: 2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });



})