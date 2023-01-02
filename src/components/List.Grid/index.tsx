import { useEffect } from "react";
import { img_base_url, poster_size } from "../../api/api";
import { Movie as MovieInterface } from "../../types/types";
import { Wrapper, Content, Movie } from "./style";

interface Props {
  list: MovieInterface[] | any[] | undefined;
  type: string;
}
export default function ListGrid({ list }: Props) {
  // useEffect(() => console.log("filtered list", list), [list]);
  return (
    <Wrapper>
      <Content>
        {list?.map((item, index) => (
          <Movie key={index}>
            <img
              src={`${img_base_url}${poster_size.md}/${item.poster_path}`}
              alt="poster"
            />
            <h3>{item.original_title}</h3>
          </Movie>
        ))}
      </Content>
    </Wrapper>
  );
}
