import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { useFetch } from "../../useFetch";
export function useCategories() {
  //filter by categories or auto-featured
  //default-auto featured, shows all categories in grid
  const [categories, setCategories] = useState<
    | {
        movies: { genres: { id: number; name: string }[] };
        shows: { genres: { id: number; name: string }[] };
      }
    | undefined
  >();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //Categories Movies
  const {
    setLink: setCategoriesLink,
    loading: loadingCategories,
    isErr: errorCategories,
    data: dataCategories,
  } = useFetch();

  useEffect(() => {
    setLoading(true);
    setCategoriesLink(movies.getGenres);
    return () => setCategoriesLink("");
  }, [setCategoriesLink]);

  //Categories Shows
  const {
    setLink: setCategoriesLinkShows,
    loading: loadingCategoriesShows,
    isErr: errorCategoriesShows,
    data: dataCategoriesShows,
  } = useFetch();

  useEffect(() => {
    setLoading(true);
    setCategoriesLinkShows(shows.getGenres);
    return () => setCategoriesLinkShows("");
  }, [setCategoriesLinkShows]);

  useEffect(() => {
    if (dataCategories && dataCategoriesShows) {
      setCategories({ movies: dataCategories, shows: dataCategoriesShows });
      setLoading(false);
    }
  }, [dataCategories, dataCategoriesShows]);

  // useEffect(() => console.log("cat loading", loading));

  return {
    categories,
    loading,
    isError,
  };
}
