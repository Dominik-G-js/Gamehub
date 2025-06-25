// src/store/useGameQueryStore.ts
import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  searchText?: string;
  page?: number; // <-- PŘIDALI JSME STRÁNKU
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  nextPage: () => void;      // <-- NOVÁ AKCE
  previousPage: () => void; // <-- NOVÁ AKCE
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: { page: 1 }, // <-- Začínáme na stránce 1

  // Při aplikaci NOVÉHO filtru chceme VŽDY přejít na první stránku
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText, page: 1 } })),
  setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId, page: 1 } })),
  setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId, page: 1 } })),

  // Akce pro přechod mezi stránkami
  nextPage: () =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, page: (store.gameQuery.page || 1) + 1 },
    })),
  previousPage: () =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, page: Math.max(1, (store.gameQuery.page || 1) - 1) },
    })),
}));

export default useGameQueryStore;