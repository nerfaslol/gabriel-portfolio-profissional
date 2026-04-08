import { useState } from 'react'
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  HelpCircle,
  ImageOff,
  Laptop,
  Lightbulb,
  MessageCircle,
  Monitor,
  School,
  Sparkles,
  Target,
  Terminal,
  Users,
  Wrench,
  Image as ImageIcon,
  GraduationCap,
  Heart,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import type { LessonPlan, LessonImage, LessonModality } from '@/types/lesson-plan'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LessonPlanCardProps {
  plan: LessonPlan
  modality: LessonModality
  onModalityChange: (modality: LessonModality) => void
}

/* ─── Image placeholder component ──────────────────────────────────── */
function LessonImageSlot({ image }: { image: LessonImage }) {
  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        className="w-full rounded-lg border border-border/50 object-cover"
        loading="lazy"
      />
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border-2 border-dashed border-border/40 bg-muted/20 px-4 py-3">
      <ImageIcon className="size-5 shrink-0 text-muted-foreground/40" />
      <p className="text-xs leading-relaxed text-muted-foreground/60">
        {image.placeholder}
      </p>
    </div>
  )
}

/* ─── Collapsible section ──────────────────────────────────────────── */
function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  badge,
}: {
  title: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  defaultOpen?: boolean
  badge?: string
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-xl border border-border/60 transition-colors">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-muted/30 sm:px-5"
      >
        <div className="flex items-center gap-2.5">
          <Icon className="size-4 text-muted-foreground/70" />
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            {title}
          </span>
          {badge && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
              {badge}
            </span>
          )}
        </div>
        {open ? (
          <ChevronUp className="size-4 text-muted-foreground/50" />
        ) : (
          <ChevronDown className="size-4 text-muted-foreground/50" />
        )}
      </button>
      {open && <div className="border-t border-border/40 px-4 py-4 sm:px-5">{children}</div>}
    </div>
  )
}

/* ─── Difficulty badge ─────────────────────────────────────────────── */
function DifficultyBadge({ level }: { level: string }) {
  const config = {
    fácil: { color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', label: 'Fácil' },
    médio: { color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400', label: 'Médio' },
    desafiador: { color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400', label: 'Desafiador' },
  }[level] ?? { color: 'bg-muted text-muted-foreground', label: level }

  return (
    <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider', config.color)}>
      {config.label}
    </span>
  )
}

/* ─── Main component ───────────────────────────────────────────────── */
export function LessonPlanCard({ plan, modality, onModalityChange }: LessonPlanCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="overflow-hidden rounded-2xl border border-border/70 bg-background shadow-xs">
      {/* Banner image */}
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

        {/* Overlaid badges */}
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

          {/* Modality toggle */}
          <div className="flex items-center gap-1 rounded-full border border-border/70 bg-muted/30 p-1 w-fit">
            <button
              type="button"
              onClick={() => onModalityChange('presencial')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200',
                modality === 'presencial'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <School className="size-3" />
              Presencial
            </button>
            <button
              type="button"
              onClick={() => onModalityChange('distancia')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200',
                modality === 'distancia'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Laptop className="size-3" />
              À Distância
            </button>
          </div>

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

        {/* ─── Objetivos de aprendizagem ─────────────────────────── */}
        {plan.objectives && plan.objectives.length > 0 && (
          <div className="mb-8 space-y-3">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
              <Target className="size-3.5" />
              Objetivos de Aprendizagem
            </h4>
            <ul className="space-y-2">
              {plan.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500/70" />
                  <span className="leading-relaxed">{obj.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ─── Briefing do professor ─────────────────────────────── */}
        {plan.teacherBriefing && plan.teacherBriefing.length > 0 && (
          <div className="mb-8">
            <CollapsibleSection
              title="Briefing do Professor"
              icon={GraduationCap}
              defaultOpen
            >
              <div className="space-y-2">
                {plan.teacherBriefing.map((note, i) => (
                  <p key={i} className="text-sm leading-relaxed text-foreground/80">
                    {note}
                  </p>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        )}

        {/* ─── Icebreaker ────────────────────────────────────────── */}
        {plan.icebreaker && (
          <div className="mb-8 rounded-xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5">
            <div className="mb-2 flex items-center gap-2">
              <MessageCircle className="size-4 text-primary/70" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary/80">
                🧊 Icebreaker — Script de abertura
              </span>
            </div>
            <p className="text-sm leading-relaxed text-foreground/80 italic">
              "{plan.icebreaker}"
            </p>
          </div>
        )}

        {/* ─── Pré-requisitos ────────────────────────────────────── */}
        <div className="mb-8 space-y-3">
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

        {/* ─── O que instalar ────────────────────────────────────── */}
        <div className="mb-8 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            O que instalar
          </h4>

          {/* Intro winget */}
          {plan.wingetIntro && (
            <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-4">
              <Terminal className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">O que é winget?</span>{' '}
                {plan.wingetIntro}
              </p>
            </div>
          )}

          <ul className="space-y-5">
            {plan.setup.map((item, i) => (
              <li key={i} className="rounded-xl border border-border/60 p-4 space-y-3">
                {/* Name + link */}
                <div className="flex items-center gap-2">
                  <Monitor className="size-3.5 shrink-0 text-muted-foreground/60" />
                  <span className="text-sm font-semibold text-foreground">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary hover:underline underline-offset-2"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {/* Analogy */}
                {item.analogy && (
                  <div className="flex items-start gap-2 rounded-lg bg-primary/6 px-3 py-2.5">
                    <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-primary/60" />
                    <p className="text-xs leading-relaxed text-primary/80">
                      <span className="font-semibold">Analogia:</span> {item.analogy}
                    </p>
                  </div>
                )}

                {/* Teacher script */}
                {item.teacherScript && (
                  <div className="flex items-start gap-2 rounded-lg bg-amber-500/6 px-3 py-2.5">
                    <GraduationCap className="mt-0.5 size-3.5 shrink-0 text-amber-600/60 dark:text-amber-400/60" />
                    <p className="text-xs leading-relaxed text-amber-700/80 dark:text-amber-300/80">
                      <span className="font-semibold">Para o professor:</span>{' '}
                      {item.teacherScript}
                    </p>
                  </div>
                )}

                {/* Winget command */}
                {item.wingetCommand && (
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                      Instalar via winget
                    </p>
                    <code className="block w-full rounded-lg bg-muted px-3 py-2 font-mono text-xs text-foreground/80 break-all">
                      {item.wingetCommand}
                    </code>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Agenda ────────────────────────────────────────────── */}
        <div className="mb-8 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Agenda — Cronograma da Aula
          </h4>
          <div className="space-y-3">
            {plan.agenda.map((step, i) => (
              <AgendaStep key={i} step={step} />
            ))}
          </div>
        </div>

        {/* ─── Exercícios ────────────────────────────────────────── */}
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

        {/* ─── Troubleshooting ───────────────────────────────────── */}
        {plan.troubleshooting && plan.troubleshooting.length > 0 && (
          <div className="mb-8">
            <CollapsibleSection
              title="Resolução de Problemas"
              icon={Wrench}
              badge={`${plan.troubleshooting.length} itens`}
            >
              <div className="space-y-4">
                {plan.troubleshooting.map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500/70" />
                      <p className="text-sm font-semibold text-foreground/90">{item.problem}</p>
                    </div>
                    <p className="ml-5.5 text-sm leading-relaxed text-muted-foreground">
                      💡 {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        )}

        {/* ─── FAQ ───────────────────────────────────────────────── */}
        {plan.faq && plan.faq.length > 0 && (
          <div className="mb-8">
            <CollapsibleSection
              title="Perguntas Frequentes dos Alunos"
              icon={HelpCircle}
              badge={`${plan.faq.length} perguntas`}
            >
              <div className="space-y-4">
                {plan.faq.map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <p className="text-sm font-semibold text-foreground/90">
                      🙋 "{item.question}"
                    </p>
                    <p className="ml-6 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        )}

        {/* ─── Assessment ────────────────────────────────────────── */}
        {plan.assessment && plan.assessment.length > 0 && (
          <div className="mb-8">
            <CollapsibleSection
              title="Critérios de Avaliação"
              icon={Target}
            >
              <ul className="space-y-2">
                {plan.assessment.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </CollapsibleSection>
          </div>
        )}

        {/* ─── Recursos ──────────────────────────────────────────── */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Recursos e Referências
          </h4>
          <ul className="space-y-2">
            {plan.resources.map((res, i) => (
              <li key={i} className="flex items-start gap-3">
                {res.url ? (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-sm transition-colors"
                  >
                    <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                    <div>
                      <span className="font-medium text-foreground/90 transition-colors group-hover:text-primary group-hover:underline underline-offset-2">
                        {res.title}
                      </span>
                      {res.why && (
                        <p className="mt-0.5 text-xs text-muted-foreground/70">{res.why}</p>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-2 text-sm">
                    <BookOpen className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/50" />
                    <div>
                      <span className="font-medium text-foreground/90">{res.title}</span>
                      {res.why && (
                        <p className="mt-0.5 text-xs text-muted-foreground/70">{res.why}</p>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Closing message ───────────────────────────────────── */}
        {plan.closingMessage && (
          <div className="mb-8 rounded-xl border border-primary/20 bg-primary/[0.03] p-5">
            <div className="mb-2 flex items-center gap-2">
              <Heart className="size-4 text-primary/70" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary/80">
                Mensagem de encerramento
              </span>
            </div>
            <p className="max-w-[65ch] text-sm leading-relaxed text-foreground/80 italic">
              "{plan.closingMessage}"
            </p>
          </div>
        )}

        {/* ─── CTAs ──────────────────────────────────────────────── */}
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

/* ─── Agenda step sub-component ────────────────────────────────────── */
function AgendaStep({
  step,
}: {
  step: LessonPlan['agenda'][number]
}) {
  const [expanded, setExpanded] = useState(false)
  const hasDetails =
    (step.teacherNotes && step.teacherNotes.length > 0) ||
    (step.images && step.images.length > 0)

  return (
    <div
      className={cn(
        'rounded-xl border border-border/60 transition-colors',
        step.aiTip && 'border-primary/20 bg-primary/[0.03]'
      )}
    >
      {/* Step header */}
      <div className="p-4 sm:p-5">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] font-bold text-muted-foreground">
            {step.time}
          </span>
          <span className="text-sm font-semibold text-foreground">{step.title}</span>
          {step.difficulty && <DifficultyBadge level={step.difficulty} />}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>

        {/* AI tip */}
        {step.aiTip && (
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-primary/8 px-3 py-2.5">
            <Lightbulb className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
            <p className="text-xs leading-relaxed text-primary/80">
              <span className="font-semibold">Dica de IA:</span> {step.aiTip}
            </p>
          </div>
        )}

        {/* Expand button for teacher notes */}
        {hasDetails && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            <GraduationCap className="size-3.5" />
            {expanded ? 'Ocultar notas do professor' : 'Ver notas do professor'}
            {expanded ? (
              <ChevronUp className="size-3" />
            ) : (
              <ChevronDown className="size-3" />
            )}
          </button>
        )}
      </div>

      {/* Expanded teacher details */}
      {expanded && hasDetails && (
        <div className="border-t border-border/40 bg-amber-500/[0.02] px-4 py-4 sm:px-5 space-y-4">
          {/* Teacher notes */}
          {step.teacherNotes && step.teacherNotes.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/70 dark:text-amber-400/70">
                📋 Notas do Professor
              </p>
              <ul className="space-y-1.5">
                {step.teacherNotes.map((note, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs leading-relaxed text-foreground/70"
                  >
                    <span className="mt-0.5 shrink-0 text-amber-500/50">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Images */}
          {step.images && step.images.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/70 dark:text-amber-400/70">
                🖼️ Imagens / Slides sugeridos
              </p>
              <div className="space-y-2">
                {step.images.map((img, i) => (
                  <LessonImageSlot key={i} image={img} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
