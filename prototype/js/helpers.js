function b2cTabBar(active){
  const items = [
    ['b2c-map','Map','map','map'],
    ['b2c-bookings','Bookings','calendar-check','bookings'],
    ['b2c-marketplace','Shop','store','market'],
    ['b2c-garage','Garage','car','garage'],
    ['b2c-dashboard','Home','gauge','home'],
  ];
  return '<div class="tab-bar">' + items.map(([id, label, icon, key]) => {
    const isOn = active === key;
    return `<div class="tab${isOn ? ' on' : ' tap'}"${!isOn ? ` onclick="show('${id}')"` : ''}><i data-lucide="${icon}" class="ic"></i>${label}</div>`;
  }).join('') + '</div>';
}

function b2bTopbarMobile(title){
  return `<div class="bg-white border-b border-slate-200 h-12 flex items-center px-4 justify-between flex-shrink-0">
    <div class="font-semibold text-sm truncate max-w-[200px]">${title}</div>
    <div class="flex items-center gap-1">
      <button class="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center tap"><i data-lucide="search" class="w-4 h-4 text-slate-500"></i></button>
      <div class="relative w-9 h-9 flex items-center justify-center tap"><i data-lucide="bell" class="w-5 h-5 text-slate-500"></i><span class="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-bold flex items-center justify-center">3</span></div>
    </div>
  </div>`;
}
function b2bTabBar(active){
  const items = [
    ['b2b-dashboard','Today','layout-dashboard','dashboard'],
    ['b2b-bookings','Bookings','calendar','bookings'],
    ['b2b-catalog','Catalog','tag','catalog'],
    ['b2b-more','More','menu','more'],
  ];
  return '<div class="b2b-tab-bar">' + items.map(([id, label, icon, key]) => {
    const isOn = active === key;
    return `<div class="tab${isOn ? ' on' : ' tap'}"${!isOn ? ` onclick="show('${id}')"` : ''}><i data-lucide="${icon}" class="ic"></i>${label}</div>`;
  }).join('') + '</div>';
}

function onboardStepper(active){
  const steps = ['Business','Catalog'];
  return `<div class="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">${steps.map((s,i)=>`
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 rounded-full ${i<=active?'bg-teal-600 text-white':'bg-slate-200 text-slate-500'} flex items-center justify-center text-xs font-bold">${i<active?'✓':i+1}</div>
      <div class="text-sm font-medium ${i===active?'':'text-slate-500'}">${s}</div>
    </div>
    ${i<steps.length-1?`<div class="w-8 h-px ${i<active?'bg-teal-600':'bg-slate-200'}"></div>`:''}
  `).join('')}</div>`;
}
