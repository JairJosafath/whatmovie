import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { movies as moviesMock } from "../../../mock_data/movie";
import { shows as showsMock } from "../../../mock_data/shows";
import { useFetch } from "../../useFetch";

export function useSearch() {
  const [results, setResults] = useState<any>();
  const [query, setQuery] = useState<
    { query: string; type: "movies" | "shows" | undefined } | undefined
  >({ query: "", type: "movies" });
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
      // console.log("queriying db");
      setLoading(true);

      if (query?.type === "movies") {
        // console.log(" mock queryy on movies");
        setLink(movies.search(query?.query));
        // setResults(moviesMock);
      } else if (query?.type === "shows") {
        // console.log(" mock queryy on shows");
        setLink(shows.search(query?.query));
        // setResults(showsMock);
      }
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
