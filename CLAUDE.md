# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm run dev           # servidor de desenvolvimento
npm run build         # tsc -b + vite build (produção)
npm run lint          # ESLint
npm run format        # Prettier — reescreve arquivos
npm run format:check  # Prettier — apenas verifica
npm run preview       # preview do build de produção
```

Não há testes configurados neste projeto.

## Arquitetura

Portfólio pessoal (Gabriel Rodrigues Torres) — SPA com React 19 + TypeScript + Vite.

**Stack principal:**
- Tailwind CSS v4 via plugin `@tailwindcss/vite` (sem `tailwind.config.js` — tudo em `src/index.css`)
- Componentes UI baseados em `@base-ui/react` + `shadcn` (não é o shadcn/ui padrão)
- Fonte: Geist Variable (`@fontsource-variable/geist`)
- Animações: `tw-animate-css` + classes `animate-in` do Tailwind
- Tema dark/light/system via `ThemeProvider` customizado (`src/components/theme-provider.tsx`)

**Alias de path:** `@/` → `src/`

**Deploy:** GitHub Pages em `/gabriel-portfolio-profissional/` (base configurada em `vite.config.ts` via `mode`)

## Estrutura relevante

```
src/
  data/projects.ts          # fonte de dados estática dos projetos
  types/project.ts          # interface Project (id, title, description, imageUrl, tags, repoUrl?, liveUrl?)
  components/
    ui/                     # Button, Card, DropdownMenu — wrappers sobre @base-ui/react com CVA
    portfolio/              # seções da página (AboutSection, ProjectCard, ProjectList)
    theme-provider.tsx      # contexto de tema + hook useTheme
    theme-toggle.tsx        # botão de alternância de tema
  lib/utils.ts              # cn() — clsx + tailwind-merge
  index.css                 # tokens CSS (oklch), variantes dark, imports Tailwind v4
```

## Convenções

- Para adicionar um projeto: editar `src/data/projects.ts` adicionando um objeto `Project`.
- Cores e tokens de design vivem em `src/index.css` como CSS custom properties (não em JS).
- Componentes UI novos seguem o padrão `@base-ui/react` + CVA + `cn()`, igual ao `Button` existente.
- O `Button` aceita `render` prop para renderizar como `<a>` (padrão `@base-ui`).
