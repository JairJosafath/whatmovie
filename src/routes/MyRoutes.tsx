import { Routes, Route } from "react-router-dom";
import Results from "../components/Home.Results";
import { Home } from "../Pages/Home";
import Movie from "../Pages/Movie";
import Show from "../Pages/Show";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<p>Error</p>} />
        <Route
          path="search"
          element={<Results />}
          errorElement={<p>Error</p>}
        />

        <Route
          path="movie/:id"
          element={<Movie />}
          errorElement={<p>Error</p>}
        />
        <Route path="show/:id" element={<Show />} errorElement={<p>Error</p>} />
      </Routes>
    </>
  );
}
