import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Search as SearchComponent } from "../Titlebar/style";
import { Content, Results } from "./style";

import { movies } from "../../api/api";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Props {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Search({ search, setSearch }: Props) {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const nav = useNavigate();
  const [useParams, setParams] = useSearchParams();
  useEffect(() => {
    setShowResults(true);
  }, [query]);
  useEffect(() => {
    console.log("reset serach");
    if (!search) {
      setShowResults(false);
      setQuery("");
      setValue("");
      if (useParams.get("clear") === "true") setParams("", { replace: true });
    }
  }, [search, setParams, useParams]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, value]);
  useEffect(() => {
    console.log("sweeerving");
    if (!showResults) {
      if (useParams.get("clear") === "true") {
        setParams("", { replace: true });
        setSearch(false);
      }
    } else if (useParams.get("search") === "reset") {
      setParams("", { replace: true });
      setSearch(false);
    } else nav(`/?search=true&query=${query}`, { replace: true });
  }, [showResults, nav, setParams, query, useParams, setSearch]);

  return (
    <>
      <SearchComponent search={search}>
        <input
          type={"text"}
          placeholder={"search"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <AiOutlineClose
          onClick={() => {
            setSearch(false);
          }}
        />
      </SearchComponent>
    </>
  );
}
