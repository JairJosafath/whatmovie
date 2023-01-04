import { useEffect, useState } from "react";
import { movies } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useMovie() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [getProviders, setGetProviders] = useState("");

  const {
    setLink: setMovieLink,
    data: movie,
    loading: loadingHero,
    isErr: errorHero,
  } = useFetch();

  useEffect(() => {
    // console.log("hero set url");
    // if (movieId) setMovieLink(movies.getMovie(movieId).movie);
  }, [setMovieLink, movieId]);

  const {
    setLink: setProviderLink,
    data: providers,
    loading: loadingProvider,
    isErr: errorProvider,
  } = useFetch();

  useEffect(
    () =>
      movieId ? setProviderLink(movies.getMovie(movieId).providers) : undefined,
    [movieId, setProviderLink]
  );
  return {
    movie,
    setMovieId,
    providers,
    setGetProviders,
    loading,
    isError,
  };
}
