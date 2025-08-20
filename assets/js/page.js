document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.scrollBehavior = 'smooth';
    const postContent = document.getElementById('post-content');
    const tocContainer = document.getElementById('toc');
    const tocParent = document.getElementById('toc-container');
    const progressBar = document.getElementById('reading-progress-bar');

    function generateTableOfContents() {
        if (!postContent || !tocContainer || !tocParent) return;
        const headings = postContent.querySelectorAll('h2, h3');
        if (headings.length === 0) {
            tocParent.style.display = 'none';
        } else {
            const tocList = document.createElement('ul');
            tocList.className = 'space-y-2';
            const observer = new IntersectionObserver(entries => {
                let visibleHeadings = [];
                entries.forEach(entry => {
                    if (entry.isIntersecting) visibleHeadings.push(entry.target);
                });
                if (visibleHeadings.length > 0) {
                    const topHeading = visibleHeadings.reduce((a, b) => a.getBoundingClientRect().top < b.getBoundingClientRect().top ? a : b);
                    tocList.querySelectorAll('a').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${topHeading.id}`) link.classList.add('active');
                    });
                }
            }, { rootMargin: '-25% 0px -75% 0px' });

            headings.forEach((heading, index) => {
                const id = `heading-${index}`;
                heading.id = id;
                observer.observe(heading);
                const item = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${id}`;
                link.textContent = heading.textContent;
                link.className = 'block border-l-2 pl-4 py-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400';
                link.classList.add(heading.tagName === 'H3' ? 'ml-4 text-gray-500' : 'font-medium text-gray-600', 'border-transparent', 'dark:text-gray-400');
                item.appendChild(link);
                tocList.appendChild(item);
            });
            tocContainer.appendChild(tocList);
            const style = document.createElement('style');
            style.innerHTML = `
                #toc a.active { color: #2563eb !important; border-left-color: #2563eb !important; font-weight: 600; }
                .dark #toc a.active { color: #60a5fa !important; border-left-color: #60a5fa !important; }
            `;
            document.head.appendChild(style);
        }
    }

    function handleReadingProgress() {
        if (!postContent || !progressBar) return;
        window.addEventListener('scroll', () => {
            const contentRect = postContent.getBoundingClientRect();
            const contentTop = contentRect.top + window.scrollY;
            const scrollableHeight = postContent.scrollHeight - window.innerHeight;
            if (window.scrollY < contentTop) {
                progressBar.style.width = '0%';
            } else {
                const progress = (window.scrollY - contentTop) / scrollableHeight * 100;
                progressBar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
            }
        }, { passive: true });
    }
    
    function enhanceBlockquotes() {
        if (!postContent) return;
        const pageUrl = window.location.href;
        postContent.querySelectorAll('blockquote').forEach(quote => {
            quote.classList.add('relative', 'group');
            const quoteText = quote.innerText.trim();
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quoteText + '"')}&url=${encodeURIComponent(pageUrl)}`;
            const tweetButton = document.createElement('a');
            tweetButton.href = tweetUrl;
            tweetButton.target = '_blank';
            tweetButton.rel = 'noopener noreferrer';
            tweetButton.setAttribute('aria-label', 'Tweet this quote');
            tweetButton.className = 'absolute top-2 right-2 p-2 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] opacity-0 group-hover:opacity-100 transition-opacity';
            tweetButton.innerHTML = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`;
            quote.appendChild(tweetButton);
        });
    }

    // Initialize all features
    generateTableOfContents();
    addCopyButtonsToCodeBlocks();
    handleReadingProgress();
    enhanceBlockquotes();
});
