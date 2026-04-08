import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { LessonPlanCard } from '@/components/portfolio/lesson-plan-card'
import { ThemeToggle } from '@/components/theme-toggle'
import { lessonPlanPresencial, lessonPlanDistancia } from '@/data/lesson-plan'
import type { LessonModality } from '@/types/lesson-plan'

export function LessonPlanPage() {
  const [modality, setModality] = useState<LessonModality>('presencial')

  const plan =
    modality === 'presencial' ? lessonPlanPresencial : lessonPlanDistancia

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
      {/* Header simples com voltar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/92 backdrop-blur-md transition-colors duration-500 supports-[backdrop-filter]:bg-background/72">
        <nav className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4" />
            Voltar ao portfólio
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <LessonPlanCard
          plan={plan}
          modality={modality}
          onModalityChange={setModality}
        />
      </main>

      <footer className="mt-10 border-t border-border/80 py-8">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-4 text-center sm:px-6 lg:px-10">
          <p className="text-xs font-medium tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()} Gabriel Portfolio
          </p>
        </div>
      </footer>
    </div>
  )
}
