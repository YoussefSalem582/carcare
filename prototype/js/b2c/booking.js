const B2C_BOOKING = {
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
};
