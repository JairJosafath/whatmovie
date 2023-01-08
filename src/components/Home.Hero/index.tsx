import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backdrop_size, img_base_url } from "../../api/api";
import { Movie } from "../../types/movie";
import { Show } from "../../types/show";
import { shuffle } from "../../util/utilities";
import { Wrapper, Info, Title, Carousel, Image, Content } from "./style";
interface Props {
  hero: (Show | Movie)[] | undefined;
}
export default function Hero({ hero }: Props) {
  const [active, setActive] = useState(0);
  const [manualClick, setManualClick] = useState<false | Show | Movie>(false);
  const [restartLoader, setRestarLoader] = useState("animate");
  const [featured, setFeatured] = useState<(Movie | Show)[]>();
  const nav = useNavigate();
  useEffect(() => {
    console.log("Home.hero");
    let timerID: any;
    if (manualClick) {
      setActive(hero ? hero?.indexOf(manualClick) : 0);
      setRestarLoader("");
      setTimeout(() => {
        setRestarLoader("animate");
      }, 100);
      setManualClick(false);
    } else {
      timerID = setTimeout(() => {
        if (active !== 5) setActive(active + 1);
        else {
          setActive(0);
        }
      }, 15000);
    }
    return () => clearTimeout(timerID);
  }, [active, manualClick, restartLoader, hero]);

  useEffect(
    () => (hero ? setFeatured(shuffle(hero).slice(0, 6)) : undefined),
    [hero]
  );
  // if(hero instanceof Movie[]){

  // }
  return (
    <Wrapper>
      <Content>
        {hero ? (
          <>
            <Image>
              <source
                srcSet={`${img_base_url}${backdrop_size.desktop}/${
                  hero[active]?.backdrop_path
                } ${backdrop_size.desktop.substring(1)}w`}
                media={`(min-width: 1200px)`}
              />
              <source
                srcSet={`${img_base_url}${backdrop_size.tablet}/${
                  hero[active]?.backdrop_path
                } ${backdrop_size.tablet.substring(1)}w`}
                media={`(min-width: 300px)`}
              />
              <source
                srcSet={`${img_base_url}${backdrop_size.mobile}/${
                  hero[active]?.backdrop_path
                } ${backdrop_size.mobile.substring(1)}w`}
                media={`(max-width: 300px)`}
              />
              <img src={""} alt="banner" />
            </Image>
            <div className="grad-cover" />
            <Info>
              <Title>
                {hero[active]?.original_title
                  ? hero[active]?.original_title
                  : hero[active]?.name}
              </Title>
              {<p>{hero[active]?.overview}</p>}
              <button onClick={() => nav(`/movie/${hero[active]?.id}`)}>
                More Info
              </button>
            </Info>
          </>
        ) : null}

        <Carousel>
          <div className={"loader " + restartLoader}></div>
          {featured?.map((item, index) => (
            <div
              key={item.id}
              className={`circle ${
                featured[active]?.id === item?.id &&
                featured[active]?.name === item?.name
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setManualClick(item);
              }}
            />
          ))}
        </Carousel>
      </Content>
    </Wrapper>
  );
}
