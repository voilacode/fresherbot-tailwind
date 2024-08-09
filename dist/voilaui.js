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

// load effect

// typewriter effect
const sentence = "Building Your Future?";
let currentLetterIndex = 0;
const textElement = document.getElementById("text");
let isTypewriting = true;

function showNextLetter() {
    if (isTypewriting && currentLetterIndex < sentence.length) {
        const letter = sentence[currentLetterIndex];

        if (letter === "?") {
            textElement.innerHTML += `<span class="color-change">${letter}</span>`;
        } else if (currentLetterIndex > sentence.indexOf("?")) {
            textElement.innerHTML += `<span class="color-change">${letter}</span>`;
        } else {
            textElement.innerHTML += `<span>${letter}</span>`;
        }
        currentLetterIndex++;
    } else {
        isTypewriting = false;
        clearInterval(typewriterInterval); // Stop the interval once typing is done
    }
    // Update the cursor position
    updateCursor();
}

function updateCursor() {
    // Remove existing cursor
    document.querySelectorAll(".cursor").forEach(cursor => cursor.remove());

    // Add the cursor at the end
    if (isTypewriting || !isTypewriting && currentLetterIndex === sentence.length) {
        textElement.innerHTML += `<span class="cursor text-gray-500">|</span>`;
    }
}

const typewriterInterval = setInterval(() => {
    showNextLetter();
}, 150);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
    .cursor {
        animation: blink 1s step-end infinite;
    }
`;
document.head.appendChild(style);
