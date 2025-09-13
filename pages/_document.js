import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="th" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="description" content="NK แบตเตอรี่อยุธยา - บริการเปลี่ยนแบตเตอรี่รถยนต์ 24 ชั่วโมง รวดเร็ว ราคาย่อมเยา ถึงที่ทั่วเมือง" />
        <meta name="keywords" content="เปลี่ยนแบตเตอรี่, แบตเตอรี่รถยนต์, อยุธยา, บริการ 24 ชั่วโมง, ช่างเก่ง" />
        <meta property="og:title" content="NK แบตเตอรี่อยุธยา - บริการเปลี่ยนแบตเตอรี่รถยนต์ 24 ชั่วโมง" />
        <meta property="og:description" content="รวดเร็ว ราคาย่อมเยา ถึงที่ทั่วเมือง! โทร 0924782591" />
        <meta property="og:image" content="/img/NK.ico" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NK แบตเตอรี่อยุธยา" />
        <meta name="twitter:description" content="บริการเปลี่ยนแบตเตอรี่รถยนต์ 24 ชั่วโมง" />
        <meta name="twitter:image" content="/img/NK.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
