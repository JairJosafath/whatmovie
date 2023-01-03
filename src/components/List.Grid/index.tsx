import { useEffect } from "react";
import { img_base_url, poster_size } from "../../api/api";
import {
  Movie as MovieInterface,
  Show as ShowInterface,
} from "../../types/types";
import { shuffle } from "../../util/utilities";
import { Wrapper, Content, Movie } from "./style";

interface Props {
  list: MovieInterface[] | ShowInterface[] | any[] | undefined;
}
export default function ListGrid({ list }: Props) {
  // useEffect(() => console.log("filtered list", list), [list]);
  return (
    <Wrapper>
      <Content>
        {list
          ? list?.map((item: MovieInterface | ShowInterface | any) => (
              <Movie key={`${item.id}-${item.type}`}>
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
