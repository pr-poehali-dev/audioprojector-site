import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MusicSection from "@/components/sections/MusicSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ContactSection />
    </div>
  );
};

export default Index;
