# Learning Tracker

A single page React app for tracking weekly learning topics, set up as an [Nx](https://nx.dev) workspace with one project.

## Quick Start

```bash
# Install dependencies
npm install

# Start the dev server on http://localhost:4200
npx nx dev learning-tracker

# Run unit tests, lint, typecheck, and build
npx nx run-many -t test lint typecheck build
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
npx nx show project learning-tracker --web   # See all available targets
npx nx test learning-tracker                 # Run unit tests
npx nx build learning-tracker                # Production build into packages/app/dist
npx nx preview learning-tracker              # Serve the production build
npx nx g @nx/react:component src/app/my-component --project=learning-tracker
```
