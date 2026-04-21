const B2B_HTML = {
/* --- SPLASH --------------------------------------------- */
'b2b-splash': `
<div class="screen" data-screen="b2b-splash">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col items-center justify-center px-8 text-center" style="background:linear-gradient(180deg,#0F766E 0%,#0B4F4A 40%,#0F172A 100%);">
    <div class="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 bg-white/10 border border-white/20"><i data-lucide="wrench" class="w-10 h-10 text-white"></i></div>
    <div class="text-2xl font-extrabold tracking-tight text-white">CarCare Business</div>
    <div class="text-sm text-teal-100 mt-2 max-w-[260px]">Take bookings, manage your catalog, get paid.</div>
    <button class="w-full max-w-[280px] mt-10 py-3.5 rounded-2xl bg-white text-teal-900 font-semibold tap" onclick="show('b2b-lang')">Get started</button>
    <button class="tap text-sm text-teal-200 font-semibold mt-4" onclick="show('b2b-auth')">I already have an account</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- LANGUAGE ------------------------------------------- */
'b2b-lang': `
<div class="screen" data-screen="b2b-lang">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center gap-3"><button class="tap text-slate-500" onclick="show('b2b-splash')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Language</div></div>
  <div class="flex-1 px-6 pt-6 flex flex-col bg-white">
    <div class="text-xl font-bold">Choose your language</div>
    <div class="text-sm text-slate-500 mt-1">Business app · can change later in Settings.</div>
    <div class="mt-6 space-y-2">
      <button class="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-teal-600 bg-teal-50 tap">
        <span class="font-semibold">English</span><i data-lucide="check" class="w-5 h-5 text-teal-700"></i>
      </button>
      <button class="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-200 tap">
        <span class="font-semibold">العربية</span><span class="text-xs text-slate-400">RTL</span>
      </button>
    </div>
    <div class="flex-1"></div>
    <button class="btn-primary w-full tap mb-4" onclick="show('b2b-onboarding')">Continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- ONBOARDING ----------------------------------------- */
'b2b-onboarding': `
<div class="screen" data-screen="b2b-onboarding">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 flex items-center justify-between bg-white">
    <button class="tap text-slate-500" onclick="show('b2b-lang')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button class="tap text-sm text-teal-700 font-semibold" onclick="show('b2b-auth')">Skip</button>
  </div>
  <div class="flex-1 px-6 pt-4 overflow-y-auto bg-slate-50">
    <div class="flex justify-center gap-1.5 mb-6"><span class="h-1.5 w-6 rounded-full bg-teal-600"></span><span class="h-1.5 w-6 rounded-full bg-teal-600"></span><span class="h-1.5 w-6 rounded-full bg-teal-600"></span></div>
    <div class="space-y-4">
      <div class="p-4 rounded-2xl border border-slate-200 bg-white">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="calendar-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold">Live bookings</div>
        <div class="text-sm text-slate-500 mt-1">New jobs land on your calendar — assign and update status in one place.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200 bg-white">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="tag" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold">Catalog & pricing</div>
        <div class="text-sm text-slate-500 mt-1">Set fixed, range, or quote-only services. Bulk-add common jobs to go live faster.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200 bg-white">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="shield-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold">Verification & payouts</div>
        <div class="text-sm text-slate-500 mt-1">Get verified to appear on the map. Track commissions and weekly payouts.</div>
      </div>
    </div>
    <button class="btn-primary w-full tap mt-6 mb-4" onclick="show('b2b-auth')">Continue</button>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- AUTH PICKER ---------------------------------------- */
'b2b-auth': `
<div class="screen" data-screen="b2b-auth">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-5 pt-3 bg-white"><button class="tap text-slate-500" onclick="show('b2b-onboarding')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-8 flex flex-col bg-white">
    <div class="text-2xl font-bold leading-tight">Business sign in</div>
    <div class="text-sm text-slate-500 mt-1.5">Use your work email — no SMS.</div>
    <button class="btn-primary w-full mt-10 tap" onclick="show('b2b-login')">Log in</button>
    <button class="btn-ghost w-full mt-3 tap" onclick="show('b2b-signup')">Create business account</button>
    <div class="flex-1"></div>
    <div class="text-[11px] text-slate-400 text-center mb-6">By continuing you agree to Business Terms and Privacy.</div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- LOGIN (email) -------------------------------------- */
'b2b-login': `
<div class="screen" data-screen="b2b-login">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="px-7 pt-4 flex items-center gap-3 bg-white"><button class="tap text-slate-500" onclick="show('b2b-auth')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-4 flex flex-col bg-white">
    <div class="text-2xl font-bold leading-tight">Welcome back</div>
    <div class="text-sm text-slate-500 mt-1.5">Log in with your work email.</div>
    <div class="mt-8 space-y-4">
      <div><div class="label mb-2">Work email</div><input type="email" class="w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="omar@autopro.eg"></div>
      <div><div class="label mb-2">Password</div><input type="password" class="w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="••••••••••"></div>
      <div class="text-right text-xs font-semibold text-teal-700 tap">Forgot password?</div>
    </div>
    <button class="btn-primary mt-8 tap w-full" onclick="show('b2b-dashboard')">Log in</button>
    <div class="text-sm text-slate-500 text-center mt-6">New here? <button class="text-teal-700 font-semibold tap" onclick="show('b2b-signup')">Create account</button></div>
    <div class="flex-1"></div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- SIGNUP (register email) ---------------------------- */
'b2b-signup': `
<div class="screen" data-screen="b2b-signup">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 overflow-y-auto">
    <div class="p-5 text-white" style="background:linear-gradient(160deg,#0F766E,#0B4F4A);">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center"><i data-lucide="wrench" class="w-5 h-5"></i></div>
        <div class="font-bold">CarCare for Business</div>
      </div>
      <div class="text-2xl font-bold leading-tight">Fill your schedule. Grow your shop.</div>
      <div class="mt-3 text-sm text-white/85 leading-relaxed">Verified drivers book on your calendar. Service records per car. Compete on quality.</div>
      <div class="mt-4 space-y-2">
        ${[['Real-time bookings','calendar-check'],['Service records / car','clipboard-list'],['Payouts &amp; commission','coins']].map(([t,ic])=>`
        <div class="flex items-center gap-2 text-sm"><div class="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0"><i data-lucide="${ic}" class="w-3.5 h-3.5"></i></div>${t}</div>`).join('')}
      </div>
    </div>
    <div class="p-4 space-y-3">
      <div class="text-lg font-bold">Create your business account</div>
      <div class="text-xs text-slate-500">Free to join. 8–15% commission on bookings only. Phone number collected later if needed for verification.</div>
      <div><div class="label mb-1.5">Business name</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="AutoPro Heliopolis"/></div>
      <div><div class="label mb-1.5">Owner name</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="Omar Saleh"/></div>
      <div><div class="label mb-1.5">Work email</div><input type="email" class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="omar@autopro.eg"/></div>
      <div><div class="label mb-1.5">Password</div><input type="password" class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="••••••••••"/></div>
      <div><div class="label mb-1.5">Confirm password</div><input type="password" class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="••••••••••"/></div>
      <button class="btn-primary w-full mt-2 tap" onclick="show('b2b-onboard-1')">Create account & continue</button>
      <div class="text-xs text-slate-500 text-center">Already have an account? <button class="text-teal-700 font-semibold tap" onclick="show('b2b-login')">Sign in</button></div>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- ONBOARD 1: BUSINESS -------------------------------- */
'b2b-onboard-1': `
<div class="screen" data-screen="b2b-onboard-1">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    ${b2bTopbarMobile('Welcome, Omar')}
    <div class="flex-1 overflow-y-auto p-4">
      ${onboardStepper(0)}
      <div class="bg-white rounded-2xl border border-slate-200 p-4">
        <div class="text-lg font-bold">Business information</div>
        <div class="text-sm text-slate-500 mt-0.5">Used for verification and on your public listing.</div>
        <div class="mt-4 space-y-3">
            <div><div class="label mb-1.5">Legal name</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="AutoPro Automotive Services LLC"/></div>
            <div><div class="label mb-1.5">Trade name (shown to users)</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="AutoPro Heliopolis"/></div>
            <div><div class="label mb-1.5">Tax ID</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="415-228-9910"/></div>
            <div><div class="label mb-1.5">Commercial registration #</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="CR-88421"/></div>
            <div><div class="label mb-1.5">Address</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="12 Baghdad St, Heliopolis, Cairo"/></div>
            <div><div class="label mb-1.5">City</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="Cairo"/></div>
            <div><div class="label mb-1.5">Pin on map</div><div class="rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm flex justify-between items-center"><span>30.0980°N · 31.3411°E</span><span class="text-teal-700 font-semibold">Adjust</span></div></div>
            <div><div class="label mb-1.5">Business type</div><div class="rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm flex justify-between items-center">Independent workshop <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i></div></div>
            <div><div class="label mb-1.5">Year founded</div><input class="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="2014"/></div>
        </div>
        <div class="mt-6 flex flex-col gap-2">
          <button class="btn-ghost tap w-full">Save draft</button>
          <button class="btn-primary tap" onclick="show('b2b-onboard-3')">Continue <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
        </div>
      </div>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- ONBOARD 3: CATALOG --------------------------------- */
'b2b-onboard-3': `
<div class="screen" data-screen="b2b-onboard-3">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    ${b2bTopbarMobile('Welcome, Omar')}
    <div class="flex-1 overflow-y-auto p-4">
        ${onboardStepper(1)}
        <div class="bg-white rounded-2xl border border-slate-200 p-4">
          <div class="text-lg font-bold">Your service catalog</div>
          <div class="text-sm text-slate-500 mt-0.5">Start with presets — you can edit any time.</div>
          <button class="btn-ghost py-2 px-3 text-xs w-full mt-3 flex items-center justify-center gap-1"><i data-lucide="wand-2" class="w-3.5 h-3.5"></i>Add 12 common services</button>
          <div class="mt-4 space-y-2">
              ${[['Oil change (standard)','45 min','Fixed','350'],
                 ['Brake pads — front','1.5 h','Fixed','650'],
                 ['AC recharge','1 h','Fixed','450']].map(([s,d,t,p])=>`
                <div class="p-3 rounded-xl border border-slate-200 flex justify-between items-center gap-2">
                  <div class="min-w-0">
                    <div class="font-semibold text-sm">${s}</div>
                    <div class="text-xs text-slate-500">${d} · <span class="badge b-slate">${t}</span></div>
                  </div>
                  <div class="flex items-center gap-1 flex-shrink-0">
                    <span class="text-sm font-semibold">${p}</span>
                    <i data-lucide="pencil" class="w-4 h-4 text-slate-400"></i>
                  </div>
                </div>`).join('')}
          </div>
          <button class="mt-3 text-sm text-teal-700 font-semibold flex items-center gap-1 w-full justify-center"><i data-lucide="plus" class="w-4 h-4"></i>Add custom service</button>
          <div class="mt-6 flex flex-col gap-2">
            <button class="btn-ghost tap" onclick="show('b2b-onboard-1')"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</button>
            <button class="btn-primary tap" onclick="show('b2b-pending')">Submit for verification <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
          </div>
        </div>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- PENDING -------------------------------------------- */
'b2b-pending': `
<div class="screen" data-screen="b2b-pending">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    ${b2bTopbarMobile('Welcome, Omar')}
    <div class="flex-1 overflow-y-auto p-4 flex items-start justify-center">
        <div class="bg-white rounded-2xl border border-slate-200 p-5 w-full text-center">
          <div class="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto"><i data-lucide="shield-check" class="w-7 h-7 text-amber-700"></i></div>
          <div class="text-xl font-bold mt-3">Verification in progress</div>
          <div class="text-sm text-slate-500 mt-2">We’re reviewing your business and catalog. Typical turnaround is 24–48 hours.</div>
          <div class="mt-5 text-left space-y-1.5">
            ${[['Business information','done'],['Service catalog','done'],['Account checks','review'],['List on map','pending']].map(([t,s])=>`
              <div class="flex items-center gap-2 p-1.5">
                <div class="w-5 h-5 rounded-full ${s==='done'?'bg-teal-600':s==='review'?'bg-amber-500':'bg-slate-200'} flex items-center justify-center text-white text-[10px] font-bold">${s==='done'?'✓':s==='review'?'…':''}</div>
                <div class="flex-1 text-xs font-medium">${t}</div>
                <div class="text-[10px] text-slate-500">${s==='done'?'Done':s==='review'?'In review':'Wait'}</div>
              </div>`).join('')}
          </div>
          <div class="mt-4 p-3 rounded-xl bg-teal-50 text-xs text-teal-900 text-left"><b>While you wait</b> — add photos and your team. You can open the dashboard anytime.</div>
          <button class="btn-primary w-full mt-4 tap" onclick="show('b2b-dashboard')">Explore dashboard</button>
        </div>
    </div>
  </div>
  <div class="home-indicator"></div>
</div>`,

/* --- DASHBOARD ------------------------------------------ */
'b2b-dashboard': `
<div class="screen" data-screen="b2b-dashboard">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    ${b2bTopbarMobile('AutoPro · Today')}
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
        <div class="grid grid-cols-2 gap-2">
          <div class="kpi p-3"><div class="text-[10px] text-slate-500">Bookings</div><div class="text-2xl font-bold">7</div><div class="text-[10px] text-green-600">+2 vs yesterday</div></div>
          <div class="kpi p-3"><div class="text-[10px] text-slate-500">Revenue</div><div class="text-2xl font-bold">3.4k</div><div class="text-[10px] text-slate-500">EGP</div></div>
          <div class="kpi p-3"><div class="text-[10px] text-slate-500">Rating</div><div class="text-2xl font-bold">4.8</div><div class="text-[10px] text-slate-500">62 rev.</div></div>
          <div class="kpi p-3"><div class="text-[10px] text-slate-500">Accept</div><div class="text-2xl font-bold">96%</div><div class="text-[10px] text-green-600">OK</div></div>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200 p-3">
          <div class="flex justify-between items-center mb-2">
            <div class="font-bold text-sm">Today’s line-up</div>
            <span class="text-xs text-slate-500 flex items-center gap-1"><span class="dot bg-red-500"></span>1 new</span>
          </div>
          ${[['11:00','Youssef S.','Oil (std)','New','b-blue',true],['10:00','Karim H.','Brake pads','In progress','b-amber',true],['09:00','Layla M.','Oil+filter','Done','b-green',true]].map(([time,cust,svc,label,badge,act])=>`
            <div class="tap border border-slate-100 rounded-xl p-2.5 mb-2 flex justify-between items-center" ${act?`onclick="show('b2b-booking')"`:''}>
              <div>
                <div class="text-xs font-bold">${time}</div>
                <div class="text-sm font-semibold">${cust}</div>
                <div class="text-xs text-slate-500">${svc}</div>
              </div>
              <span class="badge ${badge} text-[10px]">${label}</span>
            </div>`).join('')}
          <div class="text-center text-xs text-teal-700 font-semibold pt-1 tap" onclick="show('b2b-bookings')">Full calendar</div>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200 p-3">
          <div class="font-bold text-sm mb-2">Mechanics</div>
          ${[['Ahmed',2,3],['Hassan',3,3],['Karim',0,3]].map(([n,b,cap])=>`
            <div class="mb-2 last:mb-0">
              <div class="flex justify-between text-xs"><span class="font-semibold">${n}</span><span class="text-slate-500">${b}/${cap}</span></div>
              <div class="h-1.5 rounded-full bg-slate-100 overflow-hidden mt-0.5"><div class="h-full bg-teal-600" style="width:${(b/cap)*100}%"></div></div>
            </div>`).join('')}
        </div>
        <div class="bg-amber-50 border border-amber-100 rounded-xl p-3 text-xs">
          <b>3 reviews</b> need a reply. <span class="text-teal-800 font-semibold tap" onclick="show('b2b-reviews')">Open</span>
        </div>
    </div>
  </div>
  ${b2bTabBar('dashboard')}
  <div class="home-indicator"></div>
</div>`,

/* --- BOOKINGS (calendar) -------------------------------- */
'b2b-bookings': `
<div class="screen" data-screen="b2b-bookings">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    ${b2bTopbarMobile('Bookings')}
    <div class="px-3 pt-2 flex items-center justify-between">
      <div class="rounded-xl bg-white border border-slate-200 p-0.5 flex text-xs font-semibold">
        <span class="px-2.5 py-1 rounded-lg bg-teal-600 text-white">Week</span>
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
            ${['S13','M14','T15','W16','T17','T18','F19'].map((d,i)=>`<div class="w-10 text-center p-1.5 rounded-lg text-xs font-semibold ${i===5?'bg-teal-600 text-white':'bg-white border border-slate-200 text-slate-600'}">${d}</div>`).join('')}
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

/* --- BOOKING DETAIL ------------------------------------- */
'b2b-booking': `
<div class="screen" data-screen="b2b-booking">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    <div class="bg-white border-b border-slate-200 h-12 flex items-center px-3 flex-shrink-0">
      <button class="tap w-9 h-9 flex items-center justify-center -ml-1" onclick="show('b2b-bookings')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="font-semibold text-sm truncate flex-1">#CC-4A1F9</div>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
      <div class="bg-white rounded-2xl border border-slate-200 p-4">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="badge b-blue">New · 14m</span>
          <span class="text-xs text-slate-500">Sat 18 Apr · 11:00</span>
        </div>
        <div class="text-xl font-bold mt-2">Oil change (standard)</div>
        <div class="text-sm text-slate-500">Corolla 2019 · 82,450 km</div>
        <div class="mt-2 flex justify-between">
          <span class="text-xs text-slate-500">Quote</span>
          <span class="text-lg font-bold">EGP 350</span>
        </div>
        <div class="flex flex-col gap-2 mt-3">
          <button class="btn-accent w-full">Accept booking</button>
          <button class="btn-ghost w-full text-sm">Propose new time</button>
          <button class="btn-ghost w-full text-sm text-red-600">Reject</button>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-4">
        <div class="label mb-2">Customer</div>
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center">YS</div>
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
      <div class="bg-white rounded-2xl border border-slate-200 p-4">
        <div class="label mb-2">Assign mechanic</div>
        ${[['Ahmed',2,3,0],['Hassan',3,3,1],['Karim',0,3,2]].map(([n,b,cap,ix])=>`
          <div class="flex items-center justify-between p-2 rounded-xl border ${ix===2?'border-teal-500 bg-teal-50':'border-slate-200'} mb-2 last:mb-0">
            <div><div class="text-sm font-semibold">${n}</div><div class="text-xs text-slate-500">${b}/${cap} slots</div></div>
            ${ix===2?'<div class="w-2.5 h-2.5 rounded-full bg-teal-600"></div>':'<div class="w-4 h-4 rounded-full border-2 border-slate-200"></div>'}
          </div>`).join('')}
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 p-4">
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

/* --- CATALOG -------------------------------------------- */
'b2b-catalog': `
<div class="screen" data-screen="b2b-catalog">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
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
        <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-start">
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

/* --- REVIEWS -------------------------------------------- */
'b2b-reviews': `
<div class="screen" data-screen="b2b-reviews">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    <div class="bg-white border-b border-slate-200 h-12 flex items-center px-2 flex-shrink-0">
      <button class="tap w-9 h-9" onclick="show('b2b-dashboard')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="font-semibold text-sm">Reviews</div>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
      <div class="kpi p-3">
        <div class="text-3xl font-bold">4.8 <span class="text-sm text-slate-500 font-normal">312 reviews</span></div>
        <div class="text-xs text-amber-700 mt-1">24 need reply</div>
      </div>
      <div class="flex gap-2 overflow-x-auto no-scrollbar">
        <span class="chip on flex-shrink-0">All</span>
        <span class="chip flex-shrink-0">Pending</span>
        <span class="chip flex-shrink-0">5★</span>
      </div>
      <div class="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
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

/* --- PAYOUTS (Phase 2) ---------------------------------- */
'b2b-payouts': `
<div class="screen" data-screen="b2b-payouts">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    <div class="bg-white border-b border-slate-200 h-12 flex items-center px-2 flex-shrink-0">
      <button class="tap w-9 h-9" onclick="show('b2b-more')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
      <div class="font-semibold text-sm pl-1">Payouts <span class="badge b-amber text-[9px] ml-1">P2</span></div>
    </div>
    <div class="flex-1 overflow-y-auto p-3 space-y-3">
        <div class="kpi p-3 text-center">
          <div class="text-xs text-slate-500">Available</div>
          <div class="text-2xl font-bold">EGP 12,840</div>
          <button class="btn-primary w-full text-xs py-2 mt-2">Request payout</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="kpi p-2 text-center text-xs">Gross (mo)<div class="font-bold text-sm mt-0.5">42,310</div></div>
          <div class="kpi p-2 text-center text-xs">Comm. 10%<div class="font-bold text-sm mt-0.5">4,231</div></div>
        </div>
        <div class="text-xs text-slate-500">Recent</div>
        ${[['11 Apr','EGP 7,578','paid'], ['4 Apr','EGP 8,892','paid'], ['28 Mar','EGP 9,486','paid']].map(([d,pay,s])=>`
          <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between text-sm">
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

/* --- MORE (hub) ---------------------------------------- */
'b2b-more': `
<div class="screen" data-screen="b2b-more">
  <div class="status-bar"><span>9:41</span><span></span></div>
  <div class="flex-1 flex flex-col min-h-0 bg-slate-50">
    ${b2bTopbarMobile('More')}
    <div class="flex-1 overflow-y-auto p-3">
      <div class="text-xs text-slate-500 mb-2">Account</div>
      <div class="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100">
        <button class="w-full p-3 flex items-center justify-between text-left tap" onclick="show('b2b-reviews')">
          <span class="flex items-center gap-2 text-sm font-medium"><i data-lucide="star" class="w-4 h-4 text-amber-500"></i> Reviews</span>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
        </button>
        <button class="w-full p-3 flex items-center justify-between text-left tap" onclick="show('b2b-payouts')">
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
