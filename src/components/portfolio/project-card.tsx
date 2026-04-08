import type { Project } from "@/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={project.imageUrl} 
          alt={`Screenshot of ${project.title}`} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        {project.liveUrl && (
          <Button variant="default" size="sm" render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
            Acessar
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" size="sm" render={<a href={project.repoUrl} target="_blank" rel="noopener noreferrer" />}>
            Repositório
          </Button>
        )}
        {!project.liveUrl && !project.repoUrl && (
          <span className="text-xs text-muted-foreground font-medium">Em desenvolvimento</span>
        )}
      </CardFooter>
    </Card>
  );
}