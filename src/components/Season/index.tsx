import { img_base_url, poster_size } from "../../api/api";
import { Season as SeasonInterface } from "../../types/show";
import { Wrapper } from "../Home.Filters/style";
import { Content } from "./style";

interface Props {
  season: SeasonInterface | undefined;
}

export default function Season({ season }: Props) {
  return (
    <>
      <Wrapper>
        <Content>
          <ul>
            {season?.episodes?.map((episode, index) => (
              <li key={index}>
                <h3>{episode.name}</h3>
                <img
                  src={`${img_base_url}${poster_size.md}${episode?.still_path}`}
                  alt="episode poste"
                />
              </li>
            ))}
          </ul>
        </Content>
      </Wrapper>
    </>
  );
}
