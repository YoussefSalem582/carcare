/**
 * Ensures screens.ts catalog IDs have phone mock implementations (B2C/B2B),
 * and flutterGuide IDs have FTG handbook entries (EN + AR).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const screensPath = path.join(root, 'src', 'data', 'screens.ts');
const srcScreensDir = path.join(root, 'src', 'screens');
const ftgGuidePath = path.join(root, 'src', 'data', 'ftgGuide.ts');
const ftgGuideArPath = path.join(root, 'src', 'i18n', 'ftgGuideAr.ts');

function extractCatalogIds() {
  const text = fs.readFileSync(screensPath, 'utf8');
  const re = /\{ id:'([^']+)'/g;
  const ids = new Set();
  let m;
  while ((m = re.exec(text)) !== null) {
    ids.add(m[1]);
  }
  return ids;
}

function extractRegistryKeys(registryFile) {
  if (!fs.existsSync(registryFile)) return new Set();
  const text = fs.readFileSync(registryFile, 'utf8');
  const keys = new Set();
  const re = /^\s*'([\w-]+)':/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

function collectPhoneRegistryKeys() {
  const keys = new Set();
  /** @param {string} dir */
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name === 'registry.ts') {
        for (const k of extractRegistryKeys(full)) keys.add(k);
      }
    }
  }
  walk(srcScreensDir);
  return keys;
}

/** Keys at top-level `'ftg-*': {` in handbook files. */
function extractFtgKeys(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const keys = new Set();
  const re = /'((?:ftg-[a-z0-9.-]+))'\s*:\s*\{/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    keys.add(m[1]);
  }
  return keys;
}

function main() {
  const catalog = extractCatalogIds();
  const catalogB2c = [...catalog].filter((id) => id.startsWith('b2c-'));
  const catalogB2b = [...catalog].filter((id) => id.startsWith('b2b-'));
  const catalogFtg = [...catalog].filter((id) => id.startsWith('ftg-'));

  const phoneKeys = collectPhoneRegistryKeys();

  const missingPhone = [...catalog].filter((id) => {
    if (!id.startsWith('b2c-') && !id.startsWith('b2b-')) return false;
    return !phoneKeys.has(id);
  });
  missingPhone.sort();

  let extraKeys = [...phoneKeys].filter((id) => {
    if (!(id.startsWith('b2c-') || id.startsWith('b2b-'))) return false;
    return !catalog.has(id);
  });
  extraKeys.sort();

  const ftgEn = extractFtgKeys(ftgGuidePath);
  const ftgArTxt = fs.readFileSync(ftgGuideArPath, 'utf8');
  const ftgAr = ftgArTxt.includes('FTG_GUIDE_AR') ? extractFtgKeys(ftgGuideArPath) : new Set();

  const ftgMissingEn = catalogFtg.filter((id) => !ftgEn.has(id));
  const ftgMissingAr =
    ftgAr.size === 0 ? catalogFtg.filter(() => false) : catalogFtg.filter((id) => !ftgAr.has(id));

  let failed = false;
  if (missingPhone.length > 0) {
    console.error('screens parity: catalog IDs missing phone mock in registry:', missingPhone.join(', '));
    failed = true;
  }
  if (extraKeys.length > 0) {
    console.warn('screens parity: warn — registry keys not in screens.ts:', extraKeys.join(', '));
    /* orphan registry keys indicate drift — treat as failure for parity */
    failed = true;
  }
  if (ftgMissingEn.length > 0) {
    console.error('screens parity: flutterGuide IDs missing FTG_GUIDE entry:', ftgMissingEn.join(', '));
    failed = true;
  }
  if (ftgAr.size > 0 && ftgMissingAr.length > 0) {
    console.error('screens parity: flutterGuide IDs missing FTG_GUIDE_AR entry:', ftgMissingAr.join(', '));
    failed = true;
  }

  if (failed) {
    process.exit(1);
  }

  console.log(
    `screens parity: OK (b2c:${catalogB2c.length} b2b:${catalogB2b.length} ftg:${catalogFtg.length} phone mocks:${phoneKeys.size})`,
  );
}

main();
