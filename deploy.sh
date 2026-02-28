#!/bin/bash

# NK Battery Ayutthaya - Quick Deploy Script
# สคริปต์สำหรับ deploy เว็บไซต์ขึ้น Vercel แบบอัตโนมัติ

echo "🚀 เริ่มต้น Deploy NK Battery Website..."
echo ""

# ตรวจสอบว่ามี Git หรือไม่
if ! command -v git &> /dev/null; then
    echo "❌ ไม่พบ Git กรุณาติดตั้ง Git ก่อน"
    echo "   ติดตั้ง: https://git-scm.com/downloads"
    exit 1
fi

# ตรวจสอบว่ามี Node.js หรือไม่
if ! command -v node &> /dev/null; then
    echo "❌ ไม่พบ Node.js กรุณาติดตั้ง Node.js ก่อน"
    echo "   ติดตั้ง: https://nodejs.org/"
    exit 1
fi

echo "✅ ตรวจสอบ Git และ Node.js เรียบร้อย"
echo ""

# ตรวจสอบว่ามี .git หรือไม่
if [ ! -d ".git" ]; then
    echo "📦 เริ่มต้น Git Repository..."
    git init
    echo "✅ สร้าง Git Repository เรียบร้อย"
    echo ""
fi

# เพิ่มไฟล์ทั้งหมดใน Git
echo "📁 เพิ่มไฟล์ทั้งหมดใน Git..."
git add .

# Commit
echo "💾 Commit การเปลี่ยนแปลง..."
read -p "ป้อนข้อความ commit (Enter = ใช้ข้อความเริ่มต้น): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Deploy: NK Battery Website"
fi
git commit -m "$commit_message"
echo "✅ Commit เรียบร้อย"
echo ""

# ถามว่ามี GitHub repo หรือยัง
echo "📤 ต้องการ push ขึ้น GitHub หรือไม่?"
echo "   (ถ้ายังไม่มี Repository กรุณาสร้างที่ https://github.com/new ก่อน)"
echo ""
read -p "มี GitHub Repository แล้ว? (y/n): " has_repo

if [ "$has_repo" = "y" ] || [ "$has_repo" = "Y" ]; then
    read -p "ป้อน GitHub Repository URL (เช่น https://github.com/username/repo.git): " repo_url
    
    # ตรวจสอบว่ามี remote อยู่แล้วหรือไม่
    if git remote | grep -q "origin"; then
        echo "🔄 อัปเดต remote origin..."
        git remote set-url origin "$repo_url"
    else
        echo "🔗 เพิ่ม remote origin..."
        git remote add origin "$repo_url"
    fi
    
    echo "⬆️  Push ขึ้น GitHub..."
    git branch -M main
    git push -u origin main
    echo "✅ Push ขึ้น GitHub เรียบร้อย"
    echo ""
    
    # ตรวจสอบว่ามี Vercel CLI หรือไม่
    echo "🔍 ตรวจสอบ Vercel CLI..."
    if ! command -v vercel &> /dev/null; then
        echo "📥 ยังไม่มี Vercel CLI ต้องการติดตั้งหรือไม่? (y/n)"
        read -p "ติดตั้ง Vercel CLI? (y/n): " install_vercel
        
        if [ "$install_vercel" = "y" ] || [ "$install_vercel" = "Y" ]; then
            echo "📦 ติดตั้ง Vercel CLI..."
            npm install -g vercel
            echo "✅ ติดตั้ง Vercel CLI เรียบร้อย"
            echo ""
        else
            echo "ℹ️  คุณสามารถติดตั้งทีหลังด้วยคำสั่ง: npm install -g vercel"
            echo ""
        fi
    fi
    
    # ถ้ามี Vercel CLI ให้ deploy
    if command -v vercel &> /dev/null; then
        echo "🚀 Deploy ไปยัง Vercel..."
        echo "   กรุณาทำตามขั้นตอนที่หน้าจอ"
        echo ""
        vercel --prod
        echo ""
        echo "✅ Deploy เสร็จสมบูรณ์!"
    else
        echo "ℹ️  Deploy ด้วยตนเองที่: https://vercel.com/new"
        echo "   เลือก Import Git Repository แล้วเลือก repository ที่สร้างไว้"
    fi
else
    echo ""
    echo "📝 ขั้นตอนถัดไป:"
    echo "   1. สร้าง GitHub Repository: https://github.com/new"
    echo "   2. รันคำสั่งนี้อีกครั้ง"
    echo ""
fi

echo ""
echo "🎉 สำเร็จ! เว็บไซต์ของคุณพร้อมใช้งาน"
echo ""
echo "📚 คู่มือเพิ่มเติม:"
echo "   - Deploy: DEPLOYMENT_GUIDE.md"
echo "   - SEO: SEO_GUIDE.md"
echo ""
echo "📞 ต้องการความช่วยเหลือ?"
echo "   โทร: 092-478-2591 (ช่างเก่ง)"
echo "   LINE: keng2822"
echo ""
