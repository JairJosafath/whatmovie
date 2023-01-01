import { Genres } from "../../components/Filters";
import Hero from "../../components/Hero";
import ListGrid from "../../components/List.Grid";
import { useHome } from "../../hooks/page/Home/useHome";

export function Home() {
  const { movies, shows, categories, loading } = useHome();
  const hero: any[] = !loading
    ? movies?.popular?.results
        .slice(0, 3)
        .concat(shows?.popularShow?.results.slice(0, 3))
    : [];

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Hero hero={hero} />
          <Genres filters={categories} type={"movies"} />
          {/* <ListGrid list={list} type={"movies"}/> */}
        </>
      )}
    </>
  );
}
