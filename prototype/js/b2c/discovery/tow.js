/* B2C — tow truck profile */
const B2C_DISCOVERY_TOW = {
  'b2c-tow': `


<div class="screen" data-screen="b2c-tow">
  <div class="flex-1 overflow-y-auto min-h-0 bg-slate-50">
    <div class="relative h-56 gradient-hero-tow tow-hero">
      <div class="relative z-10">
        <div class="status-bar" style="color:rgba(255,255,255,.95)"><span>9:41</span><span></span></div>
        <div class="flex items-center justify-between px-4 pt-1">
          <button type="button" class="w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center tap ring-1 ring-white/40" onclick="show('b2c-map')" aria-label="Back"><i data-lucide="arrow-left" class="w-5 h-5 text-slate-800"></i></button>
          <div class="flex gap-2">
            <button type="button" class="w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center tap ring-1 ring-white/40" aria-label="Share"><i data-lucide="share-2" class="w-[18px] h-[18px] text-slate-800"></i></button>
            <button type="button" class="w-10 h-10 rounded-full bg-white/95 shadow-md flex items-center justify-center tap ring-1 ring-white/40" aria-label="Save"><i data-lucide="heart" class="w-[18px] h-[18px] text-slate-800"></i></button>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center pt-1 pb-2 relative z-10">
          <div class="tow-hero-icon-wrap flex items-center justify-center">
            <i data-lucide="truck" class="w-14 h-14 text-white opacity-95"></i>
          </div>
          <div class="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm">
            <span class="relative flex h-2 w-2">
              <span class="tow-live-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white/30"></span>
            </span>
            Live dispatch · high demand
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 z-10 px-4 pb-3 pt-6 flex gap-2">
          <div class="flex-1 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg px-3 py-2.5">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0"><i data-lucide="clock" class="w-4 h-4 text-blue-700"></i></div>
              <div class="min-w-0">
                <div class="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Avg. arrival</div>
                <div class="text-sm font-bold text-slate-900 leading-tight">12–18 min</div>
              </div>
            </div>
          </div>
          <div class="flex-1 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg px-3 py-2.5">
            <div class="flex items-center gap-2">
              <div class="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0"><i data-lucide="truck" class="w-4 h-4 text-slate-700"></i></div>
              <div class="min-w-0">
                <div class="text-[10px] font-semibold uppercase tracking-wide text-slate-500">On shift</div>
                <div class="text-sm font-bold text-slate-900 leading-tight">4 trucks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-14 right-4 z-20 rounded-full bg-black/45 text-white text-[11px] font-medium px-2.5 py-1 backdrop-blur-sm">Photos · 1/6</div>
    </div>

    <div class="px-4 -mt-7 relative z-20 pb-6">
      <div class="bg-white rounded-[22px] p-4 shadow-xl border border-slate-200/90 ring-1 ring-black/[0.04]">
        <div class="flex gap-3">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-900/25">
            <i data-lucide="truck" class="w-7 h-7 text-white"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-2">
              <div>
                <h1 class="text-[19px] font-extrabold text-slate-900 leading-snug tracking-tight">City Tow 24/7</h1>
                <p class="text-xs text-slate-500 mt-0.5">Heliopolis · East Cairo</p>
              </div>
              <div class="text-right flex-shrink-0">
                <div class="text-base font-bold text-slate-900">1.1 km</div>
                <div class="text-[11px] text-slate-500">straight line</div>
              </div>
            </div>
            <div class="flex flex-wrap gap-1.5 mt-2.5">
              <span class="inline-flex items-center gap-1 rounded-full bg-teal-50 text-teal-900 border border-teal-100 px-2 py-0.5 text-[11px] font-semibold"><i data-lucide="badge-check" class="w-3 h-3"></i>Verified</span>
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-900 border border-blue-100 px-2 py-0.5 text-[11px] font-semibold">Tow partner</span>
              <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 px-2 py-0.5 text-[11px] font-semibold">24/7</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 mt-4">
          <div class="rounded-2xl bg-slate-50 border border-slate-100 px-2 py-2.5 text-center">
            <div class="flex items-center justify-center gap-0.5 text-amber-500"><i data-lucide="star" class="w-3.5 h-3.5 fill-amber-500"></i><span class="text-sm font-bold text-slate-900">4.7</span></div>
            <div class="text-[10px] text-slate-500 mt-0.5">201 reviews</div>
          </div>
          <div class="rounded-2xl bg-slate-50 border border-slate-100 px-2 py-2.5 text-center">
            <div class="text-sm font-bold text-slate-900 flex items-center justify-center gap-1"><i data-lucide="zap" class="w-3.5 h-3.5 text-amber-500"></i>~15m</div>
            <div class="text-[10px] text-slate-500 mt-0.5">response</div>
          </div>
          <div class="rounded-2xl bg-slate-50 border border-slate-100 px-2 py-2.5 text-center">
            <div class="text-sm font-bold text-slate-900">15 km</div>
            <div class="text-[10px] text-slate-500 mt-0.5">radius</div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 mt-3">
          <button type="button" class="tap flex flex-col items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 py-3 text-[11px] font-semibold text-blue-900">
            <i data-lucide="phone" class="w-[18px] h-[18px] mb-1 text-blue-700"></i>Call
          </button>
          <button type="button" class="tap flex flex-col items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 py-3 text-[11px] font-semibold text-slate-800">
            <i data-lucide="navigation" class="w-[18px] h-[18px] mb-1 text-slate-600"></i>Garage
          </button>
          <button type="button" class="tap flex flex-col items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 py-3 text-[11px] font-semibold text-slate-800">
            <i data-lucide="message-circle" class="w-[18px] h-[18px] mb-1 text-slate-600"></i>Chat
          </button>
        </div>
      </div>

      <div class="mt-4 rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50 to-orange-50/80 p-3.5 flex gap-3 shadow-sm">
        <div class="w-10 h-10 rounded-xl bg-white/90 border border-amber-100 flex items-center justify-center flex-shrink-0 shadow-sm"><i data-lucide="alert-triangle" class="w-5 h-5 text-amber-700"></i></div>
        <div class="min-w-0 flex-1">
          <div class="text-sm font-bold text-amber-950">Unsafe to drive?</div>
          <p class="text-xs text-amber-900/85 leading-relaxed mt-0.5">Stay parked with hazards on. Call dispatch for priority routing — mention “roadside emergency”.</p>
          <button type="button" class="mt-2 text-xs font-bold text-amber-900 underline underline-offset-2 tap">Call priority line</button>
        </div>
      </div>

      <div class="callout-info p-4 rounded-2xl flex gap-3 mt-4 border border-blue-100 shadow-sm">
        <div class="w-11 h-11 rounded-2xl bg-white border border-blue-100 flex items-center justify-center flex-shrink-0 shadow-sm"><i data-lucide="shield-check" class="w-5 h-5 text-blue-700"></i></div>
        <div class="min-w-0">
          <div class="text-sm font-bold text-slate-900">Licensed &amp; insured</div>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">Commercial registration on file. Cargo cover up to <span class="font-semibold text-slate-800">EGP 500k</span> per job.</p>
        </div>
      </div>

      <div class="mt-5">
        <div class="flex items-end justify-between mb-2 px-0.5">
          <div class="label mb-0">What they can do</div>
          <span class="text-[11px] font-semibold text-blue-700 tap">Compare</span>
        </div>
        <div class="space-y-2">
          ${[
            ['layers','Flatbed','Cars & SUVs · low clearance OK','from EGP 450'],
            ['battery-charging','Jump & lockout','Battery boost · unlock','from EGP 200'],
            ['anchor','Winch recovery','Stuck / off-road add-on','Quote'],
            ['droplet','Fuel delivery','5L emergency top-up','EGP 120 + fuel'],
          ].map(([icon,t,s,p])=>`
          <button type="button" class="tap w-full flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left ring-1 ring-black/[0.02] hover:border-blue-200/80 hover:shadow-md transition-shadow">
            <div class="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0"><i data-lucide="${icon}" class="w-5 h-5 text-blue-700"></i></div>
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-sm text-slate-900">${t}</div>
              <div class="text-xs text-slate-500 mt-0.5">${s}</div>
            </div>
            <div class="text-right flex-shrink-0 pl-1">
              <div class="text-xs font-bold text-slate-900">${p}</div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300 inline-block mt-1"></i>
            </div>
          </button>`).join('')}
        </div>
      </div>

      <div class="mt-5 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm">
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="label mb-0">Fleet availability</div>
          <span class="text-xs font-bold text-blue-700">4 of 6 active</span>
        </div>
        <div class="tow-fleet-bar"><span class="tow-fleet-bar-fill" style="width:66.67%"></span></div>
        <p class="text-xs text-slate-500 mt-2 leading-relaxed">Busy nights can add a few minutes — you’ll see live ETA after you request.</p>
      </div>

      <div class="mt-5 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm">
        <div class="label mb-3">Pricing snapshot</div>
        <div class="space-y-2 mb-4">
          ${[['Hook + dispatch','from EGP 400'],['Per km (loaded)','EGP 12–18'],['After hours','+25% · 11pm–6am']].map(([t,p])=>`
          <div class="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 last:pb-0">
            <span class="text-sm text-slate-600">${t}</span>
            <span class="text-sm font-bold text-slate-900">${p}</span>
          </div>`).join('')}
        </div>
        <div class="rounded-xl bg-blue-50 border border-blue-100 px-3 py-3">
          <div class="flex justify-between items-start gap-2">
            <div>
              <div class="text-[11px] font-semibold uppercase tracking-wide text-blue-800/80">Example estimate</div>
              <div class="text-xs text-slate-600 mt-1">8 km tow · weekday · standard car</div>
            </div>
            <div class="text-lg font-extrabold text-blue-900">~EGP 520</div>
          </div>
          <p class="text-[11px] text-slate-500 mt-2 leading-relaxed">Final price confirmed before dispatch. Surge possible in storms.</p>
        </div>
      </div>

      <div class="mt-5">
        <div class="flex justify-between items-center mb-2 px-0.5">
          <div class="label mb-0">Reviews · 4.7</div>
          <button type="button" class="text-xs font-bold text-blue-700 tap py-1">See all</button>
        </div>
        <div class="grid grid-cols-4 gap-1.5 mb-3">
          ${[['Response','4.8','teal'],['Price','4.5','amber'],['Care','4.7','cyan'],['Safety','4.9','violet']].map(([l,v,tone])=>`<div class="p-2 rounded-xl text-center ${tone==='teal'?'bg-teal-50 text-teal-900':tone==='amber'?'bg-amber-50 text-amber-900':tone==='cyan'?'bg-cyan-50 text-cyan-900':'bg-violet-50 text-violet-900'}"><div class="text-[9px] font-semibold uppercase tracking-wide opacity-80">${l}</div><div class="font-bold text-sm">${v}</div></div>`).join('')}
        </div>
        <div class="p-4 rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <div class="flex items-center gap-2.5 mb-2">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-xs font-bold text-blue-800 ring-2 ring-white shadow-sm">SK</div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-bold text-slate-900">Sara K.</div>
              <div class="text-[11px] text-slate-400">Verified ride · 1 week ago</div>
            </div>
            <div class="flex gap-0.5">${[1,1,1,1,1].map(()=>`<i data-lucide="star" class="w-3.5 h-3.5 text-amber-500 fill-amber-500"></i>`).join('')}</div>
          </div>
          <p class="text-sm text-slate-700 leading-relaxed">Arrived in 12 minutes, driver was careful with my lowered car. Fair price.</p>
        </div>
      </div>

      <div class="h-20"></div>
    </div>
  </div>

  <div class="flex-shrink-0 p-4 pt-3 border-t border-slate-200/90 bg-white/98 backdrop-blur-md shadow-[0_-12px_40px_rgba(15,23,42,.1)]">
    <button type="button" class="w-full tap rounded-2xl py-3.5 px-4 shadow-lg shadow-blue-900/20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-[15px] ring-1 ring-blue-500/30" onclick="window._bookingReturn='b2c-tow'; show('b2c-service')">Request tow · from EGP 400</button>
    <div class="flex items-center justify-center gap-4 mt-3 text-xs font-semibold text-slate-600">
      <button type="button" class="tap flex items-center gap-1.5 py-1"><i data-lucide="phone" class="w-3.5 h-3.5 text-blue-600"></i>19255</button>
      <span class="text-slate-300">·</span>
      <button type="button" class="tap py-1 text-blue-700">Share live location</button>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
