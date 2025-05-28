import AlbumCard from "@/components/AlbumCard";
import { albums } from "@/constants/bandData";

const MusicSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
          Наша музыка
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              year={album.year}
              description={album.description}
              icon={album.icon}
              gradient={album.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
