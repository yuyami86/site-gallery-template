// ビフォーアフター（src/parts/hero/beforeafter）: つまみの位置に合わせて、施工前の写真を見せる幅を変える。
document.querySelectorAll('[data-hero-compare]').forEach(box => {
  const input = box.querySelector('input[type="range"]');
  if (!input) return;
  const update = () => box.style.setProperty('--pos', input.value + '%');
  input.addEventListener('input', update);
  update();
});
