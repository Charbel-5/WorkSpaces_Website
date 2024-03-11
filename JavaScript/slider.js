// Slider 

var currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.getElementById('slider');

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const newPosition = -currentIndex * 100 + '%';
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = 'translateX(' + newPosition + ')';
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

var autoSlideInterval = setInterval(nextSlide, 3000);

document.getElementById('slider_div').addEventListener('mouseover', () => {
  clearInterval(autoSlideInterval);
});

document.getElementById('slider_div').addEventListener('mouseout', () => {
  autoSlideInterval = setInterval(nextSlide, 3000);
});