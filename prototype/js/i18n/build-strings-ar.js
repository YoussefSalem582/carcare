/**
 * Dev helper: regenerate catalog keys from screens.js (run: node build-strings-ar.js)
 * Prints JSON of ids for translation checklist.
 */
const fs = require('fs');
const path = require('path');
const code = fs.readFileSync(path.join(__dirname, '../data/screens.js'), 'utf8');
const fn = new Function(code + '\nreturn SCREENS;');
const S = fn();
const all = [...S.b2c, ...S.b2b, ...S.flutterGuide];
console.log(JSON.stringify(all.map((x) => x.id), null, 2));
