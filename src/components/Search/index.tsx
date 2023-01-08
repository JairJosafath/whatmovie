import { useEffect, useState, useContext } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";
import { List, Search as SearchComponent } from "./style";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchmodeContext } from "../../contexts/contexts";

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
  const Searchmodectx:
    | {
        searchmode: boolean;
        setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined = useContext(SearchmodeContext);

  useEffect(() => {
    setShowResults(true);
  }, [query]);
  useEffect(() => {
    console.log("reset serach");
    if (!search) {
      setShowResults(false);
      setValue("");
      if (useParams.get("clear") === "true") setParams("", { replace: true });
    }
    if ("reset" === useParams.get("search")) {
      setSearch(false);
      setValue("");
      return;
    }
  }, [search, setParams, setSearch, useParams]);
  useEffect(() => {
    if (value.length >= 3) Searchmodectx?.setSearchmode(true);
    const timer = setTimeout(() => {
      setQuery(value);
    }, 500);
    return () => clearTimeout(timer);
  }, [, query, value]);
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
    } else if (query && Searchmodectx?.searchmode) {
      nav(`/?search=true&type=${type}&query=${query}`, { replace: true });
    }
  }, [
    showResults,
    nav,
    setParams,
    query,
    useParams,
    setSearch,
    type,
    Searchmodectx?.searchmode,
  ]);

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
