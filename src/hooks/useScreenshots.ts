import { useEffect, useState } from 'react';
import type { Screenshot } from '../types/Game';

interface FetchScreenshotsResponse {
  results: Screenshot[];
}

export const useScreenshots = (id: string | undefined) => {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  // Zde nepotřebujeme loading/error, protože to není kritická informace

  useEffect(() => {
    if (!id) return;

    const fetchScreenshots = async () => {
      const apiKey = import.meta.env.VITE_RAWG_API_KEY;
      const res = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`);
      const data: FetchScreenshotsResponse = await res.json();
      setScreenshots(data.results);
    };

    fetchScreenshots();
  }, [id]);

  return { screenshots };
};