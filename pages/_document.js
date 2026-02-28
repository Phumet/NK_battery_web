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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
