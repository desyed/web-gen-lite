# Web Gen Lite

A modern web application built with TypeScript and Prisma.

## Project Structure

```
src/
├── api/            # API routes and handlers
├── components/     # Reusable UI components
├── config/         # Configuration files
├── constants/      # Constants and enums
├── hooks/          # Custom React hooks
├── lib/           # Core libraries and utilities
├── pages/         # Page components and routes
├── services/      # Service layer for API calls
├── styles/        # Global styles and theme
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Generate Prisma client:
```bash
bunx prisma generate
```

3. Start the development server:
```bash
bun dev
```

open http://localhost:3000
