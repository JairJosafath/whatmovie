import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieHero from "../../components/Movie.Hero";
import Similar from "../../components/Movie.Similar";
import Staff from "../../components/Movie.Staff";
import { useMovie } from "../../hooks/page/Movie/useMovie";

export default function Movie() {
  const { movie, setMovieId, similar, credits, loading } = useMovie();

  const { movieId } = useParams();

  useEffect(() => console.log("loading", loading), [loading]);
  useEffect(() => {
    if (movieId) setMovieId(movieId);
  }, [movieId, setMovieId]);

  return (
    <>
      {!loading ? (
        <>
          <MovieHero movie={movie} />
          <Staff credits={credits} />
          <Similar similar={similar} />
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}
