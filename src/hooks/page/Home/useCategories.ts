import { useEffect, useState } from "react";
import { companies, movies, shows } from "../../../api/api";

import { addAttr } from "../../../util/utilities";
import { useFetch } from "../../useFetch";
export function useCategories() {
  //filter by categories or auto-featured
  //default-auto featured, shows all categories in grid
  const [categories, setCategories] = useState<
    | { id: number; name: string; type: "movies" | "shows" | "companies" }[]
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
      setCategories([
        ...addAttr(dataCategoriesShows.genres, { type: "shows" }),

        ...addAttr(dataCategories.genres, { type: "movies" }),
        ...addAttr(companies, { type: "companies" }),
      ]);
      setLoading(false);
    }
  }, [dataCategories, dataCategoriesShows]);

  // useEffect(() => console.log("cat ", categories));

  return {
    categories,
    loading,
    isError,
  };
}
