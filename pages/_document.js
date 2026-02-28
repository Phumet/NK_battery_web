import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="th" className="scroll-smooth">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        
        {/* Primary Meta Tags */}
        <meta name="description" content="NK แบตเตอรี่อยุธยา - บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่ 24 ชั่วโมง พระนครศรีอยุธยา บางปะหัน ราคาถูก มีหน้าร้าน แบตครบทุกยี่ห้อ โทร 092-478-2591 ช่างเก่ง" />
        <meta name="keywords" content="เปลี่ยนแบตเตอรี่อยุธยา, แบตเตอรี่รถยนต์อยุธยา, บริการแบตเตอรี่ 24 ชั่วโมง, เปลี่ยนแบตถึงที่อยุธยา, แบตเตอรี่บางปะหัน, ช่างแบตอยุธยา, FB BATTERY, 3K BATTERY, GS BATTERY, BOSCH, Panasonic, แบตรถยนต์, ช่างเก่ง 0924782591, แบตเตอรี่ราคาถูก, เปลี่ยนแบตนอกสถานที่" />
        <meta name="author" content="NK แบตเตอรี่อยุธยา" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#228B22" />
        
        {/* Geo Tags สำหรับ Local SEO */}
        <meta name="geo.region" content="TH-14" />
        <meta name="geo.placename" content="พระนครศรีอยุธยา" />
        <meta name="geo.position" content="14.435540;100.542060" />
        <meta name="ICBM" content="14.435540, 100.542060" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:site_name" content="NK แบตเตอรี่อยุธยา" />
        <meta property="og:title" content="NK แบตเตอรี่อยุธยา - บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่ 24 ชั่วโมง" />
        <meta property="og:description" content="บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ พระนครศรีอยุธยา ถึงที่ภายใน 30 นาที ราคาย่อมเยา มีหน้าร้าน แบตครบทุกยี่ห้อ รับประกันคุณภาพ โทร 092-478-2591" />
        <meta property="og:image" content="/img/NK.ico" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:phone_number" content="+66924782591" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NK แบตเตอรี่อยุธยา - บริการ 24 ชั่วโมง" />
        <meta name="twitter:description" content="เปลี่ยนแบตเตอรี่รถยนต์ถึงที่ พระนครศรีอยุธยา โทร 092-478-2591" />
        <meta name="twitter:image" content="/img/NK.ico" />
        
        {/* Preconnect สำหรับ Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nk-battery-web.vercel.app/" />
        
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://nk-battery-web.vercel.app/#organization",
              "name": "NK แบตเตอรี่อยุธยา",
              "alternateName": "NK Battery Ayutthaya",
              "description": "บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ 24 ชั่วโมง ในพื้นที่จังหวัดพระนครศรีอยุธยา และใกล้เคียง ราคาย่อมเยา มีหน้าร้าน รับประกันคุณภาพ",
              "image": "https://nk-battery-web.vercel.app/img/NK.ico",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nk-battery-web.vercel.app/img/NK.ico"
              },
              "url": "https://nk-battery-web.vercel.app/",
              "telephone": "+66924782591",
              "priceRange": "฿฿",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "โพธิ์สามต้น 3",
                "addressLocality": "Bang Pahan",
                "addressRegion": "Phra Nakhon Si Ayutthaya",
                "postalCode": "13220",
                "addressCountry": "TH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "14.435540",
                "longitude": "100.542060"
              },
              "openingHoursSpecification": {
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
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+66924782591",
                "contactType": "customer service",
                "areaServed": "TH",
                "availableLanguage": ["Thai"]
              },
              "sameAs": [
                "https://www.facebook.com/p/NK-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2-0924782591-100057278176698/?locale=th_TH",
                "https://line.me/ti/p/~keng2822"
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "14.435540",
                  "longitude": "100.542060"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "บริการแบตเตอรี่รถยนต์",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "เปลี่ยนแบตเตอรี่รถยนต์",
                      "description": "บริการเปลี่ยนแบตเตอรี่รถยนต์ถึงที่ ครบทุกยี่ห้อ"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ตรวจเช็คแบตเตอรี่ฟรี",
                      "description": "ตรวจสอบสภาพแบตเตอรี่รถยนต์ฟรี ไม่มีค่าใช้จ่าย"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "บริการฉุกเฉิน 24 ชั่วโมง",
                      "description": "บริการเปลี่ยนแบตเตอรี่รถยนต์ฉุกเฉิน ตลอด 24 ชั่วโมง"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "หน้าหลัก",
                  "item": "https://nk-battery-web.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "อาการแบตเสื่อม",
                  "item": "https://nk-battery-web.vercel.app/#symptoms"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "บริการ",
                  "item": "https://nk-battery-web.vercel.app/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "ยี่ห้อแบตเตอรี่",
                  "item": "https://nk-battery-web.vercel.app/#brands"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "ติดต่อ",
                  "item": "https://nk-battery-web.vercel.app/#contact"
                }
              ]
            })
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://nk-battery-web.vercel.app/#organization",
              "name": "NK แบตเตอรี่อยุธยา",
              "url": "https://nk-battery-web.vercel.app/",
              "logo": "https://nk-battery-web.vercel.app/img/NK.ico",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+66924782591",
                "contactType": "customer service",
                "areaServed": "TH",
                "availableLanguage": "Thai"
              },
              "sameAs": [
                "https://www.facebook.com/p/NK-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2-0924782591-100057278176698/?locale=th_TH",
                "https://line.me/ti/p/~keng2822"
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
