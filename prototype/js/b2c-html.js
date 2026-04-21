const B2C_HTML = {

/* --- SPLASH --------------------------------------------- */
'b2c-splash': `
<div class="screen" data-screen="b2c-splash">
  <div class="status-bar"><span>9:41</span><span class="flex gap-1 items-center"><i data-lucide="signal" class="w-3.5 h-3.5"></i><i data-lucide="wifi" class="w-3.5 h-3.5"></i><i data-lucide="battery-full" class="w-3.5 h-3.5"></i></span></div>
  <div class="flex-1 flex flex-col items-center justify-center px-8 text-center" style="background:linear-gradient(180deg,#F0FDFA 0%,#fff 55%);">
    <div class="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg" style="background:var(--brand);color:white;"><i data-lucide="wrench" class="w-10 h-10"></i></div>
    <div class="text-2xl font-extrabold tracking-tight text-slate-900">CarCare</div>
    <div class="text-sm text-slate-500 mt-2 max-w-[260px]">Verified workshops near you. Book maintenance in minutes.</div>
    <button class="btn-primary w-full max-w-[280px] mt-10 tap" onclick="show('b2c-lang')">Get started</button>
    <button class="tap text-sm text-teal-700 font-semibold mt-4" onclick="show('b2c-auth')">I already have an account</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- LANGUAGE ------------------------------------------- */
'b2c-lang': `
<div class="screen" data-screen="b2c-lang">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center gap-3"><button class="tap text-slate-500" onclick="show('b2c-splash')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Language</div></div>
  <div class="flex-1 px-6 pt-6 flex flex-col">
    <div class="text-xl font-bold">Choose your language</div>
    <div class="text-sm text-slate-500 mt-1">You can change this later in Settings.</div>
    <div class="mt-6 space-y-2">
      <button class="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-teal-600 bg-teal-50 tap">
        <span class="font-semibold">English</span><i data-lucide="check" class="w-5 h-5 text-teal-700"></i>
      </button>
      <button class="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-200 tap">
        <span class="font-semibold">العربية</span><span class="text-xs text-slate-400">RTL</span>
      </button>
    </div>
    <div class="flex-1"></div>
    <button class="btn-primary w-full tap mb-4" onclick="show('b2c-onboarding')">Continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- ONBOARDING ----------------------------------------- */
'b2c-onboarding': `
<div class="screen" data-screen="b2c-onboarding">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between">
    <button class="tap text-slate-500" onclick="show('b2c-lang')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button class="tap text-sm text-teal-700 font-semibold" onclick="show('b2c-auth')">Skip</button>
  </div>
  <div class="flex-1 px-6 pt-4 overflow-y-auto">
    <div class="flex justify-center gap-1.5 mb-6"><span class="h-1.5 w-6 rounded-full bg-teal-600"></span><span class="h-1.5 w-6 rounded-full bg-teal-600"></span><span class="h-1.5 w-6 rounded-full bg-teal-600"></span></div>
    <div class="space-y-4">
      <div class="p-4 rounded-2xl border border-slate-200 bg-white">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="map-pin" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold">Map-first discovery</div>
        <div class="text-sm text-slate-500 mt-1">See trusted centers around you with distance, hours, and ratings.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200 bg-white">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="badge-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold">Verified for quality</div>
        <div class="text-sm text-slate-500 mt-1">Book with confidence — we highlight verified partners.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200 bg-white">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="calendar-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold">Book & track</div>
        <div class="text-sm text-slate-500 mt-1">Pick a slot, pay your way, and follow status until pickup.</div>
      </div>
    </div>
    <button class="btn-primary w-full tap mt-6 mb-4" onclick="show('b2c-auth')">Continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- AUTH PICKER ---------------------------------------- */
'b2c-auth': `
<div class="screen" data-screen="b2c-auth">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3"><button class="tap text-slate-500" onclick="show('b2c-onboarding')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-8 flex flex-col">
    <div class="text-2xl font-bold leading-tight">Sign in or sign up</div>
    <div class="text-sm text-slate-500 mt-1.5">Use your email — no SMS codes.</div>
    <button class="btn-primary w-full mt-10 tap" onclick="show('b2c-login')">Log in</button>
    <button class="btn-ghost w-full mt-3 tap" onclick="show('b2c-register')">Create account</button>
    <div class="flex-1"></div>
    <div class="text-[11px] text-slate-400 text-center mb-6">By continuing you agree to our Terms and Privacy Policy.</div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- LOGIN (email) -------------------------------------- */
'b2c-login': `
<div class="screen" data-screen="b2c-login">
  <div class="status-bar"><span>9:41</span><span class="flex gap-1 items-center"><i data-lucide="signal" class="w-3.5 h-3.5"></i><i data-lucide="wifi" class="w-3.5 h-3.5"></i><i data-lucide="battery-full" class="w-3.5 h-3.5"></i></span></div>
  <div class="px-7 pt-4 flex items-center gap-3"><button class="tap text-slate-500" onclick="show('b2c-auth')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-4 flex flex-col">
    <div class="text-2xl font-bold leading-tight">Welcome back</div>
    <div class="text-sm text-slate-500 mt-1.5">Log in with your email and password.</div>
    <div class="mt-8 space-y-4">
      <div><div class="label mb-2">Email</div><input type="email" class="w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="you@example.com" autocomplete="off"></div>
      <div><div class="label mb-2">Password</div><input type="password" class="w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="••••••••••" autocomplete="off"></div>
      <div class="text-right text-xs font-semibold text-teal-700 tap">Forgot password?</div>
    </div>
    <button class="btn-primary mt-8 tap w-full" onclick="show('b2c-addcar')"><span>Log in</span><i data-lucide="arrow-right" class="w-4 h-4"></i></button>
    <div class="text-sm text-slate-500 text-center mt-6">No account? <button class="text-teal-700 font-semibold tap" onclick="show('b2c-register')">Create one</button></div>
    <div class="flex-1"></div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- REGISTER (email) ----------------------------------- */
'b2c-register': `
<div class="screen" data-screen="b2c-register">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-7 pt-4 flex items-center gap-3"><button class="tap text-slate-500" onclick="show('b2c-auth')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-4 flex flex-col overflow-y-auto">
    <div class="text-2xl font-bold leading-tight">Create your account</div>
    <div class="text-sm text-slate-500 mt-1.5">Email and password only.</div>
    <div class="mt-6 space-y-3">
      <div><div class="label mb-1.5">Full name <span class="text-slate-400 normal-case font-normal">optional</span></div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="Youssef Salem"></div>
      <div><div class="label mb-1.5">Email</div><input type="email" class="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="you@example.com"></div>
      <div><div class="label mb-1.5">Password</div><input type="password" class="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="••••••••••"></div>
      <div><div class="label mb-1.5">Confirm password</div><input type="password" class="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="••••••••••"></div>
    </div>
    <button class="btn-primary w-full mt-8 tap" onclick="show('b2c-addcar')">Create account</button>
    <div class="text-sm text-slate-500 text-center mt-4 mb-4">Already have an account? <button class="text-teal-700 font-semibold tap" onclick="show('b2c-login')">Log in</button></div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- ADD CAR -------------------------------------------- */
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

/* --- MAP HOME (CORE) ------------------------------------ */
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

/* --- MARKETPLACE ---------------------------------------- */
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

/* --- FILTERS -------------------------------------------- */
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

/* --- SEARCH RESULTS (LIST) ------------------------------ */
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

/* --- SHOP PROFILE --------------------------------------- */
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

/* --- SERVICE PICK --------------------------------------- */
'b2c-service': `
<div class="screen" data-screen="b2c-service">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-shop')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Select service</div><div class="w-5"></div></div>
  <div class="flex-1 px-5 pt-4 overflow-y-auto">
    <div class="label mb-2">Pick your car</div>
    <div class="flex gap-2 mb-5 overflow-x-auto">
      <div class="chip on whitespace-nowrap"><i data-lucide="car" class="w-3.5 h-3.5"></i>Toyota Corolla 2019</div>
      <div class="chip whitespace-nowrap"><i data-lucide="car" class="w-3.5 h-3.5"></i>Hyundai Tucson 2022</div>
      <div class="chip whitespace-nowrap"><i data-lucide="plus" class="w-3.5 h-3.5"></i>Add car</div>
    </div>
    <div class="label mb-2">Services</div>
    <div class="space-y-2">
      ${[['Oil change (standard)','5W-30 semi-synthetic · 4L','45 min','EGP 350','fixed',true],
         ['Oil change (premium)','5W-30 full synthetic · 4L','45 min','EGP 620','fixed',false],
         ['Oil + filter combo','Standard oil + OEM filter','1 h','EGP 450','fixed',false],
         ['Brake inspection','Free with any service','15 min','Free','range',false]].map(([t,d,dur,p,type,on])=>`
      <label class="flex items-center gap-3 p-3 rounded-xl border ${on?'border-teal-500 bg-teal-50':'border-slate-200'} tap">
        <div class="w-5 h-5 rounded-full border-2 ${on?'border-teal-600':'border-slate-300'} flex items-center justify-center">${on?'<div class="w-2.5 h-2.5 rounded-full bg-teal-600"></div>':''}</div>
        <div class="flex-1"><div class="font-semibold text-sm">${t}</div><div class="text-xs text-slate-500">${d} · ${dur}</div></div>
        <div class="text-right"><div class="font-semibold">${p}</div><div class="text-[10px] uppercase text-slate-400">${type==='range'?'from':'fixed'}</div></div>
      </label>`).join('')}
    </div>
    <div class="label mt-6 mb-2">Add-ons</div>
    <div class="p-3 rounded-xl border border-slate-200 flex justify-between items-center"><div><div class="font-semibold text-sm">Cabin air filter</div><div class="text-xs text-slate-500">OEM · +10 min</div></div><div class="flex items-center gap-2"><div class="text-sm font-semibold">+EGP 180</div><div class="w-6 h-6 rounded-md border border-slate-300 flex items-center justify-center"><i data-lucide="plus" class="w-3.5 h-3.5"></i></div></div></div>
  </div>
  <div class="p-4 border-t border-slate-200">
    <button class="btn-primary w-full tap" onclick="show('b2c-slot')">Continue · EGP 350</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- SLOT ---------------------------------------------- */
'b2c-slot': `
<div class="screen" data-screen="b2c-slot">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-service')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Pick a slot</div><div class="w-5"></div></div>
  <div class="flex-1 px-5 pt-4 overflow-y-auto">
    <div class="flex gap-2 overflow-x-auto pb-2">
      ${['Sat 18','Sun 19','Mon 20','Tue 21','Wed 22','Thu 23','Fri 24'].map((d,i)=>`<div class="min-w-[58px] text-center p-2 rounded-xl ${i===0?'bg-teal-600 text-white':'border border-slate-200'}"><div class="text-xs ${i===0?'text-white/80':'text-slate-500'}">${d.split(' ')[0]}</div><div class="font-bold">${d.split(' ')[1]}</div></div>`).join('')}
    </div>
    <div class="label mt-5 mb-2">Morning</div>
    <div class="grid grid-cols-3 gap-2">
      ${['09:00','09:30','10:00','10:30','11:00','11:30'].map((t,i)=>`<div class="text-center py-2.5 rounded-xl ${i===4?'bg-teal-600 text-white font-semibold':i===1||i===3?'bg-slate-100 text-slate-400 line-through':'border border-slate-200 font-medium text-sm'}">${t}</div>`).join('')}
    </div>
    <div class="label mt-5 mb-2">Afternoon</div>
    <div class="grid grid-cols-3 gap-2">
      ${['12:00','12:30','13:00','14:00','14:30','15:00'].map(t=>`<div class="text-center py-2.5 rounded-xl border border-slate-200 font-medium text-sm">${t}</div>`).join('')}
    </div>
    <div class="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-100 flex gap-2 items-start">
      <i data-lucide="timer" class="w-4 h-4 text-amber-700 mt-0.5"></i>
      <div class="text-xs text-amber-900"><b>Slot held for 10:00</b> · expires in 9m 42s. Complete payment to confirm.</div>
    </div>
  </div>
  <div class="p-4 border-t border-slate-200">
    <button class="btn-primary w-full tap" onclick="show('b2c-payment')">Continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- PAYMENT -------------------------------------------- */
'b2c-payment': `
<div class="screen" data-screen="b2c-payment">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-slot')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Review & pay</div><div class="w-5"></div></div>
  <div class="flex-1 px-5 pt-4 overflow-y-auto">
    <div class="p-4 rounded-2xl border border-slate-200">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-slate-200"></div>
        <div class="flex-1">
          <div class="font-semibold text-sm">AutoPro Heliopolis</div>
          <div class="text-xs text-slate-500">Sat 18 Apr · 11:00 · ~45 min</div>
        </div>
      </div>
      <div class="divider my-3"></div>
      <div class="space-y-1.5 text-sm">
        <div class="flex justify-between"><span>Oil change (standard)</span><span>EGP 350</span></div>
        <div class="flex justify-between text-slate-500"><span>Service fee</span><span>EGP 15</span></div>
        <div class="flex justify-between text-green-700"><span>Promo FIRST50</span><span>−EGP 50</span></div>
      </div>
      <div class="divider my-3"></div>
      <div class="flex justify-between font-bold"><span>Total</span><span>EGP 315</span></div>
    </div>

    <div class="label mt-5 mb-2">Payment method</div>
    <div class="space-y-2">
      <label class="flex items-center gap-3 p-3 rounded-xl border-2 border-teal-500 bg-teal-50">
        <div class="w-5 h-5 rounded-full border-2 border-teal-600 flex items-center justify-center"><div class="w-2.5 h-2.5 rounded-full bg-teal-600"></div></div>
        <i data-lucide="credit-card" class="w-5 h-5 text-slate-600"></i>
        <div class="flex-1"><div class="text-sm font-semibold">Visa •• 4242</div><div class="text-xs text-slate-500">Expires 08/27</div></div>
      </label>
      <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200">
        <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div>
        <i data-lucide="banknote" class="w-5 h-5 text-slate-600"></i>
        <div class="flex-1"><div class="text-sm font-semibold">Cash on service</div><div class="text-xs text-slate-500">Pay at the center</div></div>
      </label>
      <label class="flex items-center gap-3 p-3 rounded-xl border border-slate-200">
        <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div>
        <i data-lucide="wallet" class="w-5 h-5 text-slate-600"></i>
        <div class="flex-1"><div class="text-sm font-semibold">Vodafone Cash</div><div class="text-xs text-slate-500">+20 100 555 0142</div></div>
      </label>
    </div>

    <div class="mt-5 flex items-start gap-2 text-xs text-slate-500"><i data-lucide="shield-check" class="w-4 h-4 text-teal-700 mt-0.5"></i><div>If the service can't be completed as described, CarCare refunds within 48h. <span class="text-teal-700 font-semibold">Learn more</span></div></div>
  </div>
  <div class="p-4 border-t border-slate-200">
    <button class="btn-accent w-full tap" onclick="show('b2c-confirmed')">Pay EGP 315 & confirm</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- CONFIRMED ------------------------------------------ */
'b2c-confirmed': `
<div class="screen" data-screen="b2c-confirmed">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 px-6 pt-16 flex flex-col items-center text-center">
    <div class="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-4"><i data-lucide="check" class="w-10 h-10 text-teal-700"></i></div>
    <div class="text-2xl font-bold">Booking confirmed</div>
    <div class="text-sm text-slate-500 mt-2 max-w-xs">You're booked at AutoPro Heliopolis on Sat 18 Apr at 11:00. We'll remind you an hour before.</div>

    <div class="mt-6 w-full p-4 rounded-2xl border border-slate-200 text-left">
      <div class="flex justify-between text-xs text-slate-500"><span>Booking ID</span><span>#CC-4A1F9</span></div>
      <div class="divider my-2"></div>
      <div class="space-y-2 text-sm">
        <div class="flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4 text-slate-500"></i><span>Sat 18 Apr · 11:00 AM</span></div>
        <div class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-slate-500"></i><span>AutoPro, 12 Baghdad St, Heliopolis</span></div>
        <div class="flex items-center gap-2"><i data-lucide="car" class="w-4 h-4 text-slate-500"></i><span>Toyota Corolla 2019</span></div>
        <div class="flex items-center gap-2"><i data-lucide="wrench" class="w-4 h-4 text-slate-500"></i><span>Oil change (standard)</span></div>
      </div>
    </div>

    <div class="mt-4 w-full grid grid-cols-3 gap-2">
      <button class="btn-ghost py-2.5 text-xs flex flex-col items-center"><i data-lucide="calendar-plus" class="w-4 h-4 mb-1"></i>Add to calendar</button>
      <button class="btn-ghost py-2.5 text-xs flex flex-col items-center"><i data-lucide="navigation" class="w-4 h-4 mb-1"></i>Directions</button>
      <button class="btn-ghost py-2.5 text-xs flex flex-col items-center"><i data-lucide="phone" class="w-4 h-4 mb-1"></i>Call</button>
    </div>
  </div>
  <div class="p-4 border-t border-slate-200 space-y-2">
    <button class="btn-primary w-full tap" onclick="show('b2c-progress')">View booking</button>
    <button class="text-sm w-full text-slate-500 tap" onclick="show('b2c-map')">Back to map</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- BOOKINGS LIST -------------------------------------- */
'b2c-bookings': `
<div class="screen" data-screen="b2c-bookings">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 pb-3 flex items-center justify-between"><div class="font-bold text-xl">Bookings</div><button class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><i data-lucide="search" class="w-4 h-4"></i></button></div>
  <div class="px-5 flex gap-6 border-b border-slate-200 text-sm font-semibold">
    <div class="pb-3 border-b-2 border-teal-600 text-teal-700">Upcoming</div>
    <div class="pb-3 text-slate-500">In progress</div>
    <div class="pb-3 text-slate-500">Past</div>
  </div>
  <div class="flex-1 overflow-y-auto px-5 pt-4 space-y-3 bg-slate-50">
    <div class="tap p-4 rounded-2xl bg-white border border-slate-200" onclick="show('b2c-progress')">
      <div class="flex justify-between items-start">
        <div>
          <div class="text-xs text-teal-700 font-bold uppercase tracking-wide mb-1">Today · 11:00</div>
          <div class="font-semibold">Oil change — Toyota Corolla</div>
          <div class="text-xs text-slate-500 mt-0.5">AutoPro Heliopolis · 0.8 km</div>
        </div>
        <span class="badge b-blue">Confirmed</span>
      </div>
      <div class="divider my-3"></div>
      <div class="flex gap-2"><button class="btn-ghost py-2 text-xs flex-1">Reschedule</button><button class="btn-ghost py-2 text-xs flex-1">Cancel</button></div>
    </div>
    <div class="p-4 rounded-2xl bg-white border border-slate-200">
      <div class="flex justify-between items-start">
        <div>
          <div class="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">Tue 21 Apr · 16:00</div>
          <div class="font-semibold">Brake inspection — Hyundai Tucson</div>
          <div class="text-xs text-slate-500 mt-0.5">Toyota Authorized · 2.4 km</div>
        </div>
        <span class="badge b-amber">Awaiting shop</span>
      </div>
    </div>

    <div class="label mt-5 mb-2">Past</div>
    <div class="p-4 rounded-2xl bg-white border border-slate-200">
      <div class="flex justify-between items-start">
        <div>
          <div class="text-xs text-slate-500 font-bold uppercase tracking-wide mb-1">29 Mar · Completed</div>
          <div class="font-semibold">AC recharge — Toyota Corolla</div>
          <div class="text-xs text-slate-500 mt-0.5">QuickFix Nasr City · EGP 450</div>
        </div>
        <button class="text-xs font-semibold text-teal-700 tap" onclick="show('b2c-review')">Review</button>
      </div>
    </div>
  </div>
  ${b2cTabBar('bookings')}
  <div class="home-indicator"></div>
</div>`,

/* --- PROGRESS (live) ------------------------------------ */
'b2c-progress': `
<div class="screen" data-screen="b2c-progress">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-bookings')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Booking</div><button class="tap"><i data-lucide="more-horizontal" class="w-5 h-5"></i></button></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4">
    <div class="p-4 rounded-2xl" style="background:linear-gradient(135deg,#0F766E,#115E59);color:white">
      <div class="text-xs uppercase tracking-wider opacity-80">Status</div>
      <div class="text-2xl font-bold mt-1">In progress</div>
      <div class="text-sm opacity-80 mt-1">Mechanic Ahmed is working on your car</div>
    </div>

    <div class="label mt-5 mb-2">Timeline</div>
    <div class="space-y-3">
      ${[['Booking confirmed','11:02 AM',true],['Checked in at center','11:15 AM',true],['In progress','11:22 AM','active'],['Ready for pickup','~ 12:00 PM',false],['Invoiced & paid','',false]].map(([t,s,done],i)=>`
        <div class="flex gap-3">
          <div class="flex flex-col items-center">
            <div class="w-6 h-6 rounded-full ${done===true?'bg-teal-600':done==='active'?'bg-orange-500 ring-4 ring-orange-200':'bg-slate-200'} flex items-center justify-center">${done===true?'<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i>':done==='active'?'<div class="w-2 h-2 bg-white rounded-full"></div>':''}</div>
            ${i<4?`<div class="flex-1 w-0.5 ${done===true?'bg-teal-600':'bg-slate-200'}" style="min-height:18px"></div>`:''}
          </div>
          <div class="pb-3 flex-1">
            <div class="text-sm font-semibold ${done?'':'text-slate-400'}">${t}</div>
            <div class="text-xs text-slate-500">${s}</div>
          </div>
        </div>`).join('')}
    </div>

    <div class="label mt-3 mb-2">Shop</div>
    <div class="p-3 rounded-xl border border-slate-200 flex items-center gap-3">
      <div class="w-12 h-12 rounded-xl bg-slate-200"></div>
      <div class="flex-1"><div class="font-semibold text-sm">AutoPro Heliopolis</div><div class="text-xs text-slate-500">Booking #CC-4A1F9</div></div>
      <button class="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white tap"><i data-lucide="phone" class="w-4 h-4"></i></button>
      <button class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center tap"><i data-lucide="message-circle" class="w-4 h-4"></i></button>
    </div>

    <div class="label mt-5 mb-2">Invoice (so far)</div>
    <div class="p-4 rounded-xl border border-slate-200 space-y-1 text-sm">
      <div class="flex justify-between"><span>Oil change (standard)</span><span>EGP 350</span></div>
      <div class="flex justify-between text-slate-400 italic"><span>+ Cabin filter (pending approval)</span><span>EGP 180</span></div>
      <div class="divider my-2"></div>
      <div class="flex justify-between font-bold"><span>Total</span><span>EGP 350</span></div>
    </div>

    <button class="mt-4 w-full py-3 rounded-xl text-sm font-semibold border border-slate-200 tap">Add cabin filter (+EGP 180)</button>
    <div class="h-6"></div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- REVIEW --------------------------------------------- */
'b2c-review': `
<div class="screen" data-screen="b2c-review">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-bookings')"><i data-lucide="x" class="w-5 h-5"></i></button><div class="font-semibold">Rate your service</div><div class="w-5"></div></div>
  <div class="flex-1 px-5 pt-4 overflow-y-auto">
    <div class="text-center pt-4">
      <div class="w-16 h-16 rounded-2xl bg-slate-200 mx-auto mb-3"></div>
      <div class="font-bold text-lg">AutoPro Heliopolis</div>
      <div class="text-xs text-slate-500">AC recharge · 29 Mar</div>
    </div>
    <div class="flex justify-center gap-2 mt-5">
      ${[1,1,1,1,0].map((on,i)=>`<i data-lucide="star" class="w-10 h-10 ${on?'text-amber-500 fill-amber-500':'text-slate-300'}"></i>`).join('')}
    </div>
    <div class="text-center text-sm font-semibold mt-2">Great experience</div>

    <div class="label mt-6 mb-2">Break it down</div>
    ${[['Quality',4],['Price',5],['Speed',4],['Honesty',5]].map(([l,r])=>`
      <div class="flex justify-between items-center py-2">
        <div class="text-sm">${l}</div>
        <div class="flex gap-0.5">${[1,2,3,4,5].map(i=>`<i data-lucide="star" class="w-4 h-4 ${i<=r?'text-amber-500 fill-amber-500':'text-slate-300'}"></i>`).join('')}</div>
      </div>`).join('')}

    <div class="label mt-4 mb-2">Tell others (optional)</div>
    <textarea class="w-full p-3 rounded-xl border border-slate-200 text-sm h-24" placeholder="What stood out?"></textarea>

    <div class="label mt-4 mb-2">Add photos</div>
    <div class="flex gap-2">
      <div class="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center"><i data-lucide="plus" class="w-5 h-5 text-slate-400"></i></div>
      <div class="w-16 h-16 rounded-xl bg-slate-200"></div>
    </div>
  </div>
  <div class="p-4 border-t border-slate-200">
    <button class="btn-primary w-full tap" onclick="show('b2c-bookings')">Submit review</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- GARAGE --------------------------------------------- */
'b2c-garage': `
<div class="screen" data-screen="b2c-garage">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><div class="font-bold text-xl">My garage</div><button class="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white"><i data-lucide="plus" class="w-4 h-4"></i></button></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4 space-y-3">
    <div class="tap p-4 rounded-2xl text-white" style="background:linear-gradient(135deg,#0F766E,#115E59);" onclick="show('b2c-cardetail')">
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

    <div class="tap p-4 rounded-2xl bg-white border border-slate-200">
      <div class="flex justify-between items-start">
        <div>
          <div class="font-semibold">Hyundai Tucson</div>
          <div class="text-sm text-slate-500">2022 · 24,100 km</div>
        </div>
        <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
      </div>
    </div>

    <button class="tap w-full p-4 rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 text-sm font-semibold flex items-center justify-center gap-2"><i data-lucide="plus" class="w-4 h-4"></i>Add another car</button>
  </div>
  ${b2cTabBar('garage')}
  <div class="home-indicator"></div>
</div>`,

/* --- CAR DETAIL (history) ------------------------------- */
'b2c-cardetail': `
<div class="screen" data-screen="b2c-cardetail">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-garage')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Toyota Corolla 2019</div><button class="tap"><i data-lucide="pencil" class="w-5 h-5"></i></button></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4">
    <div class="grid grid-cols-3 gap-2 mb-5">
      ${[['Mileage','82,450 km'],['Bookings','14'],['Spent','EGP 7,820']].map(([l,v])=>`<div class="p-3 rounded-xl bg-slate-50 text-center"><div class="text-xs text-slate-500">${l}</div><div class="font-bold text-sm mt-0.5">${v}</div></div>`).join('')}
    </div>

    <div class="label mb-2">Reminders</div>
    <div class="p-3 rounded-xl bg-orange-50 border border-orange-100 flex items-start gap-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0"><i data-lucide="bell" class="w-4 h-4 text-white"></i></div>
      <div class="flex-1"><div class="font-semibold text-sm">Oil change due in 1,200 km</div><div class="text-xs text-slate-600 mt-0.5">Based on your last change on 8 Feb</div></div>
      <button class="text-xs font-semibold text-orange-700 tap" onclick="show('b2c-map')">Book</button>
    </div>

    <div class="label mt-5 mb-2">Service history</div>
    <div class="space-y-3">
      ${[['29 Mar','AC recharge','QuickFix Nasr City','EGP 450',true],
         ['8 Feb','Oil + filter','AutoPro Heliopolis','EGP 520',true],
         ['12 Dec','Front brake pads','Toyota Authorized','EGP 950',true],
         ['3 Nov','Tire rotation','Cairo Motors (manual entry)','EGP 120',false]].map(([d,s,shop,p,auto])=>`
        <div class="p-3 rounded-xl border border-slate-200">
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

/* --- DASHBOARD ------------------------------------------ */
'b2c-dashboard': `
<div class="screen" data-screen="b2c-dashboard">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 pb-2 flex items-center justify-between">
    <div>
      <div class="text-sm text-slate-500">Good morning,</div>
      <div class="font-bold text-xl">Youssef</div>
    </div>
    <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold">Y</div>
  </div>
  <div class="flex-1 overflow-y-auto px-5 space-y-4 pt-2">
    <div class="p-4 rounded-2xl text-white" style="background:linear-gradient(135deg,#F97316,#EA580C);">
      <div class="flex items-start gap-3">
        <i data-lucide="bell" class="w-5 h-5"></i>
        <div class="flex-1"><div class="font-bold">Oil change due soon</div><div class="text-sm opacity-90 mt-0.5">1,200 km away · 3 centers near you</div></div>
      </div>
      <button class="mt-3 w-full py-2.5 rounded-xl bg-white/20 backdrop-blur text-sm font-semibold tap" onclick="show('b2c-reminder')">See recommendations</button>
    </div>

    <div class="p-4 rounded-2xl bg-white border border-slate-200">
      <div class="label mb-2">Car health</div>
      <div class="flex items-end gap-2 mb-3">
        <div class="text-3xl font-bold">82</div>
        <div class="text-xs text-slate-500 pb-1">/ 100 · Good</div>
      </div>
      <div class="h-2 rounded-full bg-slate-100 overflow-hidden"><div class="h-full bg-teal-600" style="width:82%"></div></div>
      <div class="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
        <div class="p-2 rounded-lg bg-teal-50 text-teal-800">Engine: OK</div>
        <div class="p-2 rounded-lg bg-amber-50 text-amber-800">Oil: Due</div>
        <div class="p-2 rounded-lg bg-teal-50 text-teal-800">Tires: OK</div>
      </div>
    </div>

    <div class="p-4 rounded-2xl bg-white border border-slate-200">
      <div class="flex justify-between mb-3"><div class="label">Upcoming</div><div class="text-xs text-teal-700 font-semibold tap" onclick="show('b2c-bookings')">See all</div></div>
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex flex-col items-center justify-center"><div class="text-[10px] font-bold">APR</div><div class="text-sm font-bold -mt-0.5">18</div></div>
        <div class="flex-1"><div class="font-semibold text-sm">Oil change · AutoPro</div><div class="text-xs text-slate-500">Today · 11:00</div></div>
        <span class="badge b-blue">Confirmed</span>
      </div>
    </div>

    <div class="p-4 rounded-2xl bg-white border border-slate-200">
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

/* --- REMINDER FLOW (Phase 2 preview) -------------------- */
'b2c-reminder': `
<div class="screen" data-screen="b2c-reminder">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-dashboard')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Oil change</div><div class="w-5"></div></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4">
    <div class="p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-start gap-3 mb-4">
      <i data-lucide="sparkles" class="w-5 h-5 text-teal-700 mt-0.5"></i>
      <div class="text-sm text-teal-900"><b>Recommended for you</b><br/><span class="text-xs">Based on your car, location, and last oil change (8 Feb).</span></div>
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

/* --- EXPENSES (Phase 2 placeholder) --------------------- */
'b2c-expenses': `
<div class="screen" data-screen="b2c-expenses">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between"><button class="tap" onclick="show('b2c-dashboard')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Expenses</div><span class="badge b-amber">Phase 2</span></div>
  <div class="flex-1 overflow-y-auto px-5 pt-4">
    <div class="p-4 rounded-2xl bg-slate-900 text-white">
      <div class="text-xs uppercase tracking-wider opacity-70">Spent this year</div>
      <div class="text-3xl font-bold mt-1">EGP 7,820</div>
      <div class="text-xs opacity-70 mt-1">Across 14 services · 2 cars</div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <div class="p-3 rounded-xl border border-slate-200"><div class="text-xs text-slate-500">Maintenance</div><div class="font-bold">EGP 4,200</div></div>
      <div class="p-3 rounded-xl border border-slate-200"><div class="text-xs text-slate-500">Fuel</div><div class="font-bold">EGP 3,120</div></div>
      <div class="p-3 rounded-xl border border-slate-200"><div class="text-xs text-slate-500">Insurance</div><div class="font-bold">EGP 500</div></div>
      <div class="p-3 rounded-xl border border-slate-200"><div class="text-xs text-slate-500">Other</div><div class="font-bold">EGP 0</div></div>
    </div>
    <div class="label mt-5 mb-2">Cost per km</div>
    <div class="p-4 rounded-xl border border-slate-200">
      <div class="text-2xl font-bold">EGP 0.84</div>
      <div class="text-xs text-slate-500">Corolla · rolling 3 months</div>
      <div class="h-20 mt-2 bg-slate-50 rounded flex items-end gap-1 p-1">
        ${[40,55,48,62,51,67,58,72,61,55,48,62].map(h=>`<div class="flex-1 rounded-t bg-teal-500/80" style="height:${h}%"></div>`).join('')}
      </div>
    </div>
    <div class="p-4 rounded-xl bg-amber-50 border border-amber-100 mt-4 text-xs text-amber-900">
      <b>Dev note:</b> This is a Phase 2 feature included here for spec completeness. Ship Phase 1 without it.
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
