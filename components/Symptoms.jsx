export default function Symptoms() {
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

  return (
    <section id="symptoms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            6 อาการบอกเหตุแบตเสื่อม
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            เมื่อใดก็ตามที่เกิดอาการเหล่านี้ขึ้น ให้คุณเตรียมตัว เปลี่ยนแบตรถยนต์ ลูกใหม่ได้เลย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4 text-center">{symptom.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                {symptom.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {symptom.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary text-white rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">รถมีปัญหาปรึกษา เรียกช่างด่วนถึงที่</h3>
            <p className="text-lg mb-4">โทรติดต่อกดได้เลย</p>
            <a 
              href="tel:0924782591" 
              className="bg-accent hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200 inline-block"
            >
              📞 092-478-2591
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
