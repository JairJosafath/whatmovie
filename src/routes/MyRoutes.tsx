import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<p>Error</p>} />
        <Route
          path="movies"
          element={<p>Movies</p>}
          errorElement={<p>Error</p>}
        />
        <Route
          path="shows"
          element={<p>Shows</p>}
          errorElement={<p>Error</p>}
        />
        <Route
          path="movie/:id"
          element={<p>Movie</p>}
          errorElement={<p>Error</p>}
        />
        <Route
          path="show/:id"
          element={<p>Show</p>}
          errorElement={<p>Error</p>}
        />
      </Routes>
    </>
  );
}
