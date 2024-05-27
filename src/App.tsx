import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroBackground from "./components/HeroBackground";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import WhySection from "./components/WhySection";
import WorkSection from "./components/WorkSection";

const App = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroBackground />
      <Navbar />
      <div className="max-w-[1280px] px-4">
        <HeroSection />
        <AboutSection />
        <WhySection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;
