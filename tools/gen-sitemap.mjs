/* مولد sitemap.xml تلقائيًا من بيانات script.js
   الاستخدام: node tools/gen-sitemap.mjs
   يضيف الصفحة الرئيسية + صفحة لكل مسلسل عبر ?s=id (يتوافق مع deep link في boot)
*/
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const script = fs.readFileSync(path.join(root, "script.js"), "utf8");

const block = script.match(/const DEFAULT_SERIES_DATA = (\[[\s\S]*?\n\];)/);
if (!block) {
  console.error("تعذّر العثور على بيانات المسلسلات في script.js");
  process.exit(1);
}

const ids = [...block[1].matchAll(/\{\s*id\s*:\s*"([^"]+)"/g)].map((m) => m[1]);
const base = "https://awaw32.github.io/masalsali";
const today = new Date().toISOString().slice(0, 10);

const url = (loc, changefreq, priority) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  url(`${base}/`, "weekly", "1.0"),
  ...ids.map((id) => url(`${base}/?s=${encodeURIComponent(id)}`, "weekly", "0.8")),
  "</urlset>",
];

fs.writeFileSync(path.join(root, "sitemap.xml"), lines.join("\n") + "\n");
console.log(`تم توليد sitemap.xml: ${1 + ids.length} عنوان (الرئيسية + ${ids.length} مسلسل)`);