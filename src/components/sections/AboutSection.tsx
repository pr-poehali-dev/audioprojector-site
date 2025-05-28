import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { bandInfo, bandStats } from "@/constants/bandData";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
          О группе
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {bandInfo.description}
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {bandInfo.mission}
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-purple-300 hover:text-white"
              >
                <Icon name="Music" size={18} />
                Наш стиль
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-purple-300 hover:text-white"
              >
                <Icon name="Users" size={18} />
                Участники
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="grid grid-cols-2 gap-6 text-center">
                {bandStats.map((stat, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-purple-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
