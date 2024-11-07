function toggleMobileMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const menuIcon = document.getElementById('menuIcon');
  
    mainMenu.classList.toggle('hidden');
  
    // Toggle between icons
    if (mainMenu.classList.contains('hidden')) {
      menuIcon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />';
    } else {
      menuIcon.innerHTML =
        '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />';
    }
  }
  
  function closeOtherDropdowns(currentDropdownId) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown) => {
      if (dropdown.id !== currentDropdownId) {
        dropdown.classList.add('hidden');
      }
    });
  }
  
  document.querySelectorAll('[id^="dropdownToggle"]').forEach((toggle) => {
    toggle.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent event from bubbling up
      const dropdownId = this.id.replace('Toggle', 'Menu'); // Replace 'Toggle' with 'Menu'
      const dropdownMenu = document.getElementById(dropdownId);
      closeOtherDropdowns(dropdownId);
      dropdownMenu.classList.toggle('hidden');
    });
  });
  
  // Close the dropdowns when clicking outside of them
  document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown) => {
      if (!dropdown.classList.contains('hidden')) {
        const toggle = document.getElementById(
          dropdown.id.replace('menu', 'Toggle')
        );
        if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.classList.add('hidden');
        }
      }
    });
  });
  
  // appear on hover
  function showDropdown(id) {
    document.getElementById(id).classList.remove('hidden');
  }
  
  function hideDropdown(id) {
    document.getElementById(id).classList.add('hidden');
  }
  
  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.classList.contains('hidden')) {
      showDropdown(id);
    } else {
      hideDropdown(id);
    }
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
const carousel = document.getElementById('slides');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');

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

nextBtn1.addEventListener('click', () => {
  const visibleCards = getVisibleCards();
  const totalCards = carousel.children.length;

  if (index >= totalCards - visibleCards) {
    index = 0;
  } else {
    index++;
  }

  moveCarousel();
});

prevBtn1.addEventListener('click', () => {
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
const sentence = "Future?";
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

// Scroll to top button logic
window.addEventListener('scroll', function () {
  var scrollToTopButton = document.getElementById('scrollToTop');
  // Check if user has scrolled more than 200px
  if (window.scrollY > 200) {
    scrollToTopButton.classList.remove('opacity-0');
    scrollToTopButton.classList.add('visible'); // Add a class to make the button visible
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('opacity-0');
    scrollToTopButton.classList.remove('visible'); // Hide the button
    scrollToTopButton.classList.add('hidden');
  }
});

document.getElementById('scrollToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});