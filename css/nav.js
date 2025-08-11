<script>
(async () => {
  const host = document.getElementById('site-nav');
  if (!host) return;
  try {
    const res = await fetch('/nav.html', { cache: 'no-store' });
    host.innerHTML = await res.text();
  } catch (e) {
    console.error('Nav load failed', e);
  }
})();
</script>
