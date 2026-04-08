# Project Overview

This project is a modern frontend web application built with React 19, TypeScript, and Vite. It serves as a pre-configured starter template or portfolio project ("Projeto inicial pronto"), incorporating robust styling and UI component libraries.

## Core Technologies

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4, `tailwind-merge`, `clsx`, `tw-animate-css`
- **UI Components:** shadcn/ui, `@base-ui/react`, `lucide-react` for icons
- **Fonts:** Geist (`@fontsource-variable/geist`)
- **Linting:** ESLint (with TypeScript and React Hooks plugins)

## Architecture and Code Quality

- **SOLID & Clean Code:** The `src` directory must strictly adhere to SOLID principles and Clean Code practices. 
  - Functions and components should have a single responsibility.
  - Keep code modular, readable, and maintainable.
  - Avoid large, monolithic files; break down logic into smaller, reusable pieces.
  - Use meaningful naming conventions for variables, functions, and files.

## Building and Running

The project utilizes standard npm scripts for its development lifecycle. Use your preferred package manager (e.g., `npm`, `pnpm`, or `yarn`) to execute these commands:

- **Development Server:** `npm run dev` (starts the Vite dev server with Hot Module Replacement).
- **Production Build:** `npm run build` (runs the TypeScript compiler `tsc -b` followed by `vite build`).
- **Preview Production:** `npm run preview` (locally previews the production build).
- **Linting:** `npm run lint` (runs ESLint across the project).

## Development Conventions

- **Path Aliasing:** The project is configured with a path alias. The `@/` prefix maps to the `./src/` directory (e.g., `import { Button } from '@/components/ui/button'`).
- **Styling Architecture:** The project uses a utility-first CSS approach with Tailwind v4. UI components are built using shadcn/ui patterns, likely leveraging `class-variance-authority` for managing component variants.
- **Routing/Base URL:** The `vite.config.ts` is configured to use `/gabriel-portfolio-profissional/` as the base URL in production environments, and `/` during development. Keep this in mind when dealing with static assets or routing.
- **Strict Typing:** The project uses TypeScript. Ensure that new code is strongly typed and passes the `npm run build` step without compilation errors.