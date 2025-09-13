export default function Hero() {
  return (
    <section className="text-center p-12 bg-gradient-to-r from-primary to-accent text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">บริการเปลี่ยนแบตเตอรี่รถยนต์ 24 ชั่วโมง</h2>
      <p className="text-lg md:text-xl mb-8">รวดเร็ว ราคาย่อมเยา ถึงที่ทั่วเมือง!</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:0924782591" 
          className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-4 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
        >
          📞 โทรช่างเก่ง 092-478-2591
        </a>
        <a 
          href="https://line.me/ti/p/~keng2822" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
        >
          💬 LINE
        </a>
        <a 
          href="https://www.facebook.com/p/NK-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2-0924782591-100057278176698/?locale=th_TH" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
        >
          🌐 Facebook: NK_แบตเตอรี่อยุธยา
        </a>
      </div>
    </section>
  );
}
