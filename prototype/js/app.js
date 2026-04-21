/* =========================================================
   Mount + nav
   ========================================================= */
const b2cStage = document.getElementById('b2cStage');
const b2bStage = document.getElementById('b2bStage');
Object.values(B2C_HTML).forEach(h => b2cStage.insertAdjacentHTML('beforeend', h));
Object.values(B2B_HTML).forEach(h => b2bStage.insertAdjacentHTML('beforeend', h));

let currentSurface = 'b2c';
let currentScreen = 'b2c-splash';

function renderScreenList(){
  const list = document.getElementById('screenList');
  const arr = SCREENS[currentSurface];
  let lastGroup = null;
  let firstSection = true;
  const parts = [];
  for (const s of arr) {
    const g = s.group || 'Screens';
    if (g !== lastGroup) {
      parts.push(`<div class="screen-group-label label mb-1.5 px-0.5 ${firstSection ? '' : 'mt-4'}">${g}</div>`);
      firstSection = false;
      lastGroup = g;
    }
    parts.push(`
    <button type="button" class="screen-btn ${s.id===currentScreen?'active':''} text-left text-sm px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between w-full border-0 bg-transparent font-[inherit] cursor-pointer" onclick="show('${s.id}')">
      <span class="flex items-center gap-2 min-w-0">
        <span class="dot flex-shrink-0" style="background:${s.phase===1?'#10B981':'#F59E0B'}"></span>
        <span class="truncate">${s.name}</span>
      </span>
    </button>`);
  }
  list.innerHTML = parts.join('');
}

function renderSpec(){
  const all = [...SCREENS.b2c, ...SCREENS.b2b];
  const s = all.find(x => x.id === currentScreen);
  if (!s) return;
  document.getElementById('specPanel').innerHTML = `
    <div class="text-lg font-bold">${s.name}</div>
    <div class="mt-1 flex items-center gap-2"><span class="badge ${s.phase===1?'b-green':'b-amber'}">Phase ${s.phase}</span><span class="text-xs text-slate-500">${s.id}</span></div>
    <div class="mt-4 label">Purpose</div>
    <div class="text-sm mt-1">${s.purpose}</div>
    <div class="mt-4 label">States to build</div>
    <div class="mt-1 flex flex-wrap gap-1.5">${s.states.map(st => `<span class="chip">${st}</span>`).join('')}</div>
    <div class="mt-4 label">Dev notes</div>
    <div class="text-sm mt-1 text-slate-700 leading-relaxed">${s.notes}</div>
    <div class="divider my-4"></div>
    <div class="label">Related flows</div>
    <div class="text-xs text-slate-500 leading-relaxed mt-1">PRD §${s.id.startsWith('b2c')?'3':'4'} · Core flow ${s.id.startsWith('b2c')?'§6.1':'§6.3'}</div>
  `;
}

function show(id){
  const isB2B = id.startsWith('b2b-');
  if (isB2B && currentSurface !== 'b2b') switchSurface('b2b');
  if (!isB2B && currentSurface !== 'b2c') switchSurface('b2c');
  const stage = isB2B ? b2bStage : b2cStage;
  stage.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  const target = stage.querySelector(`[data-screen="${id}"]`);
  if (target) target.classList.add('active');
  currentScreen = id;
  renderScreenList();
  renderSpec();
  if (window.lucide) lucide.createIcons();
}

function switchSurface(s){
  currentSurface = s;
  document.getElementById('toggleB2C').className = 'px-4 py-2 rounded-lg text-sm font-semibold ' + (s==='b2c'?'tab-active':'text-slate-600');
  document.getElementById('toggleB2B').className = 'px-4 py-2 rounded-lg text-sm font-semibold ' + (s==='b2b'?'tab-active':'text-slate-600');
  document.getElementById('b2cStage').classList.toggle('hidden', s!=='b2c');
  document.getElementById('b2bStage').classList.toggle('hidden', s!=='b2b');
  if (s==='b2c' && !currentScreen.startsWith('b2c')) currentScreen = 'b2c-map';
  if (s==='b2b' && !currentScreen.startsWith('b2b')) currentScreen = 'b2b-splash';
  show(currentScreen);
}

document.getElementById('toggleB2C').addEventListener('click', () => switchSurface('b2c'));
document.getElementById('toggleB2B').addEventListener('click', () => switchSurface('b2b'));

// initial
show('b2c-splash');
lucide.createIcons();

window.show = show;
