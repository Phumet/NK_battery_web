#!/bin/bash

# สคริปต์สำหรับแจ้ง Search Engines ให้มา crawl เว็บไซต์
# ใช้หลังจาก deploy เว็บไซต์แล้ว

SITE_URL="https://nk-battery-web.vercel.app"
SITEMAP_URL="$SITE_URL/sitemap.xml"

echo "🔔 กำลังแจ้ง Search Engines..."
echo ""

# 1. Ping Google
echo "📢 แจ้ง Google..."
curl -s "https://www.google.com/ping?sitemap=$SITEMAP_URL" > /dev/null
if [ $? -eq 0 ]; then
    echo "✅ แจ้ง Google สำเร็จ"
else
    echo "⚠️  แจ้ง Google ไม่สำเร็จ (อาจใช้ Google Search Console แทน)"
fi
echo ""

# 2. Ping Bing
echo "📢 แจ้ง Bing..."
curl -s "https://www.bing.com/ping?sitemap=$SITEMAP_URL" > /dev/null
if [ $? -eq 0 ]; then
    echo "✅ แจ้ง Bing สำเร็จ"
else
    echo "⚠️  แจ้ง Bing ไม่สำเร็จ"
fi
echo ""

# 3. IndexNow (Microsoft, Bing, Yandex)
echo "📢 แจ้งผ่าน IndexNow..."
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d "{
    \"host\": \"nk-battery-web.vercel.app\",
    \"key\": \"nkbattery2026indexnow\",
    \"keyLocation\": \"$SITE_URL/nkbattery2026indexnow.txt\",
    \"urlList\": [
      \"$SITE_URL/\"
    ]
  }" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ แจ้ง IndexNow สำเร็จ"
else
    echo "⚠️  แจ้ง IndexNow ไม่สำเร็จ (ต้องมีไฟล์ key)"
fi
echo ""

echo "🎉 เสร็จสิ้น!"
echo ""
echo "📋 ขั้นตอนต่อไป:"
echo "1. ไปที่ Google Search Console: https://search.google.com/search-console/"
echo "2. Submit Sitemap: $SITEMAP_URL"
echo "3. Request Indexing สำหรับหน้าหลัก"
echo ""
echo "⏰ Timeline:"
echo "- วันที่ 1-3: Google เริ่มรู้จักเว็บ"
echo "- สัปดาห์ที่ 1-2: เริ่มเห็นในผลการค้นหา"
echo "- 1-3 เดือน: Ranking ดีขึ้นเรื่อยๆ"
