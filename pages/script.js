const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const stage  = document.querySelector('.stage');
const layers = [...document.querySelectorAll('.layer')];

// ---------- Parallax scroll (smooth easing) ----------
let targetY = 0, currentY = 0;
function raf() {
  currentY += (targetY - currentY) * 0.08;
  layers.forEach(el => {
    const depth = parseFloat(el.dataset.depth || 0.2);
    el.style.transform = `translate3d(0, ${currentY * depth}px, 0)`;
  });
  requestAnimationFrame(raf);
}
if (!reduce) {
  window.addEventListener('scroll', () => { targetY = window.scrollY; }, { passive:true });
  raf();
}

// ---------- Mouse-follow micro parallax (2–5px) ----------
if (!reduce) {
  let mx = 0, my = 0, cx = 0, cy = 0;
  window.addEventListener('pointermove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2; // -1..1
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  (function follow(){
    cx += (mx - cx) * 0.06;
    cy += (my - cy) * 0.06;
    layers.forEach(el => {
      const d = parseFloat(el.dataset.depth || 0.2);
      el.style.backgroundPosition = `${50 + cx * d * 5}% ${50 + cy * d * 5}%`;
    });
    requestAnimationFrame(follow);
  })();
}

// ---------- Scroll-triggered reveal ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- Ambient sound (muted default) ----------
const btn = document.getElementById('soundToggle');
let audio = null, playing = false;
btn?.addEventListener('click', () => {
  if (!audio) {
    audio = new Audio('ambient.mp3'); // taruh file ambient di pages/
    audio.loop = true;
    audio.volume = 0.25;
  }
  playing = !playing;
  if (playing) { audio.play(); btn.textContent = '🔊 ambient: on'; }
  else         { audio.pause(); btn.textContent = '🔊 ambient: off'; }
  btn.setAttribute('aria-pressed', String(playing));
});
