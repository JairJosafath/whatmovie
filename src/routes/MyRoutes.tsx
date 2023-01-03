import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<p>Error</p>} />
        <Route path="movies" element={<Home />} errorElement={<p>Error</p>} />
        {/* <Route
          path="movie/:id"
          element={<Movie/>}
          errorElement={<p>Error</p>}
        />
        <Route
          path="show/:id"
          element={<Show/>}
          errorElement={<p>Error</p>}
        /> */}
      </Routes>
    </>
  );
}
