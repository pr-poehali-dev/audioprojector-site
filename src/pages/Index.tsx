import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight font-montserrat">
            АУДИОПРОЕКТОР
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
            Электронная музыка нового поколения
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

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
            О группе
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                АУДИОПРОЕКТОР — это инновационный проект, объединяющий
                классическую электронную музыку с современными звуковыми
                технологиями. Мы создаём атмосферные композиции, которые
                переносят слушателя в мир звуковых ландшафтов.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Наша музыка — это симфония синтезаторов, ритмичные биты и
                мелодические структуры, создающие уникальное звучание для нового
                поколения меломанов.
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
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
                    <p className="text-purple-200">Лет творчества</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                    <p className="text-purple-200">Треков</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">3</h3>
                    <p className="text-purple-200">Альбома</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      100k+
                    </h3>
                    <p className="text-purple-200">Прослушиваний</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
            Наша музыка
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Music" size={48} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Звуковые Волны
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Дебютный альбом 2019
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Первый альбом группы, определивший наше уникальное звучание.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-400 text-purple-200 hover:bg-purple-800/50"
                >
                  <Icon name="Play" size={16} />
                  Слушать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Radio" size={48} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Цифровые Мечты
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Альбом 2021
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Эволюция нашего звука в мире цифровых технологий.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-400 text-purple-200 hover:bg-purple-800/50"
                >
                  <Icon name="Play" size={16} />
                  Слушать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Headphones" size={48} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Нейронные Сети
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Новый альбом 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Наше видение будущего электронной музыки.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-400 text-purple-200 hover:bg-purple-800/50"
                >
                  <Icon name="Play" size={16} />
                  Слушать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">
            Связаться с нами
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Следите за нашими новостями и не пропускайте новые релизы
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button
              size="lg"
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-800/50"
            >
              <Icon name="Instagram" size={24} />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-800/50"
            >
              <Icon name="Youtube" size={24} />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-800/50"
            >
              <Icon name="Music" size={24} />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-800/50"
            >
              <Icon name="Mail" size={24} />
            </Button>
          </div>
          <div className="border-t border-purple-500/20 pt-8">
            <p className="text-gray-400">
              © 2024 АУДИОПРОЕКТОР. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
