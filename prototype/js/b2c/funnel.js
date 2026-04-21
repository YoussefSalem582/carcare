const B2C_FUNNEL = {
  'b2c-splash': `
<div class="screen" data-screen="b2c-splash">
  ${protoStatusBar({ trailing: 'icons' })}
  ${protoFunnelProgress(1, 6)}
  <div class="flex-1 flex flex-col items-center justify-center px-8 text-center funnel-hero-b2c">
    <div class="w-[88px] h-[88px] rounded-[28px] flex items-center justify-center mb-7 shadow-xl ring-4 ring-teal-600/10" style="background:var(--brand);color:white;"><i data-lucide="wrench" class="w-11 h-11"></i></div>
    <div class="text-[26px] font-extrabold tracking-tight text-slate-900 leading-tight">CarCare</div>
    <div class="text-sm text-slate-600 mt-2.5 max-w-[272px] leading-relaxed">Verified workshops near you. Book maintenance in minutes.</div>
    <button class="btn-primary btn-primary-lg w-full max-w-[300px] mt-11 tap shadow-md" onclick="show('b2c-lang')">Get started</button>
    <button class="tap text-sm text-teal-700 font-semibold mt-5 py-2" onclick="show('b2c-auth')">I already have an account</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-lang': `
<div class="screen" data-screen="b2c-lang">
  ${protoStatusBar()}
  ${protoFunnelProgress(2, 6)}
  <div class="px-5 pt-3 flex items-center gap-3"><button type="button" class="tap text-slate-500 rounded-lg focus-visible:outline-none" onclick="show('b2c-splash')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button><div class="font-semibold">Language</div></div>
  <div class="flex-1 px-6 pt-5 flex flex-col">
    <div class="text-xl font-bold tracking-tight">Choose your language</div>
    <div class="text-sm text-slate-500 mt-1.5">You can change this later in Settings.</div>
    <div class="mt-7 space-y-3">
      <button type="button" class="w-full flex items-center justify-between p-4 rounded-2xl border-2 border-teal-600 bg-teal-50/80 tap shadow-sm">
        <span class="font-semibold">English</span><i data-lucide="check" class="w-5 h-5 text-teal-700"></i>
      </button>
      <button type="button" class="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white tap hover:border-slate-300">
        <span class="font-semibold">العربية</span><span class="text-xs text-slate-400 font-medium">RTL</span>
      </button>
    </div>
    <div class="flex-1"></div>
    <button type="button" class="btn-primary btn-primary-lg w-full tap mb-4" onclick="show('b2c-onboarding')">Continue</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-onboarding': `
<div class="screen" data-screen="b2c-onboarding">
  ${protoStatusBar()}
  ${protoFunnelProgress(3, 6)}
  <div class="px-5 pt-3 flex items-center justify-between">
    <button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2c-lang')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button>
    <button type="button" class="tap text-sm text-teal-700 font-semibold py-1" onclick="show('b2c-auth')">Skip</button>
  </div>
  <div class="flex-1 px-6 pt-3 overflow-y-auto">
    <div class="flex justify-center gap-2 mb-5"><span class="h-2 w-8 rounded-full bg-teal-600"></span><span class="h-2 w-8 rounded-full bg-teal-600"></span><span class="h-2 w-8 rounded-full bg-teal-600"></span></div>
    <div class="space-y-3">
      <div class="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="map-pin" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold text-slate-900">Map-first discovery</div>
        <div class="text-sm text-slate-500 mt-1 leading-relaxed">See trusted centers around you with distance, hours, and ratings.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="badge-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold text-slate-900">Verified for quality</div>
        <div class="text-sm text-slate-500 mt-1 leading-relaxed">Book with confidence — we highlight verified partners.</div>
      </div>
      <div class="p-4 rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div class="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-3"><i data-lucide="calendar-check" class="w-5 h-5 text-teal-700"></i></div>
        <div class="font-bold text-slate-900">Book & track</div>
        <div class="text-sm text-slate-500 mt-1 leading-relaxed">Pick a slot, pay your way, and follow status until pickup.</div>
      </div>
    </div>
    <button type="button" class="btn-primary btn-primary-lg w-full tap mt-6 mb-4" onclick="show('b2c-auth')">Continue</button>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-auth': `
<div class="screen" data-screen="b2c-auth">
  ${protoStatusBar()}
  ${protoFunnelProgress(4, 6)}
  <div class="px-5 pt-3"><button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2c-onboarding')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-7 flex flex-col">
    <div class="text-2xl font-bold leading-tight text-slate-900">Sign in or sign up</div>
    <div class="text-sm text-slate-500 mt-2 leading-relaxed">Use your email — no SMS codes.</div>
    <button type="button" class="btn-primary btn-primary-lg w-full mt-12 tap" onclick="show('b2c-login')">Log in</button>
    <button type="button" class="btn-ghost btn-ghost-lg w-full mt-3 tap border border-slate-200" onclick="show('b2c-register')">Create account</button>
    <div class="flex-1"></div>
    <div class="text-[11px] text-slate-400 text-center mb-6 leading-relaxed px-2">By continuing you agree to our Terms and Privacy Policy.</div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-login': `
<div class="screen" data-screen="b2c-login">
  ${protoStatusBar({ trailing: 'icons' })}
  ${protoFunnelProgress(5, 6)}
  <div class="px-7 pt-4 flex items-center gap-3"><button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2c-auth')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-3 flex flex-col">
    <div class="text-2xl font-bold leading-tight text-slate-900">Welcome back</div>
    <div class="text-sm text-slate-500 mt-1.5">Log in with your email and password.</div>
    <div class="mt-8 space-y-4">
      <div><div class="label mb-2">Email</div><input type="email" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="you@example.com" autocomplete="off"></div>
      <div><div class="label mb-2">Password</div><input type="password" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3.5 text-sm" value="••••••••••" autocomplete="off"></div>
      <div class="text-right text-xs font-semibold text-teal-700 tap">Forgot password?</div>
    </div>
    <button type="button" class="btn-primary btn-primary-lg mt-8 tap w-full" onclick="show('b2c-addcar')"><span>Log in</span><i data-lucide="arrow-right" class="w-4 h-4"></i></button>
    <div class="text-sm text-slate-500 text-center mt-6">No account? <button type="button" class="text-teal-700 font-semibold tap" onclick="show('b2c-register')">Create one</button></div>
    <div class="flex-1"></div>
  </div>
  ${protoHomeIndicator()}
</div>`,

  'b2c-register': `
<div class="screen" data-screen="b2c-register">
  ${protoStatusBar()}
  ${protoFunnelProgress(6, 6)}
  <div class="px-7 pt-4 flex items-center gap-3"><button type="button" class="tap text-slate-500 rounded-lg" onclick="show('b2c-auth')"><i data-lucide="arrow-left" class="w-5 h-5"></i></button></div>
  <div class="flex-1 px-7 pt-3 flex flex-col overflow-y-auto">
    <div class="text-2xl font-bold leading-tight text-slate-900">Create your account</div>
    <div class="text-sm text-slate-500 mt-1.5">Email and password only.</div>
    <div class="mt-6 space-y-3">
      <div><div class="label mb-1.5">Full name <span class="text-slate-400 normal-case font-normal">optional</span></div><input class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="Youssef Salem"></div>
      <div><div class="label mb-1.5">Email</div><input type="email" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="you@example.com"></div>
      <div><div class="label mb-1.5">Password</div><input type="password" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="••••••••••"></div>
      <div><div class="label mb-1.5">Confirm password</div><input type="password" class="proto-input w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm" value="••••••••••"></div>
    </div>
    <button type="button" class="btn-primary btn-primary-lg w-full mt-8 tap" onclick="show('b2c-addcar')">Create account</button>
    <div class="text-sm text-slate-500 text-center mt-4 mb-4">Already have an account? <button type="button" class="text-teal-700 font-semibold tap" onclick="show('b2c-login')">Log in</button></div>
  </div>
  ${protoHomeIndicator()}
</div>`,
};
