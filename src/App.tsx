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
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-colors duration-500">
          <nav className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
            <div className="max-w-[60vw] text-base font-bold tracking-tightest select-none transition-opacity hover:opacity-80 sm:text-lg lg:text-xl">
              Gabriel Portfolio
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="mx-auto flex w-full max-w-[1600px] flex-col items-start px-4 py-18 text-left sm:px-6 sm:py-24 md:py-28 lg:px-10 lg:py-32 xl:min-h-[calc(100vh-4rem)] xl:justify-center xl:py-20 2xl:py-24">
            <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] xl:items-end xl:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <p className="animate-in fade-in slide-in-from-bottom-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground duration-700 sm:text-xs">
                  Portfolio selecionado
                </p>
                <h1 className="animate-in fade-in slide-in-from-bottom-8 text-balance text-[clamp(3rem,8vw,7.25rem)] font-extrabold leading-[0.95] tracking-tightest duration-1000">
                  Olá, eu sou um{' '}
                  <span className="text-primary italic-font">
                    Desenvolvedor
                  </span>
                </h1>
                <p className="animate-in fade-in slide-in-from-bottom-6 max-w-[34rem] text-base leading-relaxed font-medium text-muted-foreground duration-1000 delay-200 sm:text-lg md:text-xl">
                  Bem-vindo ao meu portfólio. Aqui você encontrará projetos
                  focados em desenvolvimento e soluções criativas, construídos
                  com precisão e propósito.
                </p>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="flex flex-col gap-5 border-l border-border/70 pl-4 sm:pl-5 xl:max-w-[24rem]">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Experiência orientada a clareza, atenção aos detalhes e
                    execução técnica consistente em diferentes contextos de
                    tela.
                  </p>
                  <a
                    href="#projetos"
                    className="inline-flex min-h-11 items-center text-sm font-bold uppercase tracking-[0.22em] text-primary transition-colors hover:text-primary/80"
                  >
                    Ver Projetos
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <div id="projetos" className="scroll-mt-24">
            <ProjectList />
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-20 border-t bg-muted/30 py-12 sm:mt-24 sm:py-14 lg:mt-28 lg:py-16">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 px-4 text-center sm:px-6 lg:px-10">
            <div className="text-sm font-bold tracking-tightest uppercase opacity-50">
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
