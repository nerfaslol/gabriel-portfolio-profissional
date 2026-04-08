import { ProjectCard } from './project-card'
import { LessonPlanCard } from './lesson-plan-card'
import { projects } from '@/data/projects'
import { lessonPlan } from '@/data/lesson-plan'
import { FadeInView } from '@/components/fade-in-view'

export function ProjectList() {
  const hasProjects = projects && projects.length > 0

  return (
    <section
      className="mx-auto w-full max-w-[1600px] px-4 py-18 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      aria-labelledby="projects-heading"
    >
      {/* Cabeçalho da seção */}
      <div className="mb-12 flex flex-col gap-5 text-left sm:mb-14 lg:mb-16 xl:grid xl:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] xl:items-end xl:gap-10">
        <div className="space-y-5">
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tightest sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            Meus Projetos
          </h2>
        </div>
        <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          Confira alguns dos projetos em que estive trabalhando recentemente.
        </p>
      </div>

      {/* Projeto principal — plano de aula */}
      <FadeInView className="mb-12 sm:mb-14 lg:mb-16">
        <LessonPlanCard plan={lessonPlan} />
      </FadeInView>

      {/* Separador */}
      <div className="mb-8 sm:mb-10">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground sm:text-xs">
          Outros projetos
        </p>
      </div>

      {/* Grid de projetos simples */}
      {hasProjects ? (
        <FadeInView delay="delay-100">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 2xl:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </FadeInView>
      ) : (
        <div className="rounded-3xl border-2 border-dashed border-border/60 bg-muted/20 py-18 text-center sm:py-24">
          <div className="mx-auto max-w-[400px] space-y-4 px-6">
            <p className="text-xl font-bold tracking-tightest text-muted-foreground">
              Nenhum projeto encontrado.
            </p>
            <p className="text-sm font-medium leading-relaxed text-muted-foreground/60">
              Fique atento! Novas atualizações e projetos incríveis em breve.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
