// navbar
document.getElementById('menuToggle').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
  } else {
      mobileMenu.classList.add('hidden');
  }
});

document.getElementById('dropdownToggle2').addEventListener('click', function (event) {
  event.stopPropagation();
  toggleDropdown('dropdownMenu2');
});

// Close the dropdowns when clicking outside of them
document.addEventListener('click', function (event) {
  const dropdowns = ['dropdownMenu', 'dropdownMenu1', 'dropdownMenu2'];

  dropdowns.forEach((dropdownId) => {
      const dropdownMenu = document.getElementById(dropdownId);
      const dropdownToggle = document.getElementById(`dropdownToggle${dropdownId === 'dropdownMenu' ? '' : dropdownId.slice(-1)}`);
      
      if (dropdownToggle && dropdownMenu && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.add('hidden');
      }
  });
});

// Appear on hover
function showDropdown(id) {
  document.getElementById(id).classList.remove("hidden");
}

function hideDropdown(id) {
  document.getElementById(id).classList.add("hidden");
}


// current scenarios carousel
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function getVisibleCards() {
  const cardWidth = carousel.children[0].offsetWidth;
  return Math.floor(carousel.offsetWidth / cardWidth);
}

function getCardWidth() {
  return carousel.children[0].offsetWidth + parseFloat(window.getComputedStyle(carousel.children[0]).marginRight);
}

function moveCarousel() {
  const cardWidth = getCardWidth();
  carousel.style.transition = 'transform 0.3s ease-in-out';
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  const totalCards = carousel.children.length;

  if (index >= totalCards - visibleCards) {
    index = 0;
  } else {
    index++;
  }

  moveCarousel();
});

prevBtn.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  const totalCards = carousel.children.length;

  if (index <= 0) {
    index = totalCards - visibleCards;
  } else {
    index--;
  }

  moveCarousel();
});

// Recalculate and reset the carousel on window resize
window.addEventListener('resize', () => {
  index = 0;
  carousel.style.transition = 'none';
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
