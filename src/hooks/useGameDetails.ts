import { useEffect, useState } from 'react';
import type { GameDetails } from '../types/Game';

export const useGameDetails = (id: string | undefined) => {
  const [game, setGame] = useState<GameDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Nechceme nic dělat, pokud nemáme ID
    if (!id) return;

    const fetchGameDetails = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_RAWG_API_KEY;
        const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        if (!res.ok) throw new Error('Načtení detailů hry selhalo.');
        const data = await res.json();
        setGame(data);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]); // Spustí se vždy, když se změní ID v URL

  return { game, loading, error };
};