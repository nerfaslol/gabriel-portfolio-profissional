import { useState } from 'react'
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
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
  LayoutTemplate,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import type { LessonPlan, LessonImage, LessonModality } from '@/types/lesson-plan'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ViewMode = 'student' | 'teacher' | 'split'

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
        className="w-full rounded-lg border border-border/50 object-cover shadow-sm"
        loading="lazy"
      />
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-lg border-2 border-dashed border-border/40 bg-muted/20 px-4 py-3">
      <ImageIcon className="size-5 shrink-0 text-muted-foreground/40" />
      <p className="text-sm leading-relaxed text-muted-foreground/60">
        {image.placeholder}
      </p>
    </div>
  )
}

/* ─── Section Split Layout ─────────────────────────────────────────── */
function SectionSplit({
  mode,
  student,
  teacher,
  className,
}: {
  mode: ViewMode
  student?: React.ReactNode
  teacher?: React.ReactNode
  className?: string
}) {
  if (mode === 'student') {
    return student ? <div className={className}>{student}</div> : null
  }
  if (mode === 'teacher') {
    return teacher ? (
      <div className={cn('rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-5 sm:p-6 sm:px-8', className)}>
        {teacher}
      </div>
    ) : null
  }

  // Split mode
  if (!student && !teacher) return null

  return (
    <div className={cn("grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start", className)}>
      <div className="flex flex-col gap-4">
        {student || (
          <div className="rounded-xl border border-dashed border-border/40 bg-muted/5 px-4 py-3 text-sm italic text-muted-foreground/40">
            Nenhum material para o aluno nesta seção.
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] p-5 lg:-mx-6 lg:-my-6">
        {teacher || (
          <div className="text-sm italic text-amber-600/40 dark:text-amber-400/40">
            Nenhuma nota do professor nesta seção.
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Section Title ────────────────────────────────────────────────── */
function SectionTitle({ icon: Icon, title, isTeacher }: { icon?: any, title: string, isTeacher?: boolean }) {
  return (
    <h4 className={cn(
      "flex items-center gap-2 text-sm font-bold uppercase tracking-[0.24em] mb-4",
      isTeacher ? "text-amber-600/80 dark:text-amber-400/80" : "text-muted-foreground"
    )}>
      {Icon && <Icon className="size-4" />}
      {title}
    </h4>
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

/* ─── Agenda step sub-component ────────────────────────────────────── */
function AgendaStep({
  step,
  viewMode,
}: {
  step: LessonPlan['agenda'][number]
  viewMode: ViewMode
}) {
  const hasTeacherDetails = (step.teacherNotes && step.teacherNotes.length > 0) || step.aiTip || (step.images && step.images.length > 0)

  return (
    <SectionSplit
      mode={viewMode}
      className={cn(
        viewMode === 'student' && 'rounded-xl border border-border/60 p-5',
        viewMode === 'teacher' && 'mb-6',
        viewMode === 'split' && 'mb-2 pb-8 border-b border-border/30 last:border-0'
      )}
      student={
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] font-bold text-muted-foreground">
              {step.time}
            </span>
            <span className="text-base font-semibold text-foreground">{step.title}</span>
            {step.difficulty && <DifficultyBadge level={step.difficulty} />}
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
        </div>
      }
      teacher={
        hasTeacherDetails ? (
          <div className="space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/70 dark:text-amber-400/70">
              📋 Notas — {step.title}
            </p>
            
            {step.aiTip && (
              <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 px-4 py-3 border border-amber-500/10">
                <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400" />
                <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                  <span className="font-semibold block mb-0.5">Dica de IA:</span>
                  {step.aiTip}
                </p>
              </div>
            )}

            {step.teacherNotes && step.teacherNotes.length > 0 && (
              <ul className="space-y-2.5">
                {step.teacherNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-0.5 shrink-0 text-amber-500/50">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            )}

            {step.images && step.images.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <ImageIcon className="size-3.5 text-amber-500/70" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/70 dark:text-amber-400/70">
                    Imagens / Slides sugeridos
                  </p>
                </div>
                <div className="space-y-3">
                  {step.images.map((img, i) => <LessonImageSlot key={i} image={img} />)}
                </div>
              </div>
            )}
          </div>
        ) : null
      }
    />
  )
}

/* ─── Main component ───────────────────────────────────────────────── */
export function LessonPlanCard({ plan, modality, onModalityChange }: LessonPlanCardProps) {
  const [imageError, setImageError] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('split')

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
        {/* Intro Header */}
        <div className="mb-10 space-y-5">
          <h3 className="text-3xl font-extrabold tracking-tightest sm:text-4xl lg:text-5xl">
            {plan.title}
          </h3>
          <p className="text-lg font-semibold text-muted-foreground sm:text-xl">
            {plan.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-1 items-center">
            {/* View Mode Toggle */}
            <div className="flex items-center justify-between rounded-full border border-border/80 bg-muted/20 p-1 w-full sm:w-fit">
              <button
                type="button"
                onClick={() => setViewMode('student')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 flex-1 sm:flex-none justify-center',
                  viewMode === 'student' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <BookOpen className="size-3.5" />
                <span className="hidden sm:inline">Aluno</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('teacher')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 flex-1 sm:flex-none justify-center',
                  viewMode === 'teacher' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <GraduationCap className="size-3.5" />
                <span className="hidden sm:inline">Professor</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 flex-1 sm:flex-none justify-center',
                  viewMode === 'split' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <LayoutTemplate className="size-3.5" />
                <span className="hidden sm:inline">Lado a Lado</span>
              </button>
            </div>

            <div className="h-4 w-px bg-border/60 hidden sm:block"></div>

            {/* Modality Toggle */}
            <div className="flex items-center gap-1 rounded-full border border-border/80 bg-muted/20 p-1 w-full sm:w-fit">
              <button
                type="button"
                onClick={() => onModalityChange('presencial')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 flex-1 sm:flex-none justify-center',
                  modality === 'presencial' ? 'bg-background shadow-xs text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <School className="size-3.5" /> Presencial
              </button>
              <button
                type="button"
                onClick={() => onModalityChange('distancia')}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 flex-1 sm:flex-none justify-center',
                  modality === 'distancia' ? 'bg-background shadow-xs text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Laptop className="size-3.5" /> À Distância
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-sm font-semibold text-muted-foreground">
              <Clock className="size-3.5" /> {plan.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1.5 text-sm font-semibold text-muted-foreground">
              <Users className="size-3.5" /> {plan.targetAudience}
            </span>
            {plan.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Intro & Briefing Phase ──────────────────────────────── */}
        <div className="mb-14">
          <SectionSplit
            mode={viewMode}
            student={
              <div className="space-y-8">
                <p className="max-w-[70ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {plan.description}
                </p>
                {plan.prerequisites && plan.prerequisites.length > 0 && (
                  <div>
                    <SectionTitle title="Pré-requisitos" />
                    <ul className="space-y-2.5">
                      {plan.prerequisites.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            }
            teacher={
              <div className="space-y-8">
                {plan.objectives && plan.objectives.length > 0 && (
                  <div>
                    <SectionTitle isTeacher icon={Target} title="Objetivos de Aprendizagem" />
                    <ul className="space-y-2">
                      {plan.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-base text-foreground/80">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500/70" />
                          <span className="leading-relaxed">{obj.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {plan.teacherBriefing && plan.teacherBriefing.length > 0 && (
                  <div>
                    <SectionTitle isTeacher icon={GraduationCap} title="Briefing do Professor" />
                    <div className="space-y-2.5">
                      {plan.teacherBriefing.map((note, i) => (
                        <p key={i} className="text-sm leading-relaxed text-foreground/80">
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {plan.icebreaker && (
                  <div>
                    <SectionTitle isTeacher icon={MessageCircle} title="Icebreaker · Abertura" />
                    <div className="rounded-xl border border-primary/20 bg-background/50 p-4 shadow-xs">
                      <p className="text-base leading-relaxed text-foreground/80 italic">
                        "{plan.icebreaker}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            }
          />
        </div>

        {/* ─── Setup Phase ─────────────────────────────────────────── */}
        <div className="mb-14 space-y-6">
          {(viewMode === 'student' || viewMode === 'split') && (
            <SectionTitle title="O que instalar" />
          )}
          
          <SectionSplit
            mode={viewMode}
            student={
              plan.wingetIntro ? (
                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-muted/10 p-5 mb-4">
                  <Terminal className="mt-1 size-5 shrink-0 text-muted-foreground/60" />
                  <p className="text-base leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">O que é winget?</span>{' '}
                    {plan.wingetIntro}
                  </p>
                </div>
              ) : null
            }
            teacher={viewMode === 'teacher' ? <SectionTitle isTeacher icon={Monitor} title="Instruções de Setup" /> : null}
          />

          <div className="space-y-6 lg:space-y-8">
            {plan.setup.map((item, i) => (
              <SectionSplit
                key={i}
                mode={viewMode}
                className={cn("lg:pt-2", i !== 0 && "border-t border-border/40 pt-6")}
                student={
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Monitor className="size-4 shrink-0 text-muted-foreground/60" />
                      <span className="text-lg font-bold text-foreground">
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline underline-offset-4">
                            {item.name}
                          </a>
                        ) : (
                          item.name
                        )}
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    {item.analogy && (
                      <div className="flex items-start gap-3 rounded-lg bg-primary/5 px-4 py-3 border border-primary/10">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary/60" />
                        <p className="text-sm leading-relaxed text-primary/80">
                          <span className="font-semibold block mb-0.5">Analogia:</span> 
                          {item.analogy}
                        </p>
                      </div>
                    )}
                    {item.wingetCommand && (
                      <div className="space-y-2 pt-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                          Instalar via winget
                        </p>
                        <code className="block w-full rounded-lg bg-muted/50 border border-border/50 px-4 py-3 font-mono text-sm text-foreground/80 break-all shadow-xs">
                          {item.wingetCommand}
                        </code>
                      </div>
                    )}
                  </div>
                }
                teacher={
                  item.teacherScript ? (
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/70 dark:text-amber-400/70">
                        Guia para: {item.name}
                      </p>
                      <div className="flex items-start gap-3 rounded-lg bg-background/50 px-4 py-3 border border-amber-500/10 shadow-xs">
                        <GraduationCap className="mt-0.5 size-4 shrink-0 text-amber-600/60 dark:text-amber-400/60" />
                        <p className="text-sm leading-relaxed text-amber-800/90 dark:text-amber-200/90">
                          {item.teacherScript}
                        </p>
                      </div>
                    </div>
                  ) : null
                }
              />
            ))}
          </div>
        </div>

        {/* ─── Agenda Phase ────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="mb-6">
            <SectionTitle title="Agenda · Cronograma da Aula" />
          </div>
          <div className="space-y-0">
            {plan.agenda.map((step, i) => (
              <AgendaStep key={i} step={step} viewMode={viewMode} />
            ))}
          </div>
        </div>

        {/* ─── Post-Agenda Phase ───────────────────────────────────── */}
        <div>
          <SectionSplit
            mode={viewMode}
            student={
              <div className="space-y-12">
                {plan.exercises && plan.exercises.length > 0 && (
                  <div>
                    <SectionTitle title="Exercícios Práticos" />
                    <ol className="space-y-3">
                      {plan.exercises.map((ex, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-muted/5">
                          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                            {i + 1}
                          </span>
                          <span className="text-base leading-relaxed text-foreground/80">{ex}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {plan.troubleshooting && plan.troubleshooting.length > 0 && (
                  <div>
                    <SectionTitle title="Resolução de Problemas" icon={Wrench} />
                    <div className="space-y-4">
                      {plan.troubleshooting.map((item, i) => (
                        <div key={i} className="p-4 rounded-xl border border-border/50 bg-background shadow-xs">
                          <div className="flex items-start gap-2 mb-2">
                            <AlertTriangle className="mt-1 size-4 shrink-0 text-amber-500/80" />
                            <p className="text-base font-semibold text-foreground/90">{item.problem}</p>
                          </div>
                          <p className="ml-6 text-base leading-relaxed text-muted-foreground">
                            💡 {item.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {plan.faq && plan.faq.length > 0 && (
                  <div>
                    <SectionTitle title="Perguntas Frequentes" icon={HelpCircle} />
                    <div className="space-y-4">
                      {plan.faq.map((item, i) => (
                        <div key={i} className="p-4 rounded-xl border border-border/40 bg-muted/5">
                          <p className="text-base font-semibold text-foreground/90 mb-2">
                            🙋 "{item.question}"
                          </p>
                          <p className="ml-6 text-base leading-relaxed text-muted-foreground">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {plan.resources && plan.resources.length > 0 && (
                  <div>
                    <SectionTitle title="Recursos e Referências" />
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {plan.resources.map((res, i) => (
                        <li key={i}>
                          {res.url ? (
                            <a href={res.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col p-4 rounded-xl border border-border/50 bg-background shadow-xs hover:border-primary/40 transition-colors h-full">
                              <div className="flex items-center gap-2 mb-1.5">
                                <ExternalLink className="size-4 shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                                <span className="font-semibold text-foreground/90 group-hover:text-primary transition-colors underline-offset-2">
                                  {res.title}
                                </span>
                              </div>
                              {res.why && <p className="text-sm text-muted-foreground/80 leading-relaxed ml-6">{res.why}</p>}
                            </a>
                          ) : (
                            <div className="flex flex-col p-4 rounded-xl border border-border/30 bg-muted/5 h-full">
                              <div className="flex items-center gap-2 mb-1.5">
                                <BookOpen className="size-4 shrink-0 text-muted-foreground/50" />
                                <span className="font-semibold text-foreground/90">{res.title}</span>
                              </div>
                              {res.why && <p className="text-sm text-muted-foreground/80 leading-relaxed ml-6">{res.why}</p>}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {plan.closingMessage && (
                  <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-6 lg:p-8">
                    <SectionTitle title="Mensagem Final" icon={Heart} />
                    <p className="text-lg leading-relaxed text-foreground/80 italic font-medium">
                      "{plan.closingMessage}"
                    </p>
                  </div>
                )}
              </div>
            }
            teacher={
              <div className="space-y-12">
                {plan.assessment && plan.assessment.length > 0 && (
                  <div>
                    <SectionTitle isTeacher title="Critérios de Avaliação" icon={Target} />
                    <ul className="space-y-3">
                      {plan.assessment.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/20 bg-background/50 shadow-xs">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-amber-500" />
                          <span className="text-base leading-relaxed text-amber-900/90 dark:text-amber-100/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            }
          />
        </div>

        {/* ─── CTAs ──────────────────────────────────────────────── */}
        {(plan.repoUrl || plan.liveUrl) && (
          <div className="flex flex-wrap gap-3 border-t border-border/60 pt-8 mt-12">
            {plan.liveUrl && (
              <Button
                variant="default"
                size="lg"
                className="gap-2"
                render={
                  <a href={plan.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Acessar projeto: ${plan.title}`} />
                }
              >
                <ExternalLink className="size-4" />
                Acessar Projeto
              </Button>
            )}
            {plan.repoUrl && (
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                render={
                  <a href={plan.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositório: ${plan.title}`} />
                }
              >
                <FaGithub className="size-4" />
                Repositório
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
