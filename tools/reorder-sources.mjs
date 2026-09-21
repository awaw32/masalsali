/* يعيد ترتيب مصادر الحلقة: الرابط النظيف أولًا كأساسي، وصفحة الموقع السابق آخرًا كاحتياطي
   الاستخدام: node tools/reorder-sources.mjs muhtemel-ask */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const [,, id] = process.argv;
if (!id) {
  console.error("الاستخدام: node tools/reorder-sources.mjs <معرّف المسلسل>");
  process.exit(1);
}

const scriptPath = path.join(root, "script.js");
let text = fs.readFileSync(scriptPath, "utf8");
const newline = text.includes("\r\n") ? "\r\n" : "\n";

const idStart = text.indexOf(`id: "${id}"`);
const epsStart = text.indexOf("episodes: [", idStart);
const closeMatch = text.slice(epsStart).match(/\n[ \t]*\]/);
const epsEnd = closeMatch ? epsStart + closeMatch.index : -1;
if (epsEnd < 0) {
  console.error("لم يُعثر على نهاية كتلة الحلقات.");
  process.exit(1);
}
const block = text.slice(epsStart, epsEnd);
let changed = 0;

const newBlock = block.replace(/(\{ title: "[^"]*", desc: "[^"]*", videoUrl: "([^"]*)", altUrls: (\[[^\]]*\])\s*\}\s*,?)/g,
  (line, obj, wrapper, altArr) => {
    let clean;
    try { clean = JSON.parse(altArr); } catch { return line; }
    if (!String(wrapper).includes(id)) return line;
    clean = (clean || []).filter((u) => typeof u === "string" && u.trim());
    if (!clean.length) return line;
    const reordered = [clean[0], ...clean.slice(1), wrapper].filter((u, i, a) => a.indexOf(u) === i);
    changed++;
    const title = line.match(/title: ("[^"]*")/)[1];
    const desc = line.match(/desc: ("[^"]*")/)[1];
    return `{ title: ${title}, desc: ${desc}, videoUrl: ${JSON.stringify(reordered[0])}, altUrls: ${JSON.stringify(reordered.slice(1))} },`;
  });

text = text.slice(0, epsStart) + newBlock + text.slice(epsEnd);
fs.writeFileSync(scriptPath, text);
console.log(`أُعيد ترتيب ${changed} حلقة (النظيف أولًا).`);