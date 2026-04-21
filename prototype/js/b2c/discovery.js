const B2C_DISCOVERY = {
  'b2c-addcar': `

<div class="screen" data-screen="b2c-addcar">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-6 pt-4 flex items-center justify-between">
    <button class="tap text-slate-500"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button class="tap text-sm text-slate-500" onclick="show('b2c-map')">Skip</button>
  </div>
  <div class="flex-1 px-6 pt-4 flex flex-col overflow-y-auto">
    <div class="text-2xl font-bold leading-tight">Add your car</div>
    <div class="text-sm text-slate-500 mt-1.5">We'll auto-log services you book here.</div>

    <div class="mt-6 p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-white"><i data-lucide="scan-line" class="w-5 h-5 text-teal-700"></i></div>
      <div class="flex-1"><div class="text-sm font-semibold">Scan VIN with camera</div><div class="text-xs text-slate-500">Autofill brand, model, year</div></div>
      <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
    </div>

    <div class="label mt-6 mb-1.5">Brand</div>
    <div class="rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm flex justify-between items-center">Toyota <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i></div>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <div><div class="label mb-1.5">Model</div><div class="rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm">Corolla</div></div>
      <div><div class="label mb-1.5">Year</div><div class="rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm">2019</div></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <div><div class="label mb-1.5">Mileage (km)</div><div class="rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm">82,450</div></div>
      <div><div class="label mb-1.5">Plate <span class="text-slate-400 normal-case font-normal">optional</span></div><div class="rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm">س ب ج 7421</div></div>
    </div>
    <div class="flex-1"></div>
    <button class="btn-primary mt-6 tap mb-4" onclick="show('b2c-map')">Save & continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2c-map': `

<div class="screen" data-screen="b2c-map">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <!-- Search + filters -->
  <div class="px-4 pt-2 pb-3 bg-white relative z-20">
    <div class="flex items-center gap-2">
      <div class="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 flex items-center gap-2">
        <i data-lucide="search" class="w-4 h-4 text-slate-400"></i>
        <input class="flex-1 bg-transparent text-sm outline-none" placeholder="Oil change, brakes, AC…">
        <i data-lucide="mic" class="w-4 h-4 text-slate-400"></i>
      </div>
      <button class="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center tap" onclick="show('b2c-filters')"><i data-lucide="sliders-horizontal" class="w-4 h-4"></i></button>
    </div>
    <div class="flex gap-2 mt-2.5 overflow-x-auto no-scrollbar">
      <span class="chip on"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i>Verified</span>
      <span class="chip"><i data-lucide="clock" class="w-3.5 h-3.5"></i>Open now</span>
      <span class="chip"><i data-lucide="star" class="w-3.5 h-3.5"></i>4★+</span>
      <span class="chip"><i data-lucide="map-pin" class="w-3.5 h-3.5"></i>&lt;5 km</span>
      <span class="chip bg-orange-500 text-white border-orange-500"><i data-lucide="zap" class="w-3.5 h-3.5"></i>Emergency</span>
      <span class="chip"><i data-lucide="truck" class="w-3.5 h-3.5"></i>Tow truck</span>
    </div>
  </div>

  <!-- Map canvas -->
  <div class="flex-1 relative map-canvas">
    <div class="map-road-h" style="top:28%"></div>
    <div class="map-road-h" style="top:62%"></div>
    <div class="map-road-v" style="left:34%"></div>
    <div class="map-road-v" style="left:72%"></div>

    <!-- User location -->
    <div class="absolute" style="left:48%; top:44%;">
      <div class="relative w-4 h-4">
        <div class="absolute inset-0 rounded-full" style="background:#2563EB;box-shadow:0 0 0 4px rgba(37,99,235,.25);"></div>
      </div>
    </div>

    <!-- Pins -->
    <div class="absolute" style="left:30%; top:24%;"><div class="pin" style="background:#0F766E"><i data-lucide="badge-check" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute tap" style="left:56%; top:36%;" onclick="show('b2c-shop')"><div class="pin" style="background:#F97316;transform:rotate(-45deg) scale(1.2);"><i data-lucide="wrench" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute" style="left:64%; top:66%;"><div class="pin" style="background:#0F766E"><i data-lucide="badge-check" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute" style="left:22%; top:70%;"><div class="pin" style="background:#64748B"><i data-lucide="wrench" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute" style="left:78%; top:18%;"><div class="pin" style="background:#0F766E"><i data-lucide="badge-check" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute tap" style="left:46%; top:68%;" onclick="show('b2c-search')"><div class="pin" style="background:#1D4ED8"><i data-lucide="truck" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute" style="left:12%; top:38%;"><div class="pin" style="background:#1E40AF"><i data-lucide="truck" class="w-4 h-4 text-white"></i></div></div>

    <!-- FAB -->
    <button class="absolute right-3 bottom-[310px] w-11 h-11 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center tap"><i data-lucide="locate-fixed" class="w-4 h-4 text-teal-700"></i></button>
    <button class="absolute right-3 bottom-[360px] w-11 h-11 rounded-full bg-white border border-slate-200 shadow flex items-center justify-center tap" onclick="show('b2c-search')"><i data-lucide="list" class="w-4 h-4"></i></button>

    <!-- Bottom sheet: nearest 3 -->
    <div class="sheet" style="height: 280px;">
      <div class="w-10 h-1 bg-slate-300 rounded-full mx-auto mt-2"></div>
      <div class="px-4 pt-2 pb-1 flex justify-between items-center">
        <div class="font-semibold">Nearest to you</div>
        <div class="text-xs text-slate-500">17 centers</div>
      </div>
      <div class="px-4 pb-3 space-y-2.5 overflow-y-auto" style="max-height:230px;">
        <div class="tap flex items-center gap-3 p-3 rounded-2xl border border-teal-200 bg-teal-50" onclick="show('b2c-shop')">
          <div class="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center"><i data-lucide="wrench" class="w-5 h-5 text-slate-500"></i></div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><div class="font-semibold truncate">AutoPro Heliopolis</div><i data-lucide="badge-check" class="w-4 h-4 text-teal-700"></i></div>
            <div class="text-xs text-slate-500 mt-0.5">0.8 km · Open · Next slot 11:30</div>
            <div class="flex items-center gap-2 mt-1 text-xs"><span class="flex items-center gap-0.5 font-semibold"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>4.8</span><span class="text-slate-400">(312)</span><span class="text-slate-300">·</span><span class="text-slate-500">EGP 350–900</span></div>
          </div>
          <button class="btn-primary py-2 px-3 text-xs">Book</button>
        </div>
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200">
          <div class="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center"><i data-lucide="wrench" class="w-5 h-5 text-slate-500"></i></div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><div class="font-semibold truncate">QuickFix Nasr City</div><i data-lucide="badge-check" class="w-4 h-4 text-teal-700"></i></div>
            <div class="text-xs text-slate-500 mt-0.5">1.6 km · Open · Next slot 12:15</div>
            <div class="flex items-center gap-2 mt-1 text-xs"><span class="flex items-center gap-0.5 font-semibold"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>4.6</span><span class="text-slate-400">(188)</span><span class="text-slate-300">·</span><span class="text-slate-500">EGP 250–1200</span></div>
          </div>
          <button class="btn-ghost py-2 px-3 text-xs">View</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom nav -->
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
  <div class="flex-1 overflow-y-auto px-4 py-3 bg-slate-50">
    <div class="p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white mb-4">
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
        <div class="tap p-3 rounded-2xl bg-white border border-slate-200">
          <div class="h-20 rounded-xl bg-slate-100 flex items-center justify-center mb-2"><i data-lucide="package" class="w-8 h-8 text-slate-400"></i></div>
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
  <div class="px-5 pt-3 flex items-center justify-between">
    <button class="tap text-slate-500" onclick="show('b2c-map')"><i data-lucide="x" class="w-5 h-5"></i></button>
    <div class="font-semibold">Filters</div>
    <button class="tap text-sm text-teal-700 font-semibold">Reset</button>
  </div>
  <div class="flex-1 px-5 pt-4 overflow-y-auto space-y-5">
    <div>
      <div class="label mb-2">Service</div>
      <div class="flex flex-wrap gap-2">
        ${['Oil change','Brakes','Tires','AC','Battery','Engine','Body & paint','Electrical'].map((s,i)=>`<span class="chip ${i<2?'on':''}">${s}</span>`).join('')}
      </div>
    </div>
    <div>
      <div class="flex justify-between mb-2"><div class="label">Price range</div><div class="text-xs font-semibold">EGP 200–1500</div></div>
      <div class="h-1.5 rounded-full bg-slate-200 relative">
        <div class="absolute h-1.5 rounded-full bg-teal-600" style="left:10%; right:30%;"></div>
        <div class="absolute w-4 h-4 bg-white border-2 border-teal-600 rounded-full -top-1" style="left:9%"></div>
        <div class="absolute w-4 h-4 bg-white border-2 border-teal-600 rounded-full -top-1" style="left:68%"></div>
      </div>
    </div>
    <div>
      <div class="label mb-2">Minimum rating</div>
      <div class="flex gap-2">
        ${[3,3.5,4,4.5].map((r,i)=>`<span class="chip ${i===2?'on':''}"><i data-lucide="star" class="w-3 h-3 ${i===2?'':'text-amber-500 fill-amber-500'}"></i>${r}+</span>`).join('')}
      </div>
    </div>
    <div>
      <div class="label mb-2">Distance</div>
      <div class="flex gap-2">${['1 km','5 km','10 km','25 km'].map((d,i)=>`<span class="chip ${i===1?'on':''}">${d}</span>`).join('')}</div>
    </div>
    <div class="space-y-3 pt-1">
      ${[['Open now',true],['Verified only',true],['Female-friendly staff',false],['Home pickup available',false],['Accepts card',true]].map(([l,on])=>`
        <div class="flex justify-between items-center">
          <div class="text-sm font-medium">${l}</div>
          <div class="w-10 h-6 rounded-full ${on?'bg-teal-600':'bg-slate-200'} relative"><div class="absolute top-0.5 ${on?'right-0.5':'left-0.5'} w-5 h-5 rounded-full bg-white shadow"></div></div>
        </div>`).join('')}
    </div>
  </div>
  <div class="p-4 border-t border-slate-200">
    <button class="btn-primary w-full tap" onclick="show('b2c-map')">Show 17 centers</button>
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
      <div class="text-xs text-slate-500">18 results · sorted by distance</div>
      <div class="text-xs font-semibold text-teal-700 flex items-center gap-1"><i data-lucide="arrow-up-down" class="w-3.5 h-3.5"></i>Sort</div>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto px-4 pb-4 space-y-3 bg-slate-50">
    ${[
      ['AutoPro Heliopolis','0.8 km','4.8','312','EGP 350–900',true,'11:30','Open'],
      ['QuickFix Nasr City','1.6 km','4.6','188','EGP 250–1200',true,'12:15','Open'],
      ['City Tow 24/7 – Heliopolis','1.1 km','4.7','201','from EGP 400',true,'~15 min','Tow'],
      ['Toyota Authorized – El Nozha','2.4 km','4.9','421','EGP 450–1800',true,'14:00','Open'],
      ['Cairo Motors Workshop','3.1 km','4.3','94','EGP 200–700',false,'Tomorrow 09:00','Closes 6pm'],
      ['Mobile Mechanic — Khaled',' on-demand','4.7','66','EGP 300–600',false,'Now','Mobile'],
    ].map(([n,d,r,c,p,v,next,state])=>`
      <div class="tap p-3 rounded-2xl border border-slate-200 bg-white" onclick="show('b2c-shop')">
        <div class="flex gap-3">
          <div class="w-16 h-16 rounded-xl bg-slate-200 ${state==='Tow'?'flex items-center justify-center':''}">${state==='Tow'?'<i data-lucide="truck" class="w-7 h-7 text-blue-700"></i>':''}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5"><div class="font-semibold truncate">${n}</div>${v?'<i data-lucide="badge-check" class="w-4 h-4 text-teal-700"></i>':''}${state==='Tow'?'<span class="badge b-blue">Tow</span>':''}</div>
            <div class="text-xs text-slate-500 mt-0.5">${d} · ${state}</div>
            <div class="flex items-center gap-2 mt-1 text-xs"><span class="flex items-center gap-0.5 font-semibold"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>${r}</span><span class="text-slate-400">(${c})</span><span class="text-slate-300">·</span><span class="text-slate-500">${p}</span></div>
            <div class="mt-2 flex items-center justify-between">
              <div class="text-xs text-teal-700 font-semibold">Next slot ${next}</div>
              <button class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-600 text-white">Book</button>
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
    <div class="relative h-52 bg-gradient-to-br from-teal-700 to-teal-900">
      <div class="status-bar absolute top-0 left-0 right-0" style="color:white"><span>9:41</span><span></span></div>
      <div class="absolute top-12 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center tap" onclick="show('b2c-map')"><i data-lucide="arrow-left" class="w-4 h-4"></i></div>
      <div class="absolute top-12 right-4 flex gap-2">
        <div class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center tap"><i data-lucide="share-2" class="w-4 h-4"></i></div>
        <div class="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center tap"><i data-lucide="heart" class="w-4 h-4"></i></div>
      </div>
      <div class="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded">1/12</div>
    </div>
    <div class="px-5 -mt-6 relative">
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
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
          <div class="tap flex items-center justify-between p-3 rounded-xl border border-slate-200" onclick="show('b2c-service')">
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
        ${[['Quality','4.9'],['Price','4.6'],['Speed','4.8'],['Honesty','4.9']].map(([l,v])=>`<div class="p-2 rounded-xl bg-slate-50 text-center"><div class="text-xs text-slate-500">${l}</div><div class="font-bold">${v}</div></div>`).join('')}
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

  <div class="p-4 border-t border-slate-200 bg-white">
    <button class="btn-primary w-full tap" onclick="show('b2c-service')">Book service · from EGP 350</button>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
