$(function () {
    var navbar = $(".navbar-collapse");
    var width = $(window).width();
    $(window).on("resize", function () {
        if ($(this).width() != width) {
            width = $(this).width();
            navbar.collapse("hide");
        }
    });
});

$(document).on("click", function(event){
    var navbar = $(".navbar-collapse");
    var navbarButton = $(".navbar-toggler");

    if (!navbar.is(event.target) && !navbarButton.is(event.target) && navbar.hasClass("show")) {
        navbar.collapse("hide");
    }
});