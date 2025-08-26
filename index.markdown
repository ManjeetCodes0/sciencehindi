---
layout: default
title: Home
---

<div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
        <!-- Animated Background Circles -->
        <div class="hero-circles-wrapper">
            <div class="hero-circle hero-circle-1"></div>
            <div class="hero-circle hero-circle-2"></div>
            <div class="hero-circle hero-circle-3"></div>
        </div>
        
        <!-- Hero Content -->
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

    <!-- Stats Section -->
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

    <!-- Featured Articles Section -->
    <section id="featured-content" class="featured-section">
        <div class="section-header">
            <h2 class="section-title">विशेष आर्टिकल्स</h2>
            <p class="section-subtitle">परीक्षा तैयारी और महत्वपूर्ण नोट्स पर चुने हुए लेख</p>
        </div>
        
        {% assign featured_posts = site.posts | where: "featured", true | limit: 3 %}
        {% if featured_posts.size == 0 %}
            {% assign featured_posts = site.posts | limit: 3 %}
        {% endif %}
        
        <div class="article-grid">
            {% for post in featured_posts %}
                <article class="article-card">
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
                        <div class="article-badge">
                            विशेष ⭐
                        </div>
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
    </section>

    <!-- Latest Posts Section -->
    <section id="latest-posts" class="latest-section">
        <div class="latest-header">
            <div class="latest-header-content">
                <h2 class="section-title latest-title">Latest Articles</h2>
                <p class="latest-subtitle">ताज़ा अपडेट और कोर्स जानकारी</p>
            </div>
            <a href="{{ '/blog' | relative_url }}" class="latest-view-all">
                सभी लेख देखें
                <svg class="latest-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>
        
        <div class="latest-posts-grid">
            {% for post in site.posts limit: 6 offset: 3 %}
                <article class="latest-post-card">
                    {% if post.image %}
                        <div class="latest-post-image-wrapper">
                            <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" class="latest-post-image">
                        </div>
                    {% else %}
                        <div class="latest-post-placeholder">
                            <svg class="latest-post-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                    {% endif %}
                    
                    <div class="latest-post-content">
                        <div class="latest-post-meta">
                            <span class="latest-post-date">{{ post.date | date: "%b %d, %Y" }}</span>
                            <span class="latest-post-time">{% assign words = post.content | number_of_words %}{% if words < 200 %}1 min{% else %}{{ words | divided_by: 200 }} min{% endif %}</span>
                        </div>
                        
                        <h3 class="latest-post-title">
                            <a href="{{ post.url | relative_url }}" class="latest-post-link">
                                {{ post.title | escape }}
                            </a>
                        </h3>
                        
                        <p class="latest-post-excerpt">
                            {{ post.excerpt | strip_html | truncatewords: 15 }}
                        </p>
                        
                        {% if post.tags %}
                            <div class="latest-post-tags">
                                {% for tag in post.tags limit: 3 %}
                                    <span class="article-tag">{{ tag }}</span>
                                {% endfor %}
                            </div>
                        {% endif %}
                    </div>
                </article>
            {% endfor %}
        </div>
    </section>

    <!-- Newsletter Section -->
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
