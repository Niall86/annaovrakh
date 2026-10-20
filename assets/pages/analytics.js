// GA4 + Yandex.Metrika for the static topic pages, with the same click goals as the Framer pages.
(function () {
  var GA_ID = 'G-3CL2SVG16C';
  var YM_ID = 113593091;

  var gs = document.createElement('script');
  gs.async = true;
  gs.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(gs);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);

  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
  ym(YM_ID, 'init', { clickmap: true, trackLinks: true, accurateTrackBounce: true });

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    var ga = null, goal = null;
    if (a.href.indexOf('calendar.google.com/appointments') > -1) { ga = 'booking_click'; goal = 'book_session'; }
    else if (a.href.indexOf('t.me/AO_Coach_ICF_bot') > -1) { ga = 'webinar_bot_click'; goal = 'open_bot'; }
    else if (a.pathname && a.pathname.replace(/\/$/, '') === '/webinar') { goal = 'go_webinar'; }
    if (ga) {
      gtag('event', ga, {
        link_url: a.href,
        link_text: (a.textContent || '').trim().slice(0, 60),
        page_path: location.pathname,
        transport_type: 'beacon'
      });
    }
    if (goal) ym(YM_ID, 'reachGoal', goal);
  }, true);
})();
