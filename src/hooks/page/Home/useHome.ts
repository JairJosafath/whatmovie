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
    movies,
    shows,
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
    movies,
    shows,
    loading,
    error,
  };
}
