import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="w-full max-w-2xl rounded-2xl border bg-card p-10 text-center shadow-sm">
        <span className="mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
          Vite + React + TypeScript + Tailwind v4 + shadcn/ui
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Projeto inicial pronto
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          Stack configurada com instalação latest validada via Context7, incluindo alias,
          Tailwind para Vite e shadcn/ui inicializado.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button>Começar</Button>
          <Button
            variant="outline"
            onClick={() => window.open('https://ui.shadcn.com/docs/installation/vite', '_blank', 'noopener,noreferrer')}
          >
            Docs shadcn/ui
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
