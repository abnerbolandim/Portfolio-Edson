$(function () {
    let navbar = $(".navbar-collapse");
    let width = $(window).width();
    $(window).on("resize", function () {
        if ($(this).width() != width) {
            width = $(this).width();
            navbar.collapse("hide");
        }
    });
});

$(document).on("click", function(event){
    let navbar = $(".navbar-collapse");
    let navbarButton = $(".navbar-toggler");

    if (!navbar.is(event.target) && !navbarButton.is(event.target) && navbar.hasClass("show")) {
        navbar.collapse("hide");
    }
});