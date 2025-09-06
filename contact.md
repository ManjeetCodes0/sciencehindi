---
layout: page
title: "Science Hindi से संपर्क करें | प्रश्न, सुझाव और सहयोग"
description: "Science Hindi की टीम से संपर्क करें। हमारे टेक्नोलॉजी, बैंकिंग कोर्सेज, क्विज़, या करियर गाइड के बारे में कोई प्रश्न है? हम आपके सुझावों और सहयोग के प्रस्तावों का स्वागत करते हैं।"
permalink: /contact/
---

<style>
/* --- Next Level Contact Page Design --- */
:root {
  --contact-pro-primary: #005A9C; /* Deeper Professional Blue */
  --contact-pro-secondary: #003F6E;
  --contact-pro-accent: #FFC107; /* Gold Accent */
  --contact-pro-bg: #F8F9FA;
  --contact-pro-bg-card: #FFFFFF;
  --contact-pro-text: #212529;
  --contact-pro-text-light: #5A6268;
  --contact-pro-border: #E3E6E8;
  --contact-pro-radius: 10px;
  --contact-pro-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

.dark-mode {
  --contact-pro-primary: #58A6FF;
  --contact-pro-secondary: #C9D1D9;
  --contact-pro-accent: #FFD369;
  --contact-pro-bg: #0D1117;
  --contact-pro-bg-card: #161B22;
  --contact-pro-text: #C9D1D9;
  --contact-pro-text-light: #8B949E;
  --contact-pro-border: #30363D;
}

.contact-pro-body {
  font-family: 'Inter', sans-serif;
  background-color: var(--contact-pro-bg);
  color: var(--contact-pro-text);
  line-height: 1.7;
}
.contact-pro-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem;
}

/* --- Hero Header --- */
.contact-pro-hero {
  text-align: center;
  padding: 4rem 1rem;
  background-color: var(--contact-pro-bg-card);
  border-radius: var(--contact-pro-radius);
  margin-bottom: 2rem;
}
.contact-pro-hero h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  color: var(--contact-pro-text);
  margin: 0 0 0.5rem 0;
}
.dark-mode .contact-pro-hero h1 { color: var(--contact-pro-primary); }
.contact-pro-hero p {
  font-size: 1.2rem;
  color: var(--contact-pro-text-light);
  max-width: 700px;
  margin: 0 auto;
}

/* --- Main Contact Grid --- */
.contact-pro-main-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  background-color: var(--contact-pro-bg-card);
  padding: 2rem;
  border-radius: var(--contact-pro-radius);
  box-shadow: var(--contact-pro-shadow);
}

.contact-pro-info h3, .contact-pro-form h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  color: var(--contact-pro-text);
  margin-top: 0;
  margin-bottom: 1.5rem;
}
.contact-pro-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
.contact-pro-info-item svg {
  width: 24px; height: 24px;
  margin-right: 1rem;
  fill: var(--contact-pro-primary);
  flex-shrink: 0;
}
.contact-pro-info-item a {
  color: var(--contact-pro-text);
  font-weight: 500;
  text-decoration: none;
  word-break: break-all;
}
.contact-pro-info-item a:hover { color: var(--contact-pro-primary); }

/* --- About & Explore Sections --- */
.section-heading {
  text-align: center;
  margin: 3rem 0 2rem 0;
}
.section-heading h2 { font-size: 2.2rem; margin: 0; }
.section-heading p { color: var(--contact-pro-text-light); }

.about-pro-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem; text-align: center;
}
.about-pro-item {
  background-color: var(--contact-pro-bg-card);
  padding: 1.5rem; border-radius: var(--contact-pro-radius);
}
.about-pro-item .stat-number {
  font-size: 2.5rem; font-weight: 700;
  color: var(--contact-pro-primary);
}
.about-pro-item .stat-label { font-weight: 500; }

.explore-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.explore-card {
  display: block;
  background-color: var(--contact-pro-bg-card);
  padding: 2rem; border-radius: var(--contact-pro-radius);
  text-align: center; text-decoration: none;
  border: 1px solid var(--contact-pro-border);
  transition: transform 0.2s, box-shadow 0.2s;
}
.explore-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--contact-pro-shadow);
  border-color: var(--contact-pro-primary);
}
.explore-card svg { width: 48px; height: 48px; fill: var(--contact-pro-primary); margin-bottom: 1rem; }
.explore-card h4 { font-size: 1.4rem; margin: 0 0 0.5rem 0; color: var(--contact-pro-text); }
.explore-card p { font-size: 1rem; color: var(--contact-pro-text-light); margin: 0; }

@media (max-width: 900px) {
  .contact-pro-main-grid { grid-template-columns: 1fr; }
  .explore-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .contact-pro-hero h1 { font-size: 2.2rem; }
}
</style>

<div class="contact-pro-body">
<div class="contact-pro-wrapper">

  <header class="contact-pro-hero">
    <p>आपका हर सवाल, सुझाव और प्रतिक्रिया हमारे लिए महत्वपूर्ण है। हम आपकी मदद के लिए यहां हैं।</p>
  </header>

  <main class="contact-pro-main-grid">
    <aside class="contact-pro-info">
      <h3>सीधा संपर्क करें</h3>
      <p>आप नीचे दिए गए फॉर्म का उपयोग कर सकते हैं या सीधे हमें ईमेल कर सकते हैं। व्यावसायिक सहयोग या कंटेंट से संबंधित प्रश्नों के लिए ईमेल एक बेहतर विकल्प है।</p>
      
      <div class="contact-pro-info-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
        <div>
          <strong>ईमेल</strong><br>
          <a href="mailto:manjeetsingh.codes@gmail.com">manjeetsingh.codes@gmail.com</a>
        </div>
      </div>

      <div class="contact-pro-info-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
        <div>
          <strong>प्रतिक्रिया समय</strong><br>
          <span>हम 24-48 घंटों में जवाब देने की कोशिश करते हैं।</span>
        </div>
      </div>
    </aside>

    <section class="contact-pro-form">
      <h3>अपना संदेश भेजें</h3>
      
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLScZB7nS3xYHNTl9P7V4h8xxWE3Z4Bc631q5J6XutlwolAlicw/viewform?embedded=true" 
        width="100%" 
        height="850" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0">
        फ़ॉर्म लोड हो रहा है…
      </iframe>
      
    </section>
  </main>

  <section class="about-pro-section">
    <div class="section-heading">
      <h2>Science Hindi के बारे में</h2>
      <p>हमारा मिशन छात्रों को विज्ञान, टेक्नोलॉजी और करियर के बारे में हिंदी में विश्वसनीय और समझने में आसान जानकारी प्रदान करना है।</p>
    </div>
    <div class="about-pro-grid">
      <div class="about-pro-item">
        <div class="stat-number">500+</div>
        <div class="stat-label">विस्तृत लेख</div>
      </div>
      <div class="about-pro-item">
        <div class="stat-number">100+</div>
        <div class="stat-label">इंटरैक्टिव क्विज़</div>
      </div>
      <div class="about-pro-item">
        <div class="stat-number">हज़ारों</div>
        <div class="stat-label">संतुष्ट छात्र</div>
      </div>
    </div>
  </section>

  <section class="explore-section">
    <div class="section-heading">
      <h2>हमारी मुख्य श्रेणियां देखें</h2>
      <p>सही जानकारी की तलाश में हैं? इन श्रेणियों से शुरुआत करें।</p>
    </div>
    <div class="explore-grid">
      <a href="/" class="explore-card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
        <h4>टेक्नोलॉजी कोर्स</h4>
        <p>B.Tech, MCA, BCA और अन्य टेक करियर की जानकारी।</p>
      </a>
      <a href="/" class="explore-card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 14v-2h-2v2h2zm-4 0v-2h-2v2h2zm-4 0v-2h-2v2h2zm12-9h-2V3h-2v2H7V3H5v2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H3V9h18v10z"/></svg>
        <h4>बैंकिंग और फाइनेंस</h4>
        <p>इन्वेस्टमेंट बैंकर, Bank PO और फाइनेंस के अन्य करियर।</p>
      </a>
      <a href="/quizzes" class="explore-card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
        <h4>ज्ञान परखें (Quiz)</h4>
        <p>अपनी तैयारी को परखने के लिए विभिन्न विषयों पर क्विज़।</p>
      </a>
    </div>
  </section>

</div>
</div>