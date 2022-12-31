import { useEffect, useState } from "react";
import { movies, shows } from "../src/api/api";
import { useFetch } from "../src/hooks/useFetch";
export function useHero() {
  //for featured movies/shows on Hero
  const [hero, setHero] = <any>useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //Hero
  const {
    setLink: setPopular,
    data: popular,
    isErr: errorPopular,
    loading: loadingPopular,
  } = useFetch();
  const {
    setLink: setPopularShows,
    data: popularShows,
    isErr: errorPopularShows,
    loading: loadingPopularShows,
  } = useFetch();

  useEffect(() => {
    setPopular(movies.getMoviesBy("popular"));
    return () => {
      setPopular("");
    };
  }, [setPopular]);
  useEffect(() => {
    setPopularShows(shows.getShowsBy("popular"));
    return () => {
      setPopularShows("");
    };
  }, [setPopularShows]);

  useEffect(() => {
    let arr: string[];
    if (popular && popularShows) {
      arr = [
        ...popular?.results?.slice(0, 3),
        ...popularShows?.results?.slice(0, 2),
      ];
    } else return;
    if (arr) setHero(arr);
    return () => {
      setHero();
    };
  }, [popular, popularShows, setHero]);

  useEffect(() => {
    if (!hero && (loadingPopular || loadingPopularShows) && !loading) {
      setLoading(true);
    } else if (
      !loadingPopular &&
      !loadingPopularShows &&
      popular &&
      popularShows &&
      loading
    ) {
      setLoading(false);
    }
  }, [
    loadingPopular,
    loadingPopularShows,
    loading,
    hero,
    popular,
    popularShows,
  ]);

  return {
    hero,
    loading,
    isError,
  };
}
