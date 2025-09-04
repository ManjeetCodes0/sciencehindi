---
layout: post
title: "IAS कैसे बनें? जानें योग्यता, परीक्षा और सैलरी"
description: "IAS बनने का सपना देखते हैं? जानें IAS की योग्यता, परीक्षा के 3 चरण (Prelims, Mains, Interview), IAS की सैलरी, और तैयारी करने की पूरी रणनीति इस गाइड में।"
excerpt: "आज हम आपको IAS ऑफिसर बनने के बारे में वो सब कुछ बताने जा रहे हैं जो आपको जानना चाहिए। यह सिर्फ एक नौकरी नहीं, बल्कि देश की सेवा करने का एक प्रतिष्ठित तरीका है। इसलिए आज, हम आपको यह बताएंगे कि IAS अधिकारी कौन होते हैं और वे क्या करते हैं, IAS बनने की योग्यता क्या है, परीक्षा का विवरण, और चयन के बाद IAS की सैलरी कितनी होती है।"
category: ["sarkari-naukri", "upsc"]
author: "Science Hindi"
author_image: /assets/images/sitelogo.webp
image: /assets/images/sitelogo.webp
image_caption: "IAS बनने का सफर: जानिए इस प्रतिष्ठित सेवा तक पहुंचने का पूरा रास्ता।"
tags: [ias kaise bane, ias yogyata, ias ki salary, ias ka kya kaam hota hai, upsc exam]

# Data for Interactive Components
eligibility_data:
  general:
    min_age: 21
    max_age: 32
    attempts: 6
  obc:
    min_age: 21
    max_age: 35
    attempts: 9
  sc_st:
    min_age: 21
    max_age: 37
    attempts: "Unlimited"
---

<style>
/* ==================================== */
/* ===  Global Styles & Typography  === */
/* ==================================== */
:root {
  --ias-primary-color: #1e3a8a; /* Deep Blue */
  --ias-secondary-color: #d97706; /* Amber/Saffron */
  --ias-text-primary: #111827;
  --ias-text-secondary: #374151;
  --ias-bg-light: #f3f4f6;
  --ias-bg-card: #ffffff;
  --ias-border: #e5e7eb;
  --ias-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1);
}

.post-prose {
  font-family: 'Inter', serif;
  color: var(--ias-text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
}

.post-prose h1, .post-prose h2, .post-prose h3, .post-prose h4, .post-prose h5, .post-prose h6 {
  font-family: 'Poppins', sans-serif;
  color: var(--ias-text-primary);
  font-weight: 700;
  line-height: 1.3;
}

.post-prose h2 { font-size: 2.25rem; margin-top: 3rem; margin-bottom: 1.5rem; text-align: center; }
.post-prose h3 { font-size: 1.75rem; margin-top: 2rem; margin-bottom: 1rem; }
.post-prose strong { font-weight: 600; color: var(--ias-text-primary); }
.post-prose ul { list-style-type: '• '; padding-left: 1.5rem; }

/* ================================ */
/* ===    Hero Stats Section    === */
/* ================================ */
.hero-stats-wrapper {
  background-color: var(--ias-bg-light);
  padding: 3rem 1rem;
  margin: 2rem 0;
}
.hero-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: auto;
}
.stat-card {
  background-color: var(--ias-bg-card);
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: var(--ias-shadow);
  border-top: 4px solid var(--ias-primary-color);
}
.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  color: var(--ias-primary-color);
}
.stat-label {
  font-size: 1rem;
  font-weight: 500;
  color: var(--ias-text-secondary);
}

/* ========================================== */
/* ===  Interactive Eligibility Checker   === */
/* ========================================== */
.eligibility-checker {
  background-color: var(--ias-bg-card);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--ias-shadow);
  border: 1px solid var(--ias-border);
  margin: 2rem auto;
  max-width: 800px;
}
.checker-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  align-items: flex-end;
}
.checker-input {
  display: flex;
  flex-direction: column;
}
.checker-input label {
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
  color: var(--ias-text-primary);
}
.checker-input select, .checker-input input {
  padding: 0.75rem;
  border: 1px solid var(--ias-border);
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: var(--ias-bg-light);
  color: var(--ias-text-primary);
}
.checker-result {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 600;
  display: none; /* Hidden by default */
}
.checker-result.eligible {
  background-color: #dcfce7;
  color: #166534;
  border: 1px solid #4ade80;
}
.checker-result.ineligible {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #f87171;
}

/* ================================ */
/* ===   Exam Journey Timeline  === */
/* ================================ */
.exam-journey {
  position: relative;
  max-width: 800px;
  margin: 4rem auto;
}
.exam-journey::before {
  content: '';
  position: absolute;
  width: 3px;
  background-color: var(--ias-primary-color);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1.5px;
}
.journey-stage {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}
.journey-stage::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -13px;
  background-color: var(--ias-bg-card);
  border: 4px solid var(--ias-secondary-color);
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}
.journey-left { left: 0; }
.journey-right { left: 50%; }
.journey-right::after { left: -12px; }
.stage-content {
  padding: 1.5rem;
  background-color: var(--ias-bg-card);
  position: relative;
  border-radius: 6px;
  box-shadow: var(--ias-shadow);
  border: 1px solid var(--ias-border);
}
.stage-content h3 {
  margin-top: 0;
  color: var(--ias-primary-color);
}
.stage-content p {
  font-size: 0.95rem;
  margin-bottom: 0;
}
.stage-marks {
  font-weight: bold;
  color: var(--ias-secondary-color);
}
@media screen and (max-width: 600px) {
  .exam-journey::before { left: 15px; }
  .journey-stage { width: 100%; padding-left: 50px; padding-right: 15px; }
  .journey-stage::after { left: 3px; }
  .journey-right { left: 0%; }
}

/* ================================ */
/* ===   IAS Salary Showcase    === */
/* ================================ */
.salary-showcase {
  background: linear-gradient(45deg, var(--ias-primary-color), #3b5998);
  color: white;
  padding: 2.5rem;
  border-radius: 1rem;
  margin: 3rem auto;
  max-width: 800px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.salary-showcase h3 {
  color: white;
  text-align: center;
  margin-top: 0;
}
.salary-levels {
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}
.salary-level h4 {
  font-size: 1rem;
  color: #d1d5db;
}
.salary-amount {
  font-size: 1.75rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
}
.salary-perks {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #e5e7eb;
}

/* ================================== */
/* ===  "Keys to Success" Section === */
/* ================================== */
.keys-to-success {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
.key-card {
  background: var(--ias-bg-card);
  padding: 2rem;
  text-align: center;
  border-radius: 0.75rem;
  box-shadow: var(--ias-shadow);
  border: 1px solid var(--ias-border);
  border-bottom: 4px solid var(--ias-secondary-color);
}
.key-icon {
  font-size: 3rem;
  color: var(--ias-secondary-color);
  margin-bottom: 1rem;
}
.key-card h4 {
  margin-top: 0;
  font-size: 1.25rem;
  color: var(--ias-text-primary);
}
.key-card p {
  font-size: 0.95rem;
}

/* ================================ */
/* ===       FAQ Section        === */
/* ================================ */
.faq-container { margin: 4rem auto; max-width: 800px; }
.faq-item {
  border-bottom: 1px solid var(--ias-border);
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: var(--ias-text-primary);
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
}
.faq-answer p { padding-bottom: 1.5rem; margin-bottom: 0; }
.faq-toggle {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  color: var(--ias-primary-color);
}
.faq-item.active .faq-toggle {
  transform: rotate(45deg);
}

/* ================================================= */
/* ===      NEW: DARK MODE OVERRIDES             === */
/* ================================================= */
.dark-mode .post-prose {
    --ias-text-primary: #f9fafb;
    --ias-text-secondary: #9ca3af;
    --ias-bg-light: #111827;
    --ias-bg-card: #1f2937;
    --ias-border: #374151;
    --ias-shadow: 0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -2px rgba(0,0,0,0.4);
}

.dark-mode .checker-result.eligible {
    background-color: #14532d;
    color: #bbf7d0;
    border-color: #22c55e;
}
.dark-mode .checker-result.ineligible {
    background-color: #7f1d1d;
    color: #fecaca;
    border-color: #ef4444;
}
</style>

आज हम आपको IAS ऑफिसर बनने के बारे में वो सब कुछ बताने जा रहे हैं जो आपको जानना चाहिए। यह सिर्फ एक नौकरी नहीं, बल्कि देश की सेवा करने का एक प्रतिष्ठित तरीका है। इसलिए आज, हम आपको यह बताएंगे कि **IAS अधिकारी कौन होते हैं** और वे क्या करते हैं, **IAS बनने की योग्यता** क्या है, परीक्षा का विवरण, और चयन के बाद **IAS की सैलरी** कितनी होती है।

<div class="hero-stats-wrapper">
  <div class="hero-stats-grid">
    <div class="stat-card">
      <div class="stat-number">10 लाख+</div>
      <div class="stat-label">आवेदक हर साल</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">3 चरण</div>
      <div class="stat-label">परीक्षा प्रक्रिया</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">~1000</div>
      <div class="stat-label">कुल चयन</div>
    </div>
  </div>
</div>


### IAS अधिकारी कौन हैं और वे क्या करते हैं?
IAS का अर्थ **भारतीय प्रशासनिक सेवा (Indian Administrative Service)** है। सीधे शब्दों में कहें तो, IAS अधिकारी सरकार की नीतियों को लागू करने, कानून और व्यवस्था बनाए रखने, राजस्व संग्रह करने और संकट के समय प्रबंधन करने में महत्वपूर्ण भूमिका निभाते हैं। वे सरकारी मशीनरी की रीढ़ होते हैं।

एक IAS अधिकारी का काम बहुत विविध होता है। करियर की शुरुआत में, वे एक **उप-जिला मजिस्ट्रेट (SDM)** के रूप में काम करते हैं, जहाँ वे अपने क्षेत्र में कानून और व्यवस्था की देखरेख करते हैं। अनुभव के साथ, वे **जिला मजिस्ट्रेट (DM) या कलेक्टर** बनते हैं, जो पूरे जिले के प्रशासन के लिए जिम्मेदार होते हैं। वरिष्ठ स्तर पर, वे राज्य सरकार या केंद्र सरकार में सचिव (Secretary) के रूप में नीतियों का निर्माण करते हैं।

अगर मुझे उनकी तुलना किसी सुपर-हीरो से करनी होती, तो मैं कहता कि वे स्पाइडर-मैन जैसे हैं। उनके पास बहुत ताकत है, लेकिन इसके साथ बहुत बड़ी जिम्मेदारी भी आती है।

### IAS अधिकारी कैसे बनें?
IAS ऑफिसर बनने के लिए आपको **UPSC** (संघ लोक सेवा आयोग) द्वारा आयोजित **सिविल सेवा परीक्षा (Civil Services Examination - CSE)** को पास करना होता है। इस परीक्षा में प्राप्त रैंक के आधार पर आपको IAS, IFS, IPS और इसके अंतर्गत आने वाली 24 अन्य सेवाओं में से कोई एक आवंटित की जाती है।

### IAS बनने के लिए योग्यता (Eligibility)
अब हम चर्चा करने जा रहे हैं कि इस परीक्षा को देने के लिए आपको किन योग्यताओं को पूरा करने की आवश्यकता है। आप नीचे दिए गए टूल से तुरंत अपनी योग्यता जांच सकते हैं!

<div class="eligibility-checker">
  <h3>क्या आप IAS परीक्षा के लिए योग्य हैं?</h3>
  <div class="checker-grid">
    <div class="checker-input">
      <label for="category-select">आपकी श्रेणी (Category)</label>
      <select id="category-select">
        <option value="general">सामान्य (General)</option>
        <option value="obc">OBC</option>
        <option value="sc_st">SC/ST</option>
      </select>
    </div>
    <div class="checker-input">
      <label for="age-input">आपकी उम्र (Age)</label>
      <input type="number" id="age-input" placeholder="जैसे: 25">
    </div>
    <div class="checker-input">
      <label for="degree-select">क्या आपके पास डिग्री है?</label>
      <select id="degree-select">
        <option value="yes">हाँ (Yes)</option>
        <option value="no">नहीं (No)</option>
      </select>
    </div>
  </div>
  <div class="checker-result" id="eligibility-result">
    </div>
</div>

**योग्यता के मुख्य बिंदु:**
1.  **नागरिकता:** IAS और IPS के लिए, आपको भारत का नागरिक होना चाहिए।
2.  **आयु सीमा:** न्यूनतम आयु 21 वर्ष है। अधिकतम आयु सीमा श्रेणी के अनुसार अलग-अलग है:
    * **सामान्य:** 32 वर्ष
    * **OBC:** 35 वर्ष
    * **SC/ST:** 37 वर्ष
3.  **परीक्षा के प्रयास (Attempts):**
    * **सामान्य:** 6 प्रयास
    * **OBC:** 9 प्रयास
    * **SC/ST:** आयु सीमा तक असीमित प्रयास
4.  **शैक्षणिक योग्यता:** आपके पास किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक (Graduation) की डिग्री होनी चाहिए। इसमें कोई न्यूनतम प्रतिशत की आवश्यकता नहीं है, बस आपका पास होना जरूरी है। फाइनल ईयर के छात्र भी आवेदन कर सकते हैं।

## UPSC परीक्षा के 3 चरण
सिविल सेवा परीक्षा एक साल लंबी प्रक्रिया है जिसमें तीन मुख्य चरण होते हैं:

<div class="exam-journey">
  <div class="journey-stage journey-left">
    <div class="stage-content">
      <h3>चरण 1: प्रिलिम्स (Prelims)</h3>
      <p>यह एक ऑब्जेक्टिव (MCQ) परीक्षा है और यह केवल एक स्क्रीनिंग टेस्ट है; इसके अंक फाइनल रैंक में नहीं जुड़ते। इसमें दो पेपर होते हैं:</p>
      <ul>
        <li><strong>पेपर I:</strong> सामान्य अध्ययन (GS) - 200 अंक</li>
        <li><strong>पेपर II:</strong> CSAT (Qualifying with 33%) - 200 अंक</li>
      </ul>
      <p class="stage-marks">मुख्य परीक्षा के लिए चयन GS पेपर I के आधार पर होता है।</p>
    </div>
  </div>
  <div class="journey-stage journey-right">
    <div class="stage-content">
      <h3>चरण 2: मेन्स (Mains)</h3>
      <p>यह एक लिखित (Descriptive) परीक्षा है और आपकी रैंक इसी पर निर्भर करती है। इसमें कुल 9 पेपर होते हैं, जिनमें निबंध, सामान्य अध्ययन, वैकल्पिक विषय और भाषा के पेपर शामिल हैं।</p>
      <p class="stage-marks">कुल अंक: 1750</p>
    </div>
  </div>
  <div class="journey-stage journey-left">
    <div class="stage-content">
      <h3>चरण 3: इंटरव्यू (Interview)</h3>
      <p>मेन्स पास करने के बाद, आपको पर्सनैलिटी टेस्ट (इंटरव्यू) के लिए बुलाया जाता है। इसका उद्देश्य आपके व्यक्तित्व, मानसिक सतर्कता और नेतृत्व क्षमता का आकलन करना है।</p>
      <p class="stage-marks">कुल अंक: 275</p>
    </div>
  </div>
</div>

अंतिम परिणाम मेन्स और इंटरव्यू के अंकों को मिलाकर (कुल 2025 में से) तैयार किया जाता है।

### UPSC परीक्षा का सिलेबस (संक्षेप में)
UPSC का सिलेबस बहुत बड़ा है, लेकिन इसे समझना मुश्किल नहीं है।
* **प्रिलिम्स:** इसमें मुख्य रूप से भारत का इतिहास, भूगोल, राजनीति, अर्थव्यवस्था, पर्यावरण, विज्ञान और करंट अफेयर्स पूछे जाते हैं। CSAT पेपर में रीजनिंग, कॉम्प्रिहेंशन और बेसिक गणित के सवाल होते हैं।
* **मेन्स:** इसमें 9 पेपर होते हैं:
    * **पेपर A & B:** एक भारतीय भाषा और अंग्रेजी (ये सिर्फ क्वालिफाइंग होते हैं)।
    * **पेपर 1:** निबंध (Essay)।
    * **GS पेपर I:** भारतीय विरासत और संस्कृति, इतिहास, और विश्व का भूगोल।
    * **GS पेपर II:** शासन, संविधान, राजनीति, सामाजिक न्याय और अंतर्राष्ट्रीय संबंध।
    * **GS पेपर III:** प्रौद्योगिकी, आर्थिक विकास, जैव विविधता, पर्यावरण, सुरक्षा और आपदा प्रबंधन।
    * **GS पेपर IV:** नैतिकता, सत्यनिष्ठा और एप्टीट्यूड (Ethics)।
    * **दो पेपर:** आपका वैकल्पिक विषय (Optional Subject)।

### IAS अधिकारी का वेतन (Salary)

<div class="salary-showcase">
  <h3>IAS अधिकारी की सैलरी और सुविधाएं</h3>
  <div class="salary-levels">
    <div class="salary-level">
      <h4>शुरुआती सैलरी</h4>
      <div class="salary-amount">~₹56,100</div>
      <span>(प्रति माह)</span>
    </div>
    <div class="salary-level">
      <h4>वरिष्ठ स्तर (कैबिनेट सचिव)</h4>
      <div class="salary-amount">₹2,50,000</div>
      <span>(प्रति माह)</span>
    </div>
  </div>
  <p class="salary-perks">+ महंगाई भत्ता (DA), यात्रा भत्ता (TA), आवास भत्ता (HRA), और अन्य सुविधाएं जैसे गाड़ी, बंगला, और मेडिकल कवर।</p>
</div>

### IAS की तैयारी कैसे करें?
यह एक लंबी यात्रा है, और सही रणनीति बहुत महत्वपूर्ण है।
1.  **NCERT से शुरुआत करें:** कक्षा 6 से 12 तक की NCERT की किताबें आपका आधार बनाती हैं। इन्हें अच्छी तरह से पढ़ें।
2.  **एक वैकल्पिक विषय चुनें:** ऐसा विषय चुनें जिसमें आपकी रुचि हो और जिसका स्टडी मटेरियल आसानी से उपलब्ध हो। यह 500 अंकों का होता है, इसलिए यह बहुत महत्वपूर्ण है।
3.  **अखबार पढ़ने की आदत डालें:** 'The Hindu' या 'The Indian Express' जैसे अखबार रोज पढ़ें। यह आपको करंट अफेयर्स और निबंध लिखने में मदद करेगा।
4.  **उत्तर लिखने का अभ्यास करें:** मेन्स परीक्षा पूरी तरह से लिखने पर आधारित है। इसलिए, पहले दिन से ही उत्तर लिखने का अभ्यास करें।
5.  **मॉक टेस्ट दें:** प्रिलिम्स और मेन्स दोनों के लिए नियमित रूप से मॉक टेस्ट दें। इससे आपको अपनी गलतियों को समझने और समय प्रबंधन में मदद मिलेगी।

### IAS बनने के लिए क्या ज़रूरी है?
अगर आप IAS परीक्षा को पास करना चाहते हैं, तो आपको ये 3 काम करने चाहिए:

<div class="keys-to-success">
  <div class="key-card">
    <div class="key-icon">📰</div>
    <h4>निरंतरता (Consistency)</h4>
    <p>करंट अफेयर्स इस परीक्षा की आत्मा है। हर रोज अखबार पढ़ने की आदत डालें। यह आपके ज्ञान को बढ़ाएगा और इंटरव्यू में आत्मविश्वास देगा।</p>
  </div>
  <div class="key-card">
    <div class="key-icon">⏳</div>
    <h4>टाइम-मैनेजमेंट</h4>
    <p>IAS की तैयारी करते समय, समय का सही प्रबंधन ही सफलता की कुंजी है। सोशल मीडिया जैसे विकर्षणों से दूर रहें और एक अनुशासित दिनचर्या का पालन करें।</p>
  </div>
  <div class="key-card">
    <div class="key-icon">❤️</div>
    <h4>धैर्य और स्वास्थ्य</h4>
    <p>यह एक लंबी यात्रा है। अपने टाइम-टेबल में व्यायाम और पर्याप्त नींद के लिए समय जरूर रखें, क्योंकि स्वस्थ शरीर में ही स्वस्थ दिमाग रहता है।</p>
  </div>
</div>

## अक्सर पूछे जाने वाले प्रश्न (FAQ)

<div class="faq-container">
  <div class="faq-item">
    <div class="faq-question">IAS की तैयारी कब शुरू करनी चाहिए?<span class="faq-toggle">+</span></div>
    <div class="faq-answer">
      <p>आमतौर पर परीक्षा से 10-12 महीने पहले की तैयारी की सलाह दी जाती है। यदि आप जून 2026 में प्रिलिम्स देना चाहते हैं, तो आपको अगस्त 2025 से अपनी तैयारी शुरू कर देनी चाहिए। हालांकि, कुछ छात्र 5-6 महीने की केंद्रित तैयारी के साथ भी सफल होते हैं।</p>
    </div>
  </div>
  <div class="faq-item">
    <div class="faq-question">UPSC कोचिंग का खर्च कितना है?<span class="faq-toggle">+</span></div>
    <div class="faq-answer">
      <p>जो लोग कोचिंग लेना चाहते हैं, उनके लिए इसका खर्च शहर और संस्थान के आधार पर ₹1.5 लाख से ₹2.5 लाख या उससे अधिक हो सकता है। लेकिन याद रखें, सबसे महत्वपूर्ण निवेश आपके समय और समर्पण का है।</p>
    </div>
  </div>
   <div class="faq-item">
    <div class="faq-question">UPSC का पंजीकरण शुल्क कितना है?<span class="faq-toggle">+</span></div>
    <div class="faq-answer">
      <p>प्रिलिम्स के लिए पंजीकरण शुल्क ₹100 है, और मेन्स के लिए यह ₹200 है। महिला उम्मीदवारों और SC/ST/PwBD श्रेणी के उम्मीदवारों के लिए कोई शुल्क नहीं है।</p>
    </div>
  </div>
</div>

<p>यह सच है कि, IAS अधिकारी बनने की राह कठिन है। लेकिन एक बार जब आप आईएएस अधिकारी बन जाते हैं तो आप पर समाज को बेहतर बनाने की जिम्मेदारी आ जाती है। इसलिए यदि आपको लगता है कि आप IAS बन कर समाज का बोझ अपने कंधों पर ले सकते हैं, तो आप इसके लिए जाएं।</p>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // ===  Interactive Eligibility Checker   ===
    // ==========================================
    const categorySelect = document.getElementById('category-select');
    const ageInput = document.getElementById('age-input');
    const degreeSelect = document.getElementById('degree-select');
    const resultDiv = document.getElementById('eligibility-result');

    const eligibilityData = {
        general: { min_age: 21, max_age: 32 },
        obc: { min_age: 21, max_age: 35 },
        sc_st: { min_age: 21, max_age: 37 }
    };

    function checkEligibility() {
        if (!categorySelect || !ageInput || !degreeSelect) return;

        const category = categorySelect.value;
        const age = parseInt(ageInput.value);
        const hasDegree = degreeSelect.value === 'yes';
        
        if (!ageInput.value) { // Check if input is empty
            resultDiv.style.display = 'none';
            return;
        }

        const rules = eligibilityData[category];
        let message = '';
        let isEligible = true;

        if (!hasDegree) {
            message = 'आपको स्नातक (Graduate) होना चाहिए।';
            isEligible = false;
        } else if (age < rules.min_age) {
            message = `आपकी उम्र कम से कम ${rules.min_age} वर्ष होनी चाहिए।`;
            isEligible = false;
        } else if (age > rules.max_age) {
            message = `आपकी श्रेणी के लिए अधिकतम आयु सीमा ${rules.max_age} वर्ष है।`;
            isEligible = false;
        } else {
            message = 'बधाई हो! आप इस परीक्षा के लिए योग्य हैं।';
            isEligible = true;
        }

        resultDiv.textContent = message;
        resultDiv.className = 'checker-result'; // Reset classes
        resultDiv.classList.add(isEligible ? 'eligible' : 'ineligible');
        resultDiv.style.display = 'block';
    }
    
    if (categorySelect && ageInput && degreeSelect) {
        categorySelect.addEventListener('change', checkEligibility);
        ageInput.addEventListener('input', checkEligibility);
        degreeSelect.addEventListener('change', checkEligibility);
    }


    // ================================
    // ===   FAQ Accordion Logic    ===
    // ================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
</script>