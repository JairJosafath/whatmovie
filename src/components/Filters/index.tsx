// interface Genre {
//   genres: { id: number; name: string }[];
// }

import { useCallback, useEffect, useState } from "react";
import { Wrapper, Genre, Content } from "./style";

interface Props {
  filters:
    | {
        movies: { genres: { id: number; name: string }[] };
        shows: { genres: { id: number; name: string }[] };
      }
    | undefined;
  type: "movies" | "shows";
  setGenre: React.Dispatch<
    React.SetStateAction<
      { id: number; name: string; type: "movies" | "shows" } | undefined
    >
  >;
  genre: { id: number; name: string; type: "movies" | "shows" } | undefined;
}

export function Genres({ filters, type, setGenre, genre }: Props) {
  const genres =
    type === "movies"
      ? filters?.movies.genres
      : type === "shows"
      ? filters?.shows.genres
      : [];

  return (
    <>
      <Wrapper>
        <Content>
          <Genre>{type} by Genre</Genre>
          {genres
            ? genres?.map(({ name, id }: { id: number; name: string }) => (
                <Genre
                  key={id}
                  onClick={() => setGenre({ name, id, type })}
                  className={name === genre?.name ? "active" : ""}
                >
                  {name}
                </Genre>
              ))
            : null}
        </Content>
      </Wrapper>
    </>
  );
}
