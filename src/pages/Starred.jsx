import { useContext } from "react";
import { StarContext } from "..";

export const Starred = () => {
  const { starredMovies, removeStar, toastMessage } = useContext(StarContext);

  return (
    <div style={{ padding: "1rem", color: "" }}>
      <h1>Starred Movies</h1>

      {/* Show message when no movies are starred */}
      {starredMovies.length === 0 ? (
        <h3 style={{ color: "gray" }}>No Movies Added</h3>
      ) : (
        <div style={{ display: "", flexWrap: "wrap", gap: "1rem" }}>
          {starredMovies.map((item) => (
            <div className="box" key={item.id}>
              <img src={item.imageURL} id="img" alt={item.title} />
              <h3 style={{ color: "rgb(245, 197, 24)" }}>{item.title}</h3>
              <p>{item.summary}</p>
              <button
                onClick={() => removeStar(item.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Remove From Starred
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && <div className="toast show">{toastMessage}</div>}
    </div>
  );
};
