import { useContext, useState } from "react";
import { Movies } from "../Movies";
import { StarContext } from "..";
import { WatchlistContext } from "..";
import { Link } from "react-router-dom";

export const MovieListing = () => {
  const { handleStarUpdate, starredMovies } = useContext(StarContext);
  const { handleWatchlistUpdate, watchlistMovies } =
    useContext(WatchlistContext);
  const [toastMessage, setToastMessage] = useState("");

  // Show toast message function
  const showToast = (message) => {
    console.log("Showing toast:", message); // Debug
    setToastMessage(message);
    setTimeout(() => {
      console.log("Hiding toast");
      setToastMessage("");
    }, 4000); // Adjust the duration as needed
  };

  // Handle adding to favorites
  const handleAddToFavorites = (movie) => {
    const isAlreadyStarred = starredMovies.some((item) => item.id === movie.id);
    if (!isAlreadyStarred) {
      handleStarUpdate(movie);
      showToast("Added to Favorites");
    } else {
      showToast("Already in Favorites");
    }
  };

  // Handle adding to watchlist
  const handleAddToWatchlist = (movie) => {
    const isAlreadyInWatchlist = watchlistMovies.some(
      (item) => item.id === movie.id
    );
    if (!isAlreadyInWatchlist) {
      handleWatchlistUpdate(movie);
      showToast("Added to Watchlist");
    } else {
      showToast("Already in Watchlist");
    }
  };

  return (
    <div>
      <h1>Movie Listings</h1>
      <div>
        {Movies.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.imageURL} id="img" alt={item.title} />
            <h3 className="title" style={{ color: "rgb(245 197 24)" }}>
              {item.title}
            </h3>
            <p className="summary">{item.summary}</p>
            <button
              className="favBtn"
              onClick={() => handleAddToFavorites(item)}
            >
              <span>⭐</span>
            </button>
            <button
              className="watchlistBtn"
              onClick={() => handleAddToWatchlist(item)}
            >
              Add To Watchlist
            </button>
            <Link
              to={`/movie/${item.id}`}
              style={{
                color: "white",
                padding: ".15rem",
                textDecoration: "none",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Toast Message */}
      {toastMessage && <div className="toast show">{toastMessage}</div>}
    </div>
  );
};
