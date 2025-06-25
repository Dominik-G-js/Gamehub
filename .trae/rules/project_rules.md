# Project Rules

## Overview

GameHub is a responsive web application built with React and TypeScript that allows users to browse, search, and filter video games using the RAWG API. The app aims to provide a clean and intuitive UI for discovering game titles, genres, platforms, and detailed game info.

## Goals

- Create a professional-level React + TypeScript project for GitHub portfolio
- Demonstrate proficiency in API integration, component design, state management, routing, and UX/UI
- Follow modern frontend architecture and best practices

## Tech Stack

- React (with Vite)
- TypeScript
- TailwindCSS
- Zustand (preferred state management)
- React Router
- RAWG API (https://rawg.io/apidocs)
- Optional: TanStack Query (if needed and justified)
- Deployment via Vercel

## Core Features (MVP)

- Game list view with cover image, title, genres, rating
- Search bar with debounce
- Filter panel:
  - Genres
  - Platforms
  - Release date (optional)
- Game detail page (by ID):
  - Title, description, screenshots, platforms, publisher, rating
- Responsive design (mobile/tablet/desktop)

## Bonus Features (Optional)

- Wishlist stored in localStorage
- Light/Dark mode toggle
- Infinite scroll or pagination
- Loading skeletons
- PWA support
- Authentication (Google/GitHub via Firebase)
- Sorting (by rating, release date, etc.)

## Project Structure

src/
├── api/ # API functions and RAWG fetch utilities
├── components/ # Reusable UI components (GameCard, FilterSidebar, etc.)
├── hooks/ # Custom React hooks (useGames, useGenres, etc.)
├── pages/ # Route pages (Home, GameDetail, 404)
├── store/ # Zustand store or context logic
├── types/ # TypeScript interfaces and types (Game, Genre, Platform)
├── assets/ # Static assets (icons, logos)
└── App.tsx


## Key Components

- `GameCard.tsx`
- `GameList.tsx`
- `SearchInput.tsx`
- `FilterSidebar.tsx`
- `Navbar.tsx`
- `GameDetailPage.tsx`
- `GenreSelect.tsx`
- `PlatformSelect.tsx`
- `PaginationControls.tsx` (if not using infinite scroll)

## Custom Hooks

- `useGames()`
- `useGameDetails(id: string)`
- `useGenres()`
- `usePlatforms()`
- `useDebounce(value: string, delay: number)`
- `useWishlist()` (optional)

## Guidelines

- Code should be clean, modular, and readable
- Avoid duplication – abstract logic and UI when reusable
- Always define prop types and API response types
- Handle loading, error, and empty states gracefully
- Focus on user experience – intuitive interactions and layout

