import { execFile } from "node:child_process";
import { promisify } from "node:util";
const p = promisify(execFile);
try {
  const { stdout, stderr } = await p("curl.exe", [
    "-s", "-L", "--max-time", "25", "-A", "Mozilla/5.0",
    "-e", "https://w.anaplayer.online/",
    "https://w.anaplayer.online/albaplayer/muhtemel-ask-2026-s01e01/?serv=1",
  ], { maxBuffer: 8 * 1024 * 1024, windowsHide: true });
  console.log("stdout bytes:", stdout.length);
  console.log("has iframe:", stdout.includes("<iframe"));
  const m1 = stdout.match(/<iframe[^>]*src="([^"]+)"[^>]*id="iframe"/i);
  console.log("m1:", m1 ? m1[1] : "NO");
  const m2 = stdout.match(/src="([^"]+)"[^>]*id="iframe"/i);
  console.log("m2:", m2 ? m2[1] : "NO");
  console.log("stderr bytes:", stderr.length);
} catch (e) {
  console.log("ERR:", e.message);
}