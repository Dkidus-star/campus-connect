import { createContext, useState } from "react";

// 1. Create the context
export const FavoritesContext = createContext();

// 2. Create the provider component
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Function to add or remove a club ID from the favorites array
  const toggleFavorite = (clubId) => {
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(clubId)
          ? prevFavorites.filter((id) => id !== clubId) // Remove if already favorited
          : [...prevFavorites, clubId], // Add if not favorited
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
