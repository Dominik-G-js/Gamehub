import { usePlatforms } from '../hooks/usePlatforms';
import useGameQueryStore from '../store/useGameQueryStore';

const PlatformSelect = () => {
  const { platforms, error, loading } = usePlatforms();
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);

  if (error) return <p className="text-red-500">Chyba při načítání platforem.</p>;
  if (loading) return <p>Načítání platforem...</p>;

  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold mb-2 text-white">Platformy</h2>
      <ul>
        {platforms.map((platform) => (
          <li key={platform.id} className="mb-1">
            <button
              onClick={() => setPlatformId(platform.id)}
              className={`w-full text-left p-1 rounded hover:bg-slate-700 ${
                platform.id === selectedPlatformId ? 'font-bold text-blue-400' : 'text-gray-400'
              }`}
            >
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelect;