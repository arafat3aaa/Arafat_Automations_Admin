// ================================================================
//  MAIN SCRIPT  —  script.js
//  Data is stored in localStorage so the admin panel can update it.
// ================================================================

// ── DEFAULT SAMPLE AUTOMATIONS (n8n & Python only) ──────────────
const DEFAULT_AUTOMATIONS = [
  {
    id: 1,
    icon: "🔄",
    tag: "n8n",
    tagLabel: "n8n",
    title: "Lead Auto-Responder Flow",
    summary: "Captures leads from a webhook, enriches data, and sends a personalised reply email instantly.",
    description: "When a visitor submits a lead form the n8n webhook fires, the workflow enriches the contact data via an external API, creates a CRM record, and sends a branded auto-reply — all within seconds.",
    image: "",   // base64 or URL stored here
  },
  {
    id: 2,
    icon: "🐍",
    tag: "python",
    tagLabel: "Python",
    title: "Competitor Price Tracker",
    summary: "Python script that scrapes competitor websites daily and emails a price-change report every morning.",
    description: "A scheduled Python script uses BeautifulSoup to scrape competitor product pages, compares prices against the previous day's data stored in SQLite, then emails a formatted HTML report with any changes highlighted.",
    image: "",
  },
  {
    id: 3,
    icon: "🔄",
    tag: "n8n",
    tagLabel: "n8n",
    title: "Social Media Publisher",
    summary: "Auto-posts content queued in Google Sheets to Twitter, LinkedIn, and Telegram on a schedule.",
    description: "An n8n workflow polls a Google Sheet on a cron schedule, picks the next queued post, publishes it simultaneously to Twitter, LinkedIn, and a Telegram channel, then marks the row as 'Published'.",
    image: "",
  },
  {
    id: 4,
    icon: "🐍",
    tag: "python",
    tagLabel: "Python",
    title: "AI Email Classifier Bot",
    summary: "Reads your inbox, classifies every email with GPT-4, and files them into labelled folders automatically.",
    description: "A Python daemon connects to Gmail via IMAP, passes each unread email through the OpenAI API to classify it (lead / support / spam / newsletter), then moves the message to the appropriate label — keeping your inbox zero-maintained.",
    image: "",
  },
];

// ── STORAGE HELPERS ──────────────────────────────────────────────
const STORAGE_KEY = 'afp_automations';
const PROFILES_KEY = 'afp_profiles';

function loadAutomations() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return DEFAULT_AUTOMATIONS;
}

function loadProfiles() {
  try {
    const stored = localStorage.getItem(PROFILES_KEY);
    if (stored) {
      const p = JSON.parse(stored);
      if (p.p1 || p.p2) return p;
    }
  } catch(e) {}
  return { p1: 'images/profile1.jpg', p2: 'images/profile2.jpg' };
}

// ── APPLY SAVED PROFILE IMAGES ───────────────────────────────────
(function applyProfiles() {
  const p = loadProfiles();
  const img1 = document.getElementById('heroImg1');
  const img2 = document.getElementById('heroImg2');
  const aboutImg = document.getElementById('aboutPhoto');
  if (img1 && p.p1) img1.src = p.p1;
  if (img2 && p.p2) img2.src = p.p2;
  if (aboutImg && p.p2) aboutImg.src = p.p2;
})();

// ── NAVBAR SCROLL ────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER MENU ───────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ── HERO IMAGE SWITCHER ──────────────────────────────────────────
let currentImg = 0;
const heroImgs = [document.getElementById('heroImg1'), document.getElementById('heroImg2')];
const heroDots = document.querySelectorAll('.image-dots .dot');

function switchImage(index) {
  if (!heroImgs[0]) return;
  heroImgs[currentImg]?.classList.remove('active');
  heroDots[currentImg]?.classList.remove('active');
  currentImg = index;
  heroImgs[currentImg]?.classList.add('active');
  heroDots[currentImg]?.classList.add('active');
}
setInterval(() => switchImage((currentImg + 1) % 2), 4000);

// ── COUNTER ANIMATION ────────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = Math.max(1, Math.ceil(duration / target));
  let current = 0;
  const timer = setInterval(() => {
    current += 1;
    el.textContent = current;
    if (current >= target) { el.textContent = target; clearInterval(timer); }
  }, step);
}
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animateCounter);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelector('.hero-stats') && statsObserver.observe(document.querySelector('.hero-stats'));

// ── SCROLL REVEAL ────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .highlight, .contact-card')
  .forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });

// ── SLIDER ───────────────────────────────────────────────────────
let allAutomations = loadAutomations();
let filtered = [...allAutomations];
let slideIndex = 0;
const CARDS_VISIBLE = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

function getCardsVisible() {
  return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
}

function buildSlider(data) {
  filtered = data;
  slideIndex = 0;
  renderSlider();
}

function renderSlider() {
  const track = document.getElementById('sliderTrack');
  const dotsEl = document.getElementById('sliderDots');
  if (!track) return;
  track.innerHTML = '';
  dotsEl.innerHTML = '';

  if (filtered.length === 0) {
    track.innerHTML = '<p class="slider-empty">No automations in this category yet.</p>';
    return;
  }

  filtered.forEach((auto, i) => {
    const card = document.createElement('div');
    card.className = 'slide-card';
    const imgHTML = auto.image
      ? `<div class="slide-img"><img src="${auto.image}" alt="${auto.title}" /></div>`
      : `<div class="slide-img slide-img-placeholder"><span>${auto.icon || '⚡'}</span></div>`;
    card.innerHTML = `
      ${imgHTML}
      <div class="slide-body">
        <span class="auto-card-tag">${auto.tagLabel}</span>
        <h4>${auto.title}</h4>
        <p>${auto.summary}</p>
      </div>
      <div class="slide-footer">
        <button class="btn btn-outline slide-detail-btn" onclick="openModal(${i})">View Details →</button>
      </div>`;
    track.appendChild(card);
  });

  // Dots
  const totalDots = Math.ceil(filtered.length / getCardsVisible());
  for (let i = 0; i < totalDots; i++) {
    const d = document.createElement('button');
    d.className = 'slider-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', `Slide ${i+1}`);
    d.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(d);
  }
  updateSliderPosition();
}

function goToSlide(index) {
  const totalDots = Math.ceil(filtered.length / getCardsVisible());
  slideIndex = Math.max(0, Math.min(index, totalDots - 1));
  updateSliderPosition();
}

function updateSliderPosition() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  const cv = getCardsVisible();
  const cardWidth = track.parentElement.offsetWidth / cv;
  track.style.transform = `translateX(-${slideIndex * cardWidth * cv}px)`;

  // Update dots
  document.querySelectorAll('.slider-dot').forEach((d, i) => {
    d.classList.toggle('active', i === slideIndex);
  });

  // Show/hide arrows
  const prev = document.getElementById('sliderPrev');
  const next = document.getElementById('sliderNext');
  const totalDots = Math.ceil(filtered.length / cv);
  if (prev) prev.style.opacity = slideIndex === 0 ? '0.3' : '1';
  if (next) next.style.opacity = slideIndex >= totalDots - 1 ? '0.3' : '1';
}

document.getElementById('sliderPrev')?.addEventListener('click', () => goToSlide(slideIndex - 1));
document.getElementById('sliderNext')?.addEventListener('click', () => goToSlide(slideIndex + 1));

// Touch/swipe support
(function() {
  const vp = document.getElementById('sliderViewport');
  if (!vp) return;
  let startX = 0;
  vp.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  vp.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) dx < 0 ? goToSlide(slideIndex + 1) : goToSlide(slideIndex - 1);
  });
})();

window.addEventListener('resize', () => { renderSlider(); }, { passive: true });

// Filter tabs
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    buildSlider(f === 'all' ? [...allAutomations] : allAutomations.filter(a => a.tag === f));
  });
});

// Initial render
renderSlider();

// ── MODAL ────────────────────────────────────────────────────────
function openModal(index) {
  const auto = filtered[index];
  if (!auto) return;
  const body = document.getElementById('modalBody');
  const imgHTML = auto.image
    ? `<img src="${auto.image}" alt="${auto.title}" class="modal-auto-img" />`
    : `<div class="modal-icon">${auto.icon || '⚡'}</div>`;
  body.innerHTML = `
    ${imgHTML}
    <span class="modal-tag">${auto.tagLabel}</span>
    <h3>${auto.title}</h3>
    <p>${auto.description || auto.summary}</p>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── CONTACT FORM ─────────────────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message ✉️';
    btn.disabled = false;
    success.classList.add('show');
    document.getElementById('contactForm').reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  }, 1200);
}

// ── FOOTER YEAR ──────────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── LISTEN FOR STORAGE CHANGES (admin panel sync) ────────────────
window.addEventListener('storage', e => {
  if (e.key === STORAGE_KEY) {
    allAutomations = loadAutomations();
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    buildSlider(activeFilter === 'all' ? [...allAutomations] : allAutomations.filter(a => a.tag === activeFilter));
  }
  if (e.key === PROFILES_KEY) {
    const p = loadProfiles();
    const img1 = document.getElementById('heroImg1');
    const img2 = document.getElementById('heroImg2');
    const aboutImg = document.getElementById('aboutPhoto');
    if (img1 && p.p1) img1.src = p.p1;
    if (img2 && p.p2) img2.src = p.p2;
    if (aboutImg && p.p2) aboutImg.src = p.p2;
  }
});
