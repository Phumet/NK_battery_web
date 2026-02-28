export default function Brands() {
  const brands = [
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

  return (
    <section id="brands" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            ให้คำปรึกษาการเลือกแบตเตอรี่รถยนต์ที่เหมาะกับการใช้งาน
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            พร้อมแบรนด์แบตเตอรี่รถยนต์ยี่ห้อชั้นนำ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
            >
              <div className="mb-4">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-24 object-contain mx-auto"
                />
              </div>
              <div className="text-lg font-bold text-gray-800 mb-2">
                {brand.name}
              </div>
              <div className="text-sm text-gray-600">
                {brand.description}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">มีแบตเตอรี่ทุกรุ่น ทุกยี่ห้อ</h3>
            <p className="text-lg mb-6">ทั้งแบตใหม่แกะจากกล่อง และแบบมือสองสภาพดี ผ่านการตรวจเช็คจากทางร้าน</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0924782591" 
                className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                📞 โทรสอบถาม 092-478-2591
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
