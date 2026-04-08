# AGENTS.md

## Stack e entrypoints
- App única em **Vite 8 + React 19 + TypeScript 6 + Tailwind CSS v4 + shadcn/ui**.
- Entrypoint real: `src/main.tsx` -> `src/App.tsx`.
- Alias `@/*` aponta para `src/*`; preserve `vite.config.ts`, `tsconfig.json` e `tsconfig.app.json` alinhados ao mexer nisso.

## Comandos verificados
- Instalar deps: `npm install`
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build de validação: `npm run build`
- Não há suite de testes configurada hoje.

## GitHub Pages
- Deploy automático via `.github/workflows/deploy.yml` em push para `main`.
- O `base` de produção em `vite.config.ts` está fixo em `/gabriel-portfolio-profissional/`.
- Se renomear o repositório do GitHub Pages, atualize esse `base`, senão os assets quebram em produção.
- O workflow usa `npm install` (não `npm ci`); não troque sem garantir que `package-lock.json` esteja sincronizado.

## shadcn / Tailwind
- Configuração do shadcn está em `components.json`; aliases esperados: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`.
- Estilos globais e tokens do shadcn/Tailwind ficam em `src/index.css`; evite substituir esse arquivo por CSS de template simples.
- Utilitário compartilhado de classes: `src/lib/utils.ts` (`cn`).

## Quirks do TypeScript
- `tsconfig.app.json` mantém `ignoreDeprecations: "6.0"` por causa de `baseUrl`; não remova sem ajustar a estratégia de alias.

## Convenções úteis
- O repo ainda está perto do scaffold inicial; prefira mudanças pequenas e validar com `npm run build` e `npm run lint` antes de concluir.
