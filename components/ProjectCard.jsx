import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const ProjectCard = ({ title, description, technologies, liveUrl, image, colorIndex = 0 }) => {
  const colorGradients = [
    'from-blue-500/30 via-purple-500/20 to-pink-500/30',
    'from-purple-500/30 via-pink-500/20 to-rose-500/30',
    'from-green-500/30 via-cyan-500/20 to-blue-500/30',
    'from-orange-500/30 via-yellow-500/20 to-green-500/30',
  ];

  const gradient = colorGradients[colorIndex % colorGradients.length];

  return (
    <div className="group relative overflow-hidden rounded-lg border-2 border-border bg-gradient-to-br from-card to-card/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-muted relative">
          <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
            <span className="text-5xl group-hover:scale-125 transition-transform duration-300">{image}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-foreground font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {liveUrl && (
          <Button
            variant="default"
            size="sm"
            asChild
            className="w-full"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

