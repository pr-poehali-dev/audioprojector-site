import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AlbumCardProps {
  title: string;
  year: string;
  description: string;
  icon: string;
  gradient: string;
}

const AlbumCard = ({
  title,
  year,
  description,
  icon,
  gradient,
}: AlbumCardProps) => {
  return (
    <Card className="bg-slate-800/80 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
      <CardHeader>
        <div
          className={`w-full h-48 bg-gradient-to-br ${gradient} rounded-lg mb-4 flex items-center justify-center`}
        >
          <Icon name={icon as any} size={48} className="text-white" />
        </div>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
        <CardDescription className="text-purple-200">{year}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
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
  );
};

export default AlbumCard;
