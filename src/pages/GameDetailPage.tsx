import { useParams } from 'react-router-dom';
import { useGameDetails } from '../hooks/useGameDetails';
import { useScreenshots } from '../hooks/useScreenshots';

const GameDetailPage = () => {
  // Získá 'id' z URL adresy, např. '3498'
  const { id } = useParams<{ id: string }>();
  const { game, loading, error } = useGameDetails(id);
  const { screenshots } = useScreenshots(id);

  if (loading) return <p className="text-center p-10 text-white">Načítání detailů hry...</p>;
  if (error) return <p className="text-center p-10 text-red-500">{error}</p>;
  if (!game) return null; // Pokud hra neexistuje

  return (
    <div className="p-4 md:p-8 container mx-auto text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{game.name}</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        <span className="bg-green-500 text-white font-bold py-1 px-3 rounded-md">
          ⭐ {game.rating}
        </span>
        <div className="text-gray-400">
          <strong>Vydavatelé:</strong> {game.publishers.map(p => p.name).join(', ')}
        </div>
      </div>
      
      <p className="text-gray-300 mb-8 leading-relaxed">{game.description_raw}</p>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-3">Platformy</h3>
        <div className="flex flex-wrap gap-2">
          {game.platforms.map(({ platform }) => (
            <span key={platform.id} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
              {platform.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-3">Screenshoty</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {screenshots.map(screen => (
            <img 
              key={screen.id} 
              src={screen.image} 
              alt="Game screenshot" 
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;