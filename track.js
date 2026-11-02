/* Rastreio de origem do tráfego pago (M Promotora).
 * Guarda utm_source/utm_campaign/gclid/fbclid do 1º acesso (30 dias) e acrescenta
 * "Ref: origem.campanha" no texto de todo link wa.me, para o CRM saber de qual
 * anúncio veio cada conversa. Não coleta dado pessoal. */
(function () {
  var KEY = 'mp_origem', TTL = 30 * 24 * 3600 * 1000;
  function limpa(v) { return (v || '').toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 24); }
  var q = new URLSearchParams(location.search), o = null;
  try { o = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  if (o && Date.now() - o.t > TTL) o = null;
  var src = limpa(q.get('utm_source')) || (q.get('gclid') ? 'google' : q.get('fbclid') ? 'meta' : '');
  if (src && !o) {
    o = { s: src, c: limpa(q.get('utm_campaign')) || 'sem-campanha', t: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }
  if (!o) return; // tráfego orgânico/direto: link do WhatsApp segue igual
  var ref = 'Ref: ' + o.s + '.' + o.c;
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href*="wa.me"]');
    if (!a || a.dataset.mpRef) return;
    var u = new URL(a.href);
    u.searchParams.set('text', (u.searchParams.get('text') || '') + ' (' + ref + ')');
    a.href = u.toString();
    a.dataset.mpRef = '1';
  }, true);
})();
