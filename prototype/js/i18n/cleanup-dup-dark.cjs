const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'i18n') continue;
      walk(p);
    } else if (ent.isFile() && ent.name.endsWith('.js')) {
      let s = fs.readFileSync(p, 'utf8');
      let t = s;
      t = t.replace(/dark:text-slate-400 dark:text-slate-500/g, 'dark:text-slate-400');
      t = t.replace(/dark:text-slate-500 dark:text-slate-400 dark:text-slate-500/g, 'dark:text-slate-400');
      t = t.replace(/text-slate-400 dark:text-slate-500 dark:text-slate-400 dark:text-slate-500/g, 'text-slate-400 dark:text-slate-500');
      t = t.replace(/text-slate-600 dark:text-slate-400 dark:text-slate-500/g, 'text-slate-600 dark:text-slate-400');
      if (t !== s) fs.writeFileSync(p, t);
    }
  }
}

walk(root);
