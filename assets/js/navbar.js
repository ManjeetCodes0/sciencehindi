// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // ========================================================================
    // 1. GLOBAL SITE SCRIPTS (Run on every page)
    // ========================================================================

    // --- Theme Toggle Functionality ---
    const themeToggleBtn = document.querySelector('[data-theme-toggle]');
    const body = document.body;
    
    if (themeToggleBtn) {
        const currentTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const enableDarkMode = () => {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        };

        const disableDarkMode = () => {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        };

        if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }

        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }

    // --- Dropdown Functionality (Hover Activated) ---
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('[data-dropdown-toggle]');
        const menu = dropdown.querySelector('[data-dropdown-menu]');
        let timeoutId;

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            if(menu) menu.classList.add('show');
            if(toggle) toggle.setAttribute('aria-expanded', 'true');
        });

        dropdown.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                if(menu) menu.classList.remove('show');
                if(toggle) toggle.setAttribute('aria-expanded', 'false');
            }, 200);
        });
    });

    // --- Mobile Menu Functionality ---
    const mobileMenuToggle = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarContainer = document.querySelector('.navbar-container');

    if (mobileMenuToggle && mobileMenu && navbarContainer) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenu.style.display = isExpanded ? 'none' : 'block';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            navbarContainer.classList.toggle('mobile-menu-open', !isExpanded);
        });
    }

    // --- Search Overlay Functionality ---
    const searchToggleBtn = document.querySelector('[data-search-toggle]');
    const searchOverlay = document.getElementById('search-overlay');
    
    if (searchToggleBtn && searchOverlay) {
        searchToggleBtn.addEventListener('click', () => {
            const isVisible = searchOverlay.style.display === 'block';
            searchOverlay.style.display = isVisible ? 'none' : 'block';
            if (!isVisible) {
                const searchInput = document.getElementById('search-input');
                if(searchInput) searchInput.focus();
            }
        });
    }


    // ========================================================================
    // 2. QUIZ LISTING PAGE SCRIPTS (Run only on dashboard pages)
    // ========================================================================

    const tabsNav = document.querySelector('.tabs-nav');
    if (tabsNav) {
        const tabLinks = tabsNav.querySelectorAll('.tab-link');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                const tabId = link.dataset.tab;
                tabLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                tabPanes.forEach(pane => {
                    pane.classList.toggle('active', pane.id === tabId);
                });
            });
        });
    }


    // ========================================================================
    // 3. INTERACTIVE QUIZ PANEL SCRIPT (Run only on quiz pages)
    // ========================================================================

    if (typeof quizData !== 'undefined' && document.querySelector('.pro-quiz')) {
        
        const totalQuestions = quizData.length;
        let currentQuestionIndex = 0;
        let userAnswers = new Array(totalQuestions).fill(null);
        let score = 0;

        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const quizBody = document.querySelector('.pro-quiz__body');
        const questionBlocks = document.querySelectorAll('.question-block');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');
        const resultsContainer = document.getElementById('quiz-results');
        const retryBtn = document.getElementById('retry-btn');

        const showQuestion = (index) => {
            questionBlocks.forEach((block, i) => {
                block.classList.toggle('active', i === index);
            });
            updateProgress(index);
            updateNavigation(index);
        };

        const updateProgress = (index) => {
            if (!progressBar || !progressText) return;
            const progressPercent = ((index + 1) / totalQuestions) * 100;
            progressBar.style.width = `${progressPercent}%`;
            progressText.textContent = `प्रश्न ${index + 1} / ${totalQuestions}`;
        };
        
        const updateNavigation = (index) => {
            const footer = document.querySelector('.pro-quiz__footer');
            if (!footer || !prevBtn || !nextBtn || !finishBtn) return;
            
            footer.classList.remove('state-first', 'state-middle', 'state-last');
            prevBtn.disabled = index === 0;

            if (index === 0) {
                footer.classList.add('state-first');
            } else if (index === totalQuestions - 1) {
                footer.classList.add('state-last');
            } else {
                footer.classList.add('state-middle');
            }
        };

        const handleOptionSelect = (e) => {
            const selectedLabel = e.target.closest('.option');
            if (!selectedLabel) return;

            const questionBlock = selectedLabel.closest('.question-block');
            if (questionBlock.dataset.answered === 'true') return;
            
            questionBlock.dataset.answered = 'true';
            const questionIndex = Array.from(questionBlocks).indexOf(questionBlock);
            const selectedValue = selectedLabel.querySelector('input').value;
            const correctAnswer = quizData[questionIndex].answer;
            
            selectedLabel.classList.add('selected');
            
            if (selectedValue === correctAnswer) {
                score++;
                selectedLabel.classList.add('correct');
            } else {
                selectedLabel.classList.add('incorrect');
            }
            
            setTimeout(() => {
                const options = questionBlock.querySelectorAll('.option');
                options.forEach(opt => {
                    if (opt.querySelector('input').value === correctAnswer) {
                        opt.classList.add('correct');
                    }
                });
                const explanationDiv = questionBlock.querySelector('.question-block__explanation');
                if (explanationDiv) explanationDiv.style.display = 'block';
            }, 300);
        };

        const showResults = () => {
            const header = document.querySelector('.pro-quiz__header');
            const footer = document.querySelector('.pro-quiz__footer');
            if(header) header.style.display = 'none';
            if(quizBody) quizBody.style.display = 'none';
            if(footer) footer.style.display = 'none';
            if(resultsContainer) resultsContainer.style.display = 'block';
            
            const scoreEl = document.getElementById('score');
            const percentEl = document.getElementById('score-percent');
            const chartCircle = document.getElementById('chart-circle');

            if(scoreEl) scoreEl.textContent = score;
            const percentage = Math.round((score / totalQuestions) * 100);
            if(percentEl) percentEl.textContent = `${percentage}%`;
            
            if(chartCircle) {
                const circumference = 100;
                const offset = circumference - (percentage / 100) * circumference;
                setTimeout(() => {
                    chartCircle.style.strokeDashoffset = offset;
                }, 200);
            }
        };

        const resetQuiz = () => {
            currentQuestionIndex = 0;
            userAnswers = new Array(totalQuestions).fill(null);
            score = 0;
            
            questionBlocks.forEach(block => {
                block.dataset.answered = 'false';
                const explanation = block.querySelector('.question-block__explanation');
                if (explanation) explanation.style.display = 'none';
                block.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('correct', 'incorrect', 'selected');
                    const input = opt.querySelector('input');
                    if (input) input.checked = false;
                });
            });
            
            if(resultsContainer) resultsContainer.style.display = 'none';
            const header = document.querySelector('.pro-quiz__header');
            const footer = document.querySelector('.pro-quiz__footer');
            if(header) header.style.display = 'block';
            if(quizBody) quizBody.style.display = 'block';
            if(footer) footer.style.display = 'flex';
            
            showQuestion(0);
        };

        // Event Listeners
        if (quizBody) quizBody.addEventListener('click', handleOptionSelect);
        if (nextBtn) nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < totalQuestions - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            }
        });
        if (prevBtn) prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion(currentQuestionIndex);
            }
        });
        if (finishBtn) finishBtn.addEventListener('click', showResults);
        if (retryBtn) retryBtn.addEventListener('click', resetQuiz);

        // Initial setup
        showQuestion(0);
    }
});