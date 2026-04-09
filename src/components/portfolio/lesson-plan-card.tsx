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
  Copy,
  Check,
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

/* ─── Copy Button component ───────────────────────────────────────── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-all",
        copied ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-primary/10 text-primary hover:bg-primary/20"
      )}
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {copied ? 'Copiado!' : 'Copiar'}
    </button>
  )
}

/* ─── Image Slot component ─────────────────────────────────────────── */
function LessonImageSlot({ image }: { image: LessonImage }) {
  if (image.src) {
    return (
      <div className="group relative overflow-hidden rounded-xl border border-border/50 shadow-sm transition-all hover:shadow-md">
         <img
          src={image.src}
          alt={image.alt}
          className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
           <p className="text-[10px] font-medium text-white/90">{image.alt}</p>
        </div>
      </div>
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
    return student ? <div className={cn('mb-16 last:mb-0 animate-in fade-in slide-in-from-bottom-2 duration-500', className)}>{student}</div> : null
  }
  if (mode === 'teacher') {
    return teacher ? (
      <div className={cn(
        'mb-16 last:mb-0 rounded-3xl border border-amber-500/20 bg-amber-500/[0.03] p-6 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-[2px]',
        'animate-in fade-in slide-in-from-bottom-2 duration-500',
        className
      )}>
        {teacher}
      </div>
    ) : null
  }

  // Split mode
  if (!student && !teacher) return null

  return (
    <div className={cn(
      "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start mb-20 last:mb-0",
      "animate-in fade-in slide-in-from-bottom-4 duration-700",
      className
    )}>
      <div className="flex flex-col gap-5">
        {student || (
          <div className="rounded-2xl border border-dashed border-border/40 bg-muted/5 px-5 py-4 text-sm italic text-muted-foreground/40">
            Nenhum conteúdo para o aluno nesta seção.
          </div>
        )}
      </div>
      <div className={cn(
        "flex flex-col gap-5 rounded-3xl border border-amber-500/15 bg-amber-500/[0.04] p-6 lg:-mx-8 lg:-my-6 lg:p-8 backdrop-blur-[1px]",
        "border-l-4 border-l-amber-500/40"
      )}>
        {teacher || (
          <div className="text-sm italic text-amber-600/40 dark:text-amber-400/40">
            Sem notas de professor.
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
      "flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-6 shrink-0",
      isTeacher ? "text-amber-600/90 dark:text-amber-400/90" : "text-muted-foreground"
    )}>
      {Icon && <Icon className="size-4" />}
      {title}
    </h4>
  )
}

/* ─── Difficulty badge ─────────────────────────────────────────────── */
function DifficultyBadge({ level }: { level: string }) {
  const config = {
    fácil: { color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400', label: 'Iniciante' },
    médio: { color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400', label: 'Intermediário' },
    desafiador: { color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400', label: 'Desafiador' },
  }[level] ?? { color: 'bg-muted text-muted-foreground', label: level }

  return (
    <span className={cn('rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest', config.color)}>
      {config.label}
    </span>
  )
}

/* ─── Agenda step component ────────────────────────────────────────── */
function AgendaStep({
  step,
  isLast,
  viewMode,
}: {
  step: LessonPlan['agenda'][number]
  isLast: boolean
  viewMode: ViewMode
}) {
  const hasTeacherDetails = (step.teacherNotes && step.teacherNotes.length > 0) || step.aiTip || (step.images && step.images.length > 0)

  return (
    <div className="relative">
      {viewMode === 'split' && !isLast && (
        <div className="absolute left-10 top-16 bottom-0 w-px bg-border/40 hidden lg:block" />
      )}
      
      <SectionSplit
        mode={viewMode}
        className={cn(
          viewMode === 'student' && 'rounded-3xl border border-border/50 p-6 lg:p-8 mb-6 bg-background/50',
          viewMode === 'teacher' && 'mb-8',
          viewMode === 'split' && 'mb-2 pb-14 border-b border-border/30 last:border-0'
        )}
        student={
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-lg bg-foreground/5 dark:bg-foreground/10 px-3 py-1 font-mono text-xs font-bold text-foreground/80 shadow-sm border border-border/40">
                {step.time}
              </span>
              <span className="text-xl font-bold tracking-tight text-foreground">{step.title}</span>
              {step.difficulty && <DifficultyBadge level={step.difficulty} />}
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        }
        teacher={
          hasTeacherDetails ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                 <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-600/80 dark:text-amber-400/80">
                  📋 Roteiro do Professor
                </p>
              </div>
              
              {step.aiTip && (
                <div className="group relative flex flex-col gap-3 rounded-2xl bg-amber-500/10 px-5 py-4 border border-amber-500/10 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <Lightbulb className="size-4 text-amber-600 dark:text-amber-400" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Prompt Sugerido</span>
                    </div>
                    <CopyButton text={step.aiTip} />
                  </div>
                  <p className="text-base leading-relaxed text-amber-900/90 dark:text-amber-100/90 italic font-medium">
                    "{step.aiTip}"
                  </p>
                </div>
              )}

              {step.teacherNotes && step.teacherNotes.length > 0 && (
                <ul className="space-y-3.5">
                  {step.teacherNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-base leading-relaxed text-foreground/85">
                      <span className="mt-1.5 flex size-1.5 shrink-0 rounded-full bg-amber-500/60" />
                      {note}
                    </li>
                  ))}
                </ul>
              )}

              {step.images && step.images.length > 0 && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2">
                     <ImageIcon className="size-3.5 text-amber-500/60" />
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600/60 dark:text-amber-400/60">Multimídia</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {step.images.map((img, i) => <LessonImageSlot key={i} image={img} />)}
                  </div>
                </div>
              )}
            </div>
          ) : null
        }
      />
    </div>
  )
}

/* ─── Main component ───────────────────────────────────────────────── */
export function LessonPlanCard({ plan, modality, onModalityChange }: LessonPlanCardProps) {
  const [imageError, setImageError] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('split')

  return (
    <article className="overflow-hidden rounded-[2.5rem] border border-border/60 bg-background shadow-2xl transition-all duration-500 hover:border-border/100">
      {/* Dynamic Header Banner */}
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted/40 sm:aspect-[3.5/1]">
        {!imageError && plan.imageUrl ? (
          <img
            src={plan.imageUrl}
            alt={`Banner: ${plan.title}`}
            className="h-full w-full object-cover brightness-[0.9] dark:brightness-[0.7] transition-transform duration-1000 hover:scale-105"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-muted-foreground/20">
            <ImageOff className="size-12" />
          </div>
        )}

        {/* Floating Badges */}
        <div className="absolute left-6 top-6 flex flex-wrap gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground shadow-xl">
            <Sparkles className="size-3.5" />
            Vitrine
          </span>
          <span className="inline-flex items-center gap-2 rounded-xl bg-background/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/85 shadow-xl backdrop-blur-md">
            <BookOpen className="size-3.5" />
            Curriculum
          </span>
        </div>
      </div>

      <div className="p-8 sm:p-12 lg:p-16">
        {/* Intro Header */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl font-[900] tracking-tightest sm:text-5xl lg:text-7xl bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
              {plan.title}
            </h3>
            <p className="text-xl font-medium text-muted-foreground/80 sm:text-2xl lg:max-w-[30ch]">
              {plan.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {/* View Mode Switching */}
            <div className="flex items-center rounded-2xl border border-border/60 bg-muted/10 p-1.5 shadow-sm group">
              <button
                type="button"
                onClick={() => setViewMode('student')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300',
                  viewMode === 'student' ? 'bg-primary text-primary-foreground shadow-lg scale-[1.05]' : 'text-muted-foreground hover:bg-muted/50'
                )}
              >
                <BookOpen className="size-4" /> Aluno
              </button>
              <button
                type="button"
                onClick={() => setViewMode('teacher')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300',
                  viewMode === 'teacher' ? 'bg-primary text-primary-foreground shadow-lg scale-[1.05]' : 'text-muted-foreground hover:bg-muted/50'
                )}
              >
                <GraduationCap className="size-4" /> Professor
              </button>
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300',
                  viewMode === 'split' ? 'bg-primary text-primary-foreground shadow-lg scale-[1.05]' : 'text-muted-foreground hover:bg-muted/50'
                )}
              >
                <LayoutTemplate className="size-4" /> Split
              </button>
            </div>

            <div className="h-8 w-px bg-border/40 hidden sm:block"></div>

            {/* Modality Switching */}
            <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-muted/10 p-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => onModalityChange('presencial')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300',
                  modality === 'presencial' ? 'bg-background text-foreground shadow-md ring-1 ring-border' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <School className="size-4" /> Presencial
              </button>
              <button
                type="button"
                onClick={() => onModalityChange('distancia')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300',
                  modality === 'distancia' ? 'bg-background text-foreground shadow-md ring-1 ring-border' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Laptop className="size-4" /> Remoto
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/30 border border-border/60 px-5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted/50">
              <Clock className="size-4 text-primary/60" /> {plan.duration}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted/30 border border-border/60 px-5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted/50">
              <Users className="size-4 text-primary/60" /> {plan.targetAudience}
            </span>
            {plan.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full border border-border/40 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ─── 01 Overview ─────────────────────────────────────────── */}
        <SectionSplit
          mode={viewMode}
          student={
            <div className="space-y-8">
              <SectionTitle title="01 · Panorama" icon={Sparkles} />
              <p className="text-xl leading-relaxed text-muted-foreground/90 font-medium lg:text-2xl">
                {plan.description}
              </p>
            </div>
          }
          teacher={
            <div className="space-y-8">
              <SectionTitle isTeacher icon={Target} title="Metas de Aprendizado" />
              <ul className="space-y-4">
                {plan.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-4 text-base lg:text-lg text-foreground/80 group">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500/60 transition-colors group-hover:text-emerald-500" />
                    <span className="leading-relaxed">{obj.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />

        {/* ─── 02 Preparation ──────────────────────────────────────── */}
        <SectionSplit
          mode={viewMode}
          student={
            plan.prerequisites && plan.prerequisites.length > 0 && (
              <div className="space-y-6">
                <SectionTitle title="02 · Preparação" icon={CheckCircle2} />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {plan.prerequisites.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-muted/10 border border-border/50 group transition-all hover:bg-muted/20">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-[900] text-primary-foreground shadow-lg group-hover:rotate-6 transition-transform">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-foreground/80 tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          }
          teacher={
            <div className="space-y-8">
              <SectionTitle isTeacher icon={GraduationCap} title="Papo de Corredor (Briefing)" />
              <div className="columns-1 gap-6 space-y-6">
                {plan.teacherBriefing.map((note, i) => (
                  <p key={i} className="text-base leading-relaxed text-foreground/85 p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                    {note}
                  </p>
                ))}
              </div>
              {plan.icebreaker && (
                <div className="relative rounded-3xl border border-primary/20 bg-background/50 p-6 lg:p-8 shadow-2xl overflow-hidden group">
                  <SectionTitle isTeacher icon={MessageCircle} title="Icebreaker / Abertura" />
                  <p className="text-lg leading-relaxed text-foreground/85 italic font-medium relative z-10 lg:text-xl">
                    "{plan.icebreaker}"
                  </p>
                  <MessageCircle className="absolute -bottom-4 -right-4 size-32 text-primary/5 transition-transform group-hover:rotate-12 duration-700" />
                </div>
              )}
            </div>
          }
        />

        {/* ─── 03 Work Environment ────────────────────────────────── */}
        <SectionSplit
          mode={viewMode}
          student={
            <div className="space-y-8">
              <SectionTitle title="03 · Ferramentas" icon={Terminal} />
              {plan.wingetIntro && (
                <div className="group flex flex-col sm:flex-row items-start gap-6 rounded-[2rem] border border-border bg-foreground/[0.02] p-8 transition-colors hover:bg-foreground/[0.04]">
                  <div className="p-4 rounded-2xl bg-foreground/5 shadow-inner">
                    <Terminal className="size-8 text-foreground/60" />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-bold tracking-tight">Cheat Code: Winget</h5>
                    <p className="text-base leading-relaxed text-muted-foreground max-w-[50ch]">
                      {plan.wingetIntro}
                    </p>
                  </div>
                </div>
              )}
            </div>
          }
          teacher={viewMode === 'teacher' ? <SectionTitle isTeacher icon={Monitor} title="Setup da Infra" /> : null}
        />

        {/* ─── 04 Setup Iterations ────────────────────────────────── */}
        <div className="space-y-12">
          {plan.setup.map((item, i) => (
            <SectionSplit
              key={i}
              mode={viewMode}
              student={
                <div className="space-y-6 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-foreground/5 group-hover:bg-primary/20 transition-colors">
                      <Monitor className="size-5 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-2xl font-[900] tracking-tight text-foreground">
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-primary/30 underline-offset-8">
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </span>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground/90 font-medium">
                    {item.description}
                  </p>
                  {item.analogy && (
                    <div className="flex items-start gap-4 rounded-2xl bg-primary/5 p-6 border border-primary/20 shadow-sm relative overflow-hidden group/analogy">
                      <Lightbulb className="size-6 shrink-0 text-primary transition-transform group-hover/analogy:scale-110" />
                      <p className="text-base leading-relaxed text-primary/90 font-semibold italic">
                         {item.analogy}
                      </p>
                    </div>
                  )}
                  {item.wingetCommand && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">Caminho Ninja (Winget)</span>
                         <CopyButton text={item.wingetCommand} />
                      </div>
                      <code className="block w-full rounded-2xl bg-zinc-950 px-6 py-5 font-mono text-sm leading-relaxed text-zinc-300 shadow-2xl border border-zinc-800 break-all">
                        <span className="text-emerald-500 mr-2">$</span>
                        {item.wingetCommand}
                      </code>
                    </div>
                  )}
                </div>
              }
              teacher={
                item.teacherScript ? (
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600/70">Apoio: {item.name}</p>
                    <div className="flex items-start gap-4 rounded-2xl bg-background/60 p-6 border border-amber-500/10 shadow-lg">
                      <GraduationCap className="mt-1 size-5 shrink-0 text-amber-500/60" />
                      <p className="text-base leading-relaxed text-amber-900/90 dark:text-amber-100/90 font-medium">
                        {item.teacherScript}
                      </p>
                    </div>
                  </div>
                ) : null
              }
            />
          ))}
        </div>

        {/* ─── 05 Core Curriculum (Steps) ───────────────────────────── */}
        <div className="my-24 border-t border-border/40 pt-20">
          <SectionTitle title="04 · Cronograma Master" icon={Clock} />
          <div className="space-y-0">
            {plan.agenda.map((step, i) => (
              <AgendaStep key={i} step={step} isLast={i === plan.agenda.length - 1} viewMode={viewMode} />
            ))}
          </div>
        </div>

        {/* ─── 06 Practical ────────────────────────────────────────── */}
        <SectionSplit
          mode={viewMode}
          student={
            <div className="space-y-10">
              <SectionTitle title="05 · Missões" icon={Wrench} />
              <div className="grid grid-cols-1 gap-6">
                {plan.exercises.map((ex, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 rounded-[2rem] border border-border/50 bg-muted/5 transition-all hover:bg-muted/10 hover:border-primary/20 group">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-foreground/5 text-base font-black text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {i + 1}
                    </div>
                    <span className="text-lg leading-relaxed text-foreground/80 font-semibold">{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          teacher={
            <div className="space-y-8">
              <SectionTitle isTeacher title="Critérios de Avaliação" icon={Target} />
              <div className="grid grid-cols-1 gap-4">
                {plan.assessment && plan.assessment.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-amber-500/20 bg-background shadow-md transition-all hover:border-amber-500">
                    <div className="size-2 rounded-full bg-amber-500 shrink-0" />
                    <span className="text-base font-bold text-amber-900/90 dark:text-amber-100/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ─── 07 Troubleshooting ─────────────────────────────────── */}
        <SectionSplit
          mode={viewMode}
          student={
            <div className="space-y-8">
              <SectionTitle title="06 · Resolvendo Erros" icon={AlertTriangle} />
              <div className="grid grid-cols-1 gap-6">
                {plan.troubleshooting && plan.troubleshooting.map((item, i) => (
                  <div key={i} className="p-6 rounded-[2rem] border border-border/50 bg-background shadow-xl group transition-all hover:border-amber-500/30">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
                        <AlertTriangle className="size-5" />
                      </div>
                      <h6 className="text-lg font-bold tracking-tight text-foreground/90">{item.problem}</h6>
                    </div>
                    <div className="ml-10 p-4 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/10">
                      <p className="text-base leading-relaxed text-muted-foreground">
                        <span className="text-emerald-600 font-bold mr-2">FIX:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ─── 08 Q&A ─────────────────────────────────────────────── */}
        <SectionSplit
          mode={viewMode}
          student={
            <div className="space-y-16 py-10">
              <div className="space-y-10">
                <SectionTitle title="Perguntas Frequentes" icon={HelpCircle} />
                <div className="space-y-6">
                  {plan.faq && plan.faq.map((item, i) => (
                    <div key={i} className="group p-8 rounded-[2.5rem] border border-border/40 bg-foreground/[0.01] hover:bg-background transition-all hover:shadow-2xl">
                      <h5 className="text-xl font-bold text-foreground/90 mb-4 flex items-start gap-4">
                        <span className="text-primary group-hover:rotate-12 transition-transform">?</span>
                        {item.question}
                      </h5>
                      <p className="ml-8 text-lg font-medium leading-relaxed text-muted-foreground/80 pl-6 border-l-2 border-primary/20">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-10">
                <SectionTitle title="Aprofundamento" icon={ExternalLink} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {plan.resources.map((res, i) => (
                    <div key={i}>
                      {res.url ? (
                        <a href={res.url} target="_blank" rel="noopener noreferrer" 
                          className="group h-full flex flex-col p-6 rounded-[2rem] border border-border/50 bg-background shadow-lg transition-all hover:border-primary hover:-translate-y-2 hover:shadow-primary/10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-xl bg-primary/10 text-primary transition-colors">
                              <ExternalLink className="size-4" />
                            </div>
                            <span className="text-lg font-bold group-hover:text-primary transition-colors">
                              {res.title}
                            </span>
                          </div>
                          {res.why && <p className="text-sm font-medium text-muted-foreground/80 leading-relaxed ml-10">{res.why}</p>}
                        </a>
                      ) : (
                        <div className="flex flex-col p-6 rounded-[2rem] border border-border/30 bg-muted/5 h-full opacity-60">
                          <span className="text-lg font-bold ml-10">{res.title}</span>
                          {res.why && <p className="text-sm text-muted-foreground/80 leading-relaxed ml-10">{res.why}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* ─── Final Wrap Up ───────────────────────────────────────── */}
        <div className="mt-20 group relative overflow-hidden rounded-[3rem] border-2 border-primary/10 bg-primary/[0.03] p-10 lg:p-20 shadow-inner">
          <SectionTitle title="Manifesto Final" icon={Heart} />
          <p className="text-2xl lg:text-5xl leading-tight text-foreground font-[900] tracking-tightest relative z-10 [text-wrap:balance]">
            "{plan.closingMessage}"
          </p>
          <div className="mt-10 flex items-center gap-4 relative z-10 transition-transform group-hover:translate-x-2">
             <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="size-6 text-primary" />
             </div>
             <span className="text-lg font-bold text-primary tracking-widest uppercase">Próximo passo: Codar o mundo.</span>
          </div>
          <Heart className="absolute -bottom-20 -right-20 size-[30rem] text-primary/5 -rotate-12 transition-transform duration-[2000ms] group-hover:scale-110 group-hover:rotate-0" />
        </div>

        {/* ─── Footer Buttons ──────────────────────────────────────── */}
        {(plan.repoUrl || plan.liveUrl) && (
          <div className="flex flex-wrap gap-4 border-t border-border/60 pt-16 mt-20">
            {plan.liveUrl && (
              <Button
                variant="default"
                size="lg"
                className="h-16 px-10 rounded-[1.25rem] text-lg font-bold gap-3 shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1"
                render={
                  <a href={plan.liveUrl} target="_blank" rel="noopener noreferrer" />
                }
              >
                <ExternalLink className="size-5" />
                Launch Demo
              </Button>
            )}
            {plan.repoUrl && (
              <Button
                variant="outline"
                size="lg"
                className="h-16 px-10 rounded-[1.25rem] text-lg font-bold gap-3 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                render={
                  <a href={plan.repoUrl} target="_blank" rel="noopener noreferrer" />
                }
              >
                <FaGithub className="size-5" />
                Source Code
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
