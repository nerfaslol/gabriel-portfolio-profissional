import { Link } from 'react-router-dom'

import { ProjectCard } from './project-card'
import { projects } from '@/data/projects'
import { lessonPlan } from '@/data/lesson-plan'
import { FadeInView } from '@/components/fade-in-view'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ProjectList() {
  const hasProjects = projects && projects.length > 0

  return (
    <section
      className="mx-auto w-full max-w-[1600px] px-4 py-18 sm:px-6 sm:py-24 lg:px-10 lg:py-28"
      aria-labelledby="projects-heading"
    >
      {/* Cabeçalho da seção */}
      <div className="mb-12 flex flex-col gap-5 text-left sm:mb-14 lg:mb-16 xl:grid xl:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] xl:items-end xl:gap-10">
        <div>
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

      {/* Grid unificado: projeto principal primeiro, depois os demais */}
      <FadeInView>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 2xl:gap-12">
          {/* Card do projeto principal — plano de aula */}
          <Card className="group flex h-full flex-col overflow-hidden border-primary/30 bg-background shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-stretch">
              {/* Texto */}
              <div className="flex flex-1 flex-col">
                <CardHeader className="space-y-2 p-5 pb-3 sm:p-6 sm:pb-3 lg:p-7 lg:pb-3">
                  <CardTitle className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {lessonPlan.title}
                  </CardTitle>
                  <p className="text-xs font-semibold text-muted-foreground/70">
                    {lessonPlan.targetAudience} · {lessonPlan.duration}
                  </p>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                    {lessonPlan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 p-5 pt-2 sm:p-6 sm:pt-2 lg:p-7 lg:pt-2">
                  <div className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
                    {lessonPlan.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex min-h-10 items-center rounded-full border border-border/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-3 sm:p-6 sm:pt-3 lg:p-7 lg:pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-h-10 gap-2 bg-transparent"
                    render={<Link to="/aula" aria-label="Ver plano de aula completo" />}
                  >
                    Ver Plano de Aula
                  </Button>
                </CardFooter>
              </div>

              {/* Imagem à direita */}
              {lessonPlan.imageUrl && (
                <div className="shrink-0 self-center p-4 sm:w-56 sm:p-5 lg:w-72">
                  <img
                    src={lessonPlan.imageUrl}
                    alt={`Imagem do projeto: ${lessonPlan.title}`}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </Card>

          {/* Demais projetos */}
          {hasProjects &&
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </FadeInView>

      {!hasProjects && (
        <div className="mt-12 rounded-3xl border-2 border-dashed border-border/60 bg-muted/20 py-18 text-center sm:py-24">
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
