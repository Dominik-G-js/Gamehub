// src/components/GameCardSkeleton.tsx

const GameCardSkeleton = () => {
    return (
      <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        {/* Placeholder pro obrázek */}
        <div className="bg-slate-700 w-full h-48 animate-pulse"></div>
        <div className="p-4 space-y-3">
          {/* Placeholder pro název */}
          <div className="bg-slate-700 w-3/4 h-6 rounded-md animate-pulse"></div>
          {/* Placeholder pro hodnocení a žánry */}
          <div className="bg-slate-700 w-1/2 h-4 rounded-md animate-pulse"></div>
          <div className="bg-slate-700 w-5/6 h-4 rounded-md animate-pulse"></div>
        </div>
      </div>
    );
  };
  
  export default GameCardSkeleton;