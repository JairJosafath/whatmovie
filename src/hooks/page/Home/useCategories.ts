import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { useFetch } from "../../useFetch";
export function useCategories() {
  //filter by categories or auto-featured
  //default-auto featured, shows all categories in grid
  const [categories, setCategories] = useState<{
    movies: any[];
    shows: any[];
  }>();
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
    setCategoriesLinkShows(shows.getGenres);
    return () => setCategoriesLinkShows("");
  }, [setCategoriesLinkShows]);

  useEffect(() => {
    if (dataCategories && dataCategoriesShows) {
      setCategories({ movies: dataCategories, shows: dataCategoriesShows });
    }
  }, [dataCategories, dataCategoriesShows]);

  useEffect(() => {
    if (
      !categories &&
      (loadingCategories || loadingCategoriesShows) &&
      !loading
    ) {
      setLoading(true);
    } else if (
      !loadingCategories &&
      !loadingCategoriesShows &&
      dataCategories &&
      dataCategoriesShows &&
      loading
    ) {
      setLoading(false);
    }
  }, [
    loadingCategories,
    loadingCategoriesShows,
    dataCategories,
    dataCategoriesShows,
    categories,
    loading,
  ]);
  return {
    categories,
    loading,
    isError,
  };
}
