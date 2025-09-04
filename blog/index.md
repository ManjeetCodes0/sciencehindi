---
layout: default
title: Blog & Article Hub
---

<style>
    /* --- Luxurious Color Palette --- */
    :root {
        --hub-bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        --hub-card-bg: #ffffff;
        --hub-primary-text: #1a1a1a;
        --hub-secondary-text: #64748b;
        --hub-accent-color: #6366f1;
        --hub-accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --hub-border-color: #e2e8f0;
        --hub-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        --hub-shadow-hover: 0 20px 60px rgba(0, 0, 0, 0.12);
        --hub-radius: 16px;
        --hub-font-heading: 'Poppins', sans-serif;
        --hub-font-body: 'Inter', sans-serif;
        --hub-font-accent: 'Poppins', sans-serif;
    }
    
    /* --- Dark Mode CSS --- */
    .dark-mode {
        --hub-bg-gradient: linear-gradient(135deg, ##292636 0%, #2d1b69 100%);
        --hub-card-bg: #1a1a1a;
        --hub-primary-text: #f1f5f9;
        --hub-secondary-text: #94a3b8;
        --hub-accent-color: #818cf8;
        --hub-accent-gradient: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
        --hub-border-color: #2d3748;
    }

    /* --- Base Styles --- */
    html { scroll-behavior: smooth; }
    body { background: var(--hub-bg-gradient); min-height: 100vh; }
    .article-hub-container { max-width: 1400px; margin: 0 auto; padding: 0.2rem; font-family: var(--hub-font-body); }

    /* --- Hero Header --- */
    .hub-header { text-align: center; margin-bottom: 4rem; position: relative; padding: 3rem 0; }
    .hub-header::before { content: ''; position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: var(--hub-accent-gradient); border-radius: 2px; }
    .hub-header h1 { font-family: var(--hub-font-heading); font-size: clamp(3rem, 8vw, 5rem); font-weight: 900; background: var(--hub-accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1rem; }
    .hub-header p { font-size: 1.25rem; color: var(--hub-secondary-text); }

    /* --- MODIFIED: Collapsible Category Cloud --- */
    .category-cloud { background: var(--hub-card-bg); border-radius: var(--hub-radius); margin-bottom: 3rem; box-shadow: var(--hub-shadow); border: 1px solid var(--hub-border-color); }
    .cloud-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; cursor: pointer; user-select: none; }
    .cloud-header h2 { font-family: var(--hub-font-accent); font-size: 1.5rem; margin: 0; color: var(--hub-primary-text); }
    .cloud-header .toggle-icon { font-size: 2rem; font-weight: bold; color: var(--hub-secondary-text); transition: transform 0.3s ease; }
    .cloud-header.collapsed .toggle-icon { transform: rotate(45deg); }
    
    .category-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        padding: 0 2rem 2rem 2rem;
        max-height: 1000px; /* For transition */
        overflow: hidden;
        transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
    }
    .category-tags.collapsed {
        max-height: 0;
        padding-top: 0;
        padding-bottom: 0;
    }

    .category-tag { /* MODIFIED: Now an anchor tag for scrolling */
        background: var(--hub-bg-color);
        color: var(--hub-secondary-text);
        padding: 0.6rem 1.2rem;
        border-radius: 50px;
        font-family: var(--hub-font-accent);
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 1px solid var(--hub-border-color);
        font-size: 0.95rem;
    }
    .category-tag:hover {
        transform: translateY(-2px);
        background: var(--hub-accent-color);
        color: white;
        border-color: var(--hub-accent-color);
        box-shadow: var(--hub-shadow);
    }
    
    /* --- Search Bar --- */
    .search-container { position: relative; margin-bottom: 4rem; max-width: 700px; margin-left: auto; margin-right: auto; }
    #post-search-input { width: 100%; padding: 1.5rem 4rem; font-size: 1.1rem; border-radius: 100px; border: 2px solid transparent; background: var(--hub-card-bg); color: var(--hub-primary-text); box-shadow: var(--hub-shadow); transition: all 0.4s ease; }
    #post-search-input:focus { outline: none; border-color: var(--hub-accent-color); box-shadow: var(--hub-shadow-hover); transform: translateY(-2px); }
    .search-icon { position: absolute; left: 1.5rem; top: 50%; transform: translateY(-50%); width: 24px; height: 24px; opacity: 0.5; }
    .search-icon svg { width: 100%; height: 100%; stroke: var(--hub-primary-text); }
    #no-results-message { text-align: center; padding: 4rem 2rem; background: var(--hub-card-bg); border-radius: var(--hub-radius); display: none; box-shadow: var(--hub-shadow); }

    /* --- Category Section --- */
    .category-block { margin-bottom: 4rem; }
    .category-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 2px solid var(--hub-border-color); }
    .category-block h2 { font-family: var(--hub-font-heading); font-size: 2.5rem; background: var(--hub-accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 0; }
    
    .posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 2rem; }
    
    /* --- Post Item Card --- */
    .post-item { background: var(--hub-card-bg); border: 1px solid var(--hub-border-color); border-radius: var(--hub-radius); padding: 2rem; display: flex; flex-direction: column; box-shadow: var(--hub-shadow); transition: all 0.4s ease; position: relative; overflow: hidden; }
    .post-item:hover { transform: translateY(-8px) scale(1.02); box-shadow: var(--hub-shadow-hover); border-color: var(--hub-accent-color); }
    .post-title { font-family: var(--hub-font-heading); font-size: 1.5rem; margin: 0 0 1rem 0; color: var(--hub-primary-text); flex-grow: 1; }
    .post-title a { text-decoration: none; color: inherit; }
    .post-meta { font-size: 0.9rem; color: var(--hub-secondary-text); margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--hub-border-color); }
    
    /* 'View All' Link Style */
    .view-all-link { display: block; text-align: center; margin-top: 2.5rem; padding: 0.85rem 1.5rem; border-radius: 50px; font-family: var(--hub-font-accent); font-weight: 600; text-decoration: none; transition: all 0.3s ease; background: var(--hub-accent-gradient); color: white; border: 1px solid transparent; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2); }
    .view-all-link:hover { transform: translateY(-3px); box-shadow: var(--hub-shadow-hover); filter: brightness(1.1); }
    
    @media (max-width: 768px) {
        .hub-header h1 { font-size: 3rem; }
        .posts-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="article-hub-container">

    <header class="hub-header">
            <h1>करियर गाइड (Career Guide)</h1>
            <p>करियर, एग्ज़ाम और जॉब्स से जुड़ी हर जानकारी और एक्सपर्ट सलाह पाएं।</p>  
    </header>

    <div class="category-cloud">
        <div class="cloud-header">
            <h2>Browse by Topic</h2>
            <span class="toggle-icon">+</span>
        </div>
        <div class="category-tags collapsed">
            {% for category_data in site.data.categories %}
                <a class="category-tag" href="#{{ category_data.slug }}">
                    {{ category_data.name }}
                </a>
            {% endfor %}
        </div>
    </div>

    <div class="search-container">
        <div class="search-icon">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
        </div>
        <input type="search" id="post-search-input" placeholder="कोई आर्टिकल खोजें..." aria-label="Search articles by title">
    </div>

    <div id="no-results-message"><h3>कोई आर्टिकल नहीं मिला</h3><p>कोई दूसरा कीवर्ड सर्च करके देखें</p></div>
    <div id="search-results-container" class="posts-grid" style="display: none;"></div>

    <div id="categories-container">
        {% for category_data in site.data.categories %}
            <section class="category-block" id="{{ category_data.slug }}">
                <div class="category-header">
                    <h2>{{ category_data.name }}</h2>
                </div>
                <div class="category-content">
                    <div class="posts-grid">
                        {% assign matching_posts = site.posts | where_exp: "post", "post.categories contains category_data.slug" | sort: 'date' | reverse %}
                        {% assign post_count = matching_posts | size %}
                        {% for post in matching_posts limit:6 %}
                            <article class="post-item">
                                <h3 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                                <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
                            </article>
                        {% endfor %}
                    </div>
                    {% if post_count > 6 %}
                        <a href="/blog/category/{{ category_data.slug }}/" class="view-all-link">
                            {{ category_data.name }} में सभी {{ post_count }} आर्टिकल देखें &rarr;
                        </a>
                    {% endif %}
                </div>
            </section>
        {% endfor %}
    </div>

</div>

<script>
    // This function can be called by your existing navbar button
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Load saved theme preference on page load
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('post-search-input');
        const categoriesContainer = document.getElementById('categories-container');
        const searchResultsContainer = document.getElementById('search-results-container');
        const noResultsMessage = document.getElementById('no-results-message');
        const allPosts = Array.from(document.querySelectorAll('.post-item'));
        
        // --- NEW/MODIFIED SCRIPT LOGIC ---

        // 1. Collapsible Category Cloud
        const cloudHeader = document.querySelector('.cloud-header');
        const categoryTagsContainer = document.querySelector('.category-tags');

        cloudHeader.addEventListener('click', () => {
            const isCollapsed = categoryTagsContainer.classList.toggle('collapsed');
            const icon = cloudHeader.querySelector('.toggle-icon');
            cloudHeader.classList.toggle('collapsed', isCollapsed);
            icon.textContent = isCollapsed ? '+' : '-';
        });

        // 2. Smooth Scrolling for Category Tags
        const categoryTags = document.querySelectorAll('.category-tag');
        categoryTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = tag.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Calculate position, accounting for a possible fixed navbar (adjust -80 if you have one)
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 3. Search Functionality (remains the same)
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const cloud = document.querySelector('.category-cloud');

            if (query === '') {
                categoriesContainer.style.display = 'block';
                searchResultsContainer.style.display = 'none';
                noResultsMessage.style.display = 'none';
                if(cloud) cloud.style.display = 'block';
                return;
            }

            categoriesContainer.style.display = 'none';
            searchResultsContainer.style.display = 'grid';
            searchResultsContainer.innerHTML = '';
            if(cloud) cloud.style.display = 'none';

            const addedPosts = new Set();
            let visiblePostsCount = 0;

            allPosts.forEach(post => {
                const title = post.querySelector('.post-title').textContent.toLowerCase();
                const postUrl = post.querySelector('a').getAttribute('href');
                
                if (title.includes(query) && !addedPosts.has(postUrl)) {
                    addedPosts.add(postUrl);
                    const postClone = post.cloneNode(true);
                    postClone.style.display = 'flex';
                    searchResultsContainer.appendChild(postClone);
                    visiblePostsCount++;
                }
            });
            
            noResultsMessage.style.display = visiblePostsCount === 0 ? 'block' : 'none';
        });
    });
</script>