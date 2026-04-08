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
          <nav className="container mx-auto flex h-16 items-center justify-between px-6">
            <div className="font-bold text-xl tracking-tightest select-none hover:opacity-80 transition-opacity">
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
          <section className="py-24 md:py-36 lg:py-48 px-6 flex flex-col items-center text-center space-y-10 container mx-auto">
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-5xl font-extrabold tracking-tightest sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Olá, eu sou um <span className="text-primary italic-font">Desenvolvedor</span>
              </h1>
              <p className="max-w-[60ch] mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
                Bem-vindo ao meu portfólio. Aqui você encontrará projetos focados em desenvolvimento e soluções criativas, construídos com precisão e propósito.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <a 
                href="#projetos" 
                className="text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors border-b-2 border-primary pb-1"
              >
                Ver Projetos
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <div id="projetos" className="scroll-mt-24">
            <ProjectList />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t py-16 mt-32 bg-muted/30">
          <div className="container mx-auto px-6 text-center space-y-4">
            <div className="text-sm font-bold tracking-tightest uppercase opacity-50">Gabriel Portfolio</div>
            <p className="text-xs text-muted-foreground tracking-wide font-medium">
              &copy; {new Date().getFullYear()} Todos os direitos reservados. Projetado com Elegância e Refinamento.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
