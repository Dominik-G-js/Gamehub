// src/hooks/useGenres.ts
import { useEffect, useState } from 'react';
import type { Genre } from '../types/Game';

interface FetchGenresResponse {
  results: Genre[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_RAWG_API_KEY;
        const res = await fetch(`https://api.rawg.io/api/genres?key=${apiKey}`);
        if (!res.ok) throw new Error('Načtení žánrů selhalo.');
        const data: FetchGenresResponse = await res.json();
        setGenres(data.results);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { genres, loading, error };
};