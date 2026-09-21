/* يجلب الروابط الداخلية النظيفة لكل حلقات مسلسل معين من خوادم anaplayer
   الاستخدام: node tools/fetch-clean-links.mjs muhtemel-ask-2026-s01 20
   المخرج: JSON بمسار لكل حلقة: {serv1..serv5: inner-embed-url} */
import fs from "node:fs";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

const execFileP = promisify(execFile);
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const [,, slug, countStr, startStr] = process.argv;
const count = parseInt(countStr, 10);
const start = parseInt(startStr || "1", 10);
if (!slug || !count) {
  console.error("الاستخدام: node tools/fetch-clean-links.mjs <slug> <عدد الحلقات> [حلقة البداية]");
  process.exit(1);
}

const SERVS = [1, 2, 3, 4, 5];
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const BASE = `https://w.anaplayer.online/albaplayer/${slug}e`;

async function getUrl(url) {
  try {
    const { stdout } = await execFileP("curl.exe", [
      "-s", "-L", "--max-time", "25",
      "-A", UA,
      "-e", "https://w.anaplayer.online/",
      url,
    ], { maxBuffer: 8 * 1024 * 1024, windowsHide: true });
    return stdout || "";
  } catch { return ""; }
}

function extractIframe(html) {
  const m = html.match(/<iframe[^>]*src="([^"]+)"[^>]*id="iframe"/i)
    || html.match(/id="iframe"[^>]*src="([^"]+)"/i);
  return m ? m[1] : "";
}

const file = path.join(root, `tools/clean-links-${slug}.json`);
const out = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
for (let n = start; n <= count; n++) {
  const num = String(n).padStart(2, "0");
  out[num] = {};
  // تسلسليًا لتجنّب حجب الموقع للطلبات المتوازية
  for (const s of SERVS) {
    out[num][`serv${s}`] = extractIframe(await getUrl(`${BASE}${num}/?serv=${s}`));
    await new Promise((r) => setTimeout(r, 300));
  }
  const ok = Object.values(out[num]).filter(Boolean).length;
  console.log(`ep${num}: ${ok}/${SERVS.length} خوادم`);
}

fs.writeFileSync(file, JSON.stringify(out, null, 2));
console.log(`\nحُفظت النتائج في tools/clean-links-${slug}.json`);