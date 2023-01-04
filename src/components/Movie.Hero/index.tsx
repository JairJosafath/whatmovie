import { useState } from "react";
import { backdrop_size, img_base_url } from "../../api/api";
import { Movie } from "../../types/movie";
import { Content, Image, Info, Title, Wrapper } from "../Home.Hero/style";
import { Video } from "./style";

interface Props {
  movie: Movie;
}

export default function MovieHero({ movie }: Props | any) {
  const [hasVideo, setHasVideo] = useState(movie?.video);

  return (
    <>
      <Wrapper>
        <Content>
          {hasVideo ? (
            <Video>video</Video>
          ) : (
            <Image>
              <source
                srcSet={`${img_base_url}${backdrop_size.desktop}/${
                  movie?.backdrop_path
                } ${backdrop_size.desktop.substring(1)}w`}
                media={`(min-width: 1200px)`}
              />
              <source
                srcSet={`${img_base_url}${backdrop_size.tablet}/${
                  movie?.backdrop_path
                } ${backdrop_size.tablet.substring(1)}w`}
                media={`(min-width: 300px)`}
              />
              <source
                srcSet={`${img_base_url}${backdrop_size.mobile}/${
                  movie?.backdrop_path
                } ${backdrop_size.mobile.substring(1)}w`}
                media={`(max-width: 300px)`}
              />
              <img src={""} alt="banner" />
            </Image>
          )}
          <div className="grad-cover" />
          <Info>
            <Title>
              {movie?.original_title ? movie?.original_title : movie?.name}
            </Title>
            {<p>{movie?.overview}</p>}
            <button onClick={undefined}>More Info</button>
          </Info>
        </Content>
      </Wrapper>
    </>
  );
}
