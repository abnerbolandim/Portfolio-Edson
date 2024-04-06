function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  function handleScroll() {
    let scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("showBtn");
    } else {
      scrollToTopBtn.classList.remove("showBtn");
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  