import { useState } from 'react'
import {
  BookOpen,
  Clock,
  ExternalLink,
  ImageOff,
  Lightbulb,
  Monitor,
  Sparkles,
  Users,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import type { LessonPlan } from '@/types/lesson-plan'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LessonPlanCardProps {
  plan: LessonPlan
}

export function LessonPlanCard({ plan }: LessonPlanCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="overflow-hidden rounded-2xl border border-border/70 bg-background shadow-xs">
      {/* Image */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted/40 sm:aspect-[3/1]">
        {!imageError && plan.imageUrl ? (
          <img
            src={plan.imageUrl}
            alt={`Imagem do projeto: ${plan.title}`}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-muted-foreground/20">
            <ImageOff className="size-10" />
            <p className="text-xs font-medium tracking-wide text-muted-foreground/30">
              Adicione uma imagem aqui
            </p>
          </div>
        )}

        {/* Badges sobrepostos na imagem */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-sm">
            <Sparkles className="size-3" />
            Projeto Principal
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 shadow-sm backdrop-blur-sm">
            <BookOpen className="size-3" />
            Plano de Aula
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8 space-y-3">
          <h3 className="text-2xl font-extrabold tracking-tightest sm:text-3xl lg:text-4xl">
            {plan.title}
          </h3>
          <p className="text-base font-semibold text-muted-foreground sm:text-lg">
            {plan.subtitle}
          </p>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <Clock className="size-3" />
              {plan.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <Users className="size-3" />
              {plan.targetAudience}
            </span>
          </div>

          <p className="max-w-[70ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
            {plan.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {plan.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column grid: Prerequisites + Setup */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Pré-requisitos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              Pré-requisitos
            </h4>
            <ul className="space-y-2">
              {plan.prerequisites.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* O que instalar */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              O que instalar
            </h4>
            <ul className="space-y-3">
              {plan.setup.map((item, i) => (
                <li key={i} className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Monitor className="size-3.5 shrink-0 text-muted-foreground/60" />
                    <span className="text-sm font-semibold text-foreground">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-2 hover:underline hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </span>
                  </div>
                  <p className="pl-5 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Agenda */}
        <div className="mb-8 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Agenda — Cronograma da Aula
          </h4>
          <div className="space-y-3">
            {plan.agenda.map((step, i) => (
              <div
                key={i}
                className={cn(
                  'rounded-xl border border-border/60 p-4 sm:p-5',
                  step.aiTip && 'border-primary/20 bg-primary/[0.03]'
                )}
              >
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] font-bold text-muted-foreground">
                    {step.time}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                {step.aiTip && (
                  <div className="mt-3 flex items-start gap-2 rounded-lg bg-primary/8 px-3 py-2.5">
                    <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                    <p className="text-xs leading-relaxed text-primary/80">
                      <span className="font-semibold">Dica de IA:</span>{' '}
                      {step.aiTip}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Exercícios */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Exercícios Práticos
          </h4>
          <ol className="space-y-2">
            {plan.exercises.map((ex, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-bold text-muted-foreground">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{ex}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Recursos */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Recursos e Referências
          </h4>
          <ul className="flex flex-wrap gap-2">
            {plan.resources.map((res, i) => (
              <li key={i}>
                {res.url ? (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    <ExternalLink className="size-3" />
                    {res.title}
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {res.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        {(plan.repoUrl || plan.liveUrl) && (
          <div className="flex flex-wrap gap-3 border-t border-border/60 pt-6">
            {plan.liveUrl && (
              <Button
                variant="default"
                size="sm"
                className="min-h-10 gap-2"
                render={
                  <a
                    href={plan.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acessar projeto: ${plan.title}`}
                  />
                }
              >
                <ExternalLink className="size-3.5" />
                Acessar
              </Button>
            )}
            {plan.repoUrl && (
              <Button
                variant="outline"
                size="sm"
                className="min-h-10 gap-2"
                render={
                  <a
                    href={plan.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver repositório: ${plan.title}`}
                  />
                }
              >
                <FaGithub className="size-3.5" />
                Repositório
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
