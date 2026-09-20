// 横スクロール（src/parts/gallery/carousel）: 矢印で1枚ずつ送る。端まで来たら矢印を押せなくする。
document.querySelectorAll('[data-gc-rail]').forEach(rail => {
  const section = rail.closest('section');
  const prev = section.querySelector('[data-gc-prev]');
  const next = section.querySelector('[data-gc-next]');
  const step = () => { const c = rail.querySelector('.gc-item'); return c ? c.getBoundingClientRect().width + 20 : rail.clientWidth; };
  const state = () => {
    if (prev) prev.disabled = rail.scrollLeft <= 2;
    if (next) next.disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
  };
  prev?.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  rail.addEventListener('scroll', () => requestAnimationFrame(state), { passive: true });
  window.addEventListener('resize', state);
  state();
});
