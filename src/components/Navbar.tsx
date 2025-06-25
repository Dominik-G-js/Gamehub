// src/components/Navbar.tsx
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">GameHub</h1>
      <div className="w-1/3">
         <SearchInput />
      </div>
    </nav>
  );
};

export default Navbar;