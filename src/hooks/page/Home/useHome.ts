import { useState, useEffect } from "react";
import { useCategories } from "./useCategories";
import { useFilterBy } from "./usefilterBy";
import { useSearch } from "./useSearch";

export function useHome() {
  //handles the loading state
  const [loading, setLoading] = useState<boolean>(false);
  //handles the error state
  const [error, setError] = useState<boolean>();

  // const { hero, loading: loadingHero, isError: isErrorHero } = useHero();

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
    isError: isErrorFiltered,
  } = useFilterBy();

  const {
    categories,
    loading: loadingCategories,
    isError: isErrorCategories,
  } = useCategories();

  useEffect(() => {
    if (loadingCategories || loadingFiltered) {
      setLoading(true);
    } else if (!loadingCategories && !loadingFiltered) {
      setLoading(false);
    }
  }, [loadingFiltered, loadingCategories]);

  const {
    setQuery,
    query,
    results,
    loading: loadingSearch,
    isError: isErrorSearch,
  } = useSearch();
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
