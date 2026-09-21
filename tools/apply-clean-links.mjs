/* يدمج روابط الخوادم النظيفة (from clean-links json) داخل حلقات مسلسل في script.js
   الاستخدام: node tools/apply-clean-links.mjs muhtemel-ask-2026-s01
   يحفظ نهايات أسطر الملف كما هي (CRLF). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const [,, slug, seriesId] = process.argv;
if (!slug) {
  console.error("الاستخدام: node tools/apply-clean-links.mjs <slug> [معرّف المسلسل]");
  process.exit(1);
}
const targetId = seriesId || slug;

const scriptPath = path.join(root, "script.js");
let text = fs.readFileSync(scriptPath, "utf8");
const links = JSON.parse(fs.readFileSync(path.join(root, `tools/clean-links-${slug}.json`), "utf8"));
const newline = text.includes("\r\n") ? "\r\n" : "\n";

// الأسماء المقبولة للمشغّل النظيف فقط (يستبعد صفحات anaplayer الملفوفة)
const CLEAN_HOST_OK = /^(https:\/\/)?(cdnplus\.space|mp4plus\.cyou|anafast\.cyou|vidoba\.cyou|vidspeed\.space|ok\.ru)\//;

// كتلة المسلسل فقط: من `id: "<slug مسبوقًا>"`
const idStart = text.indexOf(`id: "${targetId}"`);
if (idStart < 0) {
  console.error(`لم يُعثر على id "${targetId}" في script.js`);
  process.exit(1);
}
const epsStart = text.indexOf("episodes: [", idStart);
const closeMatch = text.slice(epsStart).match(/\n[ \t]*\]/);
const epsEnd = closeMatch ? epsStart + closeMatch.index : -1;
if (epsEnd < 0) {
  console.error("لم يُعثر على نهاية كتلة الحلقات.");
  process.exit(1);
}
const block = text.slice(epsStart, epsEnd);

let count = 0;
const newBlock = block.replace(
  /(\{ title: "[^"]*", desc: "[^"]*", videoUrl: "([^"]*)"\s*\})/g,
  (line, obj, url) => {
    const m = url.match(/s01e(\d+)$/);
    if (!m) return line;
    if (!url.includes(targetId)) return line;
    const num = m[1].padStart(2, "0");
    const set = links[num] || {};
    const extras = [];
    for (const key of ["serv1", "serv2", "serv3", "serv4", "serv5"]) {
      const u = (set[key] || "").trim();
      if (!u || !CLEAN_HOST_OK.test(u)) continue;
      if (u === url) continue;
      if (extras.includes(u)) continue;
      extras.push(u);
    }
    if (!extras.length) return line; // ابقِ الحلقة كما هي بدون روابط مضللة
    count++;
    return `{ title: "${jsonArg(line, "title")}", desc: "${jsonArg(line, "desc")}", videoUrl: "${url}", altUrls: ${JSON.stringify(extras)} }`;
  }
);

function jsonArg(line, key) {
  const m = line.match(new RegExp(`${key}: "((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1] : "";
}

if (count === 0) {
  console.error("لم تتغير أي حلقة — تحقق من النمط في block.");
  process.exit(1);
}
text = text.slice(0, epsStart) + newBlock + text.slice(epsEnd);
fs.writeFileSync(scriptPath, text);
console.log(`تم تحديث ${count} حلقة في "${slug}" بنجاح (نهايات أسطر ${newline.includes("\r") ? "CRLF" : "LF"}).`);