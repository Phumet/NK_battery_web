import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img 
          src="/img/NK.ico" 
          alt="NK Battery Icon" 
          className="w-8 h-8 rounded-full"
        />
        <h1 className="text-lg md:text-xl font-bold text-accent">NK_แบตเตอรี่อยุธยา</h1>
      </div>
      
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#" className="hover:text-accent transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10">หน้าหลัก</a></li>
        <li><a href="#symptoms" className="hover:text-accent transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10">อาการแบตเสื่อม</a></li>
        <li><a href="#services" className="hover:text-accent transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10">บริการ</a></li>
        <li><a href="#brands" className="hover:text-accent transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10">ยี่ห้อแบตเตอรี่</a></li>
        <li><a href="#gallery" className="hover:text-accent transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10">ผลงาน</a></li>
        <li><a href="#contact" className="hover:text-accent transition-colors duration-200 py-2 px-3 rounded hover:bg-white/10">ติดต่อ</a></li>
      </ul>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="text-white hover:text-accent transition-colors duration-200 p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary shadow-lg md:hidden z-40">
          <ul className="flex flex-col py-4">
            <li>
              <a 
                href="#" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
              >
                หน้าหลัก
              </a>
            </li>
            <li>
              <a 
                href="#symptoms" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
              >
                อาการแบตเสื่อม
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
              >
                บริการ
              </a>
            </li>
            <li>
              <a 
                href="#brands" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
              >
                ยี่ห้อแบตเตอรี่
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
              >
                ผลงาน
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
              >
                ติดต่อ
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
