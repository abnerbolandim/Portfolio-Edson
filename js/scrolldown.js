document.addEventListener('DOMContentLoaded', function() {

    var animation = lottie.loadAnimation({
      container: document.getElementById('click-gif'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/click-gif.json' 
    });
  });
  
  function scrollDown(){
    let gifScroll = document.getElementById('click-gif');
    if (window.scrollY > 100) {
      gifScroll.classList.add("hideGif");
    } else {
      gifScroll.classList.remove("hideGif");
    }
  }

window.addEventListener("scroll", scrollDown);