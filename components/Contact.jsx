export default function Contact() {
  return (
    <section id="contact" className="p-8 bg-accent/20 text-center">
      <h3 className="text-2xl font-bold text-primary mb-4">ติดต่อเรา</h3>
      <p className="mb-2">📞 0924782591 (ช่างเก่ง - เจ้าของร้าน)</p>
      <p className="mb-6">🏠 โพธิ์สามต้น 3, Tambon Pho Sam Ton, Bang Pahan District, Phra Nakhon Si Ayutthaya 13220</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
        <a 
          href="tel:0924782591" 
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          📞 ช่างเก่ง 0924782591
        </a>
        <a 
          href="https://line.me/ti/p/~keng2822" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          💬 LINE: 0924782591
        </a>
        <a 
          href="https://www.facebook.com/p/NK-%E0%B9%81%E0%B8%9A%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2-0924782591-100057278176698/?locale=th_TH" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          🌐 Facebook: NK_แบตเตอรี่อยุธยา
        </a>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <iframe
            title="Google Maps - NK Battery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.49091409865625!2d100.54206026059654!3d14.43554018833885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e20bc5e38ea58f%3A0x4375f65c5a162662!2z4Lij4LmJ4Liy4LiZ4LmB4Lia4LiV4LmA4LiV4Lit4Lij4Li14LmI4Lit4Lii4Li44LiY4Lii4LiyIDI0IOC4iuC4oS5fTksg4LmB4Lia4LiV4LmA4LiV4Lit4Lij4Li14LmI4Lit4Lii4Li44LiY4Lii4Liy!5e0!3m2!1sen!2sth!4v1757789028090!5m2!1sen!2sth"
            width="100%"
            height="450"
            className="rounded-xl shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
