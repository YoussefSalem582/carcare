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
      const gLabel = typeof tGroup === 'function' ? tGroup(g) : g;
      parts.push(`<div class="screen-group-label label mb-1.5 px-0.5 ${firstSection ? '' : 'mt-4'}">${gLabel}</div>`);
      firstSection = false;
      lastGroup = g;
    }
    const nm = typeof catalogField === 'function' ? catalogField(s, 'name') : s.name;
    parts.push(`
    <button type="button" class="screen-btn ${s.id===currentScreen?'active':''} text-left text-sm px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between w-full border-0 bg-transparent font-[inherit] cursor-pointer" onclick="show('${s.id}')">
      <span class="flex items-center gap-2 min-w-0">
        <span class="dot flex-shrink-0" style="background:${s.phase===1?'#10B981':'#F59E0B'}"></span>
        <span class="truncate">${nm}</span>
      </span>
    </button>`);
  }
  list.innerHTML = parts.join('');
}

function specRelatedFlowsLine(screenId) {
  if (screenId.startsWith('ftg-')) {
    return typeof t === 'function'
      ? t('spec.flows_ftg', 'CarCare PRD · Flutter + Supabase · internal engineering handbook')
      : 'CarCare PRD · Flutter + Supabase · internal engineering handbook';
  }
  if (screenId.startsWith('b2c')) {
    return typeof t === 'function'
      ? t('spec.flows_b2c', 'PRD §3 · Core flow §6.1')
      : 'PRD §3 · Core flow §6.1';
  }
  return typeof t === 'function'
    ? t('spec.flows_b2b', 'PRD §4 · Core flow §6.3')
    : 'PRD §4 · Core flow §6.3';
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function nl2br(escaped) {
  return escaped.replace(/\n/g, '<br>');
}

/** Full screen spec + raw catalog (B2C, B2B, FTG). B2C/B2B add Flutter tech + code hint. */
function buildSpecHtml(){
  const all = [...SCREENS.b2c, ...SCREENS.b2b, ...SCREENS.flutterGuide];
  const s = all.find(x => x.id === currentScreen);
  if (!s) return '';
  const spec = (a, b) => (typeof t === 'function' ? t(a, b) : b);
  const name = typeof catalogField === 'function' ? catalogField(s, 'name') : s.name;
  const purpose = typeof catalogField === 'function' ? catalogField(s, 'purpose') : s.purpose;
  const notes = typeof catalogField === 'function' ? catalogField(s, 'notes') : s.notes;
  const group = typeof catalogField === 'function' ? catalogField(s, 'group') : (s.group || '—');
  const statesArr = typeof catalogStatesArray === 'function' ? catalogStatesArray(s) : s.states;
  const statesJoined = typeof catalogField === 'function' ? catalogField(s, 'states') : s.states.join(', ');
  const includeProduct = currentSurface === 'b2c' || currentSurface === 'b2b';
  const techHtml = s.tech ? nl2br(escapeHtml(s.tech)) : '';
  const codeHintBlock =
    s.codeHint
      ? `<pre class="proto-code-hint" tabindex="0"><code>${escapeHtml(s.codeHint)}</code></pre>`
      : '';
  const productExtras =
    includeProduct
      ? `
  <div class="divider my-4 dark:bg-slate-700"></div>
  <div class="label">${spec('spec.flutter_impl', 'Flutter / implementation')}</div>
  <div class="text-sm mt-1 text-slate-700 dark:text-slate-300 leading-relaxed proto-tech-block">${techHtml || '<span class="text-slate-400 dark:text-slate-500">—</span>'}</div>
  <div class="mt-4 label">${spec('spec.code_hint', 'Code hint')}</div>
  ${codeHintBlock || '<p class="text-xs text-slate-500 dark:text-slate-400">—</p>'}`
      : '';
  const techDl =
    includeProduct && s.tech
      ? `<dd class="proto-spec-dd-pre">${escapeHtml(s.tech)}</dd>`
      : '<dd>—</dd>';
  const codeDl =
    includeProduct && s.codeHint
      ? `<dd class="proto-spec-dd-pre">${escapeHtml(s.codeHint)}</dd>`
      : '<dd>—</dd>';
  return `
<div class="proto-detail-spec-block">
  <div class="label mb-2 text-slate-600 dark:text-slate-400">${spec('spec.screen_spec', 'Screen spec')}</div>
  <div class="text-lg font-bold text-slate-900 dark:text-slate-100">${name}</div>
  <div class="mt-1 flex flex-wrap items-center gap-2">
    <span class="badge ${s.phase===1?'b-green':'b-amber'}">${spec('spec.phase', 'Phase')} ${s.phase}</span>
    <span class="text-xs text-slate-500 dark:text-slate-400 font-mono">${s.id}</span>
  </div>
  <div class="mt-3 label">${spec('spec.group', 'Group')}</div>
  <div class="text-sm mt-1 text-slate-800 dark:text-slate-200">${group}</div>
  <div class="mt-4 label">${spec('spec.purpose', 'Purpose')}</div>
  <div class="text-sm mt-1 text-slate-800 dark:text-slate-200">${purpose}</div>
  <div class="mt-4 label">${spec('spec.states', 'States to build')}</div>
  <div class="mt-1 flex flex-wrap gap-1.5">${statesArr.map(st => `<span class="chip">${st}</span>`).join('')}</div>
  <div class="mt-2 label" style="font-size:10px;letter-spacing:0.06em;">${spec('spec.states_copy', 'All states (copy)')}</div>
  <div class="text-xs mt-1 text-slate-600 dark:text-slate-400 font-mono leading-relaxed break-all">${statesJoined}</div>
  <div class="mt-4 label">${spec('spec.dev_notes', 'Dev notes')}</div>
  <div class="text-sm mt-1 text-slate-700 dark:text-slate-300 leading-relaxed">${notes}</div>${productExtras}
  <div class="divider my-4 dark:bg-slate-700"></div>
  <div class="label">${spec('spec.related', 'Related flows')}</div>
  <div class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">${specRelatedFlowsLine(s.id)}</div>
  <div class="divider my-4 dark:bg-slate-700"></div>
  <div class="label">${spec('spec.raw_catalog', 'Raw catalog')}</div>
  <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-2">${spec('spec.raw_hint', 'All fields from screens.js for this row.')}</p>
  <dl class="proto-spec-dl">
    <dt>id</dt><dd>${s.id}</dd>
    <dt>name</dt><dd>${name}</dd>
    <dt>group</dt><dd>${group}</dd>
    <dt>phase</dt><dd>${s.phase}</dd>
    <dt>purpose</dt><dd>${purpose}</dd>
    <dt>states</dt><dd>${statesJoined}</dd>
    <dt>notes</dt><dd>${notes}</dd>
    <dt>tech</dt>${techDl}
    <dt>codeHint</dt>${codeDl}
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
  const inactive = 'px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap';
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
