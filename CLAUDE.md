# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack application with:
- **Backend**: Node.js + Express + TypeScript (server on port 5000)
- **Frontend**: React + TypeScript + Vite (client on port 3000)
- **Project Structure**:
  - `server/` - Express API server
  - `client/` - React frontend application
  - `dist/` - Compiled output (gitignored)

## Development Commands

### Setup
```bash
npm install                  # Install dependencies
```

### Development
```bash
npm run dev                  # Start both server and client in development mode
npm run dev:server           # Start only the Express server (port 5000)
npm run dev:client           # Start only the Vite dev server (port 3000)
```

### Building
```bash
npm run build                # Build both server and client for production
npm run build:server         # Compile server TypeScript to dist/
npm run build:client         # Build client with Vite to dist/client/
npm start                    # Run production server (requires build first)
```

### Code Quality
```bash
npm run type-check           # Type check both server and client code
```

## Architecture

### Server (Express)
- Server code lives in `server/` directory
- TypeScript compiled to `dist/` using tsconfig.json
- API routes prefixed with `/api`
- CORS enabled for development
- In production, serves static client files

### Client (React + Vite)
- Client code lives in `client/src/` directory
- Uses separate TypeScript config (tsconfig.client.json)
- Vite dev server proxies `/api` requests to Express server (port 5000)
- Components organized in `client/src/components/`
- Each component has its own CSS file

### Component Structure
- Functional components with hooks
- TypeScript interfaces for props
- Component-level CSS files (Header.css, DataDisplay.css, etc.)

### API Communication
- Client makes fetch requests to `/api` endpoints
- Vite proxy handles routing in development
- Production server serves both API and static files
- Handle loading, error, and success states in components

### TypeScript Configuration
- `tsconfig.json` - Server configuration (CommonJS, Node types)
- `tsconfig.client.json` - Client configuration (ESNext, DOM types, React JSX)
- `tsconfig.node.json` - Vite config file support