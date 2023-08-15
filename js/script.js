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