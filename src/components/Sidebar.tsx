// src/components/Sidebar.tsx
import GenreSelect from './GenreSelect';
import PlatformSelect from './PlatformSelect'; // Přidat tento řádek

const Sidebar = () => {
  return (
    <aside className="p-4">
      <GenreSelect />
      <PlatformSelect />  {/* A přidat tento řádek */}
    </aside>
  );
};

export default Sidebar;