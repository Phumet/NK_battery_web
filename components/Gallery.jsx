export default function Gallery() {
  const images = [
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex01.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ 3K BATTERY",
      title: "เปลี่ยนแบตเตอรี่ 3K BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ 3K BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex02.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ FB BATTERY",
      title: "เปลี่ยนแบตเตอรี่ FB BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ FB BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex03.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ GS BATTERY",
      title: "เปลี่ยนแบตเตอรี่ GS BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ GS BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex04.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ GB BATTERY",
      title: "เปลี่ยนแบตเตอรี่ GB BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ GB BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex05.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ FB BATTERY",
      title: "เปลี่ยนแบตเตอรี่ FB BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ FB BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex06.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ 3K BATTERY",
      title: "เปลี่ยนแบตเตอรี่ 3K BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ 3K BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex07.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ GS BATTERY",
      title: "เปลี่ยนแบตเตอรี่ GS BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ GS BATTERY"
    },
    {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/img/ex08.png`,
      alt: "เปลี่ยนแบตเตอรี่รถยนต์ 3K BATTERY",
      title: "เปลี่ยนแบตเตอรี่ 3K BATTERY",
      description: "บริการเปลี่ยนแบตเตอรี่รถยนต์ยี่ห้อ 3K BATTERY"
    }
  ];

  return (
    <section id="gallery" className="p-8 text-center bg-gray-50">
      <h3 className="text-3xl font-bold text-primary mb-8">รูปตัวอย่างผลงาน</h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        ดูผลงานการบริการเปลี่ยนแบตเตอรี่รถยนต์ของเรา รับประกันคุณภาพและความพึงพอใจ
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
              <div className="text-center">
                <h4 className="text-white font-bold text-sm md:text-base mb-1">
                  {img.title}
                </h4>
                <p className="text-white/90 text-xs md:text-sm">
                  {img.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="tel:0924782591" 
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          🔧 โทรสอบถาม 092-478-2591
        </a>
        <a 
          href="https://line.me/ti/p/~keng2822" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          💬 LINE: 0924782591
        </a>
      </div>
    </section>
  );
}
