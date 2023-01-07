import { redirect, useNavigate, useParams } from "react-router-dom";
import { img_base_url, poster_size } from "../../api/api";
import { Similar as SimilarInterface } from "../../types/show";
import { addAttr } from "../../util/utilities";
import { Content, Movie, Wrapper } from "./style";

interface Props {
  similar: SimilarInterface | undefined;
}

export default function Similar({ similar }: Props) {
  const nav = useNavigate();
  return (
    <>
      <Wrapper searchmode={false}>
        <h2>Similar Shows</h2>
        <Content>
          {similar
            ? similar?.results?.map((show: any) => (
                <Movie key={show.id} onClick={() => nav(`/show/${show.id}`)}>
                  {show.poster_path ? (
                    <img
                      src={`${img_base_url}${poster_size.md}/${show.poster_path}`}
                      alt="poster"
                    />
                  ) : null}
                  <h3>{show?.name ? show?.name : show?.original_name}</h3>
                </Movie>
              ))
            : null}
        </Content>
      </Wrapper>
    </>
  );
}
