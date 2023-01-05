import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieHero from "../../components/Movie.Hero";
import Similar from "../../components/Movie.Similar";
import Staff from "../../components/Staff";
import WatchOn from "../../components/WatchOn";
import { useMovie } from "../../hooks/page/Movie/useMovie";

export default function Movie() {
  const { movie, setMovieId, similar, credits, loading, isError } = useMovie();

  const { id } = useParams();

  useEffect(() => console.log("loading", loading), [loading]);
  useEffect(() => {
    if (id) setMovieId(id);
  }, [id, setMovieId]);

  return (
    <>
      {!loading ? (
        <>
          <MovieHero movie={movie} />
          <WatchOn
            name={
              movie ? (movie?.title ? movie?.title : movie?.original_title) : ""
            }
          />
          <Staff credits={credits} />
          <Similar similar={similar} />
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}
