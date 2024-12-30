// import "./styles.css";
// import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
// import { MovieListing } from "./pages/MovieListing";
// import { WatchList } from "./pages/WatchList";
// import { Starred } from "./pages/Starred";
// import { useState } from "react";
// import { Movies } from "./Movies";
// import { MoviePage } from "./pages/MoviePage";

// export default function App() {
//   const navigate = useNavigate(); // Use navigate hook for redirection
//   const activeStyle = ({ isActive }) => ({
//     margin: "1rem 0",
//     fontWeight: isActive ? "600" : "200",
//     background: isActive ? "grey" : "black",
//     padding: isActive ? ".6rem" : ".5rem",
//   });

//   const [searchValue, setSearchValue] = useState("");
//   const [searchResult, setSearchResult] = useState(null);

//   const getSearchValue = (event) => {
//     const inputValue = event.target.value;
//     setSearchValue(inputValue);

//     // Dynamic search while typing
//     const foundResult = Movies.find((movie) =>
//       movie.title.toLowerCase().includes(inputValue.toLowerCase())
//     );
//     setSearchResult(foundResult);
//   };

//   const handleMovieClick = (movieId) => {
//     // Navigate to the movie page when the search result is clicked
//     navigate(`/movie/${movieId}`);

//     // Clear the search value and result after navigation
//     setSearchValue("");
//     setSearchResult(null);
//   };

//   return (
//     <div className="App">
//       <nav className="nav">
//         <h2 className="sitename">
//           <span
//             style={{
//               color: "black",
//               background: "rgb(245 197 24)",
//               borderRadius: ".2rem",
//               height: "25px",
//             }}
//           >
//             IMDB
//           </span>{" "}
//           <input
//             style={{ height: "25px", width: "70%", borderRadius: ".2rem" }}
//             placeholder="Search Movies"
//             value={searchValue}
//             onChange={getSearchValue}
//           />
//         </h2>

//         <NavLink className="nav-item" style={activeStyle} to="/">
//           Movies
//         </NavLink>
//         <NavLink className="nav-item" style={activeStyle} to="/watchlist">
//           Watch List
//         </NavLink>
//         <NavLink className="nav-item" style={activeStyle} to="/starred">
//           Favorites
//         </NavLink>
//       </nav>

//       {/* Conditional rendering of search result */}
//       {searchValue && searchResult ? (
//         <div
//           className="search-result"
//           onClick={() => handleMovieClick(searchResult.id)} // Redirect on click
//           style={{ cursor: "pointer" }}
//         >
//           <p>{searchResult.title}</p>
//           <p>{searchResult.year}</p>
//           <p>{searchResult.cast}</p>
//           <img
//             style={{ width: "200px", height: "200px" }}
//             src={searchResult.imageURL}
//             alt={searchResult.title}
//           />
//         </div>
//       ) : (
//         searchValue && <p>No results found</p>
//       )}

//       <Routes>
//         <Route path="/" element={<MovieListing />} />
//         <Route path="/watchlist" element={<WatchList />} />
//         <Route path="/starred" element={<Starred />} />
//         <Route path="/movie/:movieId" element={<MoviePage />}></Route>
//       </Routes>
//     </div>
//   );
// }
import "./styles.css";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { MovieListing } from "./pages/MovieListing";
import { WatchList } from "./pages/WatchList";
import { Starred } from "./pages/Starred";
import { useState } from "react";
import { Movies } from "./Movies";
import { MoviePage } from "./pages/MoviePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  const navigate = useNavigate(); // Use navigate hook for redirection
  const activeStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "200",
    background: isActive ? "grey" : "black",
    padding: isActive ? ".6rem" : ".5rem",
  });

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const getSearchValue = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    // Dynamic search while typing
    const foundResult = Movies.find((movie) =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResult(foundResult);
  };

  const handleMovieClick = (movieId) => {
    // Navigate to the movie page when the search result is clicked
    navigate(`/movie/${movieId}`);

    // Clear the search value and result after navigation
    setSearchValue("");
    setSearchResult(null);
  };

  return (
    <div className="App">
      <nav className="nav">
        <h2 className="sitename">
          <span
            style={{
              color: "black",
              background: "rgb(245 197 24)",
              borderRadius: ".2rem",
              height: "25px",
            }}
          >
            IMBD
          </span>{" "}
          <input
            style={{ height: "25px", width: "70%", borderRadius: ".2rem" }}
            placeholder="Search Movies"
            value={searchValue}
            onChange={getSearchValue}
          />
        </h2>

        <div className="nav-links">
          <NavLink className="nav-item" style={activeStyle} to="/">
            Movies
          </NavLink>
          <NavLink className="nav-item" style={activeStyle} to="/watchlist">
            Watch List
          </NavLink>
          <NavLink className="nav-item" style={activeStyle} to="/starred">
            Favorites
          </NavLink>
          <NavLink className="nav-item" style={activeStyle} to="/signin">
            Sign In
          </NavLink>
        </div>
      </nav>

      {/* Conditional rendering of search result */}
      {searchValue && searchResult ? (
        <div
          className="search-result"
          onClick={() => handleMovieClick(searchResult.id)} // Redirect on click
          style={{ cursor: "pointer" }}
        >
          <p>{searchResult.title}</p>
          <p>{searchResult.year}</p>
          <p>{searchResult.cast}</p>
          <img
            style={{ width: "200px", height: "200px" }}
            src={searchResult.imageURL}
            alt={searchResult.title}
          />
        </div>
      ) : (
        searchValue && <p>No results found</p>
      )}

      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
