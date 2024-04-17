document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar-collapse");
    let width = window.innerWidth;

    window.addEventListener("resize", function () {
        if (window.innerWidth !== width) {
            width = window.innerWidth;
            navbar.classList.remove("show");
        }
    });

    document.addEventListener("click", function (event) {
        let navbar = document.querySelector(".navbar-collapse");
        let navbarButton = document.querySelector(".navbar-toggler");

        if (
            !navbar.contains(event.target) &&
            !navbarButton.contains(event.target) &&
            navbar.classList.contains("show")
        ) {
            navbar.classList.remove("show");
        }
    });
});
