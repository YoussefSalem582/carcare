/**
 * One-off: add dark: Tailwind pairs in prototype/js (excluding i18n/).
 * Run: node prototype/js/i18n/dark-tailwind-pass.cjs
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

function patchClassString(c) {
  let n = c;
  const rules = [
    [/\bbg-white\b(?!\s+dark:)/g, 'bg-white dark:bg-slate-900'],
    [/\bbg-slate-50\b(?!\s+dark:)/g, 'bg-slate-50 dark:bg-slate-800/90'],
    [/\bbg-slate-100\b(?!\s+dark:)/g, 'bg-slate-100 dark:bg-slate-800/80'],
    [/\bborder-slate-200\b(?!\s+dark:)/g, 'border-slate-200 dark:border-slate-600'],
    [/\bborder-slate-300\b(?!\s+dark:)/g, 'border-slate-300 dark:border-slate-600'],
    [/\btext-slate-900\b(?!\s+dark:)/g, 'text-slate-900 dark:text-slate-100'],
    [/\btext-slate-800\b(?!\s+dark:)/g, 'text-slate-800 dark:text-slate-200'],
    [/\btext-slate-700\b(?!\s+dark:)/g, 'text-slate-700 dark:text-slate-300'],
    [/\btext-slate-600\b(?!\s+dark:)/g, 'text-slate-600 dark:text-slate-400'],
    [/\btext-slate-500\b(?!\s+dark:)/g, 'text-slate-500 dark:text-slate-400'],
    [/\btext-slate-400\b(?!\s+dark:)/g, 'text-slate-400 dark:text-slate-500'],
  ];
  for (const [re, rep] of rules) {
    n = n.replace(re, rep);
  }
  return n;
}

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'i18n') continue;
      walk(p);
    } else if (ent.isFile() && ent.name.endsWith('.js')) {
      let s = fs.readFileSync(p, 'utf8');
      const out = s.replace(/class="([^"]*)"/g, (_, c) => 'class="' + patchClassString(c) + '"');
      if (out !== s) fs.writeFileSync(p, out);
    }
  }
}

walk(root);
