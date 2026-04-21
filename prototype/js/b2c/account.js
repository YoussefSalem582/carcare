const B2C_ACCOUNT = {
  'b2c-garage': `

<div class="screen" data-screen="b2c-garage">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 pb-2 flex items-center justify-between bg-white border-b border-slate-100"><div class="font-bold text-xl tracking-tight text-slate-900">My garage</div><button type="button" class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md tap"><i data-lucide="plus" class="w-4 h-4"></i></button></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4 space-y-3 app-surface min-h-0">
    <div class="tap p-4 rounded-2xl text-white shadow-lg shadow-teal-900/25 gradient-garage-primary ring-1 ring-white/20" onclick="show('b2c-cardetail')">
      <div class="flex justify-between items-start">
        <div>
          <div class="text-xs uppercase tracking-wider opacity-80">Primary</div>
          <div class="text-xl font-bold mt-0.5">Toyota Corolla</div>
          <div class="text-sm opacity-80">2019 · 82,450 km · س ب ج 7421</div>
        </div>
        <i data-lucide="car" class="w-10 h-10 opacity-70"></i>
      </div>
      <div class="divider my-3 opacity-30"></div>
      <div class="grid grid-cols-3 gap-2 text-xs">
        <div><div class="opacity-70">Last service</div><div class="font-semibold mt-0.5">29 Mar · AC</div></div>
        <div><div class="opacity-70">Next due</div><div class="font-semibold mt-0.5">Oil · 1.2k km</div></div>
        <div><div class="opacity-70">Spent YTD</div><div class="font-semibold mt-0.5">EGP 2,430</div></div>
      </div>
    </div>

    <div class="tap p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm ring-1 ring-indigo-500/5">
      <div class="flex justify-between items-start">
        <div>
          <div class="font-semibold">Hyundai Tucson</div>
          <div class="text-sm text-slate-500">2022 · 24,100 km</div>
        </div>
        <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
      </div>
    </div>

    <button type="button" class="tap w-full p-4 rounded-2xl border-2 border-dashed border-teal-300/80 text-teal-800 bg-teal-50/40 text-sm font-semibold flex items-center justify-center gap-2"><i data-lucide="plus" class="w-4 h-4"></i>Add another car</button>
  </div>
  ${b2cTabBar('garage')}
  <div class="home-indicator"></div>
</div>`,

  'b2c-cardetail': `

<div class="screen" data-screen="b2c-cardetail">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar"><button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-garage')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold text-slate-900 truncate">Toyota Corolla 2019</div><button type="button" class="tap w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center"><i data-lucide="pencil" class="w-5 h-5"></i></button></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0">
    <div class="grid grid-cols-3 gap-2 mb-5">
      ${[['Mileage','82,450 km','cyan'],['Bookings','14','violet'],['Spent','EGP 7,820','amber']].map(([l,v,t])=>`<div class="p-3 rounded-xl text-center ${t==='cyan'?'bg-cyan-50 text-cyan-900':t==='violet'?'bg-violet-50 text-violet-900':'bg-amber-50 text-amber-900'}"><div class="text-[10px] font-semibold uppercase tracking-wide opacity-80">${l}</div><div class="font-bold text-sm mt-0.5">${v}</div></div>`).join('')}
    </div>

    <div class="label mb-2">Reminders</div>
    <div class="p-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 flex items-start gap-3 shadow-sm">
      <div class="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-md"><i data-lucide="bell" class="w-4 h-4 text-white"></i></div>
      <div class="flex-1"><div class="font-semibold text-sm">Oil change due in 1,200 km</div><div class="text-xs text-slate-600 mt-0.5">Based on your last change on 8 Feb</div></div>
      <button class="text-xs font-semibold text-orange-700 tap" onclick="show('b2c-map')">Book</button>
    </div>

    <div class="label mt-5 mb-2">Service history</div>
    <div class="space-y-3">
      ${[['29 Mar','AC recharge','QuickFix Nasr City','EGP 450',true],
         ['8 Feb','Oil + filter','AutoPro Heliopolis','EGP 520',true],
         ['12 Dec','Front brake pads','Toyota Authorized','EGP 950',true],
         ['3 Nov','Tire rotation','Cairo Motors (manual entry)','EGP 120',false]].map(([d,s,shop,p,auto])=>`
        <div class="p-3 rounded-xl border border-slate-200/90 bg-white shadow-sm">
          <div class="flex justify-between items-start">
            <div><div class="font-semibold text-sm">${s}</div><div class="text-xs text-slate-500 mt-0.5">${shop}</div></div>
            <div class="text-right"><div class="font-semibold text-sm">${p}</div><div class="text-xs text-slate-500">${d}</div></div>
          </div>
          ${auto?'<div class="mt-2 text-[10px] uppercase tracking-wider text-teal-700 font-semibold flex items-center gap-1"><i data-lucide="zap" class="w-3 h-3"></i>Auto-logged from booking</div>':'<div class="mt-2 text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Manual entry</div>'}
        </div>`).join('')}
    </div>
    <button class="mt-4 w-full py-3 rounded-xl border border-slate-200 text-sm font-semibold tap">+ Add manual entry</button>
    <div class="h-6"></div>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2c-dashboard': `

<div class="screen" data-screen="b2c-dashboard">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 pb-2 flex items-center justify-between bg-gradient-to-r from-white via-teal-50/30 to-indigo-50/40 border-b border-slate-100">
    <div>
      <div class="text-sm text-slate-600">Good morning,</div>
      <div class="font-bold text-xl tracking-tight text-slate-900">Youssef</div>
    </div>
    <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold shadow-md">Y</div>
  </div>
  <div class="flex-1 overflow-y-auto px-5 space-y-4 pt-3 app-surface min-h-0">
    <div class="p-4 rounded-2xl text-white bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 shadow-lg shadow-orange-500/25">
      <div class="flex items-start gap-3">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <div class="flex-1"><div class="font-bold">Oil change due soon</div><div class="text-sm opacity-90 mt-0.5">1,200 km away · 3 centers near you</div></div>
      </div>
      <button class="mt-3 w-full py-2.5 rounded-xl bg-white/20 backdrop-blur text-sm font-semibold tap" onclick="show('b2c-reminder')">See recommendations</button>
    </div>

    <div class="app-panel p-4">
      <div class="label mb-2">Car health</div>
      <div class="flex items-end gap-2 mb-3">
        <div class="text-3xl font-bold text-teal-700">82</div>
        <div class="text-xs text-slate-500 pb-1">/ 100 · Good</div>
      </div>
      <div class="h-2 rounded-full bg-slate-100 overflow-hidden ring-1 ring-slate-200/80"><div class="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500" style="width:82%"></div></div>
      <div class="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
        <div class="p-2 rounded-xl bg-emerald-50 text-emerald-900 font-medium border border-emerald-100">Engine: OK</div>
        <div class="p-2 rounded-xl bg-amber-50 text-amber-900 font-medium border border-amber-100">Oil: Due</div>
        <div class="p-2 rounded-xl bg-cyan-50 text-cyan-900 font-medium border border-cyan-100">Tires: OK</div>
      </div>
    </div>

    <div class="app-panel p-4">
      <div class="flex justify-between mb-3"><div class="label">Upcoming</div><div class="text-xs text-teal-700 font-semibold tap" onclick="show('b2c-bookings')">See all</div></div>
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-800 border border-teal-200/60 flex flex-col items-center justify-center shadow-sm"><div class="text-[10px] font-bold">APR</div><div class="text-sm font-bold -mt-0.5">18</div></div>
        <div class="flex-1"><div class="font-semibold text-sm">Oil change · AutoPro</div><div class="text-xs text-slate-500">Today · 11:00</div></div>
        <span class="badge b-indigo">Confirmed</span>
      </div>
    </div>

    <div class="app-panel p-4">
      <div class="label mb-2">This month</div>
      <div class="flex gap-3">
        <div class="flex-1"><div class="text-2xl font-bold">EGP 970</div><div class="text-xs text-slate-500">Spent</div></div>
        <div class="flex-1"><div class="text-2xl font-bold">2</div><div class="text-xs text-slate-500">Services</div></div>
        <div class="flex-1"><div class="text-2xl font-bold">28</div><div class="text-xs text-slate-500">Days streak</div></div>
      </div>
    </div>
    <div class="h-2"></div>
  </div>
  ${b2cTabBar('home')}
  <div class="home-indicator"></div>
</div>`,

  'b2c-reminder': `

<div class="screen" data-screen="b2c-reminder">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar"><button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-dashboard')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold text-slate-900">Oil change</div><div class="w-10"></div></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0">
    <div class="callout-success p-4 flex items-start gap-3 mb-4 border border-emerald-200/60">
      <i data-lucide="sparkles" class="w-5 h-5 text-emerald-700 mt-0.5"></i>
      <div class="text-sm text-emerald-950"><b>Recommended for you</b><br/><span class="text-xs text-emerald-900/80">Based on your car, location, and last oil change (8 Feb).</span></div>
    </div>

    ${[['AutoPro Heliopolis','0.8 km','4.8','EGP 350','Next: 11:30'],
       ['QuickFix Nasr City','1.6 km','4.6','EGP 320','Next: 12:15'],
       ['Toyota Authorized','2.4 km','4.9','EGP 520','Next: 14:00']].map(([n,d,r,p,s],i)=>`
      <div class="tap p-3 rounded-2xl border ${i===0?'border-teal-500 bg-teal-50':'border-slate-200'} mb-2" onclick="show('b2c-shop')">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-xl bg-slate-200"></div>
          <div class="flex-1"><div class="flex items-center gap-1 font-semibold text-sm">${n}${i<2?'<i data-lucide="badge-check" class="w-4 h-4 text-teal-700"></i>':''}</div><div class="text-xs text-slate-500 mt-0.5">${d} · <i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500 inline -mt-0.5"></i>${r} · ${s}</div></div>
          <div class="text-right"><div class="font-bold text-sm">${p}</div>${i===0?'<div class="text-[10px] font-bold text-teal-700 uppercase">Best</div>':''}</div>
        </div>
      </div>`).join('')}

    <button class="btn-primary w-full tap mt-3" onclick="show('b2c-slot')">Book at AutoPro · EGP 350</button>
    <div class="text-xs text-center text-slate-500 mt-2">Or <span class="text-teal-700 font-semibold tap" onclick="show('b2c-map')">see all on map</span></div>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2c-expenses': `

<div class="screen" data-screen="b2c-expenses">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar"><button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-dashboard')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold text-slate-900">Expenses</div><span class="badge b-amber">Phase 2</span></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4 app-surface min-h-0">
    <div class="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-white/10">
      <div class="text-xs uppercase tracking-wider opacity-70">Spent this year</div>
      <div class="text-3xl font-bold mt-1">EGP 7,820</div>
      <div class="text-xs opacity-70 mt-1">Across 14 services · 2 cars</div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <div class="p-3 rounded-xl border border-teal-100 bg-teal-50/80"><div class="text-xs text-teal-800 font-medium">Maintenance</div><div class="font-bold text-teal-950">EGP 4,200</div></div>
      <div class="p-3 rounded-xl border border-amber-100 bg-amber-50/80"><div class="text-xs text-amber-800 font-medium">Fuel</div><div class="font-bold text-amber-950">EGP 3,120</div></div>
      <div class="p-3 rounded-xl border border-violet-100 bg-violet-50/80"><div class="text-xs text-violet-800 font-medium">Insurance</div><div class="font-bold text-violet-950">EGP 500</div></div>
      <div class="p-3 rounded-xl border border-slate-200 bg-white"><div class="text-xs text-slate-500">Other</div><div class="font-bold">EGP 0</div></div>
    </div>
    <div class="label mt-5 mb-2">Cost per km</div>
    <div class="p-4 rounded-xl border border-slate-200">
      <div class="text-2xl font-bold">EGP 0.84</div>
      <div class="text-xs text-slate-500">Corolla · rolling 3 months</div>
      <div class="h-20 mt-2 bg-slate-50 rounded flex items-end gap-1 p-1">
        ${[40,55,48,62,51,67,58,72,61,55,48,62].map((h,i)=>`<div class="flex-1 rounded-t ${i%3===0?'bg-teal-500/85':i%3===1?'bg-cyan-500/80':'bg-indigo-400/85'}" style="height:${h}%"></div>`).join('')}
      </div>
    </div>
    <div class="p-4 rounded-xl bg-amber-50 border border-amber-100 mt-4 text-xs text-amber-900">
      <b>Dev note:</b> This is a Phase 2 feature included here for spec completeness. Ship Phase 1 without it.
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
