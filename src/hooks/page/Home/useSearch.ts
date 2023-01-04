import { useEffect, useState } from "react";
import { movies } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useSearch() {
  const [results, setResults] = useState<any>();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {
    setLink,
    loading: loadingSearch,
    isErr: isErrorSearch,
    data,
  } = useFetch();
  useEffect(() => {
    if (query) {
      console.log("queriying db");
      setLoading(true);
      setLink(movies.search(query));
      return () => setLink("");
    }
  }, [query, setLink]);
  useEffect(() => {
    if (data) {
      setResults(data);
      setLoading(false);
    }
  }, [data]);
  useEffect(() => console.log("resuts", results), [results]);
  return {
    results,
    setQuery,
    query,
    loading,
    isError,
  };
}
