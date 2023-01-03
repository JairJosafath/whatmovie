import { Filter, Genres } from "../../components/Filters";
import Hero from "../../components/Hero";
import ListGrid from "../../components/List.Grid";
import { useHome } from "../../hooks/page/Home/useHome";
import { useEffect, useState } from "react";
import { compare } from "../../util/utilities";
import { useSearchParams } from "react-router-dom";

export const options = [
  { label: "Movies by Genre", type: "movies", type2: "genre" },
  { label: "Shows by Genre", type: "shows", type2: "genre" },
  { label: "Featured Movies", type: "movies", type2: "featured" },
  { label: "Featured Shows", type: "shows", type2: "featured" },
  { label: "By Company", type: "companies", type2: "companies" },
];
export function Home() {
  const {
    list,
    topRated,
    popular,
    upcoming,
    latest,
    nowPlaying,
    topRatedShow,
    popularShow,
    latestShow,
    airingToday,
    onTheAir,
    categories,
    loading,
  } = useHome();

  const [hero, setHero] = useState<any[]>();
  const [byGenre, setByGenre] = useState();
  const [filter, setFilter] = useState<
    | {
        id: number;
        name: string;
        type: "movies" | "shows" | "companies";
      }
    | undefined
  >();
  const [type, setType] = useState<Filter>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams, "search params");
  }, [searchParams]);
  useEffect(() => {
    const index = Math.floor(Math.random() * 5);
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
      switch (filter?.name.toLowerCase().replace(" ", "")) {
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
        case "ontheair":
          listFilteredByType = onTheAir.results;
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
    latest,
    nowPlaying,
    topRatedShow,
    popularShow,
    latestShow,
    airingToday,
    onTheAir,
  ]);

  useEffect(
    () =>
      popular && popularShow
        ? setHero([...popular?.results, ...popularShow?.results].slice(0, 20))
        : undefined,
    [popular, popularShow]
  );
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Hero hero={hero} />
          <Genres
            filters={categories}
            setFilter={setFilter}
            filter={filter}
            type={type}
            setType={setType}
          />
          <ListGrid list={byGenre} />
        </>
      )}
    </>
  );
}
