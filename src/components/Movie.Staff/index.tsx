import { img_base_url, poster_size } from "../../api/api";
import { Credits } from "../../types/credits";
import { Content, Wrapper } from "./style";

interface Props {
  credits?: Credits;
}
export default function Staff({ credits }: Props) {
  return (
    <>
      <Wrapper searchmode={false}>
        <Content>
          <h2>Popular Cast</h2>
          <ul>
            {credits?.cast
              ?.sort((a: any, b: any) => b?.popularity - a?.popularity)
              .slice(0, 5)
              .map((member) => (
                <li key={member.cast_id}>
                  {member.profile_path ? (
                    <img
                      src={`${img_base_url}${poster_size.sm}${member.profile_path}`}
                      alt={`${member.character} played by ${member.name}`}
                    />
                  ) : null}
                  <h4>character: {member.character}</h4>
                  {member.name}
                </li>
              ))}
          </ul>
          <h2>Other Cast</h2>
          <ul className={"other-cast"}>
            {credits?.cast?.slice(5, 17).map((member) => (
              <li key={member.cast_id}>
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
