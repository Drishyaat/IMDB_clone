import { createContext, useState } from "react";

export const StarContext = createContext();

export const StarProvider = ({ children }) => {
  const [starredMovies, setStarredMovies] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Function to show toast message
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  // Function to add a movie to favorites
  const handleStarUpdate = (item) => {
    const alreadyStarred = starredMovies.some((movie) => movie.id === item.id);
    if (!alreadyStarred) {
      setStarredMovies((prev) => [...prev, item]);
      showToast("Added to Favorites");
    } else {
      showToast("Already in Favorites");
    }
  };

  // Function to remove a movie from favorites
  const removeStar = (movieToRemoveID) => {
    setStarredMovies((prev) =>
      prev.filter((item) => item.id !== movieToRemoveID)
    );
    showToast("Removed from Favorites");
  };

  return (
    <StarContext.Provider
      value={{ starredMovies, handleStarUpdate, removeStar, toastMessage }}
    >
      {children}
    </StarContext.Provider>
  );
};
