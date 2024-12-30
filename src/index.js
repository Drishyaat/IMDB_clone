import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StarContext, StarProvider } from "./context/StarContext";

import App from "./App";
import {
  WatchlistContext,
  WatchlistProvider
} from "./context/WatchlistContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { StarContext };
export { WatchlistContext };

root.render(
  <StrictMode>
    <WatchlistProvider>
      <StarProvider>
        <Router>
          <App />
        </Router>
      </StarProvider>
    </WatchlistProvider>
  </StrictMode>
);
