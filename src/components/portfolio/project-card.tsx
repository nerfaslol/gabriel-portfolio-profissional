import type { Project } from "@/types/project";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * 
 * Renders an individual project as a card.
 * Polished for excellence:
 * - Subtle hover effects (lift + shadow + ring).
 * - Optical alignment of text and icons.
 * - Precise spacing (p-6).
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/20 bg-card group border-border/40">
      {/* Project Image Placeholder/Thumbnail */}
      <div className="aspect-video w-full overflow-hidden bg-muted/50 relative">
        <img 
          src={project.imageUrl} 
          alt={`Captura de tela do projeto: ${project.title}`} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Imagem+indispon%C3%ADvel";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <CardHeader className="p-6 pb-4 space-y-1.5">
        <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 truncate" title={project.title}>
          {project.title}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3 min-h-[4.5rem]">
          {project.description || "Sem descrição disponível para este projeto."}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow p-6 pt-0 pb-6">
        <div className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.tags.length > 0 ? (
            project.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold rounded-full bg-secondary text-secondary-foreground border border-border/50 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-muted-foreground italic">Sem tags</span>
          )}
        </div>
      </CardContent>

      {/* Action Buttons */}
      <CardFooter className="p-6 pt-0 gap-3">
        {project.liveUrl ? (
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1 font-semibold transition-all active:scale-95"
            render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Acessar projeto online: ${project.title}`} />}
          >
            Acessar
          </Button>
        ) : null}
        
        {project.repoUrl ? (
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 font-semibold border-border/60 hover:bg-accent/50 transition-all active:scale-95"
            render={<a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório do projeto: ${project.title}`} />}
          >
            Repositório
          </Button>
        ) : null}

        {!project.liveUrl && !project.repoUrl && (
          <div className="w-full py-2.5 text-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40 border-2 rounded-lg border-dashed bg-muted/20">
            Em desenvolvimento
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
