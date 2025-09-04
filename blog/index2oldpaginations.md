---
layout: default
title: Blog
pagination:
  enabled: true
---

<div style="background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 1rem; margin-bottom: 2rem; border-radius: 8px;">
  <h3 style="color: #721c24;">DEBUGGING INFORMATION:</h3>
  <p><b>Total number of posts found by Jekyll:</b> {{ site.posts | size }}</p>
  <p><b>List of posts found:</b></p>
  <pre><code>{% for post in site.posts %}
- TITLE: {{ post.title }} | PATH: {{ post.path }}
{% endfor %}</code></pre>
</div>

<hr>

<div class="blog-list-header">
  <h1>{{ page.title }}</h1>
  <p>A list of all my posts, sorted by the most recent.</p>
</div>

<hr>

<div class="blog-list-container">
  {% for post in paginator.posts %}
    <article class="blog-list-item">
      <h2 class="blog-list-item__title">
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </h2>
      <p class="blog-list-item__meta">
        {{ post.date | date: "%B %d, %Y" }}
      </p>
      <div class="blog-list-item__excerpt">
        {{ post.excerpt }}
      </div>
      <a href="{{ site.baseurl }}{{ post.url }}" class="blog-list-item__read-more">Read More &rarr;</a>
    </article>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="pagination__newer">Newer Posts</a>
  {% else %}
    <span class="pagination__newer disabled">Newer Posts</span>
  {% endif %}

  <span class="pagination__page-number">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="pagination__older">Older Posts</a>
  {% else %}
    <span class="pagination__older disabled">Older Posts</span>
  {% endif %}
</div>