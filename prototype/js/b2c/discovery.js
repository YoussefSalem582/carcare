const B2C_DISCOVERY = {
  'b2c-addcar': `

<div class="screen" data-screen="b2c-addcar">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar">
    <button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-login')" aria-label="Back"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button type="button" class="funnel-skip tap" onclick="show('b2c-map')">Skip</button>
  </div>
  <div class="flex-1 app-surface px-6 pt-2 pb-4 flex flex-col overflow-y-auto min-h-0">
    <span class="preauth-eyebrow">Your garage</span>
    <h2 class="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">Add your car</h2>
    <p class="text-sm text-slate-600 mt-1.5">We’ll auto-log services you book through CarCare.</p>

    <button type="button" class="callout-violet mt-6 w-full text-left p-4 flex items-center gap-3 tap">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center bg-white shadow-sm border border-violet-100"><i data-lucide="scan-line" class="w-5 h-5 text-violet-600"></i></div>
      <div class="flex-1 min-w-0"><div class="text-sm font-semibold text-slate-900">Scan VIN with camera</div><div class="text-xs text-slate-600">Autofill brand, model, year</div></div>
      <i data-lucide="chevron-right" class="w-5 h-5 text-violet-400 flex-shrink-0"></i>
    </button>

    <div class="app-panel p-4 mt-5 space-y-3">
      <div><div class="label mb-1.5">Brand</div><div class="proto-input px-3.5 py-3 text-sm flex justify-between items-center">Toyota <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i></div></div>
      <div class="grid grid-cols-2 gap-3">
        <div><div class="label mb-1.5">Model</div><div class="proto-input px-3.5 py-3 text-sm">Corolla</div></div>
        <div><div class="label mb-1.5">Year</div><div class="proto-input px-3.5 py-3 text-sm">2019</div></div>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div><div class="label mb-1.5">Mileage (km)</div><div class="proto-input px-3.5 py-3 text-sm">82,450</div></div>
        <div><div class="label mb-1.5">Plate <span class="text-slate-400 normal-case font-normal">optional</span></div><div class="proto-input px-3.5 py-3 text-sm">س ب ج 7421</div></div>
      </div>
    </div>
    <div class="flex-1 min-h-3"></div>
    <button type="button" class="btn-primary btn-primary-lg w-full tap shadow-md" onclick="show('b2c-map')">Save &amp; continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2c-map': `

<div class="screen" data-screen="b2c-map">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="map-search-header px-4 pt-2 pb-0 bg-white relative z-30">
    <div class="flex items-center gap-2.5 pb-3">
      <div class="flex-1 rounded-2xl border border-slate-200/90 bg-white px-3.5 py-3 flex items-center gap-2 shadow-sm">
        <i data-lucide="search" class="w-4 h-4 text-slate-400 flex-shrink-0"></i>
        <input class="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Oil change, brakes, AC…">
        <i data-lucide="mic" class="w-4 h-4 text-slate-400 flex-shrink-0 tap"></i>
      </div>
      <button type="button" class="map-fab rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center tap flex-shrink-0" style="width:48px;height:48px;border-radius:16px;" onclick="show('b2c-filters')"><i data-lucide="sliders-horizontal" class="w-[18px] h-[18px] text-slate-600"></i></button>
    </div>
    <div class="chip-scroll-wrap -mx-1 px-1">
      <div class="chip-scroll-row no-scrollbar">
        <span class="chip on flex-shrink-0"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i>Verified</span>
        <span class="chip flex-shrink-0"><i data-lucide="clock" class="w-3.5 h-3.5"></i>Open now</span>
        <span class="chip flex-shrink-0"><i data-lucide="star" class="w-3.5 h-3.5"></i>4★+</span>
        <span class="chip flex-shrink-0"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i>&lt;5 km</span>
        <span class="chip bg-orange-500 text-white border-orange-500 flex-shrink-0"><i data-lucide="zap" class="w-3.5 h-3.5"></i>Emergency</span>
        <span class="chip flex-shrink-0"><i data-lucide="truck" class="w-3.5 h-3.5"></i>Tow truck</span>
      </div>
    </div>
  </div>

  <div class="flex-1 relative map-canvas map-canvas-pro overflow-hidden">
    <div class="map-building" style="left:8%; top:18%; width:22%; height:14%;"></div>
    <div class="map-building" style="left:38%; top:12%; width:18%; height:18%;"></div>
    <div class="map-building" style="left:68%; top:22%; width:24%; height:12%;"></div>
    <div class="map-building" style="left:14%; top:52%; width:16%; height:16%;"></div>
    <div class="map-building" style="left:72%; top:48%; width:20%; height:14%;"></div>
    <div class="map-building" style="left:44%; top:58%; width:14%; height:11%;"></div>

    <div class="map-road-h" style="top:28%"></div>
    <div class="map-road-h" style="top:62%"></div>
    <div class="map-road-v" style="left:34%"></div>
    <div class="map-road-v" style="left:72%"></div>

    <div class="user-loc-dot-wrap" style="left:48%; top:44%;">
      <div class="user-loc-dot-pulse"></div>
      <div class="user-loc-dot-core"></div>
    </div>

    <div class="absolute z-10" style="left:30%; top:24%;"><div class="pin" style="background:#0F766E"><i data-lucide="badge-check" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute tap z-10" style="left:56%; top:36%;" onclick="show('b2c-shop')"><div class="pin" style="background:#F97316;transform:rotate(-45deg) scale(1.2);"><i data-lucide="wrench" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute z-10" style="left:64%; top:66%;"><div class="pin" style="background:#0F766E"><i data-lucide="badge-check" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute z-10" style="left:22%; top:70%;"><div class="pin" style="background:#64748B"><i data-lucide="wrench" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute z-10" style="left:78%; top:18%;"><div class="pin" style="background:#0F766E"><i data-lucide="badge-check" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute tap z-10" style="left:46%; top:68%;" onclick="show('b2c-search')"><div class="pin" style="background:#1D4ED8"><i data-lucide="truck" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute z-10" style="left:12%; top:38%;"><div class="pin" style="background:#1E40AF"><i data-lucide="truck" class="w-4 h-4 text-white"></i></div></div>

    <button type="button" class="absolute right-3 map-fab rounded-full bg-white flex items-center justify-center tap" style="bottom:300px;"><i data-lucide="locate-fixed" class="w-[18px] h-[18px] text-teal-700"></i></button>
    <button type="button" class="absolute right-3 map-fab rounded-full bg-white flex items-center justify-center tap" style="bottom:352px;" onclick="show('b2c-search')"><i data-lucide="list" class="w-[18px] h-[18px] text-slate-700"></i></button>

    <div class="sheet sheet-elevated absolute left-0 right-0 bottom-0" style="min-height:292px;">
      <div class="sheet-handle"></div>
      <div class="px-4 pt-3 pb-2 flex justify-between items-end">
        <div>
          <div class="text-[17px] font-bold text-slate-900 tracking-tight">Nearest to you</div>
          <div class="text-xs text-slate-500 mt-0.5">Sorted by distance · live availability</div>
        </div>
        <span class="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">17 centers</span>
      </div>
      <div class="px-4 pb-3 space-y-2.5 overflow-y-auto" style="max-height:218px;">
        <div class="listing-card tap flex items-center gap-3 p-3.5 rounded-2xl border-2 border-teal-300/80 bg-gradient-to-br from-teal-50 to-white shadow-sm" onclick="show('b2c-shop')">
          <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center ring-1 ring-slate-200/80"><i data-lucide="wrench" class="w-5 h-5 text-slate-600"></i></div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><span class="font-semibold text-slate-900 truncate">AutoPro Heliopolis</span><i data-lucide="badge-check" class="w-4 h-4 text-teal-700 flex-shrink-0"></i></div>
            <div class="text-xs text-slate-600 mt-1">0.8 km · <span class="text-emerald-600 font-medium">Open</span> · Next slot <span class="font-semibold text-slate-700">11:30</span></div>
            <div class="flex items-center gap-2 mt-1.5 text-xs"><span class="flex items-center gap-0.5 font-semibold text-slate-800"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>4.8</span><span class="text-slate-400">(312)</span><span class="text-slate-300">·</span><span class="text-slate-600 font-medium">EGP 350–900</span></div>
          </div>
          <button type="button" class="btn-primary py-2.5 px-4 text-xs rounded-xl shadow-sm">Book</button>
        </div>
        <div class="listing-card flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center"><i data-lucide="wrench" class="w-5 h-5 text-slate-600"></i></div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><span class="font-semibold text-slate-900 truncate">QuickFix Nasr City</span><i data-lucide="badge-check" class="w-4 h-4 text-teal-700 flex-shrink-0"></i></div>
            <div class="text-xs text-slate-600 mt-1">1.6 km · <span class="text-emerald-600 font-medium">Open</span> · Next slot <span class="font-semibold text-slate-700">12:15</span></div>
            <div class="flex items-center gap-2 mt-1.5 text-xs"><span class="flex items-center gap-0.5 font-semibold text-slate-800"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>4.6</span><span class="text-slate-400">(188)</span><span class="text-slate-300">·</span><span class="text-slate-600 font-medium">EGP 250–1200</span></div>
          </div>
          <button type="button" class="btn-secondary py-2.5 px-4 text-xs">View</button>
        </div>
        <button type="button" class="w-full py-2.5 text-xs font-semibold text-teal-700 tap rounded-xl border border-dashed border-teal-200/80 bg-teal-50/30" onclick="show('b2c-search')">+ 15 more centers · see full list</button>
      </div>
    </div>
  </div>

  ${b2cTabBar('map')}
  <div class="home-indicator"></div>
</div>`,

  'b2c-marketplace': `

<div class="screen" data-screen="b2c-marketplace">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-4 pt-2 pb-2 bg-white border-b border-slate-100">
    <div class="font-bold text-lg">Shop</div>
    <div class="text-xs text-slate-500">Parts &amp; accessories from verified sellers</div>
    <div class="flex items-center gap-2 mt-3">
      <div class="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 flex items-center gap-2">
        <i data-lucide="search" class="w-4 h-4 text-slate-400"></i>
        <input class="flex-1 bg-transparent text-sm outline-none" placeholder="Search parts, oil, VIN…">
      </div>
      <div class="relative w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center tap">
        <i data-lucide="shopping-bag" class="w-5 h-5 text-slate-600"></i>
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
        <button class="px-3 py-1.5 rounded-xl bg-white/20 text-xs font-semibold">Add</button>
      </div>
    </div>
    <div class="label mb-2">Popular this week</div>
    <div class="grid grid-cols-2 gap-3">
      ${[['Bosch cabin filter','EGP 185','4.7','1.2k sold','Cairo Parts'],
         ['Michelin 205/55 R16','EGP 2,890','4.8','In stock','Elite Tires'],
         ['AGM battery 60Ah','EGP 3,200','4.6','2–3d ship','AutoBatt'],
         ['Castrol 5W-30 (4L)','EGP 450','4.8','EGP 50 delivery','Lubrico']].map(([t,p,r,sell,seller])=>`
        <div class="tap p-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm ring-1 ring-black/[0.02]">
          <div class="h-20 rounded-xl bg-gradient-to-br from-slate-100 to-indigo-50/80 flex items-center justify-center mb-2"><i data-lucide="package" class="w-8 h-8 text-indigo-400"></i></div>
          <div class="text-xs font-semibold leading-tight line-clamp-2">${t}</div>
          <div class="mt-1 flex items-center gap-0.5 text-[10px] text-slate-500"><i data-lucide="star" class="w-2.5 h-2.5 text-amber-500 fill-amber-500"></i>${r} · ${sell}</div>
          <div class="mt-2 font-bold text-sm">${p}</div>
          <div class="text-[10px] text-slate-500">${seller}</div>
        </div>`).join('')}
    </div>
  </div>
  ${b2cTabBar('market')}
  <div class="home-indicator"></div>
</div>`,

  'b2c-filters': `

<div class="screen" data-screen="b2c-filters">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="screen-topbar">
    <button type="button" class="funnel-back tap -ml-1" onclick="show('b2c-map')" aria-label="Close"><i data-lucide="x" class="w-5 h-5"></i></button>
    <div class="font-semibold text-slate-900">Filters</div>
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
        <div class="absolute w-4 h-4 bg-white border-2 border-teal-600 rounded-full -top-1 shadow-sm" style="left:9%"></div>
        <div class="absolute w-4 h-4 bg-white border-2 border-cyan-600 rounded-full -top-1 shadow-sm" style="left:68%"></div>
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
      <div class="label text-slate-600">Options</div>
      ${[['Open now',true],['Verified only',true],['Female-friendly staff',false],['Home pickup available',false],['Accepts card',true]].map(([l,on])=>`
        <div class="flex justify-between items-center py-0.5">
          <div class="text-sm font-medium text-slate-800">${l}</div>
          <div class="w-10 h-6 rounded-full ${on?'bg-gradient-to-r from-teal-600 to-emerald-500':'bg-slate-200'} relative transition-colors"><div class="absolute top-0.5 ${on?'right-0.5':'left-0.5'} w-5 h-5 rounded-full bg-white shadow-md"></div></div>
        </div>`).join('')}
    </div>
  </div>
  <div class="cta-bar">
    <button type="button" class="btn-primary btn-primary-lg w-full tap shadow-md" onclick="show('b2c-map')">Show 17 centers</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2c-search': `

<div class="screen" data-screen="b2c-search">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-4 pt-2 pb-2 bg-white">
    <div class="flex items-center gap-2">
      <button class="tap text-slate-500" onclick="show('b2c-map')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 flex items-center gap-2">
        <i data-lucide="search" class="w-4 h-4 text-slate-400"></i>
        <input class="flex-1 bg-transparent text-sm outline-none" value="Oil change">
      </div>
    </div>
    <div class="flex justify-between items-center mt-2">
      <div class="text-xs text-slate-500">17 centers · sorted by distance</div>
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
      <div class="listing-card tap p-3.5 rounded-2xl border ${idx===0?'border-2 border-teal-300/80 bg-gradient-to-br from-teal-50 to-white shadow-sm':'border-slate-200 bg-white shadow-sm'}" onclick="show('b2c-shop')">
        <div class="flex gap-3">
          <div class="w-16 h-16 rounded-xl ${idx===0?'bg-slate-100 ring-1 ring-slate-200/80':'bg-slate-200'} flex items-center justify-center">${state==='Tow'?'<i data-lucide="truck" class="w-7 h-7 text-blue-700"></i>':'<i data-lucide="wrench" class="w-7 h-7 text-slate-500"></i>'}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><span class="font-semibold text-slate-900 truncate">${n}</span>${v?'<i data-lucide="badge-check" class="w-4 h-4 text-teal-700 flex-shrink-0"></i>':''}${state==='Tow'?'<span class="badge b-blue">Tow</span>':''}</div>
            <div class="text-xs text-slate-600 mt-0.5">${d} · ${state}</div>
            <div class="flex items-center gap-2 mt-1 text-xs"><span class="flex items-center gap-0.5 font-semibold text-slate-800"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>${r}</span><span class="text-slate-400">(${c})</span><span class="text-slate-300">·</span><span class="text-slate-600">${p}</span></div>
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

  'b2c-shop': `

<div class="screen" data-screen="b2c-shop">
  <div class="flex-1 overflow-y-auto">
    <div class="relative h-52 gradient-hero-shop">
      <div class="status-bar absolute top-0 left-0 right-0" style="color:white"><span>9:41</span><span></span></div>
      <div class="absolute top-12 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center tap" onclick="show('b2c-map')"><i data-lucide="arrow-left" class="w-4 h-4"></i></div>
      <div class="absolute top-12 right-4 flex gap-2">
        <div class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center tap"><i data-lucide="share-2" class="w-4 h-4"></i></div>
        <div class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center tap"><i data-lucide="heart" class="w-4 h-4"></i></div>
      </div>
      <div class="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded">1/12</div>
    </div>
    <div class="px-5 -mt-6 relative z-10">
      <div class="bg-white rounded-2xl p-4 shadow-lg border border-slate-200/80 ring-1 ring-black/[0.03]">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="flex items-center gap-2"><div class="text-xl font-bold">AutoPro Heliopolis</div><i data-lucide="badge-check" class="w-5 h-5 text-teal-700"></i></div>
            <div class="text-xs text-slate-500 mt-1">Authorized dealer · Independent workshop</div>
            <div class="flex items-center gap-2 mt-2 text-xs"><span class="flex items-center gap-0.5 font-semibold"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>4.8</span><span class="text-slate-400">(312 reviews)</span><span class="text-slate-300">·</span><span class="text-green-600 font-semibold">Open · closes 10pm</span></div>
          </div>
          <div class="text-right">
            <div class="text-sm font-semibold">0.8 km</div>
            <div class="text-xs text-slate-500">Heliopolis</div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2 mt-3">
          <button class="btn-ghost py-2.5 text-xs flex flex-col items-center"><i data-lucide="phone" class="w-4 h-4 mb-1"></i>Call</button>
          <button class="btn-ghost py-2.5 text-xs flex flex-col items-center"><i data-lucide="navigation" class="w-4 h-4 mb-1"></i>Directions</button>
          <button class="btn-ghost py-2.5 text-xs flex flex-col items-center"><i data-lucide="message-circle" class="w-4 h-4 mb-1"></i>Message</button>
        </div>
      </div>
    </div>

    <div class="px-5 pt-5">
      <div class="label mb-2">Popular services</div>
      <div class="space-y-2">
        ${[['Oil change (standard)','45 min','EGP 350'],['Brake pads — front','1.5 h','EGP 650'],['AC recharge','1 h','EGP 450'],['Full engine diagnostic','30 min','From EGP 200 (quote)']].map(([t,d,p])=>`
          <div class="tap flex items-center justify-between p-3 rounded-xl border border-slate-200/90 bg-white shadow-sm hover:border-teal-200/80" onclick="show('b2c-service')">
            <div><div class="font-semibold text-sm">${t}</div><div class="text-xs text-slate-500">${d}</div></div>
            <div class="flex items-center gap-2"><div class="font-semibold text-sm">${p}</div><i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i></div>
          </div>`).join('')}
      </div>
    </div>

    <div class="px-5 pt-5">
      <div class="label mb-2">Photos</div>
      <div class="flex gap-2 overflow-x-auto">
        ${[0,1,2,3].map(()=>`<div class="w-28 h-20 rounded-xl bg-slate-200 flex-shrink-0"></div>`).join('')}
      </div>
    </div>

    <div class="px-5 pt-5">
      <div class="flex justify-between items-end mb-2"><div class="label">Reviews · 4.8</div><div class="text-xs text-teal-700 font-semibold">See all</div></div>
      <div class="grid grid-cols-4 gap-2 mb-3">
        ${[['Quality','4.9','teal'],['Price','4.6','amber'],['Speed','4.8','cyan'],['Honesty','4.9','violet']].map(([l,v,tone])=>`<div class="p-2 rounded-xl text-center ${tone==='teal'?'bg-teal-50 text-teal-900':tone==='amber'?'bg-amber-50 text-amber-900':tone==='cyan'?'bg-cyan-50 text-cyan-900':'bg-violet-50 text-violet-900'}"><div class="text-[10px] font-semibold uppercase tracking-wide opacity-80">${l}</div><div class="font-bold">${v}</div></div>`).join('')}
      </div>
      <div class="p-3 rounded-xl border border-slate-200">
        <div class="flex items-center gap-2 mb-1">
          <div class="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-xs font-semibold text-teal-700">MH</div>
          <div class="text-sm font-semibold">Mohamed H.</div>
          <div class="text-xs text-slate-400 ml-auto">2 days ago</div>
        </div>
        <div class="flex gap-0.5 mb-1">${[1,1,1,1,1].map(()=>`<i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>`).join('')}</div>
        <div class="text-sm text-slate-700">Fast, clean, honest pricing. Texted me when the car was ready.</div>
      </div>
    </div>

    <div class="h-24"></div>
  </div>

  <div class="p-4 border-t border-slate-200/90 bg-white/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(15,23,42,.08)]">
    <button type="button" class="btn-primary w-full tap rounded-2xl py-3.5 shadow-md" onclick="show('b2c-service')">Book service · from EGP 350</button>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
