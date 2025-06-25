// src/components/PaginationControls.tsx
import useGameQueryStore from '../store/useGameQueryStore';

const PaginationControls = () => {
  const { nextPage, previousPage } = useGameQueryStore();
  const page = useGameQueryStore(s => s.gameQuery.page) || 1;

  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      <button
        onClick={previousPage}
        disabled={page === 1}
        className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed"
      >
        Předchozí
      </button>
      <span className="text-xl font-bold">{page}</span>
      <button
        onClick={nextPage}
        className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600"
      >
        Další
      </button>
    </div>
  );
};

export default PaginationControls;