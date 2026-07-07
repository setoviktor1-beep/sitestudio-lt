import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import CookieBanner from "@/components/ui/CookieBanner";
import StructuredData from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <StructuredData />
    </>
  );
}
