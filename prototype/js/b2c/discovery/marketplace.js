/* B2C — parts marketplace tab */
const B2C_DISCOVERY_MARKETPLACE = {
  'b2c-marketplace': `

<div class="screen" data-screen="b2c-marketplace">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-4 pt-2 pb-2 bg-white dark:bg-slate-900 border-b border-slate-100">
    <div class="font-bold text-lg">Shop</div>
    <div class="text-xs text-slate-500 dark:text-slate-400">Parts &amp; accessories from verified sellers</div>
    <div class="flex items-center gap-2 mt-3">
      <div class="flex-1 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90 px-3 py-2.5 flex items-center gap-2">
        <i data-lucide="search" class="w-4 h-4 text-slate-400 dark:text-slate-500"></i>
        <input class="flex-1 bg-transparent text-sm outline-none" placeholder="Search parts, oil, VIN…">
      </div>
      <div class="relative w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center tap">
        <i data-lucide="shopping-bag" class="w-5 h-5 text-slate-600 dark:text-slate-400"></i>
        <span class="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center">2</span>
      </div>
    </div>
    <div class="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
      <span class="chip on">For your car</span>
      <span class="chip">Filters</span>
      <span class="chip">Oil &amp; fluids</span>
      <span class="chip">Batteries</span>
      <span class="chip">Tires</span>
      <span class="chip">Brakes</span>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto px-4 py-3 app-surface">
    <div class="p-3 rounded-2xl promo-banner-market text-white mb-4">
      <div class="text-xs font-semibold opacity-90">Weekend deal</div>
      <div class="font-bold mt-0.5">Bosch oil filter + 4L 5W-30</div>
      <div class="flex items-end justify-between mt-2">
        <div>
          <span class="text-lg font-bold">EGP 620</span>
          <span class="text-xs line-through opacity-80 ml-2">EGP 780</span>
        </div>
        <button class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900/20 text-xs font-semibold">Add</button>
      </div>
    </div>
    <div class="label mb-2">Popular this week</div>
    <div class="grid grid-cols-2 gap-3">
      ${[['Bosch cabin filter','EGP 185','4.7','1.2k sold','Cairo Parts'],
         ['Michelin 205/55 R16','EGP 2,890','4.8','In stock','Elite Tires'],
         ['AGM battery 60Ah','EGP 3,200','4.6','2–3d ship','AutoBatt'],
         ['Castrol 5W-30 (4L)','EGP 450','4.8','EGP 50 delivery','Lubrico']].map(([t,p,r,sell,seller])=>`
        <div class="tap p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 shadow-sm ring-1 ring-black/[0.02]">
          <div class="h-20 rounded-xl bg-gradient-to-br from-slate-100 to-indigo-50/80 flex items-center justify-center mb-2"><i data-lucide="package" class="w-8 h-8 text-indigo-400"></i></div>
          <div class="text-xs font-semibold leading-tight line-clamp-2">${t}</div>
          <div class="mt-1 flex items-center gap-0.5 text-[10px] text-slate-500 dark:text-slate-400"><i data-lucide="star" class="w-2.5 h-2.5 text-amber-500 fill-amber-500"></i>${r} · ${sell}</div>
          <div class="mt-2 font-bold text-sm">${p}</div>
          <div class="text-[10px] text-slate-500 dark:text-slate-400">${seller}</div>
        </div>`).join('')}
    </div>
  </div>
  ${b2cTabBar('market')}
  <div class="home-indicator"></div>
</div>`,
};
