import type { Project } from '@/types/project'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
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
    <Card className="group flex h-full flex-col overflow-hidden border-border/40 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/20">
      {/* Project Image Placeholder/Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/50 sm:aspect-video">
        <img
          src={project.imageUrl}
          alt={`Captura de tela do projeto: ${project.title}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src =
              'https://placehold.co/600x400?text=Imagem+indispon%C3%ADvel'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <CardHeader className="space-y-2 p-5 pb-4 sm:p-6 sm:pb-4 lg:p-7 lg:pb-4">
        <CardTitle
          className="line-clamp-2 text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl xl:text-[1.35rem]"
          title={project.title}
        >
          {project.title}
        </CardTitle>
        <CardDescription className="min-h-[4.5rem] text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem] xl:min-h-[4.75rem]">
          {project.description || 'Sem descrição disponível para este projeto.'}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow px-5 pb-5 pt-0 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
        <div
          className="flex flex-wrap gap-2.5"
          aria-label="Tecnologias utilizadas"
        >
          {project.tags.length > 0 ? (
            project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex min-h-8 items-center rounded-full border border-border/50 bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground sm:min-h-9 sm:text-[11px]"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-muted-foreground italic">
              Sem tags
            </span>
          )}
        </div>
      </CardContent>

      {/* Action Buttons */}
      <CardFooter className="flex flex-col gap-3 p-5 pt-0 sm:p-6 sm:pt-0 lg:flex-row lg:p-7 lg:pt-0">
        {project.liveUrl ? (
          <Button
            variant="default"
            size="lg"
            className="min-h-11 w-full flex-1 font-semibold transition-all active:scale-95"
            render={
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar projeto online: ${project.title}`}
              />
            }
          >
            Acessar
          </Button>
        ) : null}

        {project.repoUrl ? (
          <Button
            variant="outline"
            size="lg"
            className="min-h-11 w-full flex-1 border-border/60 font-semibold transition-all hover:bg-accent/50 active:scale-95"
            render={
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver repositório do projeto: ${project.title}`}
              />
            }
          >
            Repositório
          </Button>
        ) : null}

        {!project.liveUrl && !project.repoUrl && (
          <div className="flex min-h-11 w-full items-center justify-center rounded-lg border-2 border-dashed bg-muted/20 px-3 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
            Em desenvolvimento
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
