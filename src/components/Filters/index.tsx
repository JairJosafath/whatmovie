// interface Genre {
//   genres: { id: number; name: string }[];
// }

import { useState } from "react";
import { Wrapper, Genre, Content } from "./style";

interface Props {
  filters:
    | {
        movies: { genres: { id: number; name: string }[] };
        shows: { genres: { id: number; name: string }[] };
      }
    | undefined;
  type: "movies" | "shows";
}

export function Genres({ filters, type }: Props) {
  const [active, setActive] = useState("");
  const genres =
    type === "movies"
      ? filters?.movies.genres
      : type === "shows"
      ? filters?.shows.genres
      : [];

  function handleScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    // window.requestAnimationFrame(() => {
    //   console.log("scrolling", window.scrollBy);
    // });
  }

  function handleFilter({ id, name }: { id: Number; name: string }) {
    setActive(name);
  }
  return (
    <>
      <Wrapper>
        <Content onScroll={(e) => handleScroll(e)}>
          <Genre>{type} by Genre</Genre>
          {genres
            ? genres?.map((genre: { id: number; name: string }) => (
                <Genre
                  key={genre?.id}
                  onClick={() => handleFilter(genre)}
                  className={genre.name === active ? "active" : ""}
                >
                  {genre?.name}
                </Genre>
              ))
            : null}
        </Content>
      </Wrapper>
    </>
  );
}
