// src/components/GameCard.tsx
import { Link } from 'react-router-dom'; // <-- Import
import type { Game } from "../types/Game";

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
  <Link to={`/games/${game.id}`}>
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-200 ease-in-out">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white text-xl font-bold">{game.name}</h3>
        <p className="text-gray-400 text-sm mt-1">⭐ {game.rating}</p>
        <p className="text-gray-500 text-xs mt-2">
          {game.genres.map((g) => g.name).join(", ")}
        </p>
      </div>
    </div>
  </Link>
  );
};

export default GameCard;