---
layout: default
title: Home
---

<div class="home-container">
    <section class="hero-section">
        <div class="hero-circles-wrapper">
            <div class="hero-circle hero-circle-1"></div>
            <div class="hero-circle hero-circle-2"></div>
            <div class="hero-circle hero-circle-3"></div>
        </div>
        
        <div class="hero-content">
            <div class="hero-badge">
                ✨ साइंस हिंदी में आपका स्वागत है
            </div>
            
            <h1 class="hero-title">
                पढ़ाई सरल भाषा में,<br>
                <span class="hero-title-gradient">
                    परीक्षा की पूरी तैयारी
                </span>
            </h1>
            
            <p class="hero-description">
                यहाँ आपको कोर्स की जानकारी, परीक्षा अपडेट्स, नोट्स और स्टडी मटेरियल हिंदी में मिलेगा। 
                हमारी कोशिश है कि हर छात्र को कठिन विषय भी आसान भाषा में समझ आए।
            </p>
            
            <div class="hero-buttons">
                <a href="#featured-content" class="hero-button-primary">
                    आर्टिकल्स पढ़ें
                    <span class="hero-button-arrow">→</span>
                </a>
                <a href="{{ '/about' | relative_url }}" class="hero-button-secondary">
                    हमारे बारे में
                </a>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number stat-number-blue">{{ site.posts.size }}+</div>
                <div class="stat-label">लेख प्रकाशित</div>
            </div>
            <div class="stat-card">
                <div class="stat-number stat-number-purple">5K+</div>
                <div class="stat-label">मासिक पाठक</div>
            </div>
            <div class="stat-card">
                <div class="stat-number stat-number-green">5+</div>
                <div class="stat-label">साल से निरंतर</div>
            </div>
        </div>
    </section>

    <section id="featured-content" class="featured-section">
        <div class="section-header">
            <h2 class="section-title">विशेष आर्टिकल्स</h2>
            <p class="section-subtitle">नवीनतम लेख, परीक्षा तैयारी और महत्वपूर्ण नोट्स</p>
        </div>
        
        <div class="article-grid">
            {% for post in site.posts limit: 12 %}
                <article class="article-card {% if forloop.index > 6 %}hidden-post{% endif %}">
                    <div class="article-image-wrapper">
                        {% if post.image %}
                            <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" class="article-image">
                        {% else %}
                            <div class="article-image-placeholder">
                                <svg class="article-image-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                        {% endif %}
                        {% if post.featured == true %}
                        <div class="article-badge">
                            विशेष ⭐
                        </div>
                        {% endif %}
                    </div>
                    
                    <div class="article-content">
                        <div class="article-meta">
                            <span class="article-date">{{ post.date | date: "%B %d, %Y" }}</span>
                            <span class="article-read-time">{% assign words = post.content | number_of_words %}{% if words < 200 %}1 min read{% else %}{{ words | divided_by: 200 }} min read{% endif %}</span>
                        </div>
                        
                        <h3 class="article-title">
                            <a href="{{ post.url | relative_url }}" class="article-title-link">
                                {{ post.title | escape }}
                            </a>
                        </h3>
                        
                        <p class="article-excerpt">
                            {{ post.excerpt | strip_html | truncatewords: 20 }}
                        </p>
                        
                        <a href="{{ post.url | relative_url }}" class="article-read-more">
                            पूरा पढ़ें
                            <svg class="article-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </article>
            {% endfor %}
        </div>
        
        {% if site.posts.size > 6 %}
        <div class="load-more-container">
            <button id="loadMoreBtn" class="hero-button-primary">
                और लोड करें
            </button>
        </div>
        {% endif %}
    </section>

    <section class="quiz-section">
        <div class="section-header">
            <h2 class="section-title">ज्ञान की परख</h2>
            <p class="section-subtitle">हमारे मजेदार क्विज़ के साथ अपने ज्ञान का परीक्षण करें!</p>
        </div>
        <div class="quiz-content">
            <p>क्या आप विज्ञान और प्रौद्योगिकी में नवीनतम रुझानों के बारे में जानते हैं? अपनी तैयारी की जाँच करें और देखें कि आप कितना जानते हैं।</p>
            <a href="/quizzes/" class="hero-button-primary">क्विज़ शुरू करें →</a>
        </div>
    </section>

    <section class="newsletter-section">
        <h3 class="newsletter-title">Stay In The Loop</h3>
        <p class="newsletter-description">
            Get the latest articles and insights delivered straight to your inbox. No spam, just quality content.
        </p>
        <div class="newsletter-form">
            <div class="newsletter-input-group">
                <input type="email" placeholder="Enter your email" class="newsletter-input">
                <button class="newsletter-button">
                    Subscribe
                </button>
            </div>
        </div>
    </section>
</div>

<style>
    .hidden-post {
        display: none;
    }
    .load-more-container {
        text-align: center;
        margin-top: 40px;
    }
    .quiz-section {
        padding: 60px 20px;
        background-color: #f9fafb;
        text-align: center;
        border-radius: 16px;
        margin-top: 60px;
        margin-bottom: 60px;
    }
    .quiz-content p {
        max-width: 600px;
        margin: 20px auto 30px;
        color: #4b5563;
        font-size: 1.1rem;
        line-height: 1.6;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (!loadMoreBtn) return;

        // State: 'initial' shows more posts; 'redirect' goes to the blog page.
        let buttonState = 'initial';
        const totalPosts = {{ site.posts.size }};

        loadMoreBtn.addEventListener('click', function() {
            if (buttonState === 'initial') {
                const hiddenPosts = document.querySelectorAll('.article-card.hidden-post');
                hiddenPosts.forEach(post => {
                    post.style.display = 'block'; // Or 'flex', 'grid-item' based on your CSS
                    post.classList.remove('hidden-post');
                });

                // If we've loaded all 12, or there are fewer than 12 posts total, change the button.
                this.innerText = 'सभी लेख देखें →';
                buttonState = 'redirect';
                
            } else if (buttonState === 'redirect') {
                // Redirect to the blog page
                window.location.href = '{{ "/blog" | relative_url }}';
            }
        });

        // Hide button initially if there are 6 or fewer posts
        if (totalPosts <= 6) {
            loadMoreBtn.style.display = 'none';
        }
    });
</script>