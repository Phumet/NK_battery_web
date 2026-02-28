import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Symptoms from "../components/Symptoms";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from 'next/head';

export default function Home() {
  // Structured Data สำหรับ Local Business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://nk-battery-web.vercel.app",
    "name": "NK แบตเตอรี่อยุธยา - บริการเปลี่ยนแบตเตอรี่รถยนต์ 24 ชั่วโมง",
    "image": "https://nk-battery-web.vercel.app/img/NK.ico",
    "description": "บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ถึงที่ตลอด 24 ชั่วโมง ในพื้นที่จังหวัดพระนครศรีอยุธยา บางปะหัน และใกล้เคียง ช่างแบตมืออาชีพ มีหน้าร้านชัดเจน แบตครบทุกยี่ห้อ FB 3K GS BOSCH Panasonic รับประกันคุณภาพ ราคาย่อมเยา",
    "telephone": "+66924782591",
    "email": "nkbattery.ayutthaya@gmail.com",
    "url": "https://nk-battery-web.vercel.app",
    "logo": "https://nk-battery-web.vercel.app/img/NK.ico",
    "priceRange": "฿฿",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "โพธิ์สามต้น 3",
      "addressLocality": "บางปะหัน",
      "addressRegion": "พระนครศรีอยุธยา",
      "postalCode": "13220",
      "addressCountry": "TH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.435540",
      "longitude": "100.542060"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "พระนครศรีอยุธยา"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "บริการแบตเตอรี่รถยนต์",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่",
            "description": "บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ถึงที่ภายใน 30 นาที ตลอด 24 ชั่วโมง"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "แบตเตอรี่รถยนต์ทุกยี่ห้อ",
            "description": "จำหน่ายแบตเตอรี่รถยนต์ FB, 3K, GS, BOLIDEN, BOSCH, Panasonic, PUMA, VARTA",
            "brand": [
              {"@type": "Brand", "name": "FB BATTERY"},
              {"@type": "Brand", "name": "3K BATTERY"},
              {"@type": "Brand", "name": "GS BATTERY"},
              {"@type": "Brand", "name": "BOLIDEN"},
              {"@type": "Brand", "name": "BOSCH"},
              {"@type": "Brand", "name": "Panasonic"},
              {"@type": "Brand", "name": "PUMA BATTERY"},
              {"@type": "Brand", "name": "VARTA"}
            ]
          }
        }
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+66924782591",
      "contactType": "customer service",
      "availableLanguage": "Thai",
      "areaServed": "TH"
    },
    "sameAs": [
      "https://www.facebook.com/p/NK-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2-0924782591-100057278176698",
      "https://line.me/ti/p/~keng2822"
    ]
  };

  return (
    <>
      <Head>
        <title>เปลี่ยนแบตเตอรี่รถยนต์ อยุธยา บางปะหัน 24 ชม. ถึงที่ | NK แบตเตอรี่ 092-478-2591</title>
        <meta name="description" content="บริการเปลี่ยนแบตเตอรี่รถยนต์ พระนครศรีอยุธยา บางปะหัน ถึงที่ภายใน 30 นาที ตลอด 24 ชั่วโมง ช่างแบตมืออาชีพ ราคาถูก มีหน้าร้าน แบตครบทุกยี่ห้อ FB 3K GS BOSCH Panasonic VARTA รับประกันคุณภาพ โทร 092-478-2591 ช่างเก่ง NK แบตเตอรี่อยุธยา" />
        <link rel="canonical" href="https://nk-battery-web.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="bg-white text-gray-800">
        <Navbar />
        <Hero />
        <Symptoms />
        <Services />
        <Brands />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
