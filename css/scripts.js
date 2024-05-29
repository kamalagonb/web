let galleryIndex = 0;

function moveGallery(n) {
  const gallery = document.querySelector('.gallery .row');
  const images = gallery.querySelectorAll('a');
  galleryIndex += n;

  if (galleryIndex >= images.length) {
    galleryIndex = 0;
  }
  if (galleryIndex < 0) {
    galleryIndex = images.length - 1;
  }

  const offset = -galleryIndex * 250; // assuming each image is 250px wide
  gallery.style.transform = `translateX(${offset}px)`;
}

// Mostrar la primera imagen inicialmente
moveGallery(0);
