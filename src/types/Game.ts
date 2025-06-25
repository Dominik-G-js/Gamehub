// src/types/Game.ts

export interface Genre {
  id: number;
  name: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  genres: Genre[];
  // TATO VLASTNOST CHYBĚLA V PŮVODNÍ DEFINICI
  platforms: { platform: Platform }[];
}

// ZAJISTÍME, ŽE GAMEDETAILS DĚDÍ Z GAME
export interface GameDetails extends Game {
  description_raw: string;
  publishers: Publisher[];
}

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}