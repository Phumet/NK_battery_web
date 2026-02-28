# คู่มือการนำเว็บไซต์ขึ้น Online

## ✅ สถานะการตรวจสอบ

โปรเจคของคุณพร้อม deploy แล้ว! ✨

- ✅ ไม่มี errors ในโค้ด
- ✅ Build สำเร็จ (ไฟล์ optimization ขนาด 87.2 kB)
- ✅ ไฟล์ทั้งหมดครบถ้วน
- ✅ รูปภาพทั้งหมดพร้อมใช้งาน
- ✅ Meta tags สำหรับ SEO ครบถ้วน
- ✅ Responsive design พร้อมแล้ว

## 🚀 วิธีการ Deploy (แนะนำ Vercel)

### ทำไมต้อง Vercel?
- **ฟรี** สำหรับ personal projects
- **รวดเร็ว** - deploy ใน 1-2 นาที
- **ออกแบบมาสำหรับ Next.js** โดยเฉพาะ
- **SSL ฟรี** (HTTPS อัตโนมัติ)
- **CDN ทั่วโลก** - เว็บเร็วทุกที่
- **Custom domain ฟรี** - ใช้โดเมนของคุณเองได้

---

## 📝 วิธีที่ 1: Deploy ด้วย Vercel (แนะนำ)

### ขั้นตอนที่ 1: เตรียม GitHub Repository

1. **สร้าง GitHub account** (ถ้ายังไม่มี)
   - ไปที่: https://github.com/signup

2. **สร้าง Repository ใหม่**
   ```bash
   # ใน Terminal รันคำสั่งนี้ที่โฟลเดอร์ NK_battery
   git init
   git add .
   git commit -m "Initial commit: NK Battery Website"
   ```

3. **Push ขึ้น GitHub**
   - สร้าง repository ใหม่ที่ https://github.com/new
   - ตั้งชื่อว่า `nk-battery-ayutthaya` (หรือชื่ออื่นที่ชอบ)
   - เลือก **Public** หรือ **Private**
   - อย่าเพิ่มไฟล์อะไร (ไม่ต้อง README, .gitignore)
   - คลิก **Create repository**

4. **เชื่อมต่อและ push**
   ```bash
   git remote add origin https://github.com/[username]/nk-battery-ayutthaya.git
   git branch -M main
   git push -u origin main
   ```
   *เปลี่ยน [username] เป็น username GitHub ของคุณ*

### ขั้นตอนที่ 2: Deploy ไปยัง Vercel

1. **สมัคร Vercel** (ถ้ายังไม่มี)
   - ไปที่: https://vercel.com/signup
   - เลือก **Continue with GitHub**
   - อนุญาตให้ Vercel เข้าถึง GitHub

2. **Import Project**
   - คลิก **Add New...** → **Project**
   - เลือก repository `nk-battery-ayutthaya` ที่สร้างไว้
   - คลิก **Import**

3. **Configure Project** (ปล่อยค่า default ได้)
   - **Project Name:** nk-battery-ayutthaya
   - **Framework Preset:** Next.js (จะเลือกให้อัตโนมัติ)
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next
   - คลิก **Deploy**

4. **รอ Deploy** (ประมาณ 1-2 นาที)
   - Vercel จะ build และ deploy ให้อัตโนมัติ
   - เมื่อเสร็จจะได้ URL แบบนี้: `https://nk-battery-ayutthaya.vercel.app`

### ขั้นตอนที่ 3: ตั้งค่า Custom Domain (ถ้ามี)

ถ้าคุณมีโดเมนของตัวเอง (เช่น nkbattery.com):

1. ไปที่ **Project Settings** → **Domains**
2. เพิ่มโดเมนของคุณ
3. ตั้งค่า DNS ตามที่ Vercel แนะนำ:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

---

## 📝 วิธีที่ 2: Deploy ด้วย Netlify

1. **สมัคร Netlify**
   - ไปที่: https://app.netlify.com/signup
   - เลือก **Continue with GitHub**

2. **Push โค้ดขึ้น GitHub** (ถ้ายังไม่ได้ทำ)
   - ทำตามขั้นตอนที่ 1 ของวิธีที่ 1

3. **Import Project**
   - คลิก **Add new site** → **Import an existing project**
   - เลือก **GitHub**
   - เลือก repository ที่สร้างไว้
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - คลิก **Deploy site**

---

## 📝 วิธีที่ 3: Deploy ด้วย Vercel CLI (สำหรับผู้เชี่ยวชาญ)

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd "/Users/phumet/Desktop/NK_battery 04.35.05"
vercel

# ตอบคำถาม:
# - Set up and deploy? Y
# - Which scope? [เลือก account ของคุณ]
# - Link to existing project? N
# - What's your project's name? nk-battery-ayutthaya
# - In which directory is your code located? ./
# - Want to modify these settings? N

# Deploy to Production
vercel --prod
```

---

## 🎨 หลังจาก Deploy เสร็จ

### ✅ สิ่งที่ควรทำ:

1. **ทดสอบเว็บไซต์**
   - เปิดทุก section ดูว่าทำงานถูกต้อง
   - ทดสอบปุ่ม CTA (โทร, LINE, Facebook)
   - ทดสอบบนมือถือและคอมพิวเตอร์
   - ตรวจสอบแผนที่ Google Maps

2. **แชร์ลิงก์**
   - บน Facebook Page NK แบตเตอรี่อยุธยา
   - บน LINE OA (ถ้ามี)
   - ติดลิงก์ใน Google My Business

3. **ติดตาม Analytics**
   - เพิ่ม Google Analytics
   - เพิ่ม Facebook Pixel
   - ดูสถิติผู้เข้าชมเว็บ

### 🔄 การอัปเดตเว็บในอนาคต:

```bash
# แก้ไขโค้ด
# จากนั้น push ขึ้น GitHub

git add .
git commit -m "Update: [อธิบายการแก้ไข]"
git push

# Vercel/Netlify จะ deploy อัตโนมัติทันที!
```

---

## 🆘 แก้ไขปัญหาที่พบบ่อย

### ปัญหา: Build Failed
**วิธีแก้:**
```bash
# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### ปัญหา: รูปภาพไม่แสดง
**วิธีแก้:**
- ตรวจสอบว่าไฟล์อยู่ใน `/public/img/`
- ตรวจสอบชื่อไฟล์ตรงกับที่เรียกใช้
- รูปต้องอยู่ใน Git repository

### ปัญหา: Custom Domain ไม่ work
**วิธีแก้:**
- รอ DNS propagation (24-48 ชั่วโมง)
- ตรวจสอบ DNS records ให้ถูกต้อง
- ลองใช้ https://www.whatsmydns.net/ ตรวจสอบ

---

## 📊 ตัวเลือก Platform เปรียบเทียบ

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| ราคา | ฟรี | ฟรี | ฟรี |
| Next.js Support | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| CDN | ✅ Global | ✅ Global | ✅ |
| SSL | ✅ Auto | ✅ Auto | ✅ Auto |
| Custom Domain | ✅ ฟรี | ✅ ฟรี | ✅ ฟรี |
| Deploy Time | ~1-2 min | ~2-3 min | ~3-5 min |
| **แนะนำ** | **🏆 อันดับ 1** | อันดับ 2 | ไม่แนะนำ* |

*GitHub Pages ไม่รองรับ Server-Side Rendering ของ Next.js เต็มรูปแบบ

---

## 🎉 สรุป

**โปรเจคของคุณพร้อม 100% แล้ว!** 

เลือกวิธี Deploy ที่ชอบ:
- 🥇 **Vercel** - แนะนำที่สุด (ง่าย รวดเร็ว ฟรี)
- 🥈 **Netlify** - ทางเลือกที่ 2 ที่ดี
- 🥉 **Vercel CLI** - สำหรับผู้เชี่ยวชาญ

ถ้ามีปัญหาหรือต้องการความช่วยเหลือ:
- 📞 โทร: 092-478-2591 (ช่างเก่ง)
- 💬 LINE: keng2822

---

**สร้างโดย GitHub Copilot**  
**วันที่:** 28 กุมภาพันธ์ 2026
