/* B2C — add first car (post-login) */
const B2C_DISCOVERY_ADDCAR = {
  'b2c-addcar': `

<div class="screen" data-screen="b2c-addcar">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar">
    <button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-login')" aria-label="Back"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button type="button" class="funnel-skip tap" onclick="show('b2c-map')">Skip</button>
  </div>
  <div class="flex-1 app-surface px-6 pt-2 pb-4 flex flex-col overflow-y-auto min-h-0">
    <span class="preauth-eyebrow">Your garage</span>
    <h2 class="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-100">Add your car</h2>
    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1.5">We’ll auto-log services you book through CarCare.</p>

    <button type="button" class="callout-violet mt-6 w-full text-left p-4 flex items-center gap-3 tap">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border border-violet-100"><i data-lucide="scan-line" class="w-5 h-5 text-violet-600"></i></div>
      <div class="flex-1 min-w-0"><div class="text-sm font-semibold text-slate-900 dark:text-slate-100">Scan VIN with camera</div><div class="text-xs text-slate-600 dark:text-slate-400">Autofill brand, model, year</div></div>
      <i data-lucide="chevron-right" class="w-5 h-5 text-violet-400 flex-shrink-0"></i>
    </button>

    <div class="app-panel p-4 mt-5 space-y-3">
      <div><div class="label mb-1.5">Brand</div><div class="proto-input px-3.5 py-3 text-sm flex justify-between items-center">Toyota <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 dark:text-slate-500"></i></div></div>
      <div class="grid grid-cols-2 gap-3">
        <div><div class="label mb-1.5">Model</div><div class="proto-input px-3.5 py-3 text-sm">Corolla</div></div>
        <div><div class="label mb-1.5">Year</div><div class="proto-input px-3.5 py-3 text-sm">2019</div></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><div class="label mb-1.5">Mileage (km)</div><div class="proto-input px-3.5 py-3 text-sm">82,450</div></div>
        <div><div class="label mb-1.5">Plate <span class="text-slate-400 dark:text-slate-500 normal-case font-normal">optional</span></div><div class="proto-input px-3.5 py-3 text-sm">س ب ج 7421</div></div>
      </div>
    </div>
    <div class="flex-1 min-h-3"></div>
    <button type="button" class="btn-primary btn-primary-lg w-full tap shadow-md" onclick="show('b2c-map')">Save &amp; continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
