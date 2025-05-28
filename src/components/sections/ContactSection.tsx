import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { socialLinks } from "@/constants/bandData";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">
          Связаться с нами
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Следите за нашими новостями и не пропускайте новые релизы
        </p>
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              size="lg"
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-800/50"
              asChild
            >
              <a href={link.href}>
                <Icon name={link.icon as any} size={24} />
              </a>
            </Button>
          ))}
        </div>
        <div className="border-t border-purple-500/20 pt-8">
          <p className="text-gray-400">
            © 2024 АУДИОПРОЕКТОР. Все права защищены.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
