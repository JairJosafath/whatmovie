import { useEffect, useState } from "react";
import { backdrop_size, img_base_url } from "../../api/api";
import { Season, Show } from "../../types/show";
import { Content, Image, Info, Title, Wrapper } from "./style";
import { List } from "./style";

interface Props {
  show: Show | undefined;
  setSeasonId: React.Dispatch<React.SetStateAction<string>>;
  seasonId: string;
  season: Season;
}

export default function ShowHero({
  show,
  setSeasonId,
  seasonId,
  season,
}: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [hero, setHero] = useState<Show | Season | undefined>();

  useEffect(() => {
    setHero(show);
  }, [show]);
  useEffect(() => {
    setHero(season);
  }, [season]);

  useEffect(
    () => console.log(show?.seasons ? show?.seasons : null, "testttstsest"),
    [seasonId]
  );
  return (
    <>
      <Wrapper>
        <Content>
          (
          <Image>
            <source
              srcSet={`${img_base_url}${backdrop_size.desktop}/${
                hero?.poster_path
              } ${backdrop_size.desktop.substring(1)}w`}
              media={`(min-width: 1200px)`}
            />
            <source
              srcSet={`${img_base_url}${backdrop_size.tablet}/${
                hero?.poster_path
              } ${backdrop_size.tablet.substring(1)}w`}
              media={`(min-width: 300px)`}
            />
            <source
              srcSet={`${img_base_url}${backdrop_size.mobile}/${
                hero?.poster_path
              } ${backdrop_size.mobile.substring(1)}w`}
              media={`(max-width: 300px)`}
            />
            <img src={""} alt="banner" />
          </Image>
          <div className="grad-cover" />
          <Info showMenu={showMenu}>
            <Title>
              {hero?.name
                ? hero?.name
                : season?.episodes
                ? season?.episodes[0]?.name
                : null}
            </Title>
            <h4>{season?.episodes ? season?.episodes[0]?.name : null}</h4>
            {
              <p>
                {hero?.overview
                  ? hero?.overview
                  : season?.episodes
                  ? season?.episodes[0]?.overview
                  : null}
              </p>
            }
            <button onClick={() => setShowMenu(!showMenu)}>
              {season?.name}
            </button>
            <List showMenu={showMenu}>
              {show?.seasons?.map((season: any, index) => (
                <li
                  key={season?._id}
                  onClick={() => {
                    if (season) setSeasonId(index.toString());
                    setShowMenu(!showMenu);
                  }}
                >
                  {season?.name}
                </li>
              ))}
            </List>
          </Info>
        </Content>
      </Wrapper>
    </>
  );
}
