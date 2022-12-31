import { useState } from "react";
import { useCategories } from "./useCategories";
import { useFilterBy } from "./usefilterBy";

export function useHome() {
  //handles the loading state
  const [loading, setLoading] = useState<string[]>([]);
  //handles the error state
  const [error, setError] = useState<string[]>();

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

  return {
    hero: {
      movies: movies?.popular?.results.slice(0, 3),
      shows: shows?.popularShow?.results.slice(0, 3),
    },
    categories,
    movies,
    shows,
    loading,
    error,
  };
}
