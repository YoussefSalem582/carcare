/* =========================================================
   Locale (ar-EG) + theme (light/dark) for prototype shell
   ========================================================= */
(function () {
  var LOCALE_KEY = 'carcare_proto_locale';
  var THEME_KEY = 'carcare_proto_theme';

  function getLocale() {
    return window.__carcareLocale || 'en';
  }

  function setLocale(code) {
    window.__carcareLocale = code;
    try {
      localStorage.setItem(LOCALE_KEY, code);
    } catch (e) {}
    document.documentElement.lang = code === 'ar-EG' ? 'ar-EG' : 'en';
    document.documentElement.dir = code === 'ar-EG' ? 'rtl' : 'ltr';
  }

  function getTheme() {
    return window.__carcareTheme || 'light';
  }

  function setTheme(mode) {
    window.__carcareTheme = mode;
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch (e) {}
    document.documentElement.dataset.theme = mode;
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  /**
   * @param {string} key flat key e.g. b2c.splash.title
   * @param {string} enFallback English string when locale is en or missing AR
   */
  function t(key, enFallback) {
    if (getLocale() === 'ar-EG' && window.__STRINGS_AR_EG && window.__STRINGS_AR_EG[key] != null) {
      return window.__STRINGS_AR_EG[key];
    }
    return enFallback;
  }

  function tGroup(g) {
    return t('group.' + g, g);
  }

  /** @param {{ id: string, group: string, phase: number, name?: string, purpose?: string, notes?: string, states?: string[] }} s */
  function catalogStatesArray(s) {
    if (getLocale() === 'ar-EG' && window.CATALOG_AR && window.CATALOG_AR[s.id] && Array.isArray(window.CATALOG_AR[s.id].states)) {
      return window.CATALOG_AR[s.id].states;
    }
    return s.states || [];
  }

  /** @param {{ id: string, group: string, phase: number, name?: string, purpose?: string, notes?: string, states?: string[] }} s */
  function catalogField(s, field) {
    if (field === 'group') return tGroup(s.group);
    if (getLocale() === 'ar-EG' && window.CATALOG_AR && window.CATALOG_AR[s.id]) {
      var ar = window.CATALOG_AR[s.id];
      if (field === 'states') {
        var st = ar.states != null ? ar.states : s.states;
        return Array.isArray(st) ? st.join(', ') : st;
      }
      if (ar[field] != null) return ar[field];
    }
    if (field === 'states' && s.states) return s.states.join(', ');
    return s[field] != null ? s[field] : '';
  }

  function initLocaleFromStorage() {
    var code = 'en';
    try {
      code = localStorage.getItem(LOCALE_KEY) || 'en';
    } catch (e) {}
    setLocale(code === 'ar-EG' ? 'ar-EG' : 'en');
  }

  function initThemeFromStorage() {
    var mode = 'light';
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') mode = saved;
      else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) mode = 'dark';
    } catch (e) {}
    setTheme(mode);
  }

  window.getLocale = getLocale;
  window.setLocale = setLocale;
  window.getTheme = getTheme;
  window.setTheme = setTheme;
  window.toggleTheme = toggleTheme;
  window.t = t;
  window.tGroup = tGroup;
  window.catalogField = catalogField;
  window.catalogStatesArray = catalogStatesArray;
  window.initPrototypeThemeAndLocale = function () {
    initThemeFromStorage();
    initLocaleFromStorage();
  };

  window.protoSetLocaleEn = function () {
    setLocale('en');
    location.reload();
  };
  window.protoSetLocaleAr = function () {
    setLocale('ar-EG');
    location.reload();
  };

  initThemeFromStorage();
  initLocaleFromStorage();
})();
