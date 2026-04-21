const B2B_ONBOARDING = {
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
};
