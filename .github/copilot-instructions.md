# คำแนะนำ GitHub Copilot สำหรับโปรเจค NK แบตเตอรี่อยุธยา

## ภาพรวมโปรเจค

เว็บไซต์ **NK แบตเตอรี่อยุธยา** เป็นเว็บไซต์บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ตลอด 24 ชั่วโมง ในจังหวัดพระนครศรีอยุธยา พัฒนาด้วย Next.js 14, React 18 และ Tailwind CSS

## 🎯 เป้าหมายของเว็บไซต์

เว็บไซต์นี้มีวัตถุประสงค์เพื่อ:
1. ให้ลูกค้าหาข้อมูลร้านและบริการได้ง่าย
2. ติดต่อร้านได้สะดวกผ่านหลายช่องทาง (โทร, LINE, Facebook)
3. สร้างความเชื่อมั่นด้วยการแสดงแบรนด์ที่จำหน่าย, การรับประกัน
4. แสดงตำแหน่งร้านบนแผนที่

## 📋 กฎการเขียนโค้ดที่สำคัญ

### 1. เทคโนโลยีที่ใช้

#### ✅ ใช้เทคโนโลยีเหล่านี้
- **Next.js 14** (Pages Router)
- **React 18** - Functional Components + Hooks
- **Tailwind CSS 3** - Utility-first CSS
- **JavaScript** (ไม่ใช่ TypeScript)

#### ❌ อย่าใช้เทคโนโลยีเหล่านี้
- TypeScript
- Class Components
- CSS-in-JS (styled-components, emotion)
- CSS Modules แบบเดิม
- App Router ของ Next.js 13+

### 2. โครงสร้าง Components

#### รูปแบบที่ถูกต้อง
```jsx
export default function ComponentName() {
  return (
    <section id="section-id" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* เนื้อหา */}
      </div>
    </section>
  );
}
```

#### ตั้งชื่อไฟล์และ Component
- ไฟล์: PascalCase (เช่น `Hero.jsx`, `Services.jsx`)
- Component: ตรงกับชื่อไฟล์
- Export: ใช้ default export เสมอ

### 3. Styling ด้วย Tailwind CSS

#### หลักการสำคัญ
- ✅ **ใช้ Tailwind utility classes เท่านั้น**
- ❌ **ห้ามเขียน inline styles**
- ❌ **ห้ามสร้าง CSS file ใหม่** (เว้นแต่จำเป็นมาก)

#### สีธีมของโปรเจค
```javascript
// กำหนดใน tailwind.config.js
colors: {
  primary: "#228B22",  // สีเขียว (สีหลักของแบรนด์)
  accent: "#FFD700",   // สีทอง (ใช้เน้นจุดสำคัญ)
}
```

การใช้งาน:
```jsx
// สีพื้นหลังและข้อความ
<div className="bg-primary text-white" />
<div className="bg-accent text-gray-800" />

// สีโปร่งใส
<div className="bg-primary/90" />  // 90% opacity
<div className="bg-accent/20" />   // 20% opacity

// Hover states
<button className="bg-primary hover:bg-primary/90" />
```

#### Responsive Design
```jsx
// Mobile-first approach
<div className="
  text-base           {/* Mobile */}
  md:text-lg          {/* Tablet (768px+) */}
  lg:text-xl          {/* Desktop (1024px+) */}
  xl:text-2xl         {/* Large Desktop (1280px+) */}
">
  ข้อความ
</div>

// Grid สำหรับการ์ด
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* การ์ดต่างๆ */}
</div>
```

#### Hover และ Transitions
```jsx
// ปุ่มต้องมี hover effect เสมอ
<button className="
  bg-primary 
  hover:bg-primary/90 
  text-white 
  font-bold 
  py-3 px-6 
  rounded-lg 
  transition-colors duration-200
">
  ปุ่ม
</button>

// การ์ดที่มี hover effect
<div className="
  bg-white 
  rounded-lg 
  p-6 
  shadow-md 
  hover:shadow-xl 
  transition-shadow duration-300
">
  เนื้อหาการ์ด
</div>
```

### 4. การเขียนเนื้อหา

#### ภาษา
- ✅ **ใช้ภาษาไทยทั้งหมด**
- เนื้อหาต้องเป็นกันเอง เข้าใจง่าย ไม่เป็นทางการจนเกินไป
- ใช้คำที่ลูกค้าทั่วไปเข้าใจ หลีกเลี่ยงศัพท์เทคนิคที่ยาก

#### Emoji
ใช้ Emoji เพื่อความน่าสนใจ:
- 📞 โทรศัพท์
- 💬 LINE / แชท
- 🌐 Facebook / เว็บไซต์
- 🚗 รถยนต์
- ⚡ ไฟฟ้า / พลังงาน
- 🔧 ซ่อมแซม / เครื่องมือ
- ✅ ถูกต้อง / ผ่าน
- ❌ ผิด / ห้าม
- 🏪 ร้านค้า
- 💡 ไฟหน้ารถ
- 📢 แตร
- 🪟 กระจก

### 5. Call-to-Action (CTA)

ทุกส่วนสำคัญต้องมี CTA ให้ลูกค้าติดต่อได้ง่าย

#### ข้อมูลติดต่อ (ใช้ข้อมูลนี้ตลอดโปรเจค)
```javascript
const contact = {
  phone: "0924782591",
  phoneDisplay: "092-478-2591",
  phoneLink: "tel:0924782591",
  lineId: "keng2822",
  lineUrl: "https://line.me/ti/p/~keng2822",
  facebookUrl: "https://www.facebook.com/p/NK-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2-0924782591-100057278176698/?locale=th_TH",
  owner: "ช่างเก่ง",
  shopName: "NK แบตเตอรี่อยุธยา",
  address: "โพธิ์สามต้น 3, Tambon Pho Sam Ton, Bang Pahan District, Phra Nakhon Si Ayutthaya 13220"
};
```

#### ตัวอย่าง CTA Buttons
```jsx
// ปุ่มโทรศัพท์
<a 
  href="tel:0924782591" 
  className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
>
  📞 โทร 092-478-2591
</a>

// ปุ่ม LINE
<a 
  href="https://line.me/ti/p/~keng2822" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
>
  💬 LINE
</a>

// ปุ่ม Facebook
<a 
  href="[URL]" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
>
  🌐 Facebook
</a>
```

#### CTA Section พร้อมพื้นหลังสี
```jsx
<div className="mt-12 text-center">
  <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-4">
      ยินดีให้บริการ 24 ชั่วโมง
    </h3>
    <p className="text-lg mb-6">
      โทรสอบถามหรือเรียกช่างได้ทันที
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* ปุ่ม CTA */}
    </div>
  </div>
</div>
```

### 6. รูปภาพ

#### โครงสร้างโฟลเดอร์
```
public/
  img/
    NK.ico          # Logo ร้าน
    bt01.png        # FB BATTERY
    bt02.png        # 3K BATTERY
    bt03.png        # GS BATTERY
    bt04.png        # BOLIDEN
    bt05.png        # BOSCH
    bt06.png        # Panasonic
    bt07.png        # PUMA BATTERY
    bt08.png        # VARTA
    [gallery images]
```

#### การใช้งานรูปภาพ
```jsx
// รูปภาพทั่วไป
<img 
  src="/img/NK.ico" 
  alt="โลโก้ NK แบตเตอรี่อยุธยา" 
  className="w-8 h-8 rounded-full"
/>

// Next.js Image component (สำหรับรูปสำคัญ)
import Image from 'next/image';

<Image
  src="/img/bt01.png"
  alt="แบตเตอรี่ FB BATTERY"
  width={200}
  height={100}
  className="object-contain"
/>
```

**สำคัญ:** Alt text ต้องเป็นภาษาไทยและอธิบายรูปชัดเจน

### 7. Navigation และ Smooth Scroll

#### ID สำหรับแต่ละ Section
```jsx
<section id="symptoms">...</section>
<section id="services">...</section>
<section id="brands">...</section>
<section id="gallery">...</section>
<section id="contact">...</section>
```

#### ลิงก์ในเมนู
```jsx
<a href="#symptoms" className="...">อาการแบตเสื่อม</a>
<a href="#services" className="...">บริการ</a>
```

#### Mobile Menu
```jsx
// ปิดเมนูเมื่อคลิกลิงก์
const closeMobileMenu = () => {
  setIsMobileMenuOpen(false);
};

<a 
  href="#services" 
  onClick={closeMobileMenu}
  className="..."
>
  บริการ
</a>
```

## 🎨 ตัวอย่าง Component Templates

### Section Template พื้นฐาน
```jsx
export default function SectionName() {
  return (
    <section id="section-name" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            หัวข้อหลัก
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            คำอธิบาย
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* การ์ดหรือเนื้อหา */}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="tel:0924782591" 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 inline-block"
          >
            📞 โทร 092-478-2591
          </a>
        </div>
      </div>
    </section>
  );
}
```

### Card Component
```jsx
<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
  {/* Icon */}
  <div className="text-4xl mb-4 text-center">
    🚗
  </div>
  
  {/* Title */}
  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
    หัวข้อการ์ด
  </h3>
  
  {/* Description */}
  <p className="text-gray-600 text-center">
    คำอธิบาย
  </p>
</div>
```

### Feature Card พร้อมรูป
```jsx
<div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
  {/* Image */}
  <div className="mb-4">
    <img 
      src="/img/bt01.png" 
      alt="แบตเตอรี่ FB BATTERY"
      className="w-full h-24 object-contain mx-auto"
    />
  </div>
  
  {/* Title */}
  <div className="text-lg font-bold text-gray-800 mb-2 text-center">
    FB BATTERY
  </div>
  
  {/* Description */}
  <div className="text-sm text-gray-600 text-center">
    แบตเตอรี่รถยนต์ FB BATTERY
  </div>
</div>
```

## 📊 ข้อมูลสำคัญที่ใช้บ่อย

### แบรนด์แบตเตอรี่ทั้ง 8 ยี่ห้อ
```javascript
const batteryBrands = [
  {
    name: "FB BATTERY",
    description: "แบตเตอรี่รถยนต์ FB BATTERY",
    image: "/img/bt01.png"
  },
  {
    name: "3K BATTERY",
    description: "แบตเตอรี่รถยนต์ 3K BATTERY",
    image: "/img/bt02.png"
  },
  {
    name: "GS BATTERY",
    description: "แบตเตอรี่รถยนต์ GS BATTERY",
    image: "/img/bt03.png"
  },
  {
    name: "BOLIDEN",
    description: "แบตเตอรี่รถยนต์ BOLIDEN",
    image: "/img/bt04.png"
  },
  {
    name: "BOSCH",
    description: "แบตเตอรี่รถยนต์ BOSCH BATTERY",
    image: "/img/bt05.png"
  },
  {
    name: "Panasonic",
    description: "แบตเตอรี่รถยนต์ Panasonic",
    image: "/img/bt06.png"
  },
  {
    name: "PUMA BATTERY",
    description: "แบตเตอรี่รถยนต์ PUMA BATTERY",
    image: "/img/bt07.png"
  },
  {
    name: "VARTA",
    description: "แบตเตอรี่รถยนต์ VARTA BATTERY",
    image: "/img/bt08.png"
  }
];
```

### 6 อาการแบตเตอรี่เสื่อม
```javascript
const symptoms = [
  {
    icon: "🚗",
    title: "รถสตาร์ทติดยากกว่าที่เคยเป็น",
    description: "เมื่อสตาร์ทรถต้องกดสตาร์ทหลายครั้ง หรือใช้เวลานานกว่าปกติ"
  },
  {
    icon: "📢",
    title: "เสียงแตรรถเบากว่าปกติ",
    description: "เสียงแตรไม่ดังเท่าเดิม หรือเสียงเบาลงอย่างเห็นได้ชัด"
  },
  {
    icon: "💡",
    title: "ไฟหน้ารถสว่างลดน้อยลงไม่สว่างเท่าเดิม",
    description: "ไฟหน้าไม่สว่างเท่าที่ควรจะเป็น หรือแสงสลัวลง"
  },
  {
    icon: "⚡",
    title: "ระบบไฟในห้องโดยสารเริ่มมีความผิดปกติ",
    description: "ไฟในห้องโดยสารกระพริบ หรือทำงานไม่ปกติ"
  },
  {
    icon: "📅",
    title: "อายุการใช้งานแบตเตอรี่",
    description: "แบตเตอรี่มีอายุเกิน 2-3 ปี หรือใช้งานมานาน"
  },
  {
    icon: "🪟",
    title: "กระจกไฟฟ้า ทำงานช้าลง",
    description: "กระจกไฟฟ้าขึ้นลงช้าลง หรือไม่ทำงานอย่างที่เคยเป็น"
  }
];
```

### 5 บริการหลัก
```javascript
const services = [
  {
    icon: "🚗",
    title: "บริการในพื้นที่ จ. พระนครศรีอยุธยา และใกล้เคียง",
    description: "ถึงคุณภายใน 30 นาที เราให้คำปรึกษาตรวจเช็คสภาพแบตเตอรี่ฟรี และ เปลี่ยนแบตรถยนต์ ให้บริการตลอด 24 ชั่วโมง ไม่มีวันหยุด"
  },
  {
    icon: "⚡",
    title: "มีการสำรองไฟทุกครั้งก่อนการติดตั้ง",
    description: "เพื่อป้องกัน ไม่ให้เกิดความผิดปกติกับอุปกรณ์ไฟฟ้าในรถของคุณเช่น กล่อง ECU"
  },
  {
    icon: "🏪",
    title: "เรามีหน้าร้านบริการชัดเจน",
    description: "แบตเตอรี่จากบริษัทผู้ผลิตโดยตรง ลูกค้ามั่นใจได้ 100% ว่าท่านจะได้รับสินค้าของแท้แน่นอน มีการรับประกันทุกลูก ชั้นต่ำ 12 เดือนจากโรงงานผู้ผลิตโดยตรง"
  },
  {
    icon: "💳",
    title: "รับชำระโดยการโอนเงิน/เงินสดหน้างาน",
    description: "และชำระเงินผ่านบัตรเครดิตเพียงแจ้งล่วงหน้าก็ไม่ต้องควักเงินในกระเป๋า"
  },
  {
    icon: "🔧",
    title: "ลูกค้าสามารถเลือก เปลี่ยนแบตรถยนต์ อะไรก็ได้",
    description: "มีทุกรุ่น ทุกยี่ห้อพร้อมบริการ มีทั้งแบตใหม่แกะจากกล่อง และแบบมือสองสภาพดี ผ่านการตรวจเช็คจากทางร้าน สำหรับทางเลือกของลูกค้าที่มีงบจำกัด ราคาสบายกระเป๋า"
  }
];
```

## 🎯 เป้าหมายผู้ใช้งาน (User Persona)

เข้าใจกลุ่มเป้าหมายเพื่อการออกแบบที่เหมาะสม:

### กลุ่มเป้าหมายหลัก
1. **เจ้าของรถยนต์ที่มีปัญหาแบตเสื่อม** - ต้องการบริการด่วน
2. **คนทำงานที่ไม่มีเวลา** - ต้องการบริการถึงที่
3. **ผู้สูงอายุ** - ต้องการความสะดวกและอธิบายง่าย
4. **คนที่ไม่เข้าใจเทคนิค** - ต้องการข้อมูลเข้าใจง่าย

### พฤติกรรมที่สำคัญ
- มักใช้มือถือค้นหา (Mobile-first!)
- ต้องการโทรหรือไลน์ทันที (CTA ต้องเด่น)
- ต้องการรู้ว่าร้านอยู่ไหน (แผนที่สำคัญ)
- ต้องการมั่นใจว่าของแท้ (แสดงแบรนด์และการรับประกัน)

## ✅ Checklist สำหรับทุกงาน

เมื่อสร้างหรือแก้ไข Component ให้ตรวจสอบ:

### การเขียนโค้ด
- [ ] ใช้ Functional Component
- [ ] Export เป็น default
- [ ] ใช้ Tailwind classes เท่านั้น
- [ ] ไม่มี inline styles
- [ ] ไม่มี CSS แบบเดิม

### Responsive
- [ ] ทดสอบบนมือถือ (320px - 768px)
- [ ] ทดสอบบนแท็บเล็ต (768px - 1024px)
- [ ] ทดสอบบนคอมพิวเตอร์ (1024px+)
- [ ] ใช้ Mobile-first approach

### UX/UI
- [ ] ปุ่ม CTA มีพื้นหลังสีชัดเจน
- [ ] ทุกปุ่มและลิงก์มี hover effect
- [ ] ใช้ transition เพื่อความนุ่มนวล
- [ ] ขนาดตัวอักษรอ่านง่าย
- [ ] Contrast สีเหมาะสม

### เนื้อหา
- [ ] ข้อความเป็นภาษาไทยทั้งหมด
- [ ] ใช้ Emoji ที่เหมาะสม
- [ ] มี CTA อย่างน้อย 1 ปุ่ม
- [ ] ข้อมูลติดต่อถูกต้อง

### รูปภาพ
- [ ] มี alt text เป็นภาษาไทย
- [ ] ใช้ path ถูกต้อง (/img/...)
- [ ] Optimize ขนาดไฟล์

### Accessibility
- [ ] มี semantic HTML (section, article, nav)
- [ ] ลิงก์ที่เปิดหน้าใหม่มี rel="noopener noreferrer"
- [ ] ปุ่มที่ไม่มีข้อความมี aria-label

## 🚫 สิ่งที่ต้องหลีกเลี่ยง

### อย่าทำ
❌ ใช้ TypeScript  
❌ ใช้ Class Components  
❌ เขียน inline styles  
❌ เขียน CSS แบบเดิม  
❌ ใช้ styled-components  
❌ ฮาร์ดโค้ดข้อมูลที่ซ้ำ (ใช้ array/object แทน)  
❌ ลืมใส่ responsive classes  
❌ ลืมใส่ hover effect  
❌ ใช้ภาษาอังกฤษในเนื้อหา  
❌ ทิ้งปุ่ม CTA  

### ควรทำ
✅ ใช้ Tailwind utility classes  
✅ ใช้ Functional Components  
✅ เขียน responsive ทุกครั้ง  
✅ ใส่ hover effect ทุกปุ่ม  
✅ ใช้ภาษาไทยทั้งหมด  
✅ ใส่ CTA ที่สำคัญ  
✅ ใส่ semantic HTML  
✅ ใส่ alt text รูปภาพ  
✅ ทดสอบบน Mobile  

## 💡 เคล็ดลับการพัฒนา

### Performance
- ใช้ Next.js Image component สำหรับรูปที่ใหญ่
- Lazy load รูปภาพใน Gallery
- ลดจำนวน re-render ด้วย useMemo/useCallback (ถ้าจำเป็น)

### SEO
- ใส่ meta tags ใน _document.js
- ใช้ semantic HTML
- Alt text ครบทุกรูป
- URL-friendly ID สำหรับ sections

### User Experience
- โฟกัสที่ความเร็วในการติดต่อ (ปุ่ม CTA ต้องเด่น)
- แสดงที่อยู่และแผนที่ชัดเจน
- สร้างความเชื่อมั่น (แสดงแบรนด์, การรับประกัน, หน้าร้าน)
- ง่ายต่อการใช้งานบนมือถือ

## 📚 แหล่งข้อมูลเพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

---

**สร้างโดย AI สำหรับ NK แบตเตอรี่อยุธยา**  
**วันที่สร้าง:** 28 กุมภาพันธ์ 2026
