/**
 * Ensures every literal t('key', ...) in src has a matching STRINGS_AR_EG entry.
 * Dynamic keys (e.g. t('group.' + g)) are allowlisted via KNOWN_GROUP_PREFIX + extracted groups.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const stringsPath = path.join(root, 'src', 'i18n', 'stringsArEG.ts');
const screensPath = path.join(root, 'src', 'data', 'screens.ts');
const srcDir = path.join(root, 'src');

function extractStringKeys() {
  const text = fs.readFileSync(stringsPath, 'utf8');
  const keys = new Set();
  const re = /'((?:[^'\\]|\\.)+)'\s*:/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    keys.add(m[1].replace(/\\'/g, "'"));
  }
  return keys;
}

function extractScreenGroups() {
  const text = fs.readFileSync(screensPath, 'utf8');
  const groups = new Set();
  const re = /group:'([^']+)'/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    groups.add(`group.${m[1]}`);
  }
  groups.add('group.Screens');
  return groups;
}

function* walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkDir(full);
    else if (/\.(tsx|ts)$/.test(e.name) && !e.name.endsWith('.d.ts')) yield full;
  }
}

function extractTKeysFromFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const keys = [];
  const re = /\bt\(\s*'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    keys.push(m[1].replace(/\\'/g, "'"));
  }
  return keys;
}

const stringKeys = extractStringKeys();
const groupKeys = extractScreenGroups();
const allowPrefix = 'group.';

const usedKeys = new Set();
for (const file of walkDir(srcDir)) {
  for (const k of extractTKeysFromFile(file)) {
    usedKeys.add(k);
  }
}

const IGNORE_KEYS = new Set(['group.']);

const missing = [];
for (const k of usedKeys) {
  if (IGNORE_KEYS.has(k)) continue;
  if (stringKeys.has(k)) continue;
  if (k.startsWith(allowPrefix) && groupKeys.has(k)) continue;
  missing.push(k);
}

missing.sort();

if (missing.length > 0) {
  console.error('i18n: missing Arabic strings for these t() keys:');
  for (const k of missing) console.error(`  - ${k}`);
  process.exit(1);
}

console.log(`i18n: OK (${usedKeys.size} keys checked against stringsArEG)`);
