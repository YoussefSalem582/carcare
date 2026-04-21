/* =========================================================
   Mount + nav
   ========================================================= */
const b2cLayout = document.getElementById('b2cLayout');
const b2bLayout = document.getElementById('b2bLayout');
const ftgLayout = document.getElementById('ftgLayout');
const b2cStage = document.getElementById('b2cStage');
const b2bStage = document.getElementById('b2bStage');
Object.values(B2C_HTML).forEach(h => b2cStage.insertAdjacentHTML('beforeend', h));
Object.values(B2B_HTML).forEach(h => b2bStage.insertAdjacentHTML('beforeend', h));

let currentSurface = 'b2c';
let currentScreen = 'b2c-splash';

function surfaceForScreenId(id) {
  if (id.startsWith('b2b-')) return 'b2b';
  if (id.startsWith('ftg-')) return 'flutterGuide';
  return 'b2c';
}

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

function specRelatedFlowsLine(screenId) {
  if (screenId.startsWith('ftg-')) {
    return 'CarCare PRD · Flutter + Supabase · internal engineering handbook';
  }
  return `PRD §${screenId.startsWith('b2c')?'3':'4'} · Core flow ${screenId.startsWith('b2c')?'§6.1':'§6.3'}`;
}

/** Full screen spec + raw catalog (B2C, B2B, FTG). */
function buildSpecHtml(){
  const all = [...SCREENS.b2c, ...SCREENS.b2b, ...SCREENS.flutterGuide];
  const s = all.find(x => x.id === currentScreen);
  if (!s) return '';
  const statesJoined = s.states.join(', ');
  return `
<div class="proto-detail-spec-block">
  <div class="label mb-2 text-slate-600">Screen spec</div>
  <div class="text-lg font-bold">${s.name}</div>
  <div class="mt-1 flex flex-wrap items-center gap-2">
    <span class="badge ${s.phase===1?'b-green':'b-amber'}">Phase ${s.phase}</span>
    <span class="text-xs text-slate-500 font-mono">${s.id}</span>
  </div>
  <div class="mt-3 label">Group</div>
  <div class="text-sm mt-1 text-slate-800">${s.group || '—'}</div>
  <div class="mt-4 label">Purpose</div>
  <div class="text-sm mt-1">${s.purpose}</div>
  <div class="mt-4 label">States to build</div>
  <div class="mt-1 flex flex-wrap gap-1.5">${s.states.map(st => `<span class="chip">${st}</span>`).join('')}</div>
  <div class="mt-2 label" style="font-size:10px;letter-spacing:0.06em;">All states (copy)</div>
  <div class="text-xs mt-1 text-slate-600 font-mono leading-relaxed break-all">${statesJoined}</div>
  <div class="mt-4 label">Dev notes</div>
  <div class="text-sm mt-1 text-slate-700 leading-relaxed">${s.notes}</div>
  <div class="divider my-4"></div>
  <div class="label">Related flows</div>
  <div class="text-xs text-slate-500 leading-relaxed mt-1">${specRelatedFlowsLine(s.id)}</div>
  <div class="divider my-4"></div>
  <div class="label">Raw catalog</div>
  <p class="text-xs text-slate-500 mt-1 mb-2">All fields from <code class="text-[11px]">screens.js</code> for this row.</p>
  <dl class="proto-spec-dl">
    <dt>id</dt><dd>${s.id}</dd>
    <dt>name</dt><dd>${s.name}</dd>
    <dt>group</dt><dd>${s.group || ''}</dd>
    <dt>phase</dt><dd>${s.phase}</dd>
    <dt>purpose</dt><dd>${s.purpose}</dd>
    <dt>states</dt><dd>${statesJoined}</dd>
    <dt>notes</dt><dd>${s.notes}</dd>
  </dl>
</div>`;
}

function renderSpec(){
  const specHtml = buildSpecHtml();
  if (currentSurface === 'b2c') {
    document.getElementById('b2cDetailAside').innerHTML = specHtml;
  } else if (currentSurface === 'b2b') {
    document.getElementById('b2bDetailAside').innerHTML = specHtml;
  } else if (currentSurface === 'flutterGuide') {
    const body =
      typeof window.buildFtgHandbookBodyHtml === 'function'
        ? window.buildFtgHandbookBodyHtml(currentScreen)
        : '';
    document.getElementById('ftgHandbookAside').innerHTML = body
      ? `<div class="ftg-handbook-inner ftg-tech-primary">${body}</div><div class="divider my-5"></div>${specHtml}`
      : specHtml;
  }
}

function activeStageEl() {
  if (currentSurface === 'flutterGuide') return null;
  if (currentSurface === 'b2b') return b2bStage;
  return b2cStage;
}

function show(id){
  const targetSurface = surfaceForScreenId(id);
  if (targetSurface !== currentSurface) switchSurface(targetSurface);
  const stage = activeStageEl();
  if (stage) {
    stage.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    const target = stage.querySelector(`[data-screen="${id}"]`);
    if (target) target.classList.add('active');
  }
  currentScreen = id;
  renderScreenList();
  renderSpec();
  if (window.lucide) lucide.createIcons();
}

function setTabStyles() {
  const inactive = 'px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 whitespace-nowrap';
  const active = 'px-3 py-2 rounded-lg text-sm font-semibold tab-active whitespace-nowrap';
  document.getElementById('toggleB2C').className = currentSurface === 'b2c' ? active : inactive;
  document.getElementById('toggleB2B').className = currentSurface === 'b2b' ? active : inactive;
  document.getElementById('toggleFlutterGuide').className = currentSurface === 'flutterGuide' ? active : inactive;
}

function switchSurface(s){
  currentSurface = s;
  setTabStyles();
  b2cLayout.hidden = s !== 'b2c';
  b2bLayout.hidden = s !== 'b2b';
  ftgLayout.hidden = s !== 'flutterGuide';
  if (s === 'b2c' && !currentScreen.startsWith('b2c')) currentScreen = 'b2c-map';
  if (s === 'b2b' && !currentScreen.startsWith('b2b')) currentScreen = 'b2b-splash';
  if (s === 'flutterGuide' && !currentScreen.startsWith('ftg')) currentScreen = 'ftg-overview';
  show(currentScreen);
}

document.getElementById('toggleB2C').addEventListener('click', () => switchSurface('b2c'));
document.getElementById('toggleB2B').addEventListener('click', () => switchSurface('b2b'));
document.getElementById('toggleFlutterGuide').addEventListener('click', () => switchSurface('flutterGuide'));

// initial
show('b2c-splash');
lucide.createIcons();

window.show = show;
