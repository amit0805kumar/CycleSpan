$(function () {

    var sidebar = $('.sidebar')
    var navbarLinks = $('.nav a.link')
    sidebar.on('mouseenter', function () {
        navbarLinks.css('color', '#fff')
    })
    sidebar.on('mouseleave', function () {
        navbarLinks.css('color', '#2D2D2D')
    })
})
