(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const m=document.querySelector("#app");let a=[],l="all";const i=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);async function h(){}async function y(){{a=[],u();return}}function b(e){return`<article class="card">
    <div class="cover">${e.image_url?`<img src="${i(e.image_url)}" alt="">`:"<span>🧩</span>"}</div>
    <div class="card-body">
      <span class="tag">${i(e.edition||"Bedrock")}</span>
      <h3>${i(e.title)}</h3>
      <p>${i(e.description||"إضافة Minecraft")}</p>
      <button data-download="${i(e.id)}" class="primary">⬇ تحميل</button>
    </div>
  </article>`}function u(){const e=l==="all"?a:a.filter(t=>(t.edition||"").toLowerCase()===l);m.innerHTML=`
  <header><div class="brand">KIM <b>ADDONS</b></div>
    <nav>
      <button data-filter="all">الكل</button>
      <button data-filter="bedrock">Bedrock</button>
      <button data-filter="java">Java</button>
      <button id="uploadOpen">رفع إضافة</button>
      <button id="authOpen">تسجيل الدخول</button>
    </nav>
  </header>
  <main>
    <section class="hero"><div><small>منصة Minecraft للمبدعين</small><h1>إضافاتك، في مكان واحد.</h1>
      <p>ارفع ملفاتك فعليًا وشاركها مع اللاعبين، أو نزّل إضافات المجتمع.</p>
      <button class="primary" id="heroUpload">📤 ارفع ملفك</button>
    </div></section>
    <section><div class="section-head"><h2>أحدث الإضافات</h2><span>${e.length} إضافة</span></div>
      <div class="grid">${e.length?e.map(b).join(""):'<div class="empty">لا توجد إضافات بعد.</div>'}</div>
    </section>
  </main>
  <dialog id="modal"></dialog>`,g()}function p(e){const t=document.querySelector("#modal");t.innerHTML=e,t.showModal(),t.addEventListener("click",r=>{r.target===t&&t.close()},{once:!0})}function g(){document.querySelectorAll("[data-filter]").forEach(e=>e.onclick=()=>{l=e.dataset.filter,u()}),document.querySelector("#authOpen").onclick=v,document.querySelector("#uploadOpen").onclick=s,document.querySelector("#heroUpload").onclick=s,document.querySelectorAll("[data-download]").forEach(e=>e.onclick=()=>q(e.dataset.download))}function v(){p(`<form class="modal-box" id="authForm"><h2>تسجيل الدخول / إنشاء حساب</h2>
    <input id="email" type="email" placeholder="البريد الإلكتروني" required>
    <input id="password" type="password" placeholder="كلمة المرور" minlength="6" required>
    <button class="primary">متابعة</button><p id="authMsg"></p></form>`),document.querySelector("#authForm").onsubmit=async e=>(e.preventDefault(),f("authMsg","أضف بيانات Supabase في ملف .env أولًا."))}const f=(e,t)=>document.querySelector("#"+e).textContent=t;function s(){p(`<form class="modal-box" id="uploadForm"><h2>رفع إضافة</h2>
    <input id="title" placeholder="اسم الإضافة" required>
    <select id="edition"><option value="bedrock">Bedrock</option><option value="java">Java</option></select>
    <textarea id="description" placeholder="الوصف"></textarea>
    <input id="file" type="file" required>
    <input id="image" type="file" accept="image/*">
    <button class="primary">📤 رفع فعلي</button><p id="uploadMsg"></p></form>`),document.querySelector("#uploadForm").onsubmit=S}async function S(e){return e.preventDefault(),f("uploadMsg","يجب تسجيل الدخول وإعداد Supabase.")}async function q(e){const t=a.find(r=>String(r.id)===String(e));if(!t?.file_url)return alert("رابط الملف غير متوفر.");window.open(t.file_url,"_blank","noopener")}await h();await y();
