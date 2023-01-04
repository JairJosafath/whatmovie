import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieHero from "../../components/Movie.Hero";
import Similar from "../../components/Similar";
import Staff from "../../components/Staff";
import WatchOn from "../../components/WatchOn";
import { useMovie } from "../../hooks/page/Movie/useMovie";
import { credits, movie } from "../../mock_data/movie";

export default function Movie() {
  const { setMovieId, providers, loading, isError } = useMovie();

  // const { id } = useParams();

  // useEffect(() => {
  //   if (id) setMovieId(id);
  // }, [id, setMovieId]);

  // useEffect(() => console.log(movie, "movie data"), [movie]);
  // useEffect(() => setMovieId("505642"), []);
  // useEffect(() => console.log(providers, "provs"), [providers]);

  return (
    <>
      <MovieHero movie={movie} />
      <WatchOn />
      <Staff />
      <Similar />
    </>
  );
}
