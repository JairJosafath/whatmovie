import { useEffect, useState } from "react";
import { movies } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useMovie() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieId, setMovieId] = useState("");

  const {
    setLink: setMovieLink,
    data: movie,
    loading: loadingHero,
    isErr: errorHero,
  } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (movieId) setMovieLink(movies.getMovie(movieId).movie);
  }, [setMovieLink, movieId]);

  const {
    setLink: setSimilarLink,
    data: similar,
    loading: loadingSimilar,
    isErr: errorSimilar,
  } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (movieId) setSimilarLink(movies.getMovie(movieId).similar);
  }, [movieId, setSimilarLink]);
  const {
    setLink: setCreditsLink,
    data: credits,
    loading: loadingCredits,
    isErr: errorCredits,
  } = useFetch();

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
