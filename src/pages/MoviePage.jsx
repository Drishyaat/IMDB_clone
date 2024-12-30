import { useParams } from "react-router-dom";
import { Movies } from "../Movies";
import { useContext } from "react";
import { StarContext } from "..";
import { WatchlistContext } from "..";

export const MoviePage = () => {
  const { handleStarUpdate } = useContext(StarContext);
  const { handleWatchlistUpdate } = useContext(WatchlistContext);
  const { movieId } = useParams();
  const toDisplay = Movies.find((movie) => movie.id == movieId);
  console.log(`Here is the movie to be diaplayed-${toDisplay}`);
  console.log(`MOVIE ID-${movieId}`);
  return (
    <div>
      <div className="movie-box">
        <img className="img" src={toDisplay.imageURL} id="img" />
        <h2> {toDisplay.title}</h2>
        <p>{toDisplay.summary}</p>
        <button className="favBtn" onClick={() => handleStarUpdate(toDisplay)}>
          <span>⭐</span>
        </button>
        <button
          className="watchlistBtn"
          onClick={() => handleWatchlistUpdate(toDisplay)}
        >
          Add To Watchlist
        </button>
      </div>
    </div>
  );
};
