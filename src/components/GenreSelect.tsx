// src/components/GenreSelect.tsx
import { useGenres } from '../hooks/useGenres';
import useGameQueryStore from '../store/useGameQueryStore';

const GenreSelect = () => {
  const { genres, error, loading } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return <p className="text-red-500">Chyba při načítání žánrů.</p>;
  if (loading) return <p>Načítání žánrů...</p>;

  return (
    <div className="mb-5">
      <h2 className="text-xl font-bold mb-2 text-white">Žánry</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} className="mb-1">
            <button
              onClick={() => setGenreId(genre.id)}
              className={`w-full text-left p-1 rounded hover:bg-slate-700 ${
                genre.id === selectedGenreId ? 'font-bold text-blue-400' : 'text-gray-400'
              }`}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreSelect;