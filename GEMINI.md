# Project Overview

Este projeto é um portfólio frontend moderno e refinado, construído com **React 19**, **TypeScript** e **Vite**. Ele foi desenvolvido sob os pilares de **Clean Code**, **SOLID** e resiliência de interface, servindo como uma vitrine profissional para o Gabriel.

## Core Technologies

- **Framework:** React 19 (com suporte nativo a modern features)
- **Language:** TypeScript (Strict Typing)
- **Build Tool:** Vite v8
- **Styling:** Tailwind CSS v4 + Tweakcn (Vercel Theme Tokens)
- **UI Components:** shadcn/ui (base-ui/react)
- **Typography:** Geist (font-sans) com escala modular e hierarquia forte.
- **Icons:** Lucide-react

## Design Context (from .impeccable.md)

- **Brand Personality**: Elegante, Refinado, Simples.
- **Emotional Goals**: Clareza e Confiança.
- **Aesthetic Direction**: Minimalismo moderno estilo Vercel/Linear, com uso inteligente de espaços em branco e micro-interações sutis.

## Architecture and Code Quality

- **SOLID & Clean Code**: 
  - Pasta `src` estritamente organizada.
  - Separação clara entre Dados (`src/data`), Tipos (`src/types`) e UI (`src/components`).
  - Uso de componentes com responsabilidade única e semântica HTML (`nav`, `main`, `footer`, `section`).
- **Resiliência (Hardening)**:
  - Tratamento de overflow (`line-clamp`, `truncate`).
  - Fallback para imagens falhas.
  - Estados vazios (Empty States) tratados.
  - Acessibilidade (ARIA labels e navegação por teclado).
- **Tipografia (Typeset)**:
  - Escala fluida para títulos grandes (`8xl`).
  - Limite de largura de linha (`max-width: 60ch`) para legibilidade.
  - Contraste de peso (`extrabold` vs `medium`).

## Building and Running

- **Development:** `npm run dev`
- **Build:** `npm run build` (TypeScript + Vite)
- **Lint:** `npm run lint`

## Recent Learnings & Session Decisions

- **Theme Tokens**: O projeto abandonou cores hardcoded em favor de tokens `oklch` (Tweakcn Vercel Theme).
- **shadcn/ui update**: A versão mais recente utiliza `@base-ui/react` e a propriedade `render={<... />}` em vez de `asChild` para maior compatibilidade.
- **Path Aliasing**: Uso obrigatório do prefixo `@/` para `src/`.
- **Custom Skill**: Implementamos o comando `/sincronizar` para manter este documento e o aprendizado da IA sempre atualizados com o estado do repositório.

---
*Atualizado automaticamente via comando `/sincronizar`*
