import { useState, useEffect } from "react";
import { useCategories } from "./useCategories";
import { useFilterBy } from "./usefilterBy";
import { useSearch } from "./useSearch";

export function useHome() {
  //handles the loading state
  const [loading, setLoading] = useState<boolean>(false);
  //handles the error state
  const [error, setError] = useState<boolean>();

  const {
    list,
    topRated,
    popular,
    upcoming,
    nowPlaying,
    topRatedShow,
    popularShow,
    airingToday,
    loading: loadingFiltered,
  } = useFilterBy();

  const { categories, loading: loadingCategories } = useCategories();
  const { setQuery, query, results, loading: loadingSearch } = useSearch();
  useEffect(() => {
    if (loadingCategories || loadingFiltered || loadingSearch) {
      setLoading(true);
    } else if (!loadingCategories && !loadingFiltered && !loadingSearch) {
      setLoading(false);
    }
  }, [loadingFiltered, loadingCategories, loadingSearch]);

  return {
    categories,
    list,
    topRated,
    popular,
    upcoming,
    nowPlaying,
    topRatedShow,
    popularShow,
    airingToday,
    setQuery,
    query,
    results,
    loading,
    error,
  };
}
