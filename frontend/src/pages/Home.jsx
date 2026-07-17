import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IngredientInput from "../components/IngredientInput";
import Features from "../components/Features";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FCF8F2] text-[#143D2A]">

      {/* Background Glow */}

      {/* Top Left Green Glow */}
      <div className="absolute -top-20 -left-40 h-[500px] w-[500px] rounded-full bg-[#4CAF50]/10 blur-[200px]" />

      {/* Top Right Golden Glow */}
      <div className="absolute top-10 -right-40 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Center Soft Cream Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#FFF8E7]/50 blur-[220px]" />

      {/* Bottom Left Green Glow */}
      <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-[#8BC34A]/10 blur-[180px]" />

      {/* Bottom Right Gold Glow */}
      <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full bg-[#E6C65B]/10 blur-[200px]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-10  pb-8">

        {/* Hero */}
        <Hero />

        {/* Generator */}
        <section
          id="generator"
            className="max-w-6xl mx-auto  px-6 pt-30 pb-8"

        >
          <IngredientInput />
        </section>

        {/* Features */}
        <section
          id="features"
          className="py-15 pb-8"
        >
          <Features />
        </section>

        {/* About */}
        <section
          id="about"
          className="py-20 pb-8"
        >
          <About />
        </section>

        {/* Footer */}
        <Footer />

      </main>

    </div>
  );
}

export default Home;