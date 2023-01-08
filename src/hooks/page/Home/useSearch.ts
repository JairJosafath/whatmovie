import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useSearch() {
  const [results, setResults] = useState<any>();
  const [query, setQuery] = useState<
    { query: string; type: "movies" | "shows" | undefined } | undefined
  >({ query: "", type: "movies" });
  const [loading, setLoading] = useState(false);
  const [isError] = useState(false);
  const { setLink, data } = useFetch();
  useEffect(() => {
    if (query?.query) {
      console.log("queriying db");
      setLoading(true);

      if (query?.type === "movies") {
        setLink(movies.search(query?.query));
        // setResults(moviesMock);
      } else if (query?.type === "shows") {
        setLink(shows.search(query?.query));
        // setResults(showsMock);
      }
    }
  }, [query?.query, query?.type, setLink]);
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
