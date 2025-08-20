document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Dropdown Menu Logic ---
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('[data-dropdown-toggle]');
    const menu = dropdown.querySelector('[data-dropdown-menu]');
    const chevron = toggle.querySelector('svg');

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns();
      if (!isExpanded) {
          toggle.setAttribute('aria-expanded', 'true');
          menu.classList.remove('hidden', 'invisible', 'opacity-0', 'scale-95');
          chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  function closeAllDropdowns() {
      dropdowns.forEach(dropdown => {
          const toggle = dropdown.querySelector('[data-dropdown-toggle]');
          const menu = dropdown.querySelector('[data-dropdown-menu]');
          const chevron = toggle.querySelector('svg');
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.add('hidden', 'invisible', 'opacity-0', 'scale-95');
          chevron.style.transform = '';
      });
  }
  document.addEventListener('click', closeAllDropdowns);


  // --- Search Overlay Toggle ---
  const searchToggle = document.querySelector('[data-search-toggle]');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');

  if (searchToggle && searchOverlay && searchInput) {
    searchToggle.addEventListener('click', () => {
      searchOverlay.classList.toggle('hidden');
      if (!searchOverlay.classList.contains('hidden')) {
        searchInput.focus();
      }
    });
  }

  // --- Theme (Dark/Light Mode) Toggle ---
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const lightIcon = document.getElementById('theme-icon-light');
  const darkIcon = document.getElementById('theme-icon-dark');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      lightIcon.classList.add('hidden');
      darkIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      lightIcon.classList.remove('hidden');
      darkIcon.classList.add('hidden');
    }
  };

  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }
});