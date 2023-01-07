import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { img_base_url, poster_size } from "../../api/api";
import { Movie as MovieInterface } from "../../types/movie";
import { Show as ShowInterface } from "../../types/show";
import { Filter } from "../Home.Filters";

import { Wrapper, Content, Movie } from "./style";

interface Props {
  list: MovieInterface[] | ShowInterface[] | undefined;
  searchmode: boolean;
  type: Filter | undefined;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ListGrid({
  list,
  searchmode,
  type,
  setSearchMode,
}: Props) {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Wrapper searchmode={searchmode}>
      <Content>
        {list
          ? list?.map((item: MovieInterface | ShowInterface, index) => (
              <Movie
                key={`${item.id}-${type?.type}-${index}`}
                onClick={() => {
                  setSearchMode(false);
                  nav(`/${type?.type?.slice(0, -1)}/${item?.id}`);
                }}
              >
                <img
                  src={`${img_base_url}${poster_size.md}/${item.poster_path}`}
                  alt="poster"
                />
                <h3>
                  {type?.type !== "movies"
                    ? item?.original_title
                      ? item.original_title
                      : item.name
                    : null}
                </h3>
              </Movie>
            ))
          : null}
      </Content>
    </Wrapper>
  );
}
