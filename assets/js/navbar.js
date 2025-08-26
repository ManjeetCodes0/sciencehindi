document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle Functionality
    const themeToggleBtn = document.querySelector('[data-theme-toggle]');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    };

    if (currentTheme === 'dark') {
        enableDarkMode();
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });


    // --- MODIFIED: Dropdown Functionality (Hover Activated) ---
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('[data-dropdown-toggle]');
        const menu = dropdown.querySelector('[data-dropdown-menu]');
        let timeoutId;

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId); // Clear any pending close actions
            menu.classList.add('show');
            toggle.setAttribute('aria-expanded', 'true');
        });

        dropdown.addEventListener('mouseleave', () => {
            // Use a short delay to prevent accidental closing
            timeoutId = setTimeout(() => {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            }, 200);
        });
    });
    // --- End of Modification ---


    // Mobile Menu Functionality
    const mobileMenuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarContainer = document.querySelector('.navbar-container');

    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        
        mobileMenu.style.display = isExpanded ? 'none' : 'block';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        navbarContainer.classList.toggle('mobile-menu-open', !isExpanded);
    });

    // Search Overlay Functionality
    const searchToggleBtn = document.querySelector('[data-search-toggle]');
    const searchOverlay = document.getElementById('search-overlay');
    
    searchToggleBtn.addEventListener('click', () => {
        const isVisible = searchOverlay.style.display === 'block';
        searchOverlay.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            document.getElementById('search-input').focus();
        }
    });
});