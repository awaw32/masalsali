# نشر الموقع بضغطة واحدة
# الاستخدام: .\deploy.ps1 "رسالة التغيير"   (بدون رسالة = رسالة افتراضية مع التاريخ)
param([string]$Message = "تحديث موقع مسلسلي " + (Get-Date -Format "yyyy-MM-dd HH:mm"))

$ErrorActionPreference = "Stop"

# 1) تأكد من أن فاحص الجودة يمر قبل النشر
Write-Host "== فحص الجودة ==" -ForegroundColor Cyan
node tools/check.mjs
if ($LASTEXITCODE -ne 0) { Write-Host "فشل الفحص — أُلغي النشر." -ForegroundColor Red; exit 1 }

# 2) نشر على جيثب
Write-Host "== إضافة وتأكيد التعديلات ==" -ForegroundColor Cyan
git add -A
git -c user.name="awaw32" -c user.email="awaw32@users.noreply.github.com" commit -m $Message
git push

if ($LASTEXITCODE -eq 0) {
  Write-Host "تم النشر بنجاح - الموقع سيُحدَّث خلال دقيقتين:" -ForegroundColor Green
  Write-Host "https://awaw32.github.io/masalsali/" -ForegroundColor Green
}