import { AboutSection } from '@/components/portfolio/about-section'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { ProjectList } from '@/components/portfolio/project-list'

/**
 * App Component
 *
 * Root component that sets up the ThemeProvider and the global layout structure.
 * Polished for excellence:
 * - Fluid spacing and visual rhythm.
 * - Anti-aliased typography.
 * - Sophisticated hero section with staggered entrance.
 */
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="nerfas-theme">
      <div className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/92 transition-colors duration-500 backdrop-blur-md supports-[backdrop-filter]:bg-background/72">
          <nav className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
            <div className="max-w-[60vw] text-base font-bold tracking-tightest select-none transition-opacity hover:opacity-80 sm:text-lg lg:text-xl">
              Gabriel Portfolio
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="hidden items-center gap-5 md:flex">
                <a
                  href="#sobre"
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sobre
                </a>
                <a
                  href="#projetos"
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Projetos
                </a>
              </div>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="mx-auto flex w-full max-w-[1600px] flex-col items-start px-4 py-12 text-left sm:px-6 sm:py-16 md:py-18 lg:px-10 lg:py-22">
            <div className="grid w-full gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] xl:items-end">
              <div className="max-w-[48rem] space-y-6 sm:space-y-7">
                <p className="animate-in fade-in slide-in-from-bottom-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground duration-700 sm:text-xs">
                  Portfolio selecionado
                </p>
                <div className="space-y-4">
                  <h1 className="animate-in fade-in slide-in-from-bottom-8 max-w-[10ch] text-balance text-[clamp(3rem,5.4vw,5.6rem)] font-extrabold leading-[0.92] tracking-tightest duration-1000">
                    Olá, eu sou Gabriel.
                  </h1>
                  <p className="animate-in fade-in slide-in-from-bottom-6 max-w-[25ch] text-[clamp(1.1rem,1.7vw,1.65rem)] font-semibold leading-[1.08] tracking-tight text-foreground/92 duration-1000 delay-150">
                    Front-end moderno, IA aplicada e projetos construídos com
                    clareza.
                  </p>
                </div>
                <p className="animate-in fade-in slide-in-from-bottom-6 max-w-[34rem] text-base leading-relaxed text-muted-foreground duration-1000 delay-200 sm:text-lg">
                  Bem-vindo ao meu portfólio. Aqui você encontrará projetos e
                  estudos que refletem meu cuidado com organização, experiência
                  de uso e qualidade de entrega.
                </p>
                <div className="animate-in fade-in slide-in-from-bottom-6 flex flex-col gap-3 pt-1 sm:flex-row duration-1000 delay-300">
                  <Button
                    variant="default"
                    size="lg"
                    className="min-h-11 w-full sm:w-auto"
                    render={
                      <a
                        href="#projetos"
                        aria-label="Ir para a seção de projetos"
                      />
                    }
                  >
                    Ver Projetos
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-h-11 w-full sm:w-auto bg-transparent"
                    render={
                      <a href="#sobre" aria-label="Ir para a seção sobre mim" />
                    }
                  >
                    Sobre Mim
                  </Button>
                </div>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 flex flex-wrap gap-2.5 duration-1000 delay-500 xl:justify-end">
                <span className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  React
                </span>
                <span className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  TypeScript
                </span>
                <span className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Tailwind
                </span>
                <span className="inline-flex items-center rounded-full border border-border/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  IA
                </span>
              </div>
            </div>
          </section>

          <div id="sobre" className="scroll-mt-24">
            <AboutSection />
          </div>

          {/* Projects Section */}
          <div id="projetos" className="scroll-mt-24">
            <ProjectList />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-18 border-t border-border/80 py-10 sm:mt-20 sm:py-12 lg:mt-24 lg:py-14">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-4 text-center sm:px-6 lg:px-10">
            <div className="text-sm font-bold tracking-tightest uppercase opacity-55">
              Gabriel Portfolio
            </div>
            <p className="text-xs text-muted-foreground tracking-wide font-medium">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
              Projetado com Elegância e Refinamento.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
