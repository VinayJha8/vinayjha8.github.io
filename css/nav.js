(async () => {
  const host = document.getElementById('site-nav');
  if (!host) return;
  try {
    // nav.html is currently inside /css/
    const res = await fetch('/css/nav.html', { cache: 'no-store' });
    host.innerHTML = await res.text();
  } catch (e) {
    console.error('Nav load failed', e);
  }
})();
