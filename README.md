# Learning Tracker

A single page React app for tracking weekly learning topics, set up as an [Nx](https://nx.dev) workspace with one project.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start the dev server on http://localhost:4200
pnpm nx dev learning-tracker

# Run unit tests, lint, typecheck, and build
pnpm nx run-many -t test lint typecheck build
```

## Project Structure

```
├── packages/
│   └── app/            - The learning-tracker React app (Vite + Vitest)
│       ├── index.html
│       ├── src/
│       │   ├── main.tsx
│       │   ├── app/        - Root App component
│       │   ├── topics.ts   - Topic data
│       │   └── utils/
│       └── vite.config.mts
├── nx.json             - Nx configuration
├── tsconfig.base.json  - Shared TypeScript settings
└── eslint.config.mjs   - Shared ESLint config
```

## Useful Commands

```bash
pnpm nx show project learning-tracker --web   # See all available targets
pnpm nx test learning-tracker                 # Run unit tests
pnpm nx build learning-tracker                # Production build into packages/app/dist
pnpm nx preview learning-tracker              # Serve the production build
pnpm nx g @nx/react:component src/app/my-component --project=learning-tracker
```
