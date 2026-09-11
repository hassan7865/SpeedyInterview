# Speedy Interview

Interview / student-management style web app built with React, Vite, TypeScript, Tailwind, and shadcn/Radix UI. Includes a marketing landing page plus an authenticated dashboard.

**Live:** [speedyinterview.vercel.app](https://speedyinterview.vercel.app)

## Overview

Speedy Interview is a front-end application (Vite SPA) with landing, auth, dashboard analytics, student lists/details, and form flows. It uses TanStack Query/Table, React Hook Form + Zod, and a shadcn-style component kit.

## Features

- Marketing **landing** (hero, about, services, newsletter)
- **Login / register** pages
- **Dashboard** layout with charts (Recharts)
- **Students** list and detail views
- Shared **form** page and UI primitives (dialogs, tables, dropzone, etc.)
- Theming (`next-themes`), toasts (Sonner), React Query for data fetching

## Stack

- React 18, Vite, TypeScript
- Tailwind CSS + Radix UI / shadcn patterns
- TanStack React Query & Table
- React Hook Form, Zod, Axios
- Recharts, Lucide, react-router-dom
- Prettier + Husky / lint-staged

## Structure

```
src/
  pages/        # landing, auth, dashboard, students, form, not-found
  components/   # ui, layout, shared
  routes/       # App router
  providers/    # App providers
  hooks/, lib/, types/
public/
vercel.json
```

## Setup

```bash
git clone https://github.com/hassan7865/Speedy-Interview.git
cd Speedy-Interview
npm install
npm run dev
```

```bash
npm run build    # tsc + vite build
npm run preview
npm run lint
npm run format
```

Configure any API base URLs via env/client config as used by Axios/Query hooks. Deployed on Vercel (`vercel.json`).
