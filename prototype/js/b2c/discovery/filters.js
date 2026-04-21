/* B2C — map filters sheet */
const B2C_DISCOVERY_FILTERS = {
  'b2c-filters': `

<div class="screen" data-screen="b2c-filters">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar">
    <button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-map')" aria-label="Close"><i data-lucide="x" class="w-5 h-5"></i></button>
    <div class="font-semibold text-slate-900 dark:text-slate-100">Filters</div>
    <button type="button" class="text-sm text-teal-700 font-semibold tap py-2 px-1">Reset</button>
  </div>
  <div class="flex-1 app-surface px-5 pt-4 pb-4 overflow-y-auto space-y-4 min-h-0">
    <div class="filters-section">
      <div class="label mb-2 text-indigo-700">Service</div>
      <div class="flex flex-wrap gap-2">
        ${['Oil change','Brakes','Tires','AC','Battery','Engine','Body & paint','Electrical'].map((s,i)=>`<span class="chip ${i<2?'on':''}">${s}</span>`).join('')}
      </div>
    </div>
    <div class="filters-section">
      <div class="flex justify-between mb-2"><div class="label text-cyan-800">Price range</div><div class="text-xs font-bold text-cyan-900 bg-cyan-50 px-2 py-0.5 rounded-lg">EGP 200–1500</div></div>
      <div class="h-1.5 rounded-full bg-slate-200 relative">
        <div class="absolute h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" style="left:10%; right:30%;"></div>
        <div class="absolute w-4 h-4 bg-white dark:bg-slate-900 border-2 border-teal-600 rounded-full -top-1 shadow-sm" style="left:9%"></div>
        <div class="absolute w-4 h-4 bg-white dark:bg-slate-900 border-2 border-cyan-600 rounded-full -top-1 shadow-sm" style="left:68%"></div>
      </div>
    </div>
    <div class="filters-section">
      <div class="label mb-2 text-amber-800">Minimum rating</div>
      <div class="flex gap-2 flex-wrap">
        ${[3,3.5,4,4.5].map((r,i)=>`<span class="chip ${i===2?'on':''}"><i data-lucide="star" class="w-3 h-3 ${i===2?'':'text-amber-500 fill-amber-500'}"></i>${r}+</span>`).join('')}
      </div>
    </div>
    <div class="filters-section">
      <div class="label mb-2 text-violet-800">Distance</div>
      <div class="flex gap-2 flex-wrap">${['1 km','5 km','10 km','25 km'].map((d,i)=>`<span class="chip ${i===1?'on':''}">${d}</span>`).join('')}</div>
    </div>
    <div class="filters-section space-y-3">
      <div class="label text-slate-600 dark:text-slate-400">Options</div>
      ${[['Open now',true],['Verified only',true],['Female-friendly staff',false],['Home pickup available',false],['Accepts card',true]].map(([l,on])=>`
        <div class="flex justify-between items-center py-0.5">
          <div class="text-sm font-medium text-slate-800 dark:text-slate-200">${l}</div>
          <div class="w-10 h-6 rounded-full ${on?'bg-gradient-to-r from-teal-600 to-emerald-500':'bg-slate-200'} relative transition-colors"><div class="absolute top-0.5 ${on?'right-0.5':'left-0.5'} w-5 h-5 rounded-full bg-white dark:bg-slate-900 shadow-md"></div></div>
        </div>`).join('')}
    </div>
  </div>
  <div class="cta-bar">
    <button type="button" class="btn-primary btn-primary-lg w-full tap shadow-md" onclick="show('b2c-map')">Show 17 centers</button>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
