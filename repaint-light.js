const fs = require('fs');
const dir = 'C:/Users/Asus Tuf F15/Claude/Projects/pixel web design agency/';

// ── style.css ──────────────────────────────────────
let css = fs.readFileSync(dir + 'style.css', 'utf8');

// 1. Root variables → nouvelle charte
css = css.replace(
  /:root\{[\s\S]*?\}/,
  `:root{
  --bg:rgba(247,240,230,0);
  --bg-soft:#EBE4D8;
  --bg-blue:rgba(212,49,122,.07);
  --ink:#1A1A1A;
  --ink-2:rgba(26,26,26,.8);
  --muted:rgba(26,26,26,.5);
  --line:rgba(26,26,26,.1);
  --blue:#D4317A;
  --blue-2:#E8A87C;
  --sky:#D4A853;
  --green:#4ADE80;
  --accent:#D4317A;
  --display:'Space Grotesk',system-ui,sans-serif;
  --body:'Inter',system-ui,sans-serif;
  --r:18px;
  --maxw:1440px;
}`
);

// 2. Body background
css = css.replace('background:#07070F;', 'background:#F7F0E6;');

// 3. Indigo → Fuchsia (accent colors)
const accent = [
  ['#7C5CFC', '#D4317A'], ['#A08BF8', '#E8A87C'], ['#C4B5FD', '#D4A853'],
  ['#4B35C8', '#B01860'], ['#6246EA', '#C02A6E'], ['#5B3FE8', '#B01860'],
  ['#7C3AED', '#B01860'],
  ['rgba(124,92,252,', 'rgba(212,49,122,'],
  ['rgba(75,53,200,',  'rgba(176,24,96,'],
  ['rgba(98,70,234,',  'rgba(192,42,110,'],
  ['rgba(196,181,253,', 'rgba(212,49,122,.25)/*'], // handled separately
];
for (const [f,t] of accent) css = css.split(f).join(t);

// 4. Dark backgrounds → light cream
const darkBg = [
  ['rgba(7,7,15,',    'rgba(235,228,216,'],
  ['rgba(4,7,14,',    'rgba(235,228,216,'],
  ['rgba(4,8,20,',    'rgba(235,228,216,'],
  ['rgba(7,5,20,',    'rgba(235,228,216,'],
  ['rgba(8,12,24,',   'rgba(235,228,216,'],
  ['rgba(7,7,20,',    'rgba(235,228,216,'],
  ['rgba(18,14,40,',  'rgba(235,228,216,'],
  ['rgba(3,10,30,',   'rgba(235,228,216,'],
  ['rgba(0,10,30,',   'rgba(235,228,216,'],
  ['rgba(0,5,20,',    'rgba(235,228,216,'],
  ['rgba(0,20,55,',   'rgba(235,228,216,'],
  ['rgba(0,0,10,',    'rgba(235,228,216,'],
  ['#0d1117',  '#EDE7DB'],
  ['#141414',  '#F7F0E6'],
  ['#1a1f2e',  'rgba(26,26,26,.06)'],
  ['#0E0C22',  '#EDE7DB'],
  ['#0a1628',  '#F7F0E6'],
  // Overlays
  ['rgba(0,0,0,.72)', 'rgba(26,26,26,.45)'],
  ['rgba(0,0,0,.8)',  'rgba(26,26,26,.5)'],
  ['rgba(0,0,0,.7)',  'rgba(26,26,26,.4)'],
  ['rgba(0,0,0,.55)', 'rgba(26,26,26,.35)'],
  ['rgba(0,0,0,.5)',  'rgba(26,26,26,.3)'],
  ['rgba(0,0,0,.4)',  'rgba(26,26,26,.22)'],
  ['rgba(0,0,0,.3)',  'rgba(26,26,26,.18)'],
  ['rgba(0,0,0,.25)', 'rgba(26,26,26,.14)'],
  ['rgba(0,0,0,.2)',  'rgba(26,26,26,.1)'],
];
for (const [f,t] of darkBg) css = css.split(f).join(t);

// 5. White card/subtle backgrounds → light versions
const whiteBg = [
  ['background:rgba(255,255,255,.04)', 'background:rgba(26,26,26,.03)'],
  ['background:rgba(255,255,255,.06)', 'background:rgba(26,26,26,.04)'],
  ['background:rgba(255,255,255,.07)', 'background:rgba(26,26,26,.04)'],
  ['background:rgba(255,255,255,.08)', 'background:rgba(26,26,26,.05)'],
  ['background:rgba(255,255,255,.1)',  'background:rgba(26,26,26,.06)'],
  ['background:rgba(255,255,255,.12)', 'background:rgba(26,26,26,.07)'],
  ['background:rgba(255,255,255,.14)', 'background:rgba(26,26,26,.08)'],
];
for (const [f,t] of whiteBg) css = css.split(f).join(t);

// 6. White borders → dark subtle borders
css = css.split('1px solid rgba(255,255,255,').join('1px solid rgba(26,26,26,');
css = css.split('1.5px solid rgba(255,255,255,').join('1.5px solid rgba(26,26,26,');
css = css.split('2px solid rgba(255,255,255,').join('2px solid rgba(26,26,26,');

// 7. White text (color only — not backgrounds) → dark text
const whiteTxt = [
  ['color:rgba(255,255,255,.85)', 'color:rgba(26,26,26,.8)'],
  ['color:rgba(255,255,255,.82)', 'color:rgba(26,26,26,.78)'],
  ['color:rgba(255,255,255,.8)',  'color:rgba(26,26,26,.75)'],
  ['color:rgba(255,255,255,.75)', 'color:rgba(26,26,26,.65)'],
  ['color:rgba(255,255,255,.72)', 'color:rgba(26,26,26,.65)'],
  ['color:rgba(255,255,255,.7)',  'color:rgba(26,26,26,.6)'],
  ['color:rgba(255,255,255,.65)', 'color:rgba(26,26,26,.55)'],
  ['color:rgba(255,255,255,.6)',  'color:rgba(26,26,26,.55)'],
  ['color:rgba(255,255,255,.55)', 'color:rgba(26,26,26,.5)'],
  ['color:rgba(255,255,255,.5)',  'color:rgba(26,26,26,.45)'],
  ['color:rgba(255,255,255,.45)', 'color:rgba(26,26,26,.4)'],
  ['color:rgba(255,255,255,.4)',  'color:rgba(26,26,26,.35)'],
  ['color:rgba(255,255,255,.38)', 'color:rgba(26,26,26,.32)'],
  ['color:rgba(255,255,255,.35)', 'color:rgba(26,26,26,.3)'],
  ['color:rgba(255,255,255,.3)',  'color:rgba(26,26,26,.25)'],
  ['color:rgba(255,255,255,.28)', 'color:rgba(26,26,26,.22)'],
  ['color:rgba(255,255,255,.25)', 'color:rgba(26,26,26,.2)'],
  ['color:rgba(255,255,255,.2)',  'color:rgba(26,26,26,.15)'],
];
for (const [f,t] of whiteTxt) css = css.split(f).join(t);

// 8. Hardcoded color:#fff on text elements (NOT buttons) → dark
// Replace specific non-button instances
css = css.replace('.hero h1{color:#fff;', '.hero h1{color:#1A1A1A;');
css = css.replace('.manifeste-title{font-size:clamp(28px,4.5vw,52px);color:#fff;', '.manifeste-title{font-size:clamp(28px,4.5vw,52px);color:#1A1A1A;');
css = css.replace('.modal-box h3{font-size:22px;color:#fff;', '.modal-box h3{font-size:22px;color:#1A1A1A;');
css = css.replace('.meth-right h3{font-family:var(--display);font-size:clamp(19px,2.3vw,25px);font-weight:800;color:#fff;', '.meth-right h3{font-family:var(--display);font-size:clamp(19px,2.3vw,25px);font-weight:800;color:#1A1A1A;');
css = css.replace('.rule-card h4{font-family:var(--display);font-size:clamp(16px,1.8vw,19px);font-weight:700;color:#fff;', '.rule-card h4{font-family:var(--display);font-size:clamp(16px,1.8vw,19px);font-weight:700;color:#1A1A1A;');
css = css.replace('.price-simple-card h3{font-family:var(--display);font-size:clamp(19px,2.2vw,24px);font-weight:800;color:#fff;', '.price-simple-card h3{font-family:var(--display);font-size:clamp(19px,2.2vw,24px);font-weight:800;color:#1A1A1A;');
css = css.replace('.proc h3{font-family:var(--display);font-size:18px;font-weight:700;color:#fff;', '.proc h3{font-family:var(--display);font-size:18px;font-weight:700;color:#1A1A1A;');
css = css.replace('.blog-card h3{font-family:var(--display);font-size:clamp(15px,1.7vw,18px);font-weight:700;color:#fff;', '.blog-card h3{font-family:var(--display);font-size:clamp(15px,1.7vw,18px);font-weight:700;color:#1A1A1A;');
css = css.replace('.dual-card h2{font-family:var(--display);font-size:clamp(19px,2.4vw,26px);font-weight:800;color:#fff;', '.dual-card h2{font-family:var(--display);font-size:clamp(19px,2.4vw,26px);font-weight:800;color:#1A1A1A;');
css = css.replace('.intake-step h3{font-size:clamp(20px,3vw,26px);color:#fff;', '.intake-step h3{font-size:clamp(20px,3vw,26px);color:#1A1A1A;');
css = css.replace('.intake-type .it-label{font-family:var(--display);font-size:13px;font-weight:700;color:#fff;', '.intake-type .it-label{font-family:var(--display);font-size:13px;font-weight:700;color:#1A1A1A;');
css = css.replace('.quote blockquote{font-family:var(--display);font-size:clamp(22px,3.2vw,38px);font-weight:700;letter-spacing:-.03em;line-height:1.22;color:#fff}', '.quote blockquote{font-family:var(--display);font-size:clamp(22px,3.2vw,38px);font-weight:700;letter-spacing:-.03em;line-height:1.22;color:#1A1A1A}');
css = css.replace('.quote .who strong{color:#fff}', '.quote .who strong{color:#1A1A1A}');
css = css.replace('.tech-fam h4{font-family:var(--display);font-size:16px;font-weight:800;color:#fff;', '.tech-fam h4{font-family:var(--display);font-size:16px;font-weight:800;color:#1A1A1A;');
css = css.replace('.proj-card-name{font-family:var(--display);font-size:17px;font-weight:800;color:#fff;', '.proj-card-name{font-family:var(--display);font-size:17px;font-weight:800;color:#1A1A1A;');
css = css.replace('.portrait-initials{display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:52px;font-weight:800;color:#fff}', '.portrait-initials{display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:52px;font-weight:800;color:#1A1A1A}');
css = css.replace('.portrait-info strong{display:block;font-family:var(--display);font-size:17px;font-weight:700;color:#fff;', '.portrait-info strong{display:block;font-family:var(--display);font-size:17px;font-weight:700;color:#1A1A1A;');
css = css.replace('.work-card h3{color:#fff;', '.work-card h3{color:#1A1A1A;');
css = css.replace('.price-simple-num{font-family:var(--display);font-size:clamp(42px,5.5vw,62px);font-weight:900;color:#fff;', '.price-simple-num{font-family:var(--display);font-size:clamp(42px,5.5vw,62px);font-weight:900;color:#1A1A1A;');

// 9. Nav → light
css = css.replace(
  'header.scrolled{background:rgba(235,228,216,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(26,26,26,.08);box-shadow:0 1px 20px rgba(0,0,0,.3)}',
  'header.scrolled{background:rgba(247,240,230,.97);backdrop-filter:blur(20px);border-bottom:1px solid rgba(26,26,26,.1);box-shadow:0 1px 20px rgba(26,26,26,.1)}'
);
css = css.replace('.logo{font-family:var(--display);font-size:23px;font-weight:800;letter-spacing:-.04em;color:#fff}', '.logo{font-family:var(--display);font-size:23px;font-weight:800;letter-spacing:-.04em;color:#1A1A1A}');
css = css.replace('.nav-menu a{font-size:15px;color:rgba(26,26,26,.8);', '.nav-menu a{font-size:15px;color:rgba(26,26,26,.7);');

// 10. Hero text
css = css.replace('.hero p.lead{color:rgba(255,255,255,.8)}', '.hero p.lead{color:rgba(26,26,26,.7)}');
css = css.replace('.hero-meta{border-top-color:rgba(255,255,255,.2)}', '.hero-meta{border-top-color:rgba(26,26,26,.12)}');
css = css.replace('.hero-meta .n{color:#fff}', '.hero-meta .n{color:#1A1A1A}');

// 11. Section bg → transparent to show cream body
css = css.replace(
  'section{padding:120px 0;background:rgba(235,228,216,.82);',
  'section{padding:120px 0;background:transparent;'
);

// 12. tag::before line → dark
css = css.replace('.tag::before{content:"";width:26px;height:1px;background:rgba(255,255,255,.5)}', '.tag::before{content:"";width:26px;height:1px;background:rgba(26,26,26,.25)}');

// 13. Manifeste pills → light style
css = css.replace(
  '.manifeste-pills span{font-family:var(--display);font-size:13px;font-weight:600;color:var(--ink-2);background:rgba(26,26,26,.04);border:1px solid rgba(26,26,26,.1);padding:8px 18px;border-radius:50px}',
  '.manifeste-pills span{font-family:var(--display);font-size:13px;font-weight:600;color:var(--ink-2);background:rgba(212,49,122,.06);border:1px solid rgba(212,49,122,.15);padding:8px 18px;border-radius:50px}'
);

// 14. footer → light
css = css.replace(
  'footer{background:rgba(235,228,216,.75);backdrop-filter:blur(12px);border-top:1px solid rgba(26,26,26,.1);color:#fff;',
  'footer{background:#EBE4D8;border-top:1px solid rgba(26,26,26,.1);color:#1A1A1A;'
);
css = css.replace('.foot-top .logo{color:#fff;font-size:26px}', '.foot-top .logo{color:#1A1A1A;font-size:26px}');

// 15. Promo box → light
css = css.replace('.promo-box h3{font-family:var(--display);font-size:clamp(26px,5vw,34px);font-weight:900;color:#fff;', '.promo-box h3{font-family:var(--display);font-size:clamp(26px,5vw,34px);font-weight:900;color:#1A1A1A;');

// 16. City pin → light theme style
css = css.replace(
  '.city-pin{position:absolute;display:inline-flex;align-items:center;gap:10px;background:rgba(235,228,216,.75);border:1.5px solid rgba(26,26,26,.35);',
  '.city-pin{position:absolute;display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.85);border:1.5px solid rgba(212,49,122,.2);'
);
css = css.replace('font-family:var(--display);color:#fff;white-space:nowrap;animation:pinFloat 5s ease-in-out infinite;box-shadow:0 8px 32px rgba(0,0,0,.4),0 0 0 1px rgba(26,26,26,.15)', 'font-family:var(--display);color:#1A1A1A;white-space:nowrap;animation:pinFloat 5s ease-in-out infinite;box-shadow:0 4px 20px rgba(26,26,26,.12),0 0 0 1px rgba(212,49,122,.1)');

// 17. contact-float dark bg (--ink is now #1A1A1A — good)
// Already handled via variable

// 18. Grad text → fuchsia/saumon gradient
css = css.replace(
  '.hero h1 .grad{background:linear-gradient(115deg,#D4317A,#E8A87C);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}',
  '.hero h1 .grad{background:linear-gradient(115deg,#D4317A,#D4A853);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}'
);
css = css.replace(
  '.page-hero h1 em{font-style:normal;background:linear-gradient(115deg,#D4317A,#E8A87C);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}',
  '.page-hero h1 em{font-style:normal;background:linear-gradient(115deg,#D4317A,#D4A853);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}'
);

// 19. Nav mobile menu bg
css = css.replace('rgba(7,5,18,.97)', 'rgba(247,240,230,.97)');

// 20. Scrollbar
css = css.replace('::-webkit-scrollbar-thumb{background:#E8A87C;', '::-webkit-scrollbar-thumb{background:#D4317A;');

// 21. CNIL banner → light
css = css.replace(
  '#cnil-banner{\n  position:fixed;bottom:0;left:0;right:0;z-index:9999;\n  background:rgba(235,228,216,.97);border-top:1px solid rgba(26,26,26,.25);',
  '#cnil-banner{\n  position:fixed;bottom:0;left:0;right:0;z-index:9999;\n  background:rgba(247,240,230,.97);border-top:1px solid rgba(26,26,26,.12);'
);

// 22. quote-sec → light
css = css.replace(
  '.quote-sec{background:linear-gradient(135deg,rgba(212,49,122,.08),rgba(212,49,122,.06));border-top:1px solid rgba(26,26,26,.08);border-bottom:1px solid rgba(26,26,26,.08);color:#fff;',
  '.quote-sec{background:linear-gradient(135deg,rgba(212,49,122,.06),rgba(232,168,124,.05));border-top:1px solid rgba(26,26,26,.08);border-bottom:1px solid rgba(26,26,26,.08);color:#1A1A1A;'
);

// 23. Guarantee → light
css = css.replace(
  '.guarantee p{font-size:16px;color:rgba(26,26,26,.8);max-width:56ch;',
  '.guarantee p{font-size:16px;color:rgba(26,26,26,.75);max-width:56ch;'
);

// 24. Promo bar (bottom timer) → fuchsia gradient (stays)
// Already fine since we replaced #7C5CFC → #D4317A

// 25. proj-filter-btn active → fuchsia
css = css.replace(
  '.proj-filter-btn.active{background:#fff;color:#07070F;border-color:#fff}',
  '.proj-filter-btn.active{background:#D4317A;color:#fff;border-color:#D4317A}'
);
css = css.replace(
  '.proj-filter-btn.active .proj-count{background:rgba(0,0,0,.12);color:#07070F}',
  '.proj-filter-btn.active .proj-count{background:rgba(255,255,255,.25);color:#fff}'
);

// 26. browser-bar (in portfolio cards) → light
css = css.replace('.browser-bar{background:rgba(26,26,26,.06);', '.browser-bar{background:#E8E0D4;');

// 27. ups-price stays with gold gradient (already updated accent)

fs.writeFileSync(dir + 'style.css', css);
console.log('✅ style.css updated');

// ── HTML files: font replacement ──────────────────
const htmlFiles = ['index.html','services.html','portfolio.html','agence.html','tarifs.html','contact.html'];
const oldFont = 'family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&';
const newFont = 'family=Space+Grotesk:wght@400;500;600;700&';

for (const f of htmlFiles) {
  const path = dir + f;
  if (!fs.existsSync(path)) continue;
  let html = fs.readFileSync(path, 'utf8');

  // Font
  html = html.split(oldFont).join(newFont);
  html = html.split('Bricolage+Grotesque').join('Space+Grotesk');
  html = html.split('Bricolage Grotesque').join('Space Grotesk');

  // Meta descriptions (update cities)
  html = html.split('à Reims et Paris').join('à Reims, Lyon, Casablanca & London');
  html = html.split('Reims · Paris').join('Reims · Lyon · Casablanca · London');

  // Accent colors in inline styles
  html = html.split('#7C5CFC').join('#D4317A');
  html = html.split('#A08BF8').join('#E8A87C');
  html = html.split('#C4B5FD').join('#D4A853');
  html = html.split('rgba(124,92,252,').join('rgba(212,49,122,');
  html = html.split('rgba(75,53,200,').join('rgba(176,24,96,');

  fs.writeFileSync(path, html);
  console.log('✅', f, 'updated');
}

// ── Vanta → disable + warm CSS animation ──────────
let idx = fs.readFileSync(dir + 'index.html', 'utf8');
// Change Vanta wave color to peach/cream (warm palette)
idx = idx.replace('color:0x0e1e3c,', 'color:0xF2C4A0,');
idx = idx.replace('shininess:12,', 'shininess:6,');
idx = idx.replace('waveHeight:18,', 'waveHeight:10,');
// Mobile CSS gradient → warm
idx = idx.split('rgba(124,92,252,').join('rgba(212,49,122,');
fs.writeFileSync(dir + 'index.html', idx);
console.log('✅ Vanta + index.html warm updated');

console.log('\n🎨 Charte Graphique Fuchsia/Crème appliquée !');
