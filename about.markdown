---
layout: page
title: About Us | हमारे बारे में
description: "Science Hindi में हमारा लक्ष्य विज्ञान, टेक्नोलॉजी और करियर की जटिल दुनिया को सरल हिंदी भाषा में समझाना है, ताकि हर छात्र अपने भविष्य का सही निर्णय ले सके।"
excerpt: "Science Hindi सिर्फ एक ब्लॉग नहीं, बल्कि एक मिशन है। हमारा लक्ष्य भारत के छात्रों को विज्ञान, टेक्नोलॉजी और करियर के बारे में विश्वसनीय और सरल जानकारी हिंदी में प्रदान करना है। मिलिए हमारे संस्थापक से और जानें हमारी कहानी।"
permalink: /about/
author: "Manjeet Singh"
author_image: /assets/images/myprofilepic.webp

# ✅ For structured data
page_categories:
  - name: "करियर गाइडेंस"
    icon: "🎓"
    description: "12वीं के बाद क्या करें? सरकारी नौकरी कैसे पाएं? हम हर कदम पर आपका मार्गदर्शन करते हैं।"
    url: "/"
  - name: "टेक्नोलॉजी"
    icon: "💻"
    description: "सॉफ्टवेयर डेवलपमेंट से लेकर नवीनतम टेक ट्रेंड्स तक, हम टेक्नोलॉजी को सरल बनाते हैं।"
    url: "/"
  - name: "सरकारी नौकरी"
    icon: "🏛️"
    description: "UPSC, SSC, VDO, और CBI जैसी प्रतिष्ठित नौकरियों की तैयारी के लिए विस्तृत गाइड।"
    url: "/"
  - name: "विज्ञान"
    icon: "🔬"
    description: "विज्ञान के रोचक और जटिल सिद्धांतों को आसान और मजेदार तरीके से समझ लें।"
    url: "/"

our_values:
  - icon: "💯"
    title: "सटीकता और विश्वसनीयता"
    description: "हमारा हर लेख गहरी रिसर्च के बाद लिखा जाता है ताकि आप तक सिर्फ सही और विश्वसनीय जानकारी पहुंचे।"
  - icon: "✍️"
    title: "सरल और सुलभ भाषा"
    description: "हमारा मानना है कि ज्ञान भाषा का मोहताज नहीं होना चाहिए। हम हर मुश्किल विषय को आसान हिंदी में समझाते हैं।"
  - icon: "❤️"
    title: "छात्रों के लिए समर्पित"
    description: "यह प्लेटफॉर्म पूरी तरह से भारत के छात्रों को समर्पित है, ताकि वे अपने करियर का सही चुनाव कर सकें।"

who_we_help:
    - "वे 10वीं और 12वीं के छात्र जो अपने करियर के चौराहे पर खड़े हैं।"
    - "वे कॉलेज छात्र जो अपनी फील्ड में स्पेशलाइजेशन करना चाहते हैं।"
    - "वे युवा जो सरकारी नौकरी की तैयारी कर रहे हैं और सही मार्गदर्शन चाहते हैं।"
    - "हर वह व्यक्ति जो विज्ञान और टेक्नोलॉजी को अपनी मातृभाषा में समझना चाहता है।"
---

<style>
:root {
  --post-primary-color: #4f46e5; /* Indigo */
  --post-secondary-color: #16a34a; /* Green */
  --post-text-color-primary: #1f2937;
  --post-text-color-secondary: #4b5563;
  --post-bg-light: #eef2ff; /* Light Indigo */
  --post-bg-card: #ffffff;
  --post-border-light: #e5e7eb;
  --post-box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
}
.post-prose{font-family:'Inter',sans-serif;color:var(--post-text-color-secondary);line-height:1.8;font-size:1.1rem}.post-prose h1,.post-prose h2,.post-prose h3,.post-prose h4,.post-prose h5,.post-prose h6{font-family:'Poppins',sans-serif;color:var(--post-text-color-primary);font-weight:700;line-height:1.3}.post-prose h2{font-size:2.25rem;margin-top:3.5rem;margin-bottom:1.5rem;text-align:center;position:relative;padding-bottom:1rem}.post-prose h2::after{content:'';position:absolute;width:80px;height:4px;background:linear-gradient(to right,var(--post-primary-color),var(--post-secondary-color));bottom:0;left:50%;transform:translateX(-50%);border-radius:2px}

/* === NEW: Hero Section === */
.about-hero{background-color:var(--post-bg-light);text-align:center;padding:4rem 2rem;border-radius:.75rem;margin-top:2rem}.about-hero h1{font-size:3rem;margin-top:0;color:var(--post-primary-color)}.about-hero .tagline{font-size:1.25rem;color:var(--post-text-color-secondary);max-width:700px;margin:1rem auto 0 auto}

/* === NEW: Mission Section === */
.mission-section{text-align:center;padding:3rem 0;margin:2rem 0;border-top:1px solid var(--post-border-light);border-bottom:1px solid var(--post-border-light)}.mission-statement{font-size:1.5rem;font-weight:600;font-style:italic;color:var(--post-text-color-primary);max-width:800px;margin:0 auto}

/* === NEW: Author Section === */
.author-section{display:grid;grid-template-columns:1fr;gap:2rem;align-items:center;margin-top:3rem}@media(min-width:768px){.author-section{grid-template-columns:auto 1fr;gap:3rem}}.author-image-wrapper{text-align:center}.author-image{width:200px;height:200px;border-radius:50%;object-fit:cover;border:5px solid var(--post-primary-color);box-shadow:var(--post-box-shadow)}.author-bio h3{margin-top:0;font-size:1.5rem}

/* === NEW: Category Showcase === */
.category-showcase-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-top:2rem}.category-card{display:block;text-decoration:none;background-color:var(--post-bg-card);border:1px solid var(--post-border-light);border-radius:.75rem;padding:2rem;text-align:center;box-shadow:var(--post-box-shadow);transition:transform .2s ease,box-shadow .2s ease}.category-card:hover{transform:translateY(-5px);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)}.category-icon{font-size:3rem;line-height:1;margin-bottom:1rem;color:var(--post-primary-color)}.category-card h4{font-size:1.25rem;margin-top:0;color:var(--post-text-color-primary)}.category-card p{font-size:.95rem;color:var(--post-text-color-secondary)}

/* === NEW: Values Grid === */
.values-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-top:2rem}.value-card{background-color:var(--post-bg-card);border:1px solid var(--post-border-light);border-radius:.75rem;padding:2rem;display:flex;align-items:flex-start;gap:1.5rem}.value-icon{font-size:2.5rem;color:var(--post-primary-color)}.value-text h4{margin:0 0 .5rem 0;font-size:1.2rem}.value-text p{margin:0;font-size:.95rem}

/* === NEW v2: Who We Help Section === */
.who-we-help-section ul { list-style: none; padding-left: 0; margin-top: 2rem; display: grid; grid-template-columns: 1fr; gap: 1rem; } @media(min-width: 768px) { .who-we-help-section ul { grid-template-columns: 1fr 1fr; } } .who-we-help-section li { background-color: var(--post-bg-card); border: 1px solid var(--post-border-light); padding: 1.5rem; border-radius: 0.5rem; display: flex; align-items: center; gap: 1rem; font-size: 1rem; } .who-we-help-section li::before { content: '🎯'; font-size: 1.5rem; }

/* === NEW v2: Connect Section === */
.connect-section { text-align: center; margin-top: 3rem; } .social-links { display: flex; justify-content: center; gap: 1.5rem; margin-top: 1.5rem; } .social-link { display: inline-block; padding: 0.75rem; background-color: var(--post-bg-light); border-radius: 50%; text-decoration: none; font-size: 1.5rem; color: var(--post-primary-color); transition: transform 0.2s ease; } .social-link:hover { transform: scale(1.1); }

/* === NEW: CTA Section === */
.cta-section{background-color:var(--post-primary-color);color:white;text-align:center;padding:3rem 2rem;border-radius:.75rem;margin:1rem}.cta-section h2{color:white !important}.cta-section p{max-width:600px;margin:1rem auto 2rem auto;opacity:.9}.cta-button{display:inline-block;padding:1rem 2rem;background-color:white;color:var(--post-primary-color);font-weight:bold;text-decoration:none;border-radius:.5rem;transition:transform .2s ease}.cta-button:hover{transform:scale(1.05)}

/* === DARK MODE OVERRIDES (v2 - FULLY CORRECTED) === */
.dark-mode .post-prose {
  --post-primary-color: #818cf8; /* Lighter Indigo for Dark Mode */
  --post-secondary-color: #4ade80; /* Lighter Green for Dark Mode */
  --post-text-color-primary: #f1f5f9;
  --post-text-color-secondary: #cbd5e1;
  --post-bg-light: #1e293b;
  --post-bg-card: #1f2937;
  --post-border-light: #334155;
}
.dark-mode .about-hero { background-color: #111827; }
.dark-mode .mission-section { border-color: var(--post-border-light); }
.dark-mode .value-card, .dark-mode .category-card, .dark-mode .who-we-help-section li { background-color: var(--post-bg-card); }
.dark-mode .social-link { background-color: var(--post-bg-light); color: var(--post-primary-color); }
.dark-mode .cta-section { background: linear-gradient(135deg, var(--post-primary-color) 0%, var(--post-secondary-color) 100%); }
.dark-mode .cta-button { background-color: white; color: #4f46e5; }
</style>

<div class="about-hero">
  <h1>हमारे बारे में</h1>
  <p class="tagline">विज्ञान और करियर की जटिल दुनिया को हर छात्र के लिए सरल और सुलभ बनाने का एक मिशन।</p>
</div>

## संस्थापक से मिलें
<div class="author-section">
  <div class="author-image-wrapper">
    <img src="{{ page.author_image }}" alt="{{ page.author }}" class="author-image">
  </div>
  <div class="author-bio">
    <h3>{{ page.author }}</h3>
    <p>मेरा नाम <strong>मनजीत सिंह</strong> है, और मैं एक समर्पित <strong>जावा फुल स्टैक डेवलपर</strong> और टेक्नोलॉजी प्रेमी हूँ। मुझे कुशल (efficient) और उपयोगकर्ता-अनुकूल (user-friendly) एप्लिकेशन बनाने का बहुत शौक है, और मैं अपने ब्लॉग के माध्यम से ज्ञान साझा करने में भी गहरी रुचि रखता हूँ।</p>
    <p><strong>जावा, स्प्रिंग बूट, रिएक्ट, और आधुनिक वेब तकनीकों</strong> पर ध्यान केंद्रित करते हुए, मैं एक पेशेवर सॉफ्टवेयर डेवलपर के रूप में आगे बढ़ने के लिए लगातार अपने कौशल को बेहतर बनाने का प्रयास करता हूँ।</p>
    <p>मेरा दृष्टिकोण टेक्नोलॉजी का उपयोग करके प्रभावशाली समाधान बनाना और दूसरों को सरल और व्यावहारिक तरीकों से सीखने में मदद करना है।</p>
  </div>
</div>

## हमारी कहानी (Our Story)
इस ब्लॉग की शुरुआत एक साधारण विचार से हुई: **ज्ञान भाषा का मोहताज नहीं होना चाहिए।**

जालंधर, पंजाब के एक छोटे से शहर से होने के नाते, मैंने हमेशा महसूस किया कि टेक्नोलॉजी और विज्ञान में मेरी गहरी रुचि है। जब मैंने अपनी जानकारी बढ़ाने के लिए इंटरनेट की ओर रुख किया, तो मैंने पाया कि उच्च-गुणवत्ता वाली और विश्वसनीय जानकारी ज्यादातर अंग्रेजी में उपलब्ध है।

मैंने देखा कि मेरे जैसे कई प्रतिभाशाली छात्र, जो हिंदी माध्यम से पढ़े हैं, सही मार्गदर्शन और अपनी भाषा में सही जानकारी न मिलने के कारण पीछे रह जाते हैं। वे जानना तो बहुत कुछ चाहते हैं, लेकिन भाषा एक दीवार बनकर खड़ी हो जाती है। इसी समस्या को हल करने और ज्ञान के इस अंतर को पाटने के लिए मैंने **Science Hindi** की शुरुआत की।

## हमारा लक्ष्य (Our Mission)
<div class="mission-section">
  <p class="mission-statement">"हमारा लक्ष्य एक ऐसा विश्वसनीय प्लेटफॉर्म बनना है, जहाँ भारत का हर छात्र अपनी भाषा में विज्ञान, टेक्नोलॉजी और अपने करियर से जुड़े हर सवाल का जवाब पा सके और बिना किसी भ्रम के अपने भविष्य का सही निर्णय ले सके।"</p>
</div>

## हम किसकी मदद करते हैं?
यह प्लेटफॉर्म हर उस व्यक्ति के लिए है जो सीखना चाहता है, लेकिन विशेष रूप से हम इनके लिए लिखते हैं:

<div class="who-we-help-section">
  <ul>
  {% for item in page.who_we_help %}
    <li>{{ item }}</li>
  {% endfor %}
  </ul>
</div>

## हम किन विषयों पर लिखते हैं?
हमारा कंटेंट मुख्य रूप से चार स्तंभों पर आधारित है, जो हर छात्र के लिए महत्वपूर्ण हैं:

<div class="category-showcase-grid">
{% for category in page.page_categories %}
  <a href="{{ category.url }}" class="category-card">
    <div class="category-icon">{{ category.icon }}</div>
    <h4>{{ category.name }}</h4>
    <p>{{ category.description }}</p>
  </a>
{% endfor %}
</div>

## हमारा विश्वास (Our Philosophy)
हम सिर्फ जानकारी नहीं देते, बल्कि कुछ मूल्यों के साथ काम करते हैं जो हमारे हर लेख में झलकते हैं:

<div class="values-grid">
{% for value in page.our_values %}
  <div class="value-card">
    <div class="value-icon">{{ value.icon }}</div>
    <div class="value-text">
      <h4>{{ value.title }}</h4>
      <p>{{ value.description }}</p>
    </div>
  </div>
{% endfor %}
</div>

## हमसे जुड़ें (Connect With Us)
<div class="connect-section">
  <p>हमारे सोशल मीडिया चैनलों से जुड़कर नवीनतम अपडेट और सूचनाएं प्राप्त करें।</p>
  <div class="social-links">
    <a href="/" class="social-link" title="Facebook">f</a> <a href="#" class="social-link" title="Twitter">t</a>
    <a href="/" class="social-link" title="Instagram">i</a>
    <a href="/" class="social-link" title="YouTube">y</a>
  </div>
</div>

<div class="cta-section">
  <h2>इस सफर में शामिल हों</h2>
  <p>ज्ञान की इस यात्रा में हम अकेले नहीं चलना चाहते। हमारे समुदाय से जुड़ें, हमारे लेख पढ़ें, और अपने भविष्य की ओर एक मजबूत कदम बढ़ाएं।</p>
  <a href="/blog" class="cta-button">हमारे सभी लेख पढ़ें</a>
</div>