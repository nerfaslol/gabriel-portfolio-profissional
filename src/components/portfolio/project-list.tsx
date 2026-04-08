import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

/**
 * ProjectList Component
 * 
 * Renders a grid of project cards.
 * Polished:
 * - High-impact grid layout (2 columns for desktop).
 * - Sophisticated empty state.
 * - Proper visual rhythm (py-24).
 */
export function ProjectList() {
  const hasProjects = projects && projects.length > 0;

  return (
    <section className="py-24 md:py-32 w-full max-w-6xl mx-auto px-6" aria-labelledby="projects-heading">
      <div className="flex flex-col gap-6 mb-16 text-center md:text-left">
        <h2 id="projects-heading" className="text-4xl font-bold tracking-tightest sm:text-5xl">
          Meus Projetos
        </h2>
        <div className="h-1.5 w-20 bg-primary rounded-full hidden md:block" />
        <p className="text-muted-foreground text-lg sm:text-xl max-w-[50ch] leading-relaxed">
          Confira alguns dos projetos em que estive trabalhando recentemente.
        </p>
      </div>

      {hasProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20 border-border/60">
          <div className="max-w-[400px] mx-auto space-y-4">
            <p className="text-xl font-bold text-muted-foreground tracking-tightest">
              Nenhum projeto encontrado.
            </p>
            <p className="text-sm text-muted-foreground/60 leading-relaxed font-medium">
              Fique atento! Novas atualizações e projetos incríveis em breve.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
