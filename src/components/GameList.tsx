// src/components/GameList.tsx
import { useGames } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton'; // <-- Importujeme naši novou komponentu

const GameList = () => {
  const { games, error, loading } = useGames();
  // Vytvoříme si pole čísel, abychom mohli snadno vyrenderovat více koster
  const skeletons = Array.from({ length: 20 }, (_, i) => i + 1);

  if (error) {
    return <p className="p-10 text-center text-red-500">{error}</p>;
  }

  // TOTO JE HLAVNÍ ZMĚNA
  if (loading) {
    return (
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton} />
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return <p className="p-10 text-center text-white">Žádné hry nenalezeny.</p>;
  }

  return (
    <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;