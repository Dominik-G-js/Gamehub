// src/hooks/useGames.ts
import { useEffect, useState } from 'react';
import type { Game } from '../types/Game';
import useGameQueryStore from '../store/useGameQueryStore';

interface FetchGamesResponse {
  results: Game[];
}

export const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiKey = import.meta.env.VITE_RAWG_API_KEY;
        const params = new URLSearchParams({
          key: apiKey!,
          page_size: '20',
        });

        if (gameQuery.genreId) params.append('genres', gameQuery.genreId.toString());
        if (gameQuery.platformId) params.append('platforms', gameQuery.platformId.toString());
        if (gameQuery.searchText) params.append('search', gameQuery.searchText);
        if (gameQuery.page) params.append('page', gameQuery.page.toString());
        const res = await fetch(
          `https://api.rawg.io/api/games?${params.toString()}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error('Odpověď sítě nebyla v pořádku.');
        const data: FetchGamesResponse = await res.json();
        setGames(data.results);
      } catch (e: any) {
        if (e.name === 'AbortError') {
          console.log('Fetch byl zrušen');
          return;
        }
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();

    return () => controller.abort();
    // ZDE JE KLÍČOVÁ ZMĚNA
  }, [gameQuery.genreId, gameQuery.platformId, gameQuery.searchText, gameQuery.page]);


  return { games, loading, error };
};