/* فاحص جودة مشروع مسلسلي — يعمل بـ node فقط بدون مكتبات خارجية
   الاستخدام: node tools/check.mjs [مسار المشروع]
*/
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = process.argv[2] || path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

const okay = (m) => console.log("[PASS] " + m);
const fail = (m) => { console.log("[FAIL] " + m); process.exitCode = 1; };
const has = (p) => fs.existsSync(path.join(root, p));

// 1) صياغة ملفات JS
for (const f of ["script.js"]) {
  if (!has(f)) { fail("مفقود من الجذر: " + f); continue; }
  try { execFileSync(process.execPath, ["--check", path.join(root, f)], { stdio: "pipe" }); okay("صياغة سليمة: " + f); }
  catch (e) { fail("خطأ صياغة في " + f + ":\n" + e.stderr.toString()); }
}

// 2) توازن الأقواس في CSS + وجود مثيلات فعلية
if (has("style.css")) {
  const css = read("style.css");
  const mo = (css.match(/\{/g) || []).length;
  const mc = (css.match(/\}/g) || []).length;
  if (mo === mc) okay(`توازن أقواس CSS: ${mo}/${mc}`);
  else fail(`أقواس CSS غير متوازنة: ${mo} فاتح / ${mc} مغلق`);
} else fail("مفقود: style.css");

// 3) كل المعرّفات في script.js موجودة فعليًا في index.html
const html = read("index.html");
const js = read("script.js");
const htmlIds = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
const used = new Set([...js.matchAll(/el\("([^"]+)"\)/g)].map((m) => m[1]));
const missing = [...used].filter((id) => !htmlIds.has(id));
if (!missing.length) okay(`كل معرّفات DOM موجودة بالصفحة (${used.size})`);
else fail("معرّفات مستخدمة وغير موجودة: " + missing.join(", "));

// 4) الحقول الأساسية في بيانات المسلسلات سليمة (obj literals غير JSON)
const m = js.match(/const DEFAULT_SERIES_DATA = (\[[\s\S]*?\n\];)/);
const clean = m ? m[1].replace(/\/\/[^\n]*/g, "") : "";
if (!clean) { fail("لم يُعثر على بيانات المسلسلات"); }
else {
  const nSeries = (clean.match(/\{\s*id\s*:/g) || []).length;
  const nEpsAll = (clean.match(/\{\s*title\s*:/g) || []).length;
  const nEpsVid = (clean.match(/videoUrl\s*:/g) || []).length;
  const missing = [];
  if (nSeries < 1) missing.push("لا يوجد مسلسل واحد");
  if (nEpsAll !== nEpsVid) missing.push(`عدد الحلقات (${nEpsAll}) لا يطابق عدد الروابط (${nEpsVid})`);
  missing.length ? fail("مشاكل في البيانات: " + missing.join("؛ ")) : okay(`البيانات سليمة: ${nSeries} مسلسل / ${nEpsAll} حلقة`);
}

// 5) الملفات الهامة
for (const f of ["index.html", "style.css", "script.js", "robots.txt", "sitemap.xml"]) {
  if (!has(f)) fail("مفقود: " + f);
}
if (has("robots.txt") && has("sitemap.xml")) okay("ملفات SEO موجودة");

console.log("\n" + (process.exitCode ? "✕ فُشل الفحص — لا تنشر حتى الإصلاح" : "✓ الفحص نجح — يمكن النشر باطمئنان"));
process.exit(process.exitCode || 0);