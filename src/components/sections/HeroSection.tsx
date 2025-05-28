import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { bandInfo } from "@/constants/bandData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight font-montserrat">
          {bandInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
          {bandInfo.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            <Icon name="Play" size={20} />
            Слушать музыку
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-200 hover:bg-purple-800/50 px-8 py-3"
          >
            <Icon name="Calendar" size={20} />
            Концерты
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-purple-300" />
      </div>
    </section>
  );
};

export default HeroSection;
