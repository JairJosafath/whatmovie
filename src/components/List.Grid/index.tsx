import { useNavigate, useSearchParams } from "react-router-dom";
import { img_base_url, poster_size } from "../../api/api";
import { Movie as MovieInterface } from "../../types/movie";
import { Show as ShowInterface } from "../../types/show";
import { Filter } from "../Home.Filters";
import { useContext } from "react";
import { Wrapper, Content, Movie } from "./style";
import { SearchmodeContext } from "../../contexts/contexts";

interface Props {
  list: MovieInterface[] | ShowInterface[] | undefined;
  type: Filter | undefined;
}
export default function ListGrid({ list, type }: Props) {
  const nav = useNavigate();
  const [, setSearchParams] = useSearchParams();
  const Searchmodectx:
    | {
        searchmode: boolean;
        setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined = useContext(SearchmodeContext);

  return (
    <Wrapper
      searchmode={Searchmodectx?.searchmode ? Searchmodectx?.searchmode : false}
    >
      <Content>
        {list
          ? list?.map((item: MovieInterface | ShowInterface, index) => (
              <Movie
                key={`${item.id}-${type?.type}-${index}`}
                onClick={() => {
                  if (Searchmodectx?.searchmode) {
                    Searchmodectx?.setSearchmode(false);
                    nav(`/${type?.type?.slice(0, -1)}/${item?.id}`);
                  } else nav(`/${type?.type?.slice(0, -1)}/${item?.id}`);
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
