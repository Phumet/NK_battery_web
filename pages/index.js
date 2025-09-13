import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Symptoms from "../components/Symptoms";
import Services from "../components/Services";
import Brands from "../components/Brands";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Symptoms />
      <Services />
      <Brands />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
