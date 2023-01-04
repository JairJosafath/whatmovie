import { img_base_url, poster_size } from "../../api/api";
import { credits } from "../../mock_data/movie";
import { Credits } from "../../types/credits";
import { Wrapper } from "../List.Grid/style";
import { Content } from "./style";

interface Props {
  credits?: Credits;
}
export default function Staff({}: Props) {
  const pop = credits?.cast?.slice(0, 5);
  return (
    <>
      <Wrapper searchmode={false}>
        <Content>
          <h2>Popular Cast</h2>
          <ul>
            {pop.map((member) => (
              <li>
                <img
                  src={`${img_base_url}${poster_size.sm}${member.profile_path}`}
                  alt={`${member.character} played by ${member.name}`}
                />
                <h4>character: {member.character}</h4>
                {member.name}
              </li>
            ))}
          </ul>
          <h2>Other Cast</h2>
          <ul className={"other-cast"}>
            {[...credits?.cast.slice(5, 17)].map((member) => (
              <li>
                <h4>character: {member.character}</h4>
                <p>{member.name}</p>
              </li>
            ))}
          </ul>
        </Content>
      </Wrapper>
    </>
  );
}
