import { useContext } from "react";
import { WatchlistContext } from "..";

export const WatchList = () => {
  const { watchlistMovies, removeWatchlist, toastMessage } =
    useContext(WatchlistContext);

  return (
    <div>
      <h1>WatchList</h1>
      {watchlistMovies.length === 0 && (
        <h3 style={{ color: "white" }}>No Movies Added</h3>
      )}
      <div>
        {watchlistMovies.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.imageURL} id="img" />
            <h3> {item.title}</h3>
            <p>{item.summary}</p>
            <button onClick={() => removeWatchlist(item.id)}>
              Remove From Watchlist
            </button>
          </div>
        ))}
      </div>

      {/* Toast Message */}
      {toastMessage && <div className="toast show">{toastMessage}</div>}
    </div>
  );
};
