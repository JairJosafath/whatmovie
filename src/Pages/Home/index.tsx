import { featuredNames, Filter, Filters } from "../../components/Home.Filters";
import Hero from "../../components/Home.Hero";
import SearchMode from "../../components/SearchMode";
import ListGrid from "../../components/List.Grid";
import { useHome } from "../../hooks/page/Home/useHome";
import { useEffect, useState, useContext } from "react";
import { compare } from "../../util/utilities";
import { useSearchParams } from "react-router-dom";
import { Show } from "../../types/show";
import { Movie } from "../../types/movie";
import { SearchmodeContext } from "../../contexts/contexts";

export const options: Filter[] = [
  { label: "Movies by Genre", type: "movies", type2: "genre" },
  { label: "Shows by Genre", type: "shows", type2: "genre" },
  { label: "Featured Movies", type: "movies", type2: "featured" },
  { label: "Featured Shows", type: "shows", type2: "featured" },
];
export function Home() {
  const {
    list,
    topRated,
    popular,
    upcoming,
    nowPlaying,
    topRatedShow,
    popularShow,
    airingToday,
    categories,
    loading,
    setQuery,
    query,
    results,
  } = useHome();

  const [hero, setHero] = useState<(Show | Movie)[]>();
  const [byGenre, setByGenre] = useState<Show[] | Movie[]>();
  const [filter, setFilter] = useState<
    | {
        id: number;
        name: string | null;
        type: "movies" | "shows" | "companies";
      }
    | undefined
  >();
  const [type, setType] = useState<Filter>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState<string>();
  const Searchmodectx:
    | {
        searchmode: boolean;
        setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined = useContext(SearchmodeContext);

  useEffect(() => console.log("query", query?.query, query?.type));
  useEffect(() => {
    if (
      searchParams.get("type") === "movies" &&
      searchParams.get("type2") === "none" &&
      searchParams.get("name") === "none"
    ) {
      setType(options[0]);
      if (window.innerWidth < 760) window.scroll(0, 670);
      else window.scroll(0, 750);
      return;
    }
    if (
      searchParams.get("type") === "shows" &&
      searchParams.get("type2") === "none" &&
      searchParams.get("name") === "none"
    ) {
      setType(options[1]);
      if (window.innerWidth < 760) window.scroll(0, 670);
      else window.scroll(0, 750);
      return;
    }
    if (searchParams.get("type2") === "featured") {
      if (searchParams.get("type") === "movies") {
        setType(options[2]);
        if (window.innerWidth < 760) window.scroll(0, 670);
        else window.scroll(0, 750);
      } else {
        setType(options[3]);
        if (window.innerWidth < 760) window.scroll(0, 670);
        else window.scroll(0, 750);
      }
      const temp = categories
        ?.filter((item) =>
          type?.label.includes("Featured")
            ? item.type === type?.type && featuredNames.includes(item.name)
            : item.type === type?.type
        )
        .filter((item) => item.name === searchParams.get("name"));

      if (temp) {
        setFilter(temp[0]);
        setActive(temp[0]?.name);
      }

      return;
    }
  }, [searchParams, setSearchParams, categories, type]);
  useEffect(() => {
    const index = Math.floor(Math.random() * 4);
    setType(options[index]);
  }, []);
  useEffect(() => {
    if (type?.label === "results") {
      return;
    }
    let listFilteredByType: (Movie | Show)[] | undefined = list
      ?.filter((item) => item.type === filter?.type)
      .filter((item) => {
        if (item?.type === "companies") {
          return false;
        }
        if (type?.type2 === "featured") {
          return false;
        }
        if (
          (type?.type === "movies" || type?.type === "shows") &&
          type?.type2 !== "featured" &&
          type?.label !== "results"
        )
          return item.genre_ids?.includes(filter?.id ? filter?.id : -1);
        return false;
      });

    if (listFilteredByType?.length === 0) {
      console.log("hola");
      switch (filter?.name?.toLowerCase().replace(" ", "")) {
        case "popular":
          compare(filter?.type, "movies")
            ? (listFilteredByType = popular.results)
            : (listFilteredByType = popularShow.results);
          break;
        case "toprated":
          compare(filter?.type, "movies")
            ? (listFilteredByType = topRated.results)
            : (listFilteredByType = topRatedShow.results);
          break;
        case "upcoming":
          listFilteredByType = upcoming.results;
          break;
        case "nowplaying":
          listFilteredByType = nowPlaying.results;
          break;
        case "airingtoday":
          listFilteredByType = airingToday.results;
          break;
        default:
          break;
      }
      setByGenre(listFilteredByType);
    } else {
      setByGenre(listFilteredByType);
    }
  }, [
    filter,
    list,
    type,
    topRated,
    popular,
    upcoming,
    nowPlaying,
    topRatedShow,
    popularShow,
    airingToday,
  ]);

  useEffect(
    () =>
      popular && popularShow
        ? setHero([...popular?.results, ...popularShow?.results].slice(0, 20))
        : undefined,
    [popular, popularShow]
  );

  useEffect(() => {
    // if ("reset" === searchParams.get("search")) {
    //   setSearchMode(false);

    //   return;
    // }
    // if (searchParams.get("search") === "true") {
    const queryLocal = searchParams.get("query");
    // if (queryLocal === query?.query) return;
    if (queryLocal && queryLocal.length >= 3) {
      setQuery({
        query: queryLocal,
        type: type?.type === "movies" ? "movies" : "shows",
      });
      setType({
        label: "results",
        type:
          searchParams.get("type") === "shows"
            ? "shows"
            : searchParams.get("type") === "movies"
            ? "movies"
            : "movies",
        type2: "",
      });
      console.log("type");
      if (queryLocal) {
        // window.scroll({ top: 0, left: 0, behavior: "smooth" });
        setByGenre(results?.results);
        Searchmodectx?.setSearchmode(true);

        // return () => clearTimeout(timer);
      }
    }
    // }
    return () => setQuery(undefined);
  }, [
    searchParams,
    setQuery,
    results,
    type?.label,
    type?.type,
    type?.type2,
    query?.query,
    query?.type,
    Searchmodectx,
  ]);

  useEffect(
    () => (Searchmodectx?.searchmode ? setQuery(undefined) : undefined),
    [Searchmodectx?.searchmode, setQuery]
  );

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {Searchmodectx?.searchmode ? (
            <SearchMode query={query} />
          ) : (
            <>
              <Hero hero={hero} />
              <Filters
                filters={categories}
                setFilter={setFilter}
                filter={filter}
                type={type}
                setType={setType}
                active={active}
                setActive={setActive}
              />
            </>
          )}

          <ListGrid list={byGenre} type={type} />
        </>
      )}
    </>
  );
}
