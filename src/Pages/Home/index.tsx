import { featuredNames, Filter, Filters } from "../../components/Home.Filters";
import Hero from "../../components/Home.Hero";
import SearchMode from "../../components/SearchMode";
import ListGrid from "../../components/List.Grid";
import { useHome } from "../../hooks/page/Home/useHome";
import { useEffect, useState } from "react";
import { compare } from "../../util/utilities";
import { useSearchParams } from "react-router-dom";
import { movies } from "../../api/api";

export const options = [
  { label: "Movies by Genre", type: "movies", type2: "genre" },
  { label: "Shows by Genre", type: "shows", type2: "genre" },
  { label: "Featured Movies", type: "movies", type2: "featured" },
  { label: "Featured Shows", type: "shows", type2: "featured" },
  // { label: "By Company", type: "companies", type2: "companies" },
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

  const [hero, setHero] = useState<any[]>();
  const [byGenre, setByGenre] = useState();
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
  const [active, setActive] = useState<string | null>("HBO");
  const [searchMode, setSearchMode] = useState(false);
  useEffect(() => {
    if (
      searchParams.get("type") === "movies" &&
      searchParams.get("type2") === "none" &&
      searchParams.get("name") === "none"
    ) {
      setType(options[0]);
      window.scroll(0, 600);
      return;
    }
    if (
      searchParams.get("type") === "shows" &&
      searchParams.get("type2") === "none" &&
      searchParams.get("name") === "none"
    ) {
      setType(options[1]);
      window.scroll(0, 600);
      return;
    }
    if (searchParams.get("type2") === "featured") {
      if (searchParams.get("type") === "movies") {
        setType(options[2]);
        window.scroll(0, 600);
      } else {
        setType(options[3]);
        window.scroll(0, 600);
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
    let listFilteredByType = list
      ?.filter((item: any) => item.type === filter?.type)
      .filter((item: any) => {
        if (item?.type === "companies") {
          return false;
        }
        if (type?.type2 === "featured") {
          return false;
        }
        if (
          (type?.type === "movies" || type?.type === "shows") &&
          type?.type2 !== "featured"
        )
          return item.genre_ids?.includes(filter?.id);
        return false;
      });

    if (listFilteredByType?.length < 1) {
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
    if ("reset" === searchParams.get("search")) {
      setSearchMode(false);
      return;
    }
    if (searchParams.get("search") === "true") {
      const query = searchParams.get("query");
      if (query && query.length >= 3) {
        setQuery(query);
        if (query) {
          // window.scroll({ top: 0, left: 0, behavior: "smooth" });
          setByGenre(results?.results);
          setSearchMode(true);

          // return () => clearTimeout(timer);
        }
      }
    }
  }, [searchParams, setQuery, results]);

  useEffect(
    () => (searchMode ? setQuery("") : undefined),
    [searchMode, setQuery]
  );

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {searchMode ? (
            <SearchMode setSearchmode={setSearchMode} query={query} />
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

          <ListGrid list={byGenre} searchmode={searchMode} />
        </>
      )}
    </>
  );
}
