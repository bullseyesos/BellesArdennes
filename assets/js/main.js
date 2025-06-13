// Load header & footer via Fetch
async function loadPartial(selector, url) {
  const el = document.querySelector(selector);
  const resp = await fetch(url);
  el.innerHTML = await resp.text();
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('#site-header', '/partials/header.html');
  loadPartial('#site-footer', '/partials/footer.html');
});