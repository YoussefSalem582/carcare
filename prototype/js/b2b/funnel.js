const B2B_FUNNEL = {
  'b2b-splash': `
<div class="screen" data-screen="b2b-splash">
  ${protoStatusBar()}
  ${protoFunnelProgress(1, 6)}
  <div class="flex-1 flex flex-col items-center justify-center px-8 text-center" style="background:linear-gradient(165deg,#0F766E 0%,#0D5C56 38%,#0B4F4A 62%,#0F172A 100%);">
    <div class="w-[88px] h-[88px] rounded-[28px] flex items-center justify-center mb-7 bg-white/12 border border-white/25 shadow-xl backdrop-blur-sm"><i data-lucide="wrench" class="w-11 h-11 text-white"></i></div>
    <div class="text-[26px] font-extrabold tracking-tight text-white leading-tight">CarCare Business</div>
    <div class="text-sm text-teal-100/95 mt-2.5 max-w-[272px] leading-relaxed">Take bookings, manage your catalog, get paid.</div>
    <button type="button" class="w-full max-w-[300px] mt-11 py-4 rounded-2xl bg-white text-teal-900 font-semibold tap shadow-lg" onclick="show('b2b-lang')">Get started</button>
    <button type="button" class="tap text-sm text-teal-100 font-semibold mt-5 py-2" onclick="show('b2b-auth')">I already have an account</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-lang': `
<div class="screen" data-screen="b2b-lang">
  ${protoStatusBar()}
  ${protoFunnelProgress(2, 6)}
  <div class="px-5 pt-3 flex items-center gap-3"><button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2b-splash')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Language</div></div>
  <div class="flex-1 px-6 pt-5 flex flex-col bg-white">
    <div class="text-xl font-bold tracking-tight">Choose your language</div>
    <div class="text-sm text-slate-500 mt-1.5">Business app · can change later in Settings.</div>
    <div class="mt-7 space-y-3">
      <button type="button" class="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-teal-600 bg-teal-50/80 tap shadow-sm">
        <span class="font-semibold">English</span><i data-lucide="check" class="w-5 h-5 text-teal-700"></i>
      </button>
      <button type="button" class="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white tap">
        <span class="font-semibold">العربية</span><span class="text-xs text-slate-400 font-medium">RTL</span>
      </button>
    </div>
    <div class="flex-1"></div>
    <button type="button" class="btn-primary btn-primary-lg w-full tap mb-4" onclick="show('b2b-onboarding')">Continue</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-onboarding': `
<div class="screen" data-screen="b2b-onboarding">
  ${protoStatusBar()}
  ${protoFunnelProgress(3, 6)}
  <div class="px-5 pt-3 flex items-center justify-between bg-white">
    <button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2b-lang')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button type="button" class="tap text-sm text-teal-700 font-semibold" onclick="show('b2b-auth')">Skip</button>
  </div>
  <div class="flex-1 px-6 pt-3 overflow-y-auto bg-slate-50">
    <div class="flex justify-center gap-2 mb-5"><span class="h-2 w-8 rounded-full bg-teal-600"></span><span class="h-2 w-8 rounded-full bg-teal-600"></span><span class="h-2 w-8 rounded-full bg-teal-600"></span></div>
    <div class="space-y-3">
      <div class="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="calendar-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold text-slate-900">Live bookings</div>
        <div class="text-sm text-slate-500 mt-1 leading-relaxed">New jobs land on your calendar — assign and update status in one place.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="tag" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold text-slate-900">Catalog & pricing</div>
        <div class="text-sm text-slate-500 mt-1 leading-relaxed">Set fixed, range, or quote-only services. Bulk-add common jobs to go live faster.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="shield-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold text-slate-900">Verification & payouts</div>
        <div class="text-sm text-slate-500 mt-1 leading-relaxed">Get verified to appear on the map. Track commissions and weekly payouts.</div>
      </div>
    </div>
    <button type="button" class="btn-primary btn-primary-lg w-full tap mt-6 mb-4" onclick="show('b2b-auth')">Continue</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-auth': `
<div class="screen" data-screen="b2b-auth">
  ${protoStatusBar()}
  ${protoFunnelProgress(4, 6)}
  <div class="px-5 pt-3 bg-white"><button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2b-onboarding')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-7 flex flex-col bg-white">
    <div class="text-2xl font-bold leading-tight text-slate-900">Business sign in</div>
    <div class="text-sm text-slate-500 mt-2 leading-relaxed">Use your work email — no SMS.</div>
    <button type="button" class="btn-primary btn-primary-lg w-full mt-12 tap" onclick="show('b2b-login')">Log in</button>
    <button type="button" class="btn-ghost btn-ghost-lg w-full mt-3 tap border border-slate-200" onclick="show('b2b-signup')">Create business account</button>
    <div class="flex-1"></div>
    <div class="text-[11px] text-slate-400 text-center mb-6 px-2">By continuing you agree to Business Terms and Privacy.</div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-login': `
<div class="screen" data-screen="b2b-login">
  ${protoStatusBar()}
  ${protoFunnelProgress(5, 6)}
  <div class="px-7 pt-4 flex items-center gap-3 bg-white"><button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2b-auth')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-3 flex flex-col bg-white">
    <div class="text-2xl font-bold leading-tight text-slate-900">Welcome back</div>
    <div class="text-sm text-slate-500 mt-1.5">Log in with your work email.</div>
    <div class="mt-8 space-y-4">
      <div><div class="label mb-2">Work email</div><input type="email" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="omar@autopro.eg"></div>
      <div><div class="label mb-2">Password</div><input type="password" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="••••••••••"></div>
      <div class="text-right text-xs font-semibold text-teal-700 tap">Forgot password?</div>
    </div>
    <button type="button" class="btn-primary btn-primary-lg mt-8 tap w-full" onclick="show('b2b-dashboard')">Log in</button>
    <div class="text-sm text-slate-500 text-center mt-6">New here? <button type="button" class="text-teal-700 font-semibold tap" onclick="show('b2b-signup')">Create account</button></div>
    <div class="flex-1"></div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2b-signup': `
<div class="screen" data-screen="b2b-signup">
  ${protoStatusBar()}
  ${protoFunnelProgress(6, 6)}
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
      <div class="text-xs text-slate-500 leading-relaxed">Free to join. 8–15% commission on bookings only. Phone collected later if needed for verification.</div>
      <div><div class="label mb-1.5">Business name</div><input class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="AutoPro Heliopolis"/></div>
      <div><div class="label mb-1.5">Owner name</div><input class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="Omar Saleh"/></div>
      <div><div class="label mb-1.5">Work email</div><input type="email" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="omar@autopro.eg"/></div>
      <div><div class="label mb-1.5">Password</div><input type="password" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="••••••••••"/></div>
      <div><div class="label mb-1.5">Confirm password</div><input type="password" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm" value="••••••••••"/></div>
      <button type="button" class="btn-primary btn-primary-lg w-full mt-2 tap" onclick="show('b2b-onboard-1')">Create account & continue</button>
      <div class="text-xs text-slate-500 text-center">Already have an account? <button type="button" class="text-teal-700 font-semibold tap" onclick="show('b2b-login')">Sign in</button></div>
    </div>
  </div>
  ${protoHomeIndicator()}
</div>`,
};
