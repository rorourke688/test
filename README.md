# Full-Stack TypeScript Application

A modern full-stack web application built with Node.js, Express, React, and TypeScript.

## Tech Stack

- **Backend**: Node.js + Express + TypeScript
- **Frontend**: React + TypeScript + Vite
- **Build Tools**: Vite (client), TypeScript Compiler (server)

## Project Structure

```
├── server/              # Backend Express API
│   └── index.ts        # Express server with API endpoints
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── App.tsx     # Main application component
│   │   └── main.tsx    # React entry point
│   └── index.html      # HTML template
├── dist/               # Compiled output (generated)
└── vite.config.ts      # Vite bundler configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

Run both server and client in development mode:

```bash
npm run dev
```

This will start:
- Express server on `http://localhost:5000`
- Vite dev server on `http://localhost:3000`

The Vite dev server proxies `/api` requests to the Express server.

### Running Separately

```bash
# Backend only
npm run dev:server

# Frontend only
npm run dev:client
```

### Production Build

```bash
# Build both server and client
npm run build

# Run production server
npm start
```

## How It Works

### Backend (server/index.ts)

The Express server provides a RESTful API with the following endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/data` - Returns sample data array

In production mode, the server also serves the compiled React application.

### Frontend (client/src/)

The React application features:

- **App.tsx**: Main component that fetches and displays API data
- **Header.tsx**: Navigation header component
- **DataDisplay.tsx**: Component to display fetched data in a grid

The app demonstrates:
- API communication with the backend
- Loading and error state handling
- TypeScript interfaces for type safety
- Component-based architecture

### Development Workflow

1. The Vite dev server runs the React app on port 3000
2. API requests to `/api/*` are proxied to the Express server on port 5000
3. Hot module replacement provides instant updates during development
4. TypeScript provides type checking for both frontend and backend

### Production Workflow

1. `npm run build` compiles:
   - Server TypeScript → `dist/`
   - Client React app → `dist/client/`
2. `npm start` runs the Express server which:
   - Serves API endpoints at `/api/*`
   - Serves static React files for all other routes

## Available Scripts

- `npm run dev` - Start development servers (both)
- `npm run dev:server` - Start Express server only
- `npm run dev:client` - Start Vite dev server only
- `npm run build` - Build for production
- `npm run build:server` - Compile server TypeScript
- `npm run build:client` - Build client with Vite
- `npm start` - Run production server
- `npm run type-check` - Type check both server and client

## TypeScript Configuration

- **tsconfig.json**: Server configuration (CommonJS, Node.js)
- **tsconfig.client.json**: Client configuration (ESNext, React JSX)
- **tsconfig.node.json**: Vite config support
