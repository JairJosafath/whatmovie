import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";
import { Content, List, Results, Search as SearchComponent } from "./style";

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
  const [showMenu, setShowMenu] = useState(false);
  const [type, setType] = useState("movies");
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
    if ("reset" === useParams.get("search")) {
      setSearch(false);
      setQuery("");
      setValue("");
      return;
    }
  }, [search, setParams, setSearch, useParams]);
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
    } else nav(`/?search=true&type=${type}&query=${query}`, { replace: true });
  }, [showResults, nav, setParams, query, useParams, setSearch, type]);

  return (
    <>
      <SearchComponent search={search}>
        {
          <div>
            <button className={"type"} onClick={() => setShowMenu(!showMenu)}>
              {type}
            </button>

            {
              <List showMenu={showMenu} search={search}>
                <div
                  className={"item"}
                  onClick={() => {
                    setShowMenu(!showMenu);
                    setType("movies");
                  }}
                >
                  movies
                </div>
                <div
                  className={"item"}
                  onClick={() => {
                    setShowMenu(!showMenu);
                    setType("shows");
                  }}
                >
                  shows
                </div>
              </List>
            }
          </div>
        }
        {!showMenu ? (
          <AiFillCaretDown onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <AiFillCaretUp onClick={() => setShowMenu(!showMenu)} />
        )}
        <input
          type={"text"}
          placeholder={"search " + type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <AiOutlineClose
          onClick={() => {
            setParams("?search=reset&clear=true", {
              replace: true,
            });
            // setSearch(false);
          }}
        />
      </SearchComponent>
    </>
  );
}
