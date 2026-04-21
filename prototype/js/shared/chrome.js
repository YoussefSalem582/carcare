/* =========================================================
   Shared device chrome (status bar, home indicator)
   ========================================================= */
function protoStatusBarIcons() {
  return '<span class="flex gap-1 items-center"><i data-lucide="signal" class="w-3.5 h-3.5"></i><i data-lucide="wifi" class="w-3.5 h-3.5"></i><i data-lucide="battery-full" class="w-3.5 h-3.5"></i></span>';
}

/** @param {{ time?: string, trailing?: 'icons' | 'empty' }} [opts] */
function protoStatusBar(opts) {
  const o = opts || {};
  const time = o.time != null ? o.time : '9:41';
  const right =
    o.trailing === 'icons'
      ? protoStatusBarIcons()
      : o.trailing === 'empty' || o.trailing === ''
        ? '<span></span>'
        : o.trailing != null
          ? o.trailing
          : '<span></span>';
  return `<div class="status-bar"><span>${time}</span>${right}</div>`;
}

function protoHomeIndicator() {
  return '<div class="home-indicator"></div>';
}

/** Thin progress under status bar for funnel steps (step 1-based, total steps) */
function protoFunnelProgress(step, total) {
  const pct = Math.round((step / total) * 100);
  return `<div class="funnel-progress" role="progressbar" aria-valuenow="${step}" aria-valuemin="1" aria-valuemax="${total}">
    <div class="funnel-progress-fill" style="width:${pct}%"></div>
  </div>`;
}
