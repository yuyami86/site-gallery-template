// スライド（src/parts/hero/slideshow）: 6秒ごとに写真を切り替える。点を押すとその写真へ。
(() => {
  const root = document.querySelector('[data-hero-slides]');
  if (!root) return;
  const slides = [...root.querySelectorAll('.hv-slide')];
  const dots = [...root.querySelectorAll('.hv-slides-dots button')];
  if (slides.length < 2) { root.querySelector('.hv-slides-dots')?.remove(); return; }
  let index = 0, timer = null;
  const show = i => {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
    dots.forEach((d, n) => n === index ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current'));
  };
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const start = () => { if (!reduce) { clearInterval(timer); timer = setInterval(() => { if (!document.hidden) show(index + 1); }, 6000); } };
  dots.forEach((d, n) => d.addEventListener('click', () => { show(n); start(); }));
  start();
})();
