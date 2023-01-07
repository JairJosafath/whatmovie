import { redirect, useNavigate, useParams } from "react-router-dom";
import { img_base_url, poster_size } from "../../api/api";
import { Similar as SimilarInterface } from "../../types/movie";
import { addAttr } from "../../util/utilities";
import { Content, Movie, Wrapper } from "./style";

interface Props {
  similar: SimilarInterface;
}

export default function Similar({ similar }: Props) {
  const nav = useNavigate();
  return (
    <>
      <Wrapper searchmode={false}>
        <h2>Similar Movies</h2>
        <Content>
          {similar
            ? similar?.results?.map((movie) => (
                <Movie key={movie.id} onClick={() => nav(`/movie/${movie.id}`)}>
                  {movie.poster_path ? (
                    <img
                      src={`${img_base_url}${poster_size.md}/${movie.poster_path}`}
                      alt="poster"
                    />
                  ) : null}
                  <h3>{movie.original_title}</h3>
                </Movie>
              ))
            : null}
        </Content>
      </Wrapper>
    </>
  );
}
