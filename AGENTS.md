# AGENTS.md

## Stack e entrypoints

- App única em **Vite 8 + React 19 + TypeScript 6 + Tailwind CSS v4 + shadcn/ui**.
- O projeto já está estruturado como um portfólio funcional, não mais como scaffold inicial.
- Entrypoint real: `src/main.tsx` -> `src/App.tsx`.
- Composição principal atual em `src/App.tsx`: `ThemeProvider` + `ThemeToggle` + `ProjectList`.
- Alias `@/*` aponta para `src/*`; preserve `vite.config.ts`, `tsconfig.json` e `tsconfig.app.json` alinhados ao mexer nisso.

## Arquitetura funcional

- O catálogo de projetos é orientado a dados em `src/data/projects.ts`.
- O contrato público dos itens do portfólio está em `src/types/project.ts` via interface `Project`.
- A listagem é renderizada por `ProjectList` e cada item individual por `ProjectCard`.
- Ao adicionar ou editar projetos, prefira atualizar os dados em `src/data/projects.ts` em vez de embutir conteúdo diretamente nos componentes.

## Tema e UX

- O app suporta `light`, `dark` e `system`.
- A preferência de tema é persistida em `localStorage` com a chave `nerfas-theme`.
- `ThemeProvider` controla a classe aplicada no `documentElement`; preserve essa convenção ao alterar o sistema de tema.

## Comandos verificados

- Instalar deps: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build de validação: `npm run build`
- Preview local: `npm run preview`
- Não há suite de testes configurada hoje.

## GitHub Pages

- Deploy automático via `.github/workflows/deploy.yml` em push para `main`.
- O workflow usa Node 22, `npm install`, `npm run build` e publica `./dist`.
- O `base` em `vite.config.ts` é dinâmico por `mode`: `/` em desenvolvimento e `/gabriel-portfolio-profissional/` em produção.
- Se renomear o repositório do GitHub Pages, atualize esse `base` de produção, senão os assets quebram em produção.
- O workflow usa `npm install` (não `npm ci`); não troque sem garantir que `package-lock.json` esteja sincronizado.

## shadcn / Tailwind / estilos

- Configuração do shadcn está em `components.json`; aliases esperados: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
- `@/hooks` continua configurado no shadcn, mas hoje não existe no código; não assuma a pasta como disponível sem criar ou ajustar a configuração.
- Estilos globais e tokens ficam em `src/index.css`; esse arquivo já concentra imports de `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css` e `@fontsource-variable/geist`.
- O tema visual usa variáveis CSS e tokens em OKLCH para modos claro/escuro; evite substituir `src/index.css` por CSS simplificado de template.
- Utilitário compartilhado de classes: `src/lib/utils.ts` (`cn`).

## Dependências e componentes relevantes

- Dependências de UI já adotadas no projeto incluem `@base-ui/react`, `lucide-react`, `tw-animate-css`, `@fontsource-variable/geist` e `shadcn`.
- O app já possui componentes base em `src/components/ui` e componentes de domínio em `src/components/portfolio`.
- Preserve a separação entre dados (`src/data`), tipos (`src/types`), componentes de domínio e primitives de UI.

## Quirks do TypeScript

- `tsconfig.app.json` mantém `ignoreDeprecations: "6.0"` por causa de `baseUrl`; não remova sem ajustar a estratégia de alias.

## Higiene do repositório

- `node_modules/` e `dist/` podem existir localmente durante o desenvolvimento.
- `dist/` não está versionado; não dependa de artefatos gerados no repositório para mudanças de código ou revisão.
- O `README.md` ainda está no texto padrão do template Vite e pode não refletir o estado atual do projeto.

## Convenções úteis

- Prefira mudanças pequenas e incrementais, mantendo o foco no portfólio já existente.
- Para novos cards ou ajustes de conteúdo, comece por `src/data/projects.ts`.
- Ao evoluir a UI, preserve a estrutura atual com `ThemeProvider`, `ThemeToggle` e seção de projetos orientada a dados.
- Antes de concluir mudanças, validar com `npm run lint` e `npm run build`.
