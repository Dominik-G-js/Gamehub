// src/pages/HomePage.tsx
import GameList from '../components/GameList';
import Sidebar from '../components/Sidebar';
import PaginationControls from '../components/PaginationControls'; // <-- Import

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] container mx-auto">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main>
        <GameList />
        <PaginationControls />
      </main>
    </div>
  );
};

export default HomePage;