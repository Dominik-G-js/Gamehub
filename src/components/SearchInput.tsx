// src/components/SearchInput.tsx
import { useRef } from 'react';
import useGameQueryStore from '../store/useGameQueryStore';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // Získáme funkci pro nastavení textu ze storu
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        setSearchText(ref.current.value);
      }
    }}>
      <input
        ref={ref}
        type="text"
        placeholder="Search games..."
        className="w-full p-2 rounded-lg bg-slate-700 text-white"
      />
    </form>
  );
};

export default SearchInput;