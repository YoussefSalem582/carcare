/* B2C — map home + bottom sheet */
const B2C_DISCOVERY_MAP = {
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
    <div class="absolute tap z-10" style="left:46%; top:68%;" onclick="show('b2c-tow')"><div class="pin" style="background:#1D4ED8"><i data-lucide="truck" class="w-4 h-4 text-white"></i></div></div>
    <div class="absolute tap z-10" style="left:12%; top:38%;" onclick="show('b2c-tow')"><div class="pin" style="background:#1E40AF"><i data-lucide="truck" class="w-4 h-4 text-white"></i></div></div>

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
};
