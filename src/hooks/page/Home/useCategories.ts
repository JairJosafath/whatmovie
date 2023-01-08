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
  const [isError] = useState(false);
  //Categories Movies
  const { setLink: setCategoriesLink, data: dataCategories } = useFetch();

  useEffect(() => {
    setLoading(true);
    console.log("fetching categories");
    setCategoriesLink(movies.getGenres);
    return () => setCategoriesLink("");
  }, [setCategoriesLink]);

  //Categories Shows
  const { setLink: setCategoriesLinkShows, data: dataCategoriesShows } =
    useFetch();

  useEffect(() => {
    setLoading(true);
    console.log("fetching categories for shows");
    setCategoriesLinkShows(shows.getGenres);
    return () => setCategoriesLinkShows("");
  }, [setCategoriesLinkShows]);

  useEffect(() => {
    if (dataCategories && dataCategoriesShows) {
      setCategories([
        ...addAttr(dataCategoriesShows.genres, { type: "shows" }),

        ...addAttr(dataCategories.genres, { type: "movies" }),
        ...addAttr(companies, { type: "companies" }),
        { id: 0, name: "Popular", type: "movies" },
        { id: 1, name: "Top Rated", type: "movies" },
        { id: 2, name: "Upcoming", type: "movies" },
        { id: 3, name: "Now Playing", type: "movies" },
        { id: 4, name: "Popular", type: "shows" },
        { id: 5, name: "Top Rated", type: "shows" },
        { id: 6, name: "Airing Today", type: "shows" },
        { id: 7, name: "On the Air", type: "shows" },
      ]);
      setLoading(false);
    }
  }, [dataCategories, dataCategoriesShows]);

  return {
    categories,
    loading,
    isError,
  };
}
