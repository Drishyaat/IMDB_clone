import { createContext, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Show Toast Message
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage("");
    }, 4000); // Toast will disappear after 4 seconds
  };

  const handleWatchlistUpdate = (item) => {
    // Check if the movie is already in the watchlist
    const isAlreadyInWatchlist = watchlistMovies.some(
      (movie) => movie.id === item.id
    );

    if (!isAlreadyInWatchlist) {
      // Add to watchlist if not already added
      setWatchlistMovies((prevWatchlistMovies) => [
        ...prevWatchlistMovies,
        item,
      ]);
      showToast("Added to Watchlist");
    } else {
      showToast("Already in Watchlist");
    }
  };

  const removeWatchlist = (movieToRemoveID) => {
    const newWatchlistMovies = watchlistMovies.filter(
      (item) => item.id !== movieToRemoveID
    );
    setWatchlistMovies(newWatchlistMovies);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlistMovies,
        handleWatchlistUpdate,
        removeWatchlist,
        toastMessage,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
