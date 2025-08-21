---
layout: default
title: Home
---

<section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl p-8 md:p-16 mb-16">
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div class="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full animate-pulse opacity-60"></div>
        <div class="absolute top-1/3 -right-8 w-32 h-32 bg-purple-100 rounded-full animate-bounce opacity-40" style="animation-delay: 1s;"></div>
        <div class="absolute -bottom-6 left-1/3 w-20 h-20 bg-pink-100 rounded-full animate-pulse opacity-50" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="relative z-10 text-center">
        <div class="inline-block mb-6">
            <span class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate-pulse">
                ✨ साइंस हिंदी में आपका स्वागत है
            </span>
        </div>
        
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            पढ़ाई सरल भाषा में,<br>
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                परीक्षा की पूरी तैयारी
            </span>
        </h1>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            यहाँ आपको कोर्स की जानकारी, परीक्षा अपडेट्स, नोट्स और स्टडी मटेरियल हिंदी में मिलेगा। 
            हमारी कोशिश है कि हर छात्र को कठिन विषय भी आसान भाषा में समझ आए।
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#featured-content" class="group bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                आर्टिकल्स पढ़ें
                <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="{{ '/about' | relative_url }}" class="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                हमारे बारे में
            </a>
        </div>
    </div>
</section>

<section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
    <div class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div class="text-3xl font-bold text-blue-600 mb-2">{{ site.posts.size }}+</div>
        <div class="text-gray-600">लेख प्रकाशित</div>
    </div>
    <div class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div class="text-3xl font-bold text-purple-600 mb-2">5K+</div>
        <div class="text-gray-600">मासिक पाठक</div>
    </div>
    <div class="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div class="text-3xl font-bold text-green-600 mb-2">5+</div>
        <div class="text-gray-600">साल से निरंतर</div>
    </div>
</section>

<section id="featured-content" class="mb-16">
    <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">विशेष आर्टिकल्स</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">परीक्षा तैयारी और महत्वपूर्ण नोट्स पर चुने हुए लेख</p>
    </div>
    
    {% assign featured_posts = site.posts | where: "featured", true | limit: 3 %}
    {% if featured_posts.size == 0 %}
        {% assign featured_posts = site.posts | limit: 3 %}
    {% endif %}
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {% for post in featured_posts %}
            <article class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div class="relative overflow-hidden">
                    {% if post.image %}
                        <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500">
                    {% else %}
                        <div class="w-full h-56 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            <svg class="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                    {% endif %}
                    <div class="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        विशेष ⭐
                    </div>
                </div>
                
                <div class="p-8">
                    <div class="text-sm text-gray-500 mb-3">
                        {{ post.date | date: "%B %d, %Y" }} • {% assign words = post.content | number_of_words %}{% if words < 200 %}1 min read{% else %}{{ words | divided_by: 200 }} min read{% endif %}
                    </div>
                    
                    <h3 class="text-2xl font-bold mb-4 leading-tight">
                        <a href="{{ post.url | relative_url }}" class="text-gray-900 group-hover:text-blue-600 transition-colors">
                            {{ post.title | escape }}
                        </a>
                    </h3>
                    
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        {{ post.excerpt | strip_html | truncatewords: 20 }}
                    </p>
                    
                    <a href="{{ post.url | relative_url }}" class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                        पूरा पढ़ें
                        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </article>
        {% endfor %}
    </div>
</section>

<section id="latest-posts" class="mb-16">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p class="text-gray-600">ताज़ा अपडेट और कोर्स जानकारी</p>
        </div>
        <a href="{{ '/blog' | relative_url }}" class="mt-4 md:mt-0 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            सभी लेख देखें
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {% for post in site.posts limit: 6 offset: 3 %}
            <article class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {% if post.image %}
                    <div class="relative overflow-hidden">
                        <img src="{{ post.image | relative_url }}" alt="{{ post.title | escape }}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                {% else %}
                    <div class="w-full h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                {% endif %}
                
                <div class="p-6">
                    <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{{ post.date | date: "%b %d, %Y" }}</span>
                        <span>{% assign words = post.content | number_of_words %}{% if words < 200 %}1 min{% else %}{{ words | divided_by: 200 }} min{% endif %}</span>
                    </div>
                    
                    <h3 class="text-xl font-bold mb-3 leading-tight">
                        <a href="{{ post.url | relative_url }}" class="text-gray-900 group-hover:text-blue-600 transition-colors">
                            {{ post.title | escape }}
                        </a>
                    </h3>
                    
                    <p class="text-gray-600 mb-4 leading-relaxed">
                        {{ post.excerpt | strip_html | truncatewords: 15 }}
                    </p>
                    
                    {% if post.tags %}
                        <div class="flex flex-wrap gap-2">
                            {% for tag in post.tags limit: 3 %}
                                <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{{ tag }}</span>
                            {% endfor %}
                        </div>
                    {% endif %}
                </div>
            </article>
        {% endfor %}
    </div>
</section>

<section class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white mb-16">
    <h3 class="text-3xl font-bold mb-4">Stay In The Loop</h3>
    <p class="text-blue-100 mb-8 max-w-2xl mx-auto">
        Get the latest articles and insights delivered straight to your inbox. No spam, just quality content.
    </p>
    <div class="max-w-md mx-auto">
        <div class="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
            <button class="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
            </button>
        </div>
    </div>
</section>