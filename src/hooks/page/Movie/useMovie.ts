import { useEffect, useState } from "react";
import { movies } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useMovie() {
  const [loading, setLoading] = useState(false);
  const [isError] = useState(false);
  const [movieId, setMovieId] = useState("");

  const { setLink: setMovieLink, data: movie } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (movieId) setMovieLink(movies.getMovie(movieId).movie);
  }, [setMovieLink, movieId]);

  const { setLink: setSimilarLink, data: similar } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (movieId) setSimilarLink(movies.getMovie(movieId).similar);
  }, [movieId, setSimilarLink]);
  const { setLink: setCreditsLink, data: credits } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (movieId) setCreditsLink(movies.getMovie(movieId).credits);
  }, [movieId, setCreditsLink]);

  useEffect(() => {
    if (movie && similar && credits) {
      setLoading(false);
    }
  }, [movie, similar, credits]);
  return {
    movie,
    setMovieId,
    similar,
    credits,
    loading,
    isError,
  };
}
