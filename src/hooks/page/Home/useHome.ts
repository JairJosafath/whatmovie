import { useState, useEffect } from "react";
import { useCategories } from "./useCategories";
import { useFilterBy } from "./usefilterBy";

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
    latest,
    nowPlaying,
    topRatedShow,
    popularShow,
    latestShow,
    airingToday,
    onTheAir,
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

  useEffect(() => console.log("loading", loading), [loading]);
  return {
    categories,
    list,
    topRated,
    popular,
    upcoming,
    latest,
    nowPlaying,
    topRatedShow,
    popularShow,
    latestShow,
    airingToday,
    onTheAir,
    loading,
    error,
  };
}
