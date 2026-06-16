/* ── Pixel Studio — Shared JS ── */

// Niche rotation in hero
(function(){
  const niches=['restaurant','barbier','coiffeur','médecin','dentiste','chirurgien','kinésithérapeute','avocat','notaire','expert-comptable','architecte','immobilier','hôtel','traiteur','boulangerie','salle de sport','coach','photographe','artisan','garage','startup','e-commerce','agence','centre esthétique','association'];
  const el=document.getElementById('nicheWord');
  if(!el) return;
  let idx=0;
  function next(){
    el.style.transition='opacity .3s ease,transform .3s ease';
    el.style.opacity='0';
    el.style.transform='translateY(-16px)';
    setTimeout(function(){
      idx=(idx+1)%niches.length;
      el.textContent=niches[idx];
      el.style.transition='none';
      el.style.opacity='0';
      el.style.transform='translateY(16px)';
      requestAnimationFrame(function(){
        el.style.transition='opacity .35s ease,transform .35s ease';
        el.style.opacity='1';
        el.style.transform='translateY(0)';
      });
    },320);
  }
  setInterval(next,2400);
})();

// Header scroll
(function(){
  const h=document.getElementById('header');
  if(!h) return;
  const fn=()=>h.classList.toggle('scrolled',window.scrollY>20);
  window.addEventListener('scroll',fn,{passive:true});fn();
})();

// Burger menu
(function(){
  const b=document.getElementById('burger'),m=document.getElementById('menu');
  if(!b||!m) return;
  b.addEventListener('click',()=>m.classList.toggle('open'));
  m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')));
})();

// Reveal on scroll
const _io=new IntersectionObserver((es)=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');_io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%5*40)+'ms';_io.observe(el);});

// Contact form
function handleContact(e){
  e.preventDefault();
  const v=id=>(document.getElementById(id)||{}).value||'';
  const text=`Bonjour Pixel Studio 👋\n\nNom : ${v('cf-name')}${v('cf-company')?' ('+v('cf-company')+')':''}\nEmail : ${v('cf-email')}${v('cf-phone')?'\nTél : '+v('cf-phone'):''}\n${v('cf-service')?'Service : '+v('cf-service')+'\n':''}\nMessage :\n${v('cf-message')}`;
  window.open('https://wa.me/33620757517?text='+encodeURIComponent(text),'_blank');
  const s=document.getElementById('formSuccess');if(s) s.style.display='block';
  e.target.reset();
}

// Option modal
function openOptionModal(label){
  const waTexts={'Pack design ADS / LinkedIn · +390€':'Je%20veux%20le%20Pack%20design%20ADS','Campagne Google Ads · +750€':'Je%20veux%20la%20campagne%20Google%20Ads'};
  const sub=document.getElementById('optionModalSub'),wa=document.getElementById('optionWhatsapp'),m=document.getElementById('optionModal');
  if(sub) sub.textContent=label;
  if(wa) wa.href='https://wa.me/33620757517?text='+(waTexts[label]||'Je%20veux%20en%20savoir%20plus');
  if(m) m.classList.add('open');
}

// Filter projects
function filterProjects(cat,btn){
  document.querySelectorAll('.proj-filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.proj-card').forEach(c=>{c.style.display=(cat==='tous'||c.dataset.cat===cat)?'':'none';});
}

// Promo
function closePromo(){
  const p=document.getElementById('promoPopup');if(p) p.classList.remove('open');
  const bar=document.getElementById('promo-bar');
  if(bar&&!bar.classList.contains('show')){bar.classList.add('show');startPromoCountdown();}
}
function startPromoCountdown(){
  const el=document.getElementById('barCountdown');if(!el) return;
  let s=15*60;
  const iv=setInterval(()=>{s--;if(s<=0){clearInterval(iv);el.textContent='Expiré';return;}el.textContent=Math.floor(s/60)+':'+(s%60<10?'0':'')+(s%60);},1000);
}
(function(){
  if(sessionStorage.getItem('ps_promo_seen')) return;
  const popup=document.getElementById('promoPopup');if(!popup) return;
  setTimeout(()=>{popup.classList.add('open');sessionStorage.setItem('ps_promo_seen','1');},13000+Math.random()*1000);
})();

// Intake modal
let _intakeType='';
function openIntake(){
  const m=document.getElementById('intakeModal');if(!m) return;
  m.classList.add('open');_intakeType='';
  document.querySelectorAll('.intake-type').forEach(t=>t.classList.remove('selected'));
  nextIntakeStep(1);
}
function closeIntake(){const m=document.getElementById('intakeModal');if(m) m.classList.remove('open');}
function selectIntakeType(el){document.querySelectorAll('.intake-type').forEach(t=>t.classList.remove('selected'));el.classList.add('selected');_intakeType=el.dataset.value;}
function nextIntakeStep(n){
  document.querySelectorAll('.intake-step').forEach(s=>s.classList.remove('active'));
  const step=document.getElementById('istep'+n);if(step) step.classList.add('active');
  for(let i=1;i<=3;i++){const d=document.getElementById('idot'+i);if(d) d.classList.toggle('done',i<=Math.min(n,3));}
}
function submitIntake(){
  const v=id=>(document.getElementById(id)||{}).value||'';
  const name=v('i-name').trim(),email=v('i-email').trim();
  if(!name||!email){alert('Merci de renseigner votre nom et email.');return;}
  const labels={ecommerce:'Site e-commerce',vitrine:'Site vitrine',b2b:'B2B',b2c:'B2C',app:'App mobile',saas:'SaaS'};
  const text=`Bonjour Pixel Studio 👋\n\nDemande de maquette :\n• Type : ${labels[_intakeType]||'Non précisé'}\n• Activité : ${v('i-activity')||'N/A'}\n• Budget : ${v('i-budget')||'N/A'}\n• Projet : ${v('i-desc')||'N/A'}\n\nNom : ${name}\nEmail : ${email}${v('i-phone')?'\nTél : '+v('i-phone'):''}`;
  const wa=document.getElementById('intakeWhatsapp');if(wa) wa.href='https://wa.me/33620757517?text='+encodeURIComponent(text);
  nextIntakeStep(4);
}

// CNIL
const CNIL_KEY='ps_consent_v1';
function cnilGetStored(){try{return JSON.parse(localStorage.getItem(CNIL_KEY));}catch(e){return null;}}
function cnilStore(p){try{localStorage.setItem(CNIL_KEY,JSON.stringify({...p,ts:Date.now()}));}catch(e){}}
function cnilApply(a,m){if(typeof gtag==='function') gtag('consent','update',{analytics_storage:a?'granted':'denied',ad_storage:m?'granted':'denied',ad_user_data:m?'granted':'denied',ad_personalization:m?'granted':'denied'});}
function cnilHide(){const b=document.getElementById('cnil-banner');if(b) b.classList.remove('visible');}
function cnilCloseModal(){const m=document.getElementById('cnil-modal');if(m) m.classList.remove('open');}
function cnilAcceptAll(){cnilStore({analytics:true,marketing:true});cnilApply(true,true);cnilHide();cnilCloseModal();}
function cnilRefuseAll(){cnilStore({analytics:false,marketing:false});cnilApply(false,false);cnilHide();cnilCloseModal();}
function cnilSaveCustom(){
  const a=(document.getElementById('toggleAnalytics')||{}).checked;
  const m=(document.getElementById('toggleMarketing')||{}).checked;
  cnilStore({analytics:a,marketing:m});cnilApply(a,m);cnilHide();cnilCloseModal();
}
(function(){
  const s=cnilGetStored();
  if(s){cnilApply(s.analytics,s.marketing);}
  else{setTimeout(()=>{const b=document.getElementById('cnil-banner');if(b) b.classList.add('visible');},600);}
  const on=(id,evt,fn)=>{const el=document.getElementById(id);if(el) el.addEventListener(evt,fn);};
  on('cnilAccept','click',cnilAcceptAll);
  on('cnilRefuse','click',cnilRefuseAll);
  on('cnilSave','click',cnilSaveCustom);
  on('cnilModalRefuse','click',cnilRefuseAll);
  on('cnilCustom','click',()=>{
    const s=cnilGetStored();
    if(s){const ta=document.getElementById('toggleAnalytics');if(ta) ta.checked=!!s.analytics;const tm=document.getElementById('toggleMarketing');if(tm) tm.checked=!!s.marketing;}
    const m=document.getElementById('cnil-modal');if(m) m.classList.add('open');
  });
  on('cnilReopen','click',()=>{
    const s=cnilGetStored();
    if(s){const ta=document.getElementById('toggleAnalytics');if(ta) ta.checked=!!s.analytics;const tm=document.getElementById('toggleMarketing');if(tm) tm.checked=!!s.marketing;}
    const b=document.getElementById('cnil-banner');if(b) b.classList.add('visible');
    const m=document.getElementById('cnil-modal');if(m) m.classList.add('open');
  });
  const cm=document.getElementById('cnil-modal');
  if(cm) cm.addEventListener('click',e=>{if(e.target===cm) cnilCloseModal();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') cnilCloseModal();});
})();
