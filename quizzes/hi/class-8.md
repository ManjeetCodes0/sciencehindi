---
layout: default
title: "कक्षा 8 हिंदी माध्यम क्विज़"
description: "कक्षा 8 के विज्ञान, गणित और अन्य विषयों के लिए अध्याय-अनुसार MCQ क्विज़ हिंदी में प्राप्त करें।"
sitemap: false
---
<div class="dashboard-wrapper">
  <header class="dashboard-header">
    <div>
      <h1 class="dashboard-title">{{ page.title }}</h1>
      <p class="dashboard-description">{{ page.description }}</p>
    </div>
  </header>

  {% assign featured_quizzes = site.quizzes | where_exp: "item", "item.path contains '/hi/class-8/'" | where: "featured", true | sort: "chapter" %}
  {% if featured_quizzes.size > 0 %}
  <section class="featured-carousel">
    <h2 class="carousel-title">विशेष रुप से प्रदर्शित क्विज़</h2>
    <div class="carousel-track">
      {% for featured_quiz in featured_quizzes %}
        <a href="{{ featured_quiz.url | relative_url }}" class="featured-card-small">
          <div class="card-content">
            <h3 class="card-title">{{ featured_quiz.title }}</h3>
            <div class="card-meta">
              <span class="meta-tag">{{ featured_quiz.difficulty | default: 'मध्यम' }}</span>
              <span class="meta-tag">{{ featured_quiz.questions_count | default: 10 }} प्रश्न</span>
            </div>
          </div>
          <span class="card-go">प्रयास करें →</span>
        </a>
      {% endfor %}
    </div>
  </section>
  {% endif %}

  <main class="dashboard-main">
    
    {% assign class_subjects = site.data.subjects_hi.class-8 %}
    
    {% if class_subjects.size > 0 %}
      <div class="tabs-nav">
        {% for subject in class_subjects %}
          <button class="tab-link {% if forloop.first %}active{% endif %}" data-tab="tab-{{ subject.slug }}">
            {{ subject.name }}
          </button>
        {% endfor %}
      </div>
      <div class="tabs-content">
        {% for subject in class_subjects %}
          <div class="tab-pane {% if forloop.first %}active{% endif %}" id="tab-{{ subject.slug }}">
            <div class="quiz-grid">
              
              {% capture hi_query_path %}/hi/class-8/{{ subject.slug }}/{% endcapture %}
              {% assign hindi_quizzes = site.quizzes | where_exp: "item", "item.path contains hi_query_path" | sort: "chapter" %}
              
              {% if hindi_quizzes.size > 0 %}
                {% for quiz in hindi_quizzes %}
                  <a href="{{ quiz.url | relative_url }}" class="quiz-item-card">
                    <h3 class="quiz-item-card__title">{{ quiz.title }}</h3>
                    <div class="quiz-item-card__meta">
                      <span class="meta-tag">{{ quiz.difficulty | default: 'मध्यम' }}</span>
                      <span class="meta-tag">{{ quiz.questions_count | default: 10 }} प्रश्न</span>
                    </div>
                    <span class="quiz-item-card__go">प्रयास करें</span>
                  </a>
                {% endfor %}
              {% else %}
                  <p class="no-quizzes-message">इस विषय के लिए अभी कोई क्विज़ उपलब्ध नहीं है।</p>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    {% endif %}
  </main>
</div>