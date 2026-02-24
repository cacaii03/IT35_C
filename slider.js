let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');

function showSlide(index) {
  slides.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 2000);
showSlide(currentSlide);
