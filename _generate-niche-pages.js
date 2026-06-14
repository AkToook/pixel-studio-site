const fs = require('fs');
const path = require('path');

const data = require('./_niche-data.json');
const OUT_DIR = __dirname;

function encodeWA(niche, city) {
  return encodeURIComponent(`Bonjour, je cherche un site web pour mon ${niche.name.toLowerCase()} à ${city.name}`);
}

function generatePage(niche, city) {
  const waMsg = encodeWA(niche, city);
  const cityPageSlug = `agence-web-${city.slug}.html`;

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Site web pour ${niche.name} à ${city.name} — Pixel Studio</title>
<meta name="description" content="Pixel Studio crée votre site web de ${niche.name.toLowerCase()} à ${city.name} : design sur mesure, SEO local, livraison en 72h. Maquette gratuite avant paiement. Devis en 24h.">
<link rel="canonical" href="https://pixelstudioo.fr/agence-web-${niche.slug}-${city.slug}.html">
<meta property="og:title" content="Site web ${niche.name} à ${city.name} — Pixel Studio">
<meta property="og:description" content="Créez votre site de ${niche.name.toLowerCase()} à ${city.name} avec Pixel Studio. SEO local inclus, maquette gratuite, livraison en 72h.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://pixelstudioo.fr/agence-web-${niche.slug}-${city.slug}.html">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"ProfessionalService","name":"Pixel Studio","url":"https://pixelstudioo.fr/","description":"Agence web spécialisée dans la création de sites internet pour les ${niche.nameLong}s à ${city.name}. Design sur mesure, SEO local, livraison en 72h.","telephone":"+33620757517","email":"contact@pixelstudioo.fr","areaServed":["${city.name}","${city.region}","France"],"address":{"@type":"PostalAddress","addressLocality":"Reims","postalCode":"51100","addressCountry":"FR"},"priceRange":"€€"}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${niche.faqs.map(f => `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`).join(',')}]}
</script>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--accent:#F72585;--sky:#7DD3FC;--green:#4ADE80;--muted:rgba(255,255,255,.55);--line:rgba(255,255,255,.1);--display:'Bricolage Grotesque',system-ui,sans-serif;--body:'Inter',system-ui,sans-serif}
html{scroll-behavior:smooth}
body{background:#050810;color:#fff;font-family:var(--body);font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1100px;margin:0 auto;padding:0 28px}

nav{background:rgba(5,8,16,.97);border-bottom:1px solid rgba(255,255,255,.08);padding:0 28px;height:66px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.nav-logo{font-family:var(--display);font-size:20px;font-weight:800;letter-spacing:-.04em;color:#fff}
.nav-logo span{color:var(--accent)}
.nav-cta{background:linear-gradient(120deg,var(--accent),#FF6EB4);color:#fff;font-family:var(--display);font-weight:700;font-size:13px;padding:10px 20px;border-radius:50px;transition:.2s}
.nav-cta:hover{opacity:.88}

.hero{padding:80px 0 64px;text-align:center;position:relative}
.hero::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 50% 0%,rgba(247,37,133,.12),transparent);pointer-events:none}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--display);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--sky);background:rgba(96,165,250,.1);border:1px solid rgba(125,211,252,.25);padding:7px 16px;border-radius:50px;margin-bottom:24px}
.hero h1{font-family:var(--display);font-size:clamp(32px,6vw,62px);font-weight:800;letter-spacing:-.04em;line-height:1.05;margin-bottom:20px}
.hero h1 .grad{background:linear-gradient(115deg,#F72585,#FF6EB4);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.hero p.lead{font-size:clamp(16px,2vw,19px);color:var(--muted);max-width:58ch;margin:0 auto 36px}
.hero-stat{display:inline-block;background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.2);border-radius:12px;padding:12px 24px;font-size:14px;color:#4ADE80;font-family:var(--display);font-weight:600;margin-bottom:36px}
.cta-group{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.btn-pink{background:linear-gradient(120deg,var(--accent),#FF6EB4);color:#fff;font-family:var(--display);font-weight:700;font-size:15px;padding:15px 28px;border-radius:50px;display:inline-flex;align-items:center;gap:8px;transition:.25s;box-shadow:0 8px 24px rgba(247,37,133,.3)}
.btn-pink:hover{transform:translateY(-2px)}
.btn-ghost{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2);font-family:var(--display);font-weight:600;font-size:15px;padding:15px 28px;border-radius:50px;display:inline-flex;align-items:center;gap:8px;transition:.2s}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent)}

.section{padding:72px 0;border-top:1px solid rgba(255,255,255,.06)}
.sec-tag{font-family:var(--display);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:14px}
.sec-title{font-family:var(--display);font-size:clamp(26px,4vw,42px);font-weight:800;letter-spacing:-.035em;margin-bottom:16px}
.sec-sub{font-size:17px;color:var(--muted);max-width:56ch;line-height:1.65}

.problems{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px}
.prob-card{background:rgba(247,37,133,.06);border:1px solid rgba(247,37,133,.15);border-radius:18px;padding:28px 24px}
.prob-icon{font-size:32px;margin-bottom:14px}
.prob-card h3{font-family:var(--display);font-size:18px;font-weight:700;margin-bottom:10px;color:#fff}
.prob-card p{font-size:14px;color:var(--muted);line-height:1.6}

.features{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:40px}
.feat{background:rgba(96,165,250,.07);border:1px solid rgba(96,165,250,.15);border-radius:12px;padding:16px 20px;font-family:var(--display);font-size:14px;font-weight:600;color:#fff;display:flex;align-items:center;gap:10px}
.feat::before{content:"✓";color:var(--green);font-size:16px;font-weight:800;flex-shrink:0}

.offer{background:rgba(0,20,50,.5);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:48px 44px;margin-top:44px;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.offer h3{font-family:var(--display);font-size:clamp(22px,3vw,32px);font-weight:800;margin-bottom:12px}
.offer p{color:var(--muted);font-size:15px;max-width:48ch}
.offer .price{font-family:var(--display);font-size:48px;font-weight:900;color:#fff;letter-spacing:-.04em;text-align:center}
.offer .price span{font-size:16px;color:var(--muted);display:block;font-weight:400}
.offer .free-badge{background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.25);border-radius:8px;padding:6px 14px;font-size:12px;font-weight:700;color:#4ADE80;font-family:var(--display);display:inline-block;margin-top:10px}

.faq-list{margin-top:44px;display:flex;flex-direction:column;gap:0}
.faq-item{border-top:1px solid rgba(255,255,255,.07);padding:24px 0}
.faq-item:last-child{border-bottom:1px solid rgba(255,255,255,.07)}
.faq-q{font-family:var(--display);font-size:18px;font-weight:700;margin-bottom:10px}
.faq-a{color:var(--muted);font-size:15px;line-height:1.7}

.links-section{padding:56px 0;border-top:1px solid rgba(255,255,255,.06)}
.links-grid{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.link-pill{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:50px;padding:8px 18px;font-size:13px;color:rgba(255,255,255,.7);transition:.2s;font-family:var(--display);font-weight:500}
.link-pill:hover{border-color:var(--accent);color:var(--accent)}

.cta-band{background:linear-gradient(135deg,rgba(247,37,133,.12),rgba(29,78,216,.08));border:1px solid rgba(247,37,133,.2);border-radius:24px;padding:52px 44px;text-align:center;margin:56px 0}
.cta-band h2{font-family:var(--display);font-size:clamp(24px,4vw,38px);font-weight:800;letter-spacing:-.035em;margin-bottom:14px}
.cta-band p{color:var(--muted);font-size:16px;margin-bottom:28px}

footer{background:rgba(255,255,255,.02);border-top:1px solid var(--line);padding:32px 28px;text-align:center}
footer p{font-size:13px;color:var(--muted)}
footer a{color:var(--accent)}

@media(max-width:768px){
  .problems{grid-template-columns:1fr}
  .features{grid-template-columns:1fr 1fr}
  .offer{grid-template-columns:1fr;text-align:center}
  .offer p{max-width:100%}
  .cta-band{padding:36px 22px}
  .offer{padding:32px 24px}
}
@media(max-width:480px){.features{grid-template-columns:1fr}}
</style>
</head>
<body>

<nav>
  <a href="index.html" class="nav-logo">Pixel<span>Studio</span></a>
  <a href="https://wa.me/33620757517?text=${waMsg}" class="nav-cta" target="_blank">Devis gratuit →</a>
</nav>

<div class="wrap">

  <!-- HERO -->
  <section class="hero">
    <div class="eyebrow">${niche.emoji} Site web ${niche.name} · ${city.name}</div>
    <h1>Votre site web de <span class="grad">${niche.name.toLowerCase()}</span><br>à ${city.name}</h1>
    <p class="lead">Pixel Studio crée votre site sur mesure — design professionnel, SEO local ciblé sur ${city.name}, livraison en 72h à 2 semaines. Maquette gratuite avant paiement.</p>
    <div class="hero-stat">${niche.stat}</div>
    <div class="cta-group">
      <a href="https://wa.me/33620757517?text=${waMsg}" class="btn-pink" target="_blank">Obtenir ma maquette gratuite →</a>
      <a href="index.html#offres" class="btn-ghost">Voir les tarifs</a>
    </div>
  </section>

  <!-- PROBLÈMES -->
  <section class="section">
    <div class="sec-tag">Le problème</div>
    <h2 class="sec-title">Pourquoi votre ${niche.name.toLowerCase()} à ${city.name}<br>a besoin d'un site web ?</h2>
    <p class="sec-sub">${niche.intro}</p>
    <div class="problems">
      ${niche.problems.map(p => `
      <div class="prob-card">
        <div class="prob-icon">${p.icon}</div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
      </div>`).join('')}
    </div>
  </section>

  <!-- FONCTIONNALITÉS -->
  <section class="section">
    <div class="sec-tag">Ce qu'on intègre</div>
    <h2 class="sec-title">Un site taillé pour votre<br>${niche.name.toLowerCase()}</h2>
    <p class="sec-sub">Chaque fonctionnalité est pensée pour convertir vos visiteurs en clients — pas pour faire joli.</p>
    <div class="features">
      ${niche.features.map(f => `<div class="feat">${f}</div>`).join('')}
    </div>

    <div class="offer">
      <div>
        <h3>Site web ${niche.name} à ${city.name}</h3>
        <p>Design sur mesure, SEO local optimisé pour les recherches dans ${city.name} et sa région, copywriting inclus, code source à vous dès la livraison.</p>
        <div class="free-badge">✓ Maquette gratuite avant paiement</div>
      </div>
      <div>
        <div class="price">490€<span>à partir de</span></div>
        <a href="https://wa.me/33620757517?text=${waMsg}" class="btn-pink" target="_blank" style="margin-top:20px;font-size:14px">Démarrer →</a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section">
    <div class="sec-tag">Questions fréquentes</div>
    <h2 class="sec-title">Ce que vous voulez savoir<br>avant de vous lancer</h2>
    <div class="faq-list">
      ${niche.faqs.map(f => `
      <div class="faq-item">
        <div class="faq-q">${f.q}</div>
        <div class="faq-a">${f.a}</div>
      </div>`).join('')}
    </div>
  </section>

  <!-- LIENS INTERNES -->
  <section class="links-section">
    <div class="sec-tag">Nos autres services à ${city.name}</div>
    <p style="color:var(--muted);font-size:15px;margin-top:8px">Vous cherchez une agence web généraliste à ${city.name} ou dans d'autres villes ?</p>
    <div class="links-grid">
      <a href="${cityPageSlug}" class="link-pill">Agence web ${city.name}</a>
      <a href="index.html#services" class="link-pill">Tous nos services</a>
      <a href="index.html#offres" class="link-pill">Nos tarifs</a>
      <a href="blog.html" class="link-pill">Blog SEO & web</a>
    </div>
  </section>

  <!-- CTA FINAL -->
  <div class="cta-band">
    <h2>Prêt à lancer votre site de<br>${niche.name.toLowerCase()} à ${city.name} ?</h2>
    <p>Devis gratuit sous 24h. Maquette incluse. Code source à vous dès la livraison.</p>
    <a href="https://wa.me/33620757517?text=${waMsg}" class="btn-pink" target="_blank">Obtenir mon devis gratuit →</a>
  </div>

</div>

<footer>
  <p><a href="index.html">← Pixel Studio</a> &nbsp;·&nbsp; <a href="${cityPageSlug}">Agence web ${city.name}</a> &nbsp;·&nbsp; © 2026 Pixel Studio</p>
</footer>

</body>
</html>`;
}

// Générer toutes les pages
let generated = 0;
const newUrls = [];

for (const niche of data.niches) {
  for (const city of data.cities) {
    const filename = `agence-web-${niche.slug}-${city.slug}.html`;
    const filepath = path.join(OUT_DIR, filename);
    fs.writeFileSync(filepath, generatePage(niche, city), 'utf8');
    newUrls.push(`https://pixelstudioo.fr/${filename}`);
    generated++;
    console.log(`✓ ${filename}`);
  }
}

// Mettre à jour le sitemap
const sitemapPath = path.join(OUT_DIR, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
const today = new Date().toISOString().split('T')[0];

const newEntries = newUrls.map(url =>
  `  <url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`
).join('\n');

sitemap = sitemap.replace('</urlset>', `${newEntries}\n</urlset>`);
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log(`\n✅ ${generated} pages générées (${data.niches.length} niches × ${data.cities.length} villes)`);
console.log(`📍 Sitemap mis à jour`);
