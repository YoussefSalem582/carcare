/* B2C — search results list */
const B2C_DISCOVERY_SEARCH = {
  'b2c-search': `

<div class="screen" data-screen="b2c-search">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-4 pt-2 pb-2 bg-white dark:bg-slate-900">
    <div class="flex items-center gap-2">
      <button class="tap text-slate-500 dark:text-slate-400" onclick="show('b2c-map')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="flex-1 rounded-2xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/90 px-3 py-2.5 flex items-center gap-2">
        <i data-lucide="search" class="w-4 h-4 text-slate-400 dark:text-slate-500"></i>
        <input class="flex-1 bg-transparent text-sm outline-none" value="Oil change">
      </div>
    </div>
    <div class="flex justify-between items-center mt-2">
      <div class="text-xs text-slate-500 dark:text-slate-400">17 centers · sorted by distance</div>
      <div class="text-xs font-semibold text-teal-700 flex items-center gap-1 tap"><i data-lucide="arrow-up-down" class="w-3.5 h-3.5"></i>Sort</div>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto px-4 pb-4 space-y-3 app-surface min-h-0">
    ${[
      ['AutoPro Heliopolis','0.8 km','4.8','312','EGP 350–900',true,'11:30','Open'],
      ['QuickFix Nasr City','1.6 km','4.6','188','EGP 250–1200',true,'12:15','Open'],
      ['City Tow 24/7 – Heliopolis','1.1 km','4.7','201','from EGP 400',true,'~15 min','Tow'],
      ['Toyota Authorized – El Nozha','2.4 km','4.9','421','EGP 450–1800',true,'14:00','Open'],
      ['Cairo Motors Workshop','3.1 km','4.3','94','EGP 200–700',false,'Tomorrow 09:00','Closes 6pm'],
      ['Mobile Mechanic — Khaled',' on-demand','4.7','66','EGP 300–600',false,'Now','Mobile'],
    ].map(([n,d,r,c,p,v,next,state], idx)=>`
      <div class="listing-card tap p-3.5 rounded-2xl border ${idx===0?'border-2 border-teal-300/80 bg-gradient-to-br from-teal-50 to-white shadow-sm':'border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm'}" onclick="show('${state==='Tow'?'b2c-tow':'b2c-shop'}')">
        <div class="flex gap-3">
          <div class="w-16 h-16 rounded-xl ${idx===0?'bg-slate-100 dark:bg-slate-800/80 ring-1 ring-slate-200/80':'bg-slate-200'} flex items-center justify-center">${state==='Tow'?'<i data-lucide="truck" class="w-7 h-7 text-blue-700"></i>':'<i data-lucide="wrench" class="w-7 h-7 text-slate-500 dark:text-slate-400"></i>'}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><span class="font-semibold text-slate-900 dark:text-slate-100 truncate">${n}</span>${v?'<i data-lucide="badge-check" class="w-4 h-4 text-teal-700 flex-shrink-0"></i>':''}${state==='Tow'?'<span class="badge b-blue">Tow</span>':''}</div>
            <div class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">${d} · ${state}</div>
            <div class="flex items-center gap-2 mt-1 text-xs"><span class="flex items-center gap-0.5 font-semibold text-slate-800 dark:text-slate-200"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>${r}</span><span class="text-slate-400 dark:text-slate-500">(${c})</span><span class="text-slate-300">·</span><span class="text-slate-600 dark:text-slate-400">${p}</span></div>
            <div class="mt-2 flex items-center justify-between gap-2">
              <div class="text-xs text-teal-700 font-semibold">Next ${next}</div>
              ${idx===0?'<button type="button" class="btn-primary py-2 px-3.5 text-xs rounded-xl flex-shrink-0">Book</button>':'<button type="button" class="btn-secondary py-2 px-3.5 text-xs flex-shrink-0">View</button>'}
            </div>
          </div>
        </div>
      </div>`).join('')}
  </div>
  <div class="home-indicator"></div>
</div>`,
};
