function openLightbox(imageUrl) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxImgContainer = document.getElementById("lightbox-img-container");

  lightboxImg.src = imageUrl;
  lightbox.style.display = "block";
}

function openLightbox(imageUrl) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    lightboxImg.src = imageUrl;
    lightbox.style.display = "block";
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  
  function showSlide(offset) {
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll('.card-img-top');
    const currentImageSrc = lightboxImg.src;
  
    let newIndex = 0;
    for (let i = 0; i < images.length; i++) {
      if (images[i].src === currentImageSrc) {
        newIndex = i + offset;
        break;
      }
    }
  
    if (newIndex >= images.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = images.length - 1;
    }
  
    lightboxImg.src = images[newIndex].src;
  }
  
  function nextSlide() {
    showSlide(1);
  }
  
  function prevSlide() {
    showSlide(-1);
  }
  
  const images = document.querySelectorAll('.card-img-top');
  images.forEach(image => {
    image.addEventListener('click', function() {
      openLightbox(image.src);
    });
  });
  
  document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this.querySelector('.close')) {
      closeLightbox();
    }
  });
  
  document.getElementById("lightbox-img").addEventListener("click", function(event) {
    event.stopPropagation();
  });
  