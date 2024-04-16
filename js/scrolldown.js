document.addEventListener('DOMContentLoaded', function() {

    var animation = lottie.loadAnimation({
      container: document.getElementById('click-gif'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json/click-gif.json' 
    });
  });
  