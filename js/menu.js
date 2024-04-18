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

const icon = document.querySelector("#icon");
let menuOpen = false;
let lastClick = 0;
const delay = 1000;

icon.addEventListener("click", () => {
    const now = new Date().getTime();
    if (now - lastClick < delay) return; 
    lastClick = now;

    if (menuOpen) {
        icon.classList.add("rotate-out");
        setTimeout(() => {
            icon.classList.remove("fa-times", "rotate-out");
            icon.classList.add("fa-bars", "rotate-in");
        }, 10); 
    } else {
        icon.classList.add("rotate-out");
        setTimeout(() => {
            icon.classList.remove("fa-bars", "rotate-out");
            icon.classList.add("fa-times", "rotate-in");
        }, 10); 
    }

    menuOpen = !menuOpen;
});