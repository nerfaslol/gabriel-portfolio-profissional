import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { ProjectList } from '@/components/portfolio/project-list'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="nerfas-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 items-center justify-between px-6">
            <div className="font-bold text-lg">Meu Portfólio</div>
            <ThemeToggle />
          </div>
        </header>

        <main className="flex-1 container mx-auto px-6 py-8">
          <section className="py-12 flex flex-col items-center text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Olá, eu sou um <span className="text-primary">Desenvolvedor</span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
              Bem-vindo ao meu portfólio. Aqui você encontrará projetos focados em desenvolvimento e soluções criativas.
            </p>
          </section>

          <ProjectList />
        </main>

        <footer className="border-t py-6">
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
