import { createContext, useContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext({});

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  return (
    <FavoriteContext.Provider value={{ 
      favorites,
      setFavorites
    }}>
      { children }
    </FavoriteContext.Provider>
  )
}

function useFavorite() {
  const context = useContext(FavoriteContext);
  return context;
}

export { FavoriteProvider, useFavorite };