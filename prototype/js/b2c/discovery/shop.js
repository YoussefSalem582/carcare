/* B2C — service center profile */
const B2C_DISCOVERY_SHOP = {
  'b2c-shop': `

<div class="screen" data-screen="b2c-shop">
  <div class="flex-1 overflow-y-auto">
    <div class="relative h-52 gradient-hero-shop">
      <div class="status-bar absolute top-0 left-0 right-0" style="color:white"><span>9:41</span><span></span></div>
      <div class="absolute top-12 left-4 w-9 h-9 rounded-full bg-white dark:bg-slate-900/90 flex items-center justify-center tap" onclick="show('b2c-map')"><i data-lucide="arrow-left" class="w-4 h-4"></i></div>
      <div class="absolute top-12 right-4 flex gap-2">
        <div class="w-9 h-9 rounded-full bg-white dark:bg-slate-900/90 flex items-center justify-center tap"><i data-lucide="share-2" class="w-4 h-4"></i></div>
        <div class="w-9 h-9 rounded-full bg-white dark:bg-slate-900/90 flex items-center justify-center tap"><i data-lucide="heart" class="w-4 h-4"></i></div>
      </div>
      <div class="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-0.5 rounded">1/12</div>
    </div>
    <div class="px-5 -mt-6 relative z-10">
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-600/80 ring-1 ring-black/[0.03]">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="flex items-center gap-2"><div class="text-xl font-bold">AutoPro Heliopolis</div><i data-lucide="badge-check" class="w-5 h-5 text-teal-700"></i></div>
            <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Authorized dealer · Independent workshop</div>
            <div class="flex items-center gap-2 mt-2 text-xs"><span class="flex items-center gap-0.5 font-semibold"><i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>4.8</span><span class="text-slate-400 dark:text-slate-500">(312 reviews)</span><span class="text-slate-300">·</span><span class="text-green-600 font-semibold">Open · closes 10pm</span></div>
          </div>
          <div class="text-right">
            <div class="text-sm font-semibold">0.8 km</div>
            <div class="text-xs text-slate-500 dark:text-slate-400">Heliopolis</div>
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
          <div class="tap flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 shadow-sm hover:border-teal-200/80" onclick="window._bookingReturn='b2c-shop'; show('b2c-service')">
            <div><div class="font-semibold text-sm">${t}</div><div class="text-xs text-slate-500 dark:text-slate-400">${d}</div></div>
            <div class="flex items-center gap-2"><div class="font-semibold text-sm">${p}</div><i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 dark:text-slate-500"></i></div>
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
      <div class="p-3 rounded-xl border border-slate-200 dark:border-slate-600">
        <div class="flex items-center gap-2 mb-1">
          <div class="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-xs font-semibold text-teal-700">MH</div>
          <div class="text-sm font-semibold">Mohamed H.</div>
          <div class="text-xs text-slate-400 dark:text-slate-500 ml-auto">2 days ago</div>
        </div>
        <div class="flex gap-0.5 mb-1">${[1,1,1,1,1].map(()=>`<i data-lucide="star" class="w-3 h-3 text-amber-500 fill-amber-500"></i>`).join('')}</div>
        <div class="text-sm text-slate-700 dark:text-slate-300">Fast, clean, honest pricing. Texted me when the car was ready.</div>
      </div>
    </div>

    <div class="h-24"></div>
  </div>

  <div class="p-4 border-t border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(15,23,42,.08)]">
    <button type="button" class="btn-primary w-full tap rounded-2xl py-3.5 shadow-md" onclick="window._bookingReturn='b2c-shop'; show('b2c-service')">Book service · from EGP 350</button>
  </div>
  <div class="home-indicator"></div>
</div>`,
};
