// Navbar toggle button for mobile menu
document.getElementById('menuToggle').addEventListener('click', function() {
  var mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
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

// Toggle the dropdown and handle the show/hide behavior
function toggleDropdown(dropdownId) {
  const dropdownMenu = document.getElementById(dropdownId);
  dropdownMenu.classList.toggle('hidden');
}

// Appear on hover
function showDropdown(id) {
  document.getElementById(id).classList.remove("hidden");
}

function hideDropdown(id) {
  document.getElementById(id).classList.add("hidden");
}

// hero section transitions
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.transition-transform');

  images.forEach(image => {
      setTimeout(() => {
          image.classList.remove('translate-y-20', '-translate-x-20', 'translate-x-20');
      }, 0); // Slight delay to ensure it starts immediately
  });
});  


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


/** 
 * Accordion script to handle multiple accordions 
 * that have class name accordion 
*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        // Close all other panels
        let allPanels = document.getElementsByClassName("panel");
        for (let j = 0; j < allPanels.length; j++) {
            if (allPanels[j] !== panel) {
                allPanels[j].style.display = "none";
                // Remove "active" class from other buttons
                acc[j].classList.remove("active");
                // Reset the icon for other buttons
                resetIcon(acc[j]);
            }
        }

        if (panel.style.display === "block") {
            panel.style.display = "none";
            resetIcon(this);
        } else {
            panel.style.display = "block";
            toggleIcon(this);
        }

    });
}

function resetIcon(element) {
    let icon = element.querySelector('.icon');
    if (icon) {
        icon.innerHTML = '+';
    }
}

function toggleIcon(element) {
    let icon = element.querySelector('.icon');
    if (icon) {
        icon.innerHTML = '-';
    }
}

// scroll to top
window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        scrollToTopButton.classList.remove('opacity-0');
    } else {
        scrollToTopButton.classList.add('opacity-0');
    }
});

document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// load effect
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
          } else {
              entry.target.classList.remove('opacity-100');
              entry.target.classList.add('opacity-0');
          }
      });
  }, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });
});

