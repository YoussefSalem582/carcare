const B2B_OPERATIONS = {
  'b2b-dashboard': `

<div class="screen" data-screen="b2b-dashboard">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    ${b2bTopbarMobile('AutoPro · Today')}
    <div class="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
        <div class="grid grid-cols-2 gap-2">
          <div class="kpi-tile kpi-tile--teal p-3 pl-4"><div class="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Bookings</div><div class="text-2xl font-bold text-slate-900">7</div><div class="text-[10px] text-emerald-600 font-semibold">+2 vs yesterday</div></div>
          <div class="kpi-tile kpi-tile--violet p-3 pl-4"><div class="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Revenue</div><div class="text-2xl font-bold text-slate-900">3.4k</div><div class="text-[10px] text-violet-600 font-medium">EGP</div></div>
          <div class="kpi-tile kpi-tile--amber p-3 pl-4"><div class="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Rating</div><div class="text-2xl font-bold text-slate-900">4.8</div><div class="text-[10px] text-amber-700">62 rev.</div></div>
          <div class="kpi-tile kpi-tile--emerald p-3 pl-4"><div class="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Accept</div><div class="text-2xl font-bold text-slate-900">96%</div><div class="text-[10px] text-emerald-600 font-semibold">OK</div></div>
        </div>
        <div class="app-panel p-3">
          <div class="flex justify-between items-center mb-2">
            <div class="font-bold text-sm">Today’s line-up</div>
            <span class="text-xs text-slate-500 flex items-center gap-1"><span class="dot bg-red-500"></span>1 new</span>
          </div>
          ${[['11:00','Youssef S.','Oil (std)','New','b-blue',true],['10:00','Karim H.','Brake pads','In progress','b-amber',true],['09:00','Layla M.','Oil+filter','Done','b-green',true]].map(([time,cust,svc,label,badge,act])=>`
            <div class="tap border border-slate-100 rounded-xl p-2.5 mb-2 flex justify-between items-center bg-gradient-to-r from-white to-slate-50/80 hover:border-teal-200/60" ${act?`onclick="show('b2b-booking')"`:''}>
              <div>
                <div class="text-xs font-bold">${time}</div>
                <div class="text-sm font-semibold">${cust}</div>
                <div class="text-xs text-slate-500">${svc}</div>
              </div>
              <span class="badge ${badge} text-[10px]">${label}</span>
            </div>`).join('')}
          <div class="text-center text-xs text-teal-700 font-semibold pt-1 tap" onclick="show('b2b-bookings')">Full calendar</div>
        </div>
        <div class="app-panel p-3">
          <div class="font-bold text-sm mb-2">Mechanics</div>
          ${[['Ahmed',2,3],['Hassan',3,3],['Karim',0,3]].map(([n,b,cap])=>`
            <div class="mb-2 last:mb-0">
              <div class="flex justify-between text-xs"><span class="font-semibold">${n}</span><span class="text-slate-500">${b}/${cap}</span></div>
              <div class="h-1.5 rounded-full bg-slate-100 overflow-hidden mt-0.5"><div class="h-full bg-teal-600" style="width:${(b/cap)*100}%"></div></div>
            </div>`).join('')}
        </div>
        <div class="rounded-xl p-3 text-xs bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 shadow-sm">
          <b class="text-amber-950">3 reviews</b> need a reply. <span class="text-teal-800 font-semibold tap" onclick="show('b2b-reviews')">Open</span>
        </div>
    </div>
  </div>
  ${b2bTabBar('dashboard')}
  <div class="home-indicator"></div>
</div>`,

  'b2b-bookings': `

<div class="screen" data-screen="b2b-bookings">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    ${b2bTopbarMobile('Bookings')}
    <div class="px-3 pt-2 flex items-center justify-between">
      <div class="rounded-xl bg-white border border-slate-200 p-0.5 flex text-xs font-semibold shadow-sm">
        <span class="px-2.5 py-1 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-sm">Week</span>
        <span class="px-2.5 py-1 rounded-lg text-slate-500">Day</span>
      </div>
      <div class="flex items-center gap-1">
        <button class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center"><i data-lucide="chevron-left" class="w-4 h-4"></i></button>
        <div class="text-xs font-semibold">Apr 13 – 19</div>
        <button class="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center"><i data-lucide="chevron-right" class="w-4 h-4"></i></button>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto p-3">
        <div class="overflow-x-auto pb-2 -mx-1">
          <div class="inline-flex gap-1 min-w-max">
            ${['S13','M14','T15','W16','T17','T18','F19'].map((d,i)=>`<div class="w-10 text-center p-1.5 rounded-lg text-xs font-semibold ${i===5?'bg-gradient-to-br from-teal-600 to-emerald-600 text-white shadow-md':'bg-white border border-slate-200 text-slate-600'}">${d}</div>`).join('')}
          </div>
        </div>
        <button class="btn-primary w-full text-xs py-2.5 mb-3">+ Manual booking</button>
        <div class="space-y-2">
          ${[['11:00','Youssef S.','Oil (std)','b-blue','New'],['10:00','Karim H.','Brake pads','b-amber','In progress'],['09:00','Layla M.','Oil+filter','b-green','Done']].map(([time,cust,svc,badge,l])=>`
            <div class="tap bg-white border border-slate-200 rounded-xl p-3 flex justify-between" onclick="show('b2b-booking')">
              <div>
                <div class="text-xs text-slate-500">${time}</div>
                <div class="text-sm font-semibold">${cust}</div>
                <div class="text-xs text-slate-500">${svc}</div>
              </div>
              <span class="badge ${badge} text-[10px] self-start">${l}</span>
            </div>`).join('')}
        </div>
        <div class="mt-3 text-[10px] text-slate-500 flex flex-wrap gap-2">
          <span class="flex items-center gap-0.5"><span class="dot bg-blue-500"></span>New</span>
          <span class="flex items-center gap-0.5"><span class="dot bg-amber-500"></span>Active</span>
          <span class="flex items-center gap-0.5"><span class="dot bg-green-500"></span>Done</span>
        </div>
    </div>
  </div>
  ${b2bTabBar('bookings')}
  <div class="home-indicator"></div>
</div>`,

  'b2b-booking': `

<div class="screen" data-screen="b2b-booking">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    <div class="b2b-topbar h-12 flex items-center px-3 flex-shrink-0">
      <button type="button" class="tap w-9 h-9 flex items-center justify-center -ml-1 rounded-xl hover:bg-slate-100" onclick="show('b2b-bookings')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="font-semibold text-sm truncate flex-1">#CC-4A1F9</div>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
      <div class="app-panel p-4 ring-1 ring-indigo-500/10">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="badge b-indigo">New · 14m</span>
          <span class="text-xs text-slate-500">Sat 18 Apr · 11:00</span>
        </div>
        <div class="text-xl font-bold mt-2">Oil change (standard)</div>
        <div class="text-sm text-slate-500">Corolla 2019 · 82,450 km</div>
        <div class="mt-2 flex justify-between">
          <span class="text-xs text-slate-500">Quote</span>
          <span class="text-lg font-bold">EGP 350</span>
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <button type="button" class="btn-accent w-full shadow-md shadow-orange-500/20">Accept booking</button>
          <button type="button" class="btn-ghost w-full text-sm border border-slate-200 bg-white">Propose new time</button>
          <button type="button" class="btn-ghost w-full text-sm text-red-600 bg-red-50 border border-red-100">Reject</button>
        </div>
      </div>
      <div class="app-panel p-4">
        <div class="label mb-2">Customer</div>
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-900 font-bold flex items-center justify-center border border-teal-200/60">YS</div>
          <div>
            <div class="font-semibold text-sm">Youssef Salem</div>
            <div class="text-[10px] text-slate-500">4 bookings</div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-3">
          <button class="btn-ghost text-xs py-2"><i data-lucide="phone" class="w-3.5 h-3.5 inline"></i> Call</button>
          <button class="btn-ghost text-xs py-2"><i data-lucide="message-circle" class="w-3.5 h-3.5 inline"></i> Message</button>
        </div>
      </div>
      <div class="app-panel p-4">
        <div class="label mb-2">Assign mechanic</div>
        ${[['Ahmed',2,3,0],['Hassan',3,3,1],['Karim',0,3,2]].map(([n,b,cap,ix])=>`
          <div class="flex items-center justify-between p-2 rounded-xl border ${ix===2?'border-teal-500 bg-teal-50':'border-slate-200'} mb-2 last:mb-0">
            <div><div class="text-sm font-semibold">${n}</div><div class="text-xs text-slate-500">${b}/${cap} slots</div></div>
            ${ix===2?'<div class="w-2.5 h-2.5 rounded-full bg-teal-600"></div>':'<div class="w-4 h-4 rounded-full border-2 border-slate-200"></div>'}
          </div>`).join('')}
      </div>
      <div class="app-panel p-4">
        <div class="label mb-2">Invoice (draft)</div>
        <div class="text-sm flex justify-between py-1"><span>Oil (std)</span><span>EGP 350</span></div>
        <div class="text-xs text-slate-400 flex justify-between py-1">Commission 10%<span>−35</span></div>
        <div class="divider my-2"></div>
        <div class="font-bold flex justify-between">Your payout <span>EGP 315</span></div>
      </div>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2b-catalog': `

<div class="screen" data-screen="b2b-catalog">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    ${b2bTopbarMobile('Catalog')}
    <div class="px-3 flex gap-2 overflow-x-auto no-scrollbar py-2">
      <span class="chip on flex-shrink-0">All</span>
      <span class="chip flex-shrink-0">Oil</span>
      <span class="chip flex-shrink-0">Brakes</span>
      <span class="chip flex-shrink-0">AC</span>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-2">
      <div class="flex gap-2">
        <button class="btn-ghost text-xs flex-1 py-2">Import</button>
        <button class="btn-primary text-xs flex-1 py-2">+ Service</button>
      </div>
      ${[['Oil (standard)','EGP 350','Fixed','62',true],['Brake pads','EGP 650','Fixed','22',true],['AC recharge','EGP 450','Fixed','34',true]].map(([s,p,t,b,live])=>`
        <div class="bg-white border border-slate-200/90 rounded-xl p-3 flex justify-between items-start shadow-sm ring-1 ring-violet-500/5">
          <div>
            <div class="text-sm font-semibold">${s}</div>
            <div class="text-xs text-slate-500 mt-0.5"><span class="badge b-slate">${t}</span> ${b}/mo</div>
            <div class="text-sm font-bold mt-1">${p}</div>
          </div>
          <div class="w-9 h-5 rounded-full ${live?'bg-teal-600':'bg-slate-300'}"><div class="w-4 h-4 m-0.5 rounded-full bg-white float-right"></div></div>
        </div>`).join('')}
    </div>
  </div>
  ${b2bTabBar('catalog')}
  <div class="home-indicator"></div>
</div>`,

  'b2b-reviews': `

<div class="screen" data-screen="b2b-reviews">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    <div class="b2b-topbar h-12 flex items-center px-2 flex-shrink-0">
      <button type="button" class="tap w-9 h-9 rounded-xl hover:bg-slate-100" onclick="show('b2b-dashboard')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="font-semibold text-sm">Reviews</div>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
      <div class="kpi-tile kpi-tile--amber p-3 pl-4">
        <div class="text-3xl font-bold text-slate-900">4.8 <span class="text-sm text-slate-500 font-normal">312 reviews</span></div>
        <div class="text-xs text-amber-800 font-semibold mt-1">24 need reply</div>
      </div>
      <div class="flex gap-2 overflow-x-auto no-scrollbar">
        <span class="chip on flex-shrink-0">All</span>
        <span class="chip flex-shrink-0">Pending</span>
        <span class="chip flex-shrink-0">5★</span>
      </div>
      <div class="app-panel divide-y divide-slate-100 overflow-hidden p-0">
            ${[['Mohamed H.','MH',5,'Great service & honest pricing.','responded'], ['Sara A.','SA',4,'Good, slight wait.','pending']].map(([n,ini,r,txt,state])=>`
            <div class="p-3">
              <div class="flex gap-2">
                <div class="w-8 h-8 rounded-full bg-teal-100 text-xs font-bold text-teal-800 flex items-center justify-center">${ini}</div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-start">
                    <span class="text-sm font-semibold">${n}</span>
                    ${state==='pending'?'<span class="badge b-amber text-[9px]">Reply</span>':''}
                  </div>
                  <div class="flex gap-0.5 mt-0.5">${[1,2,3,4,5].map(i=>`<i data-lucide="star" class="w-3 h-3 ${i<=r?'text-amber-500 fill-amber-500':'text-slate-300'}"></i>`).join('')}</div>
                  <div class="text-sm mt-1">${txt}</div>
                </div>
              </div>
            </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2b-payouts': `

<div class="screen" data-screen="b2b-payouts">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    <div class="b2b-topbar h-12 flex items-center px-2 flex-shrink-0">
      <button type="button" class="tap w-9 h-9 rounded-xl hover:bg-slate-100" onclick="show('b2b-more')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="font-semibold text-sm pl-1">Payouts <span class="badge b-amber text-[9px] ml-1">P2</span></div>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
        <div class="kpi-tile kpi-tile--teal p-3 pl-4 text-center">
          <div class="text-xs text-slate-500">Available</div>
          <div class="text-2xl font-bold">EGP 12,840</div>
          <button class="btn-primary w-full text-xs py-2 mt-2">Request payout</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="kpi-tile kpi-tile--violet p-2 pl-3 text-center text-xs">Gross (mo)<div class="font-bold text-sm mt-0.5 text-slate-900">42,310</div></div>
          <div class="kpi-tile kpi-tile--amber p-2 pl-3 text-center text-xs">Comm. 10%<div class="font-bold text-sm mt-0.5 text-slate-900">4,231</div></div>
        </div>
        <div class="text-xs text-slate-500">Recent</div>
        ${[['11 Apr','EGP 7,578','paid'], ['4 Apr','EGP 8,892','paid'], ['28 Mar','EGP 9,486','paid']].map(([d,pay,s])=>`
          <div class="app-panel p-3 flex justify-between text-sm">
            <div><div class="font-semibold">${d}</div><div class="text-xs text-slate-500">Payout to bank</div></div>
            <div class="text-right">
              <div class="font-bold">${pay}</div>
              <span class="badge ${s==='paid'?'b-green':'b-amber'} text-[9px]">${s}</span>
            </div>
          </div>`).join('')}
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

  'b2b-more': `

<div class="screen" data-screen="b2b-more">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 app-surface">
    ${b2bTopbarMobile('More')}
    <div class="flex-1 overflow-y-auto p-3">
      <div class="text-xs text-slate-500 mb-2">Account</div>
      <div class="app-panel divide-y divide-slate-100 overflow-hidden p-0 shadow-md">
        <button type="button" class="w-full p-3 flex items-center justify-between text-left tap hover:bg-amber-50/50" onclick="show('b2b-reviews')">
          <span class="flex items-center gap-2 text-sm font-medium"><i data-lucide="star" class="w-4 h-4 text-amber-500"></i> Reviews</span>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
        </button>
        <button type="button" class="w-full p-3 flex items-center justify-between text-left tap hover:bg-teal-50/50" onclick="show('b2b-payouts')">
          <span class="flex items-center gap-2 text-sm font-medium"><i data-lucide="wallet" class="w-4 h-4 text-teal-600"></i> Payouts</span>
          <span class="badge b-amber text-[9px]">P2</span>
        </button>
        <div class="p-3 flex items-center justify-between text-slate-400">
          <span class="flex items-center gap-2 text-sm"><i data-lucide="users" class="w-4 h-4"></i> Team</span>
          <span class="text-xs">Soon</span>
        </div>
        <div class="p-3 flex items-center justify-between text-slate-400">
          <span class="flex items-center gap-2 text-sm"><i data-lucide="settings" class="w-4 h-4"></i> Settings</span>
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </div>
      </div>
    </div>
  </div>
  ${b2bTabBar('more')}
  <div class="home-indicator"></div>
</div>`,
};
