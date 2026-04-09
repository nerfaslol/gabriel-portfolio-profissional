# AGENTS.md

## Comandos

- Instalação e CI usam `npm install` (não `npm ci`).
- Dev: `npm run dev`
- Verificação mínima antes de concluir: `npm run lint && npm run build`
- Formatação: `npm run format` / `npm run format:check`
- Não há testes configurados.

## Entrypoints e fluxo real

- Entrypoint: `src/main.tsx` -> `src/App.tsx`.
- `App.tsx` usa `ThemeProvider` + `HashRouter`.
- Rotas atuais: `/` -> `PortfolioPage`, `/aula` -> `LessonPlanPage`.
- O uso de `HashRouter` é intencional para GitHub Pages; não troque por `BrowserRouter` sem ajustar o deploy.

## Conteúdo orientado a dados

- Cards normais do portfólio vêm de `src/data/projects.ts` e seguem `src/types/project.ts`.
- O card principal “Plano de Aula” não vem de `projects.ts`; ele usa `lessonPlan` de `src/data/lesson-plan.ts` dentro de `ProjectList`.
- A página `/aula` alterna entre `lessonPlanPresencial` e `lessonPlanDistancia`, ambos gerados pela factory `createLessonPlan()` em `src/data/lesson-plan.ts`.
- Para mudar conteúdo de projetos/aula, prefira editar os arquivos de `src/data/*` em vez de embutir texto nos componentes.

## Tema, estilos e UI

- Tema suportado: `light | dark | system`; a preferência é salva em `localStorage` com a chave `nerfas-theme`.
- `ThemeProvider` aplica a classe no `document.documentElement`; preserve essa convenção.
- Tailwind v4 é configurado direto em `src/index.css`; não existe `tailwind.config.*`.
- `src/index.css` concentra imports do Tailwind, `tw-animate-css`, `shadcn/tailwind.css`, fonte Geist e tokens OKLCH do tema; evite substituir por CSS de template.
- Componentes base ficam em `src/components/ui`; componentes de domínio ficam em `src/components/portfolio`.
- O projeto usa `@base-ui/react` + `cn()` (`src/lib/utils.ts`) nos primitives.

## Aliases e geração de componentes

- O alias `@/*` precisa permanecer alinhado entre `vite.config.ts`, `tsconfig.json` e `tsconfig.app.json`.
- `components.json` aponta `hooks` para `@/hooks`, mas essa pasta não existe hoje; se gerar componentes via shadcn, ajuste isso ou crie a pasta.

## Deploy

- Deploy automático em `.github/workflows/deploy.yml` roda em push para `main` com Node 22, `npm install` e `npm run build`, publicando `dist/` no GitHub Pages.
- `vite.config.ts` usa `base: '/gabriel-portfolio-profissional/'` em produção e `/` fora dela; se o nome do repositório Pages mudar, atualize esse `base`.

## Fontes de verdade

- `README.md` ainda é o padrão do template Vite e não descreve o app atual.
- `CLAUDE.md` tem contexto adicional útil sobre scripts e convenções; preserve o que continuar verificável no código.
