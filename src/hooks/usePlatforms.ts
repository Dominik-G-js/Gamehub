import { useEffect, useState } from 'react';
import type { Platform } from '../types/Game';

interface FetchPlatformsResponse {
  results: Platform[];
}

export const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlatforms = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_RAWG_API_KEY;
        // Jediný rozdíl je v URL adrese, voláme endpoint 'platforms'
        const res = await fetch(`https://api.rawg.io/api/platforms?key=${apiKey}`);
        if (!res.ok) throw new Error('Načtení platforem selhalo.');
        const data: FetchPlatformsResponse = await res.json();
        setPlatforms(data.results);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlatforms();
  }, []);

  return { platforms, loading, error };
};