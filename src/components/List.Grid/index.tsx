import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { img_base_url, poster_size } from "../../api/api";
import {
  Movie as MovieInterface,
  Show as ShowInterface,
} from "../../types/types";
import { Wrapper, Content, Movie } from "./style";

interface Props {
  list: MovieInterface[] | ShowInterface[] | any[] | undefined;
  searchmode: boolean;
}
export default function ListGrid({ list, searchmode }: Props) {
  const nav = useNavigate();
  return (
    <Wrapper searchmode={searchmode}>
      <Content>
        {list
          ? list?.map((item: MovieInterface | ShowInterface | any, index) => (
              <Movie
                key={`${item.id}-${item.type}-${index}`}
                onClick={() =>
                  nav(
                    item?.type === "movies"
                      ? `movie/${item?.id}`
                      : `show/${item?.id}`
                  )
                }
              >
                <img
                  src={`${img_base_url}${poster_size.md}/${item.poster_path}`}
                  alt="poster"
                />
                <h3>
                  {item?.type === "movies" ? item.original_title : item.name}
                </h3>
              </Movie>
            ))
          : null}
      </Content>
    </Wrapper>
  );
}
