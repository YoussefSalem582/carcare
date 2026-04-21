/* =========================================================
   Shell: theme/locale controls + translated chrome labels
   ========================================================= */
(function () {
  function applyShellI18n() {
    if (typeof t !== 'function') return;
    var el = function (id, key, en) {
      var n = document.getElementById(id);
      if (n) n.textContent = t(key, en);
    };
    el('shellTitle', 'shell.title', 'CarCare — MVP UI/UX Prototype');
    el('shellSubtitle', 'shell.subtitle', 'Map-first maintenance marketplace · B2C + B2B · Flutter team handbook');
    el('shellScreensLabel', 'shell.screens', 'Screens');
    el('shellFooter', 'shell.footer', 'Built for developer handoff. Flutter target — layouts translate to Material/Cupertino widgets. Mock data is illustrative.');
    el('shellLegendMvp', 'shell.legend_mvp', 'MVP scope (Phase 1)');
    el('shellLegendP2', 'shell.legend_p2', 'Phase 2 — retention layer');
    var b2c = document.getElementById('toggleB2C');
    var b2b = document.getElementById('toggleB2B');
    var ftg = document.getElementById('toggleFlutterGuide');
    if (b2c) b2c.textContent = t('shell.tab_b2c', 'B2C — Car Owner');
    if (b2b) b2b.textContent = t('shell.tab_b2b', 'B2B — Service Center');
    if (ftg) ftg.textContent = t('shell.tab_ftg', 'Flutter Team Guide');
    var en = document.getElementById('protoLocaleEn');
    var ar = document.getElementById('protoLocaleAr');
    if (en && ar) {
      var loc = typeof getLocale === 'function' ? getLocale() : 'en';
      var base = 'px-2.5 py-1.5 rounded-lg text-xs font-semibold ';
      en.className = base + (loc === 'en' ? 'tab-active' : 'text-slate-600 dark:text-slate-400');
      ar.className = base + (loc === 'ar-EG' ? 'tab-active' : 'text-slate-600 dark:text-slate-400');
    }
  }

  function wireChrome() {
    var themeBtn = document.getElementById('protoThemeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        if (typeof toggleTheme === 'function') toggleTheme();
        if (window.lucide) lucide.createIcons();
      });
    }
    var enBtn = document.getElementById('protoLocaleEn');
    var arBtn = document.getElementById('protoLocaleAr');
    if (enBtn) {
      enBtn.addEventListener('click', function () {
        if (typeof setLocale === 'function') setLocale('en');
        location.reload();
      });
    }
    if (arBtn) {
      arBtn.addEventListener('click', function () {
        if (typeof setLocale === 'function') setLocale('ar-EG');
        location.reload();
      });
    }
    applyShellI18n();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireChrome);
  } else {
    wireChrome();
  }
})();
