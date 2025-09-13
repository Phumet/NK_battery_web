export default function Services() {
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

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            บริการของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ตลอด 24 ชม. ไม่มีวันหยุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">ยินดีให้บริการด้วยความเต็มใจใส่ใจทุกคัน</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a 
                href="tel:0924782591" 
                className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                📞 โทร 092-478-2591
              </a>
              <a 
                href="https://line.me/ti/p/~keng2822" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                💬 LINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
