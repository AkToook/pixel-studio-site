/* ══════════════════════════════════════════════════════════
   PIXELDOR — Enregistrement des demandes (Google Sheets)
   Chaque formulaire envoyé est ajouté comme une ligne dans
   ton Google Sheet + tu reçois un email. WhatsApp continue
   de marcher comme avant en plus.
   ══════════════════════════════════════════════════════════ */
(function(){
  // ← Colle ici l'URL de ton Apps Script (elle finit par /exec)
  var LEADS_URL = '';

  function val(id){var e=document.getElementById(id);return e?String(e.value||'').trim():''}

  function save(d){
    if(!LEADS_URL) return;
    d.date = new Date().toLocaleString('fr-FR',{timeZone:'Europe/Paris'});
    d.page = location.pathname;
    d.provenance = document.referrer || 'direct';
    try{
      var q=new URLSearchParams(location.search);
      ['utm_source','utm_medium','utm_campaign','gclid','fbclid'].forEach(function(k){if(q.get(k)) d[k]=q.get(k)});
    }catch(e){}
    try{
      fetch(LEADS_URL,{method:'POST',mode:'no-cors',keepalive:true,
        headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(d)});
    }catch(e){}
  }

  function intakeType(){
    var el=document.querySelector('.intake-type.selected');
    if(el&&el.dataset.value) return el.dataset.value;
    if(window.intakeData&&window.intakeData.type) return window.intakeData.type;
    return '';
  }

  function wrap(name, collect){
    var orig=window[name];
    if(typeof orig!=='function') return;
    window[name]=function(){
      try{
        var d=collect.apply(this,arguments);
        if(d&&d.nom&&d.email) save(d);
      }catch(e){}
      return orig.apply(this,arguments);
    };
  }

  // Formulaire « maquette gratuite » en 3 étapes
  wrap('submitIntake',function(){
    return {source:'Maquette gratuite (3 étapes)',type:intakeType(),activite:val('i-activity'),
      budget:val('i-budget'),projet:val('i-desc'),nom:val('i-name'),email:val('i-email'),tel:val('i-phone')};
  });

  // Petit formulaire maquette
  wrap('submitMaquette',function(){
    return {source:'Maquette gratuite (court)',projet:val('mq-desc'),nom:val('mq-name'),
      email:val('mq-email'),tel:val('mq-phone')};
  });

  // Formulaire de contact
  wrap('handleContact',function(){
    var n=val('cf-name'),c=val('cf-company');
    return {source:'Formulaire de contact',nom:n+(c?' ('+c+')':''),email:val('cf-email'),
      tel:val('cf-phone'),type:val('cf-service'),projet:val('cf-message')};
  });
})();
