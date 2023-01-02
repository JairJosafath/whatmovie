import { Genres } from "../../components/Filters";
import Hero from "../../components/Hero";
import ListGrid from "../../components/List.Grid";
import { useHome } from "../../hooks/page/Home/useHome";
import { useEffect, useState } from "react";
import { filterById, uniqueArray } from "../../util/utilities";
import { Movie } from "../../types/types";

export function Home() {
  const { movies, shows, categories, loading } = useHome();

  const [genre, setGenre] = useState<{
    id: number;
    name: string;
    type: "movies" | "shows";
  }>();

  const [filtered, setFiltered] = useState<Movie[] | any[]>();
  const hero: any[] = !loading
    ? movies?.popular?.results
        .slice(0, 3)
        .concat(shows?.popularShow?.results.slice(0, 3))
    : [];
  useEffect(() => {
    if (genre && movies && !loading) {
      const popular = filterById(movies?.popular?.results, genre?.id);
      const nowPlaying = filterById(movies?.nowPlaying?.results, genre?.id);
      const topRated = filterById(movies?.topRated?.results, genre?.id);
      const upcoming = filterById(movies?.upcoming?.results, genre?.id);
      if (
        popular &&
        nowPlaying &&
        topRated &&
        upcoming &&
        JSON.stringify(filtered) !==
          JSON.stringify(
            uniqueArray([...popular, ...nowPlaying, ...topRated, ...upcoming])
          )
      ) {
        setFiltered(
          uniqueArray([...popular, ...nowPlaying, ...topRated, ...upcoming])
        );
      }
    }
  }, [genre, movies, loading, filtered]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Hero hero={hero} />
          <Genres
            filters={categories}
            type={"movies"}
            setGenre={setGenre}
            genre={genre}
          />
          <ListGrid list={filtered} type={"movies"} />
        </>
      )}
    </>
  );
}
