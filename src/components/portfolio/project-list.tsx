import { ProjectCard } from "./project-card";
import { projects } from "@/data/projects";

export function ProjectList() {
  return (
    <section className="py-12 w-full max-w-5xl mx-auto">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Meus Projetos</h2>
        <p className="text-muted-foreground">
          Confira alguns dos projetos em que estive trabalhando.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}