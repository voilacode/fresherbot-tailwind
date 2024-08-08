// navbar
document.getElementById('menuToggle').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
  } else {
      mobileMenu.classList.add('hidden');
  }
});


// current scenarios carousel
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalCards = carousel.children.length; // Total number of cards
const visibleCards = 3; // Number of visible cards at a time
const cardWidth = carousel.children[0].offsetWidth + parseFloat(window.getComputedStyle(carousel.children[0]).marginRight); // Card width including margin

// Initialize carousel
carousel.style.transform = `translateX(0px)`;

// Function to move the carousel
function moveCarousel() {
  carousel.style.transition = 'transform 0.3s ease-in-out';
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Next button click event
nextBtn.addEventListener('click', () => {
  if (index >= totalCards - visibleCards) {
    // Loop back to the first card
    carousel.style.transition = 'none';
    index = 0;
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    // Trigger reflow to reset transition
    carousel.offsetWidth; 
    carousel.style.transition = 'transform 0.3s ease-in-out';
    index++;
  } else {
    index++;
  }
  moveCarousel();
});

// Previous button click event
prevBtn.addEventListener('click', () => {
  if (index <= 0) {
    // Loop back to the last card
    carousel.style.transition = 'none';
    index = totalCards - visibleCards;
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    // Trigger reflow to reset transition
    carousel.offsetWidth; 
    carousel.style.transition = 'transform 0.3s ease-in-out';
    index--;
  } else {
    index--;
  }
  moveCarousel();
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
      document.getElementById('content').classList.remove('opacity-0');
      document.getElementById('job-openings').classList.remove('opacity-0');
      document.getElementById('hackathons').classList.remove('opacity-0');
      document.getElementById('interview-prep').classList.remove('opacity-0');
      document.getElementById('cta-buttons').classList.remove('opacity-0');
      document.getElementById('hero-image').classList.remove('opacity-0');
  }, 200); // delay to make the transition noticeable
});
