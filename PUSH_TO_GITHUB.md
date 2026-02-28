# 🚀 คำสั่งสำหรับ Push ขึ้น GitHub

## ⚠️ ขั้นตอนแรก: Accept Xcode License (ทำครั้งเดียว)

คุณต้อง accept Xcode license ก่อนใช้ Git

รันคำสั่งนี้ใน Terminal:

```bash
sudo xcodebuild -license accept
```

จะถามรหัสผ่าน Mac ให้ใส่รหัสผ่านของคุณ (ไม่แสดงเวลาพิมพ์)

---

## 📤 ขั้นตอน Push ขึ้น GitHub

หลังจาก accept license แล้ว รันทีละคำสั่ง:

### 1. เข้าไปในโฟลเดอร์โปรเจค
```bash
cd "/Users/phumet/Desktop/NK_battery 04.35.05"
```

### 2. เริ่มต้น Git Repository
```bash
git init
```

### 3. เพิ่มไฟล์ทั้งหมด
```bash
git add .
```

### 4. Commit ครั้งแรก
```bash
git commit -m "Initial commit: NK Battery Website with SEO optimization"
```

### 5. เชื่อมต่อกับ GitHub Repository
```bash
git remote add origin https://github.com/Phumet/NK_battery_web.git
```

### 6. เปลี่ยน branch เป็น main
```bash
git branch -M main
```

### 7. Push ขึ้น GitHub
```bash
git push -u origin main
```

จะถาม username และ password:
- **Username:** Phumet (GitHub username ของคุณ)
- **Password:** ใช้ **Personal Access Token** แทนรหัสผ่าน

---

## 🔑 สร้าง Personal Access Token (ถ้ายังไม่มี)

1. ไปที่ https://github.com/settings/tokens
2. คลิก **Generate new token** → **Generate new token (classic)**
3. ตั้งชื่อ: `NK Battery Deploy`
4. เลือก scope: ✅ **repo** (ทั้งหมด)
5. คลิก **Generate token**
6. **คัดลอกและเก็บไว้** (แสดงครั้งเดียว!)
7. ใช้ token นี้แทนรหัสผ่านเมื่อ push

---

## ✅ ตรวจสอบว่า Push สำเร็จ

เปิด https://github.com/Phumet/NK_battery_web

ควรเห็น:
- ✅ ไฟล์ทั้งหมดใน repository
- ✅ Commit message "Initial commit: NK Battery Website with SEO optimization"
- ✅ ไฟล์ README.md แสดงหน้าแรก

---

## 🚀 ขั้นตอนถัดไป: Deploy ไปยัง Vercel

### ทางเลือกที่ 1: Deploy ผ่านเว็บ Vercel (ง่ายที่สุด)

1. ไปที่ https://vercel.com/signup
2. คลิก **Continue with GitHub**
3. อนุญาตให้ Vercel เข้าถึง GitHub
4. คลิก **Add New...** → **Project**
5. เลือก repository **NK_battery_web**
6. คลิก **Import**
7. ตั้งค่า:
   - Project Name: `nk-battery-ayutthaya`
   - Framework Preset: Next.js (เลือกอัตโนมัติ)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
8. คลิก **Deploy**
9. รอ 1-2 นาที

**เสร็จแล้ว!** 🎉

ได้ URL: `https://nk-battery-ayutthaya.vercel.app`

---

### ทางเลือกที่ 2: Deploy ด้วย Vercel CLI

```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd "/Users/phumet/Desktop/NK_battery 04.35.05"
vercel --prod
```

ตอบคำถาม:
- Set up and deploy? **Y**
- Which scope? เลือก account ของคุณ
- Link to existing project? **N**
- What's your project's name? **nk-battery-ayutthaya**
- In which directory is your code located? **./
**
- Want to modify these settings? **N**

---

## 🎯 หลังจาก Deploy เสร็จ

### 1. ทดสอบเว็บไซต์
- ✅ เปิดทุกหน้า
- ✅ ทดสอบปุ่มโทร LINE Facebook
- ✅ ทดสอบบนมือถือ
- ✅ ตรวจสอบแผนที่

### 2. ตั้งค่า SEO (สำคัญมาก!)

**A. Google My Business** (ทำวันนี้!)
1. ไปที่ https://business.google.com
2. สร้างโปรไฟล์ธุรกิจ
3. ยืนยันธุรกิจ (รับ SMS)
4. อัปโหลดรูป 20-30 รูป
5. ขอรีวิวจากลูกค้า

**B. Google Search Console**
1. ไปที่ https://search.google.com/search-console
2. เพิ่มเว็บไซต์
3. Submit Sitemap: `https://[your-domain]/sitemap.xml`

**C. อ่านคู่มือ SEO ครบวงจร**
- [SEO_GUIDE.md](SEO_GUIDE.md)

---

## 📞 ต้องการความช่วยเหลือ?

- 📞 โทร: 092-478-2591 (ช่างเก่ง)
- 💬 LINE: keng2822

---

**สร้างเมื่อ:** 28 กุมภาพันธ์ 2026
