import { Filter, Genres } from "../../components/Filters";
import Hero from "../../components/Hero";
import ListGrid from "../../components/List.Grid";
import { useHome } from "../../hooks/page/Home/useHome";
import { useEffect, useState } from "react";
import { filterById, uniqueArray } from "../../util/utilities";
import { Movie, Show } from "../../types/types";

export function Home() {
  const { list, popular, popularShow, categories, loading } = useHome();
  const [hero, setHero] = useState();
  const [byGenre, setByGenre] = useState();
  const [filter, setFilter] = useState<Filter>();

  // useEffect(
  //   () =>
  //     setHero(
  //       popular
  //         ? popular?.filter((item: Movie | Show) => item?.featured === "popular")
  //         : null
  //     ),
  //   [list]
  // );

  useEffect(() => {
    // setByGenre(
    //   list?.filter((item: any) => {
    //     console.log(item, "item");
    //     if (item.type === "movies") {
    //       return item.filter_ids.includes(filter?.id);
    //     }
    //     if (item.type === "shows") {
    //       return item.filter_ids.includes(filter?.id);
    //     }
    //     return false;
    //   })
    // );
    console.log("filter", filter);
  }, [filter, list]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Hero
            hero={
              popular && popularShow
                ? [...popular?.results, ...popularShow?.results].slice(0, 20)
                : []
            }
          />
          <Genres
            filters={categories}
            setFilterType={setFilter}
            filterType={filter}
          />
          <ListGrid list={byGenre} />
        </>
      )}
    </>
  );
}
