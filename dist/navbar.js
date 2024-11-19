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
        dropdown.classList.add('opacity-0', 'scale-y-0');
        setTimeout(() => dropdown.classList.add('hidden'), 300); // Match animation duration
      }
    });
  }
  
  document.querySelectorAll('.relative').forEach((dropdownItem) => {
    const toggleButton = dropdownItem.querySelector('[id^="dropdownToggle"]');
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
  
    // Desktop: Show on hover
    dropdownItem.addEventListener('mouseenter', function () {
      if (window.innerWidth >= 1024) {
        closeOtherDropdowns(dropdownMenu.id);
        dropdownMenu.classList.remove('hidden');
        setTimeout(() => {
          dropdownMenu.classList.add('opacity-100', 'scale-y-100');
          dropdownMenu.classList.remove('opacity-0', 'scale-y-0');
        }, 10); // Small delay for animation
      }
    });
  
    dropdownItem.addEventListener('mouseleave', function () {
      if (window.innerWidth >= 1024) {
        dropdownMenu.classList.add('opacity-0', 'scale-y-0');
        dropdownMenu.classList.remove('opacity-100', 'scale-y-100');
        setTimeout(() => dropdownMenu.classList.add('hidden'), 300);
      }
    });
  
    // Mobile: Toggle on click
    toggleButton.addEventListener('click', function (event) {
      event.stopPropagation();
      if (window.innerWidth < 1024) {
        closeOtherDropdowns(dropdownMenu.id);
        if (dropdownMenu.classList.contains('hidden')) {
          dropdownMenu.classList.remove('hidden');
          setTimeout(() => {
            dropdownMenu.classList.add('opacity-100', 'scale-y-100');
            dropdownMenu.classList.remove('opacity-0', 'scale-y-0');
          }, 10);
        } else {
          dropdownMenu.classList.add('opacity-0', 'scale-y-0');
          dropdownMenu.classList.remove('opacity-100', 'scale-y-100');
          setTimeout(() => dropdownMenu.classList.add('hidden'), 300);
        }
      }
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function (event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown) => {
      if (!dropdown.classList.contains('hidden')) {
        const toggle = document.getElementById(
          dropdown.id.replace('Menu', 'Toggle')
        );
        if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.classList.add('opacity-0', 'scale-y-0');
          dropdown.classList.remove('opacity-100', 'scale-y-100');
          setTimeout(() => dropdown.classList.add('hidden'), 300);
        }
      }
    });
  });