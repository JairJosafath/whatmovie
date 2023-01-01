import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isVoidExpression } from "typescript";
import {
  backdrop_size,
  img_base_url,
  key,
  movies,
  source,
} from "../../api/api";
import { Wrapper, Info, Title, Carousel, Image } from "./style";
const arr = ["a", "b", "c", "d", "e", "f"];
interface Props {
  hero: any[];
}
export default function Hero({ hero }: Props) {
  const [active, setActive] = useState(0);
  const [manualClick, setManualClick] = useState<false | string>(false);
  const [restartLoader, setRestarLoader] = useState("animate");
  const nav = useNavigate();
  useEffect(() => {
    let timerID: any;
    if (manualClick) {
      setActive(hero?.indexOf(manualClick));
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
  }, [active, manualClick, restartLoader]);
  return (
    <Wrapper>
      {hero ? (
        <>
          <Image
            src={`${img_base_url}${backdrop_size.desktop}/${hero[active]?.backdrop_path}`}
            alt="info"
          />
          <div className="grad-cover" />
          <Info>
            <Title>
              {hero[active]?.original_title
                ? hero[active]?.original_title
                : hero[active]?.name}
            </Title>
            {<p>{hero[active]?.overview}</p>}
            <button onClick={() => nav("/movie/moreinfoTest")}>
              More Info
            </button>
          </Info>
        </>
      ) : null}

      <Carousel>
        <div className={"loader " + restartLoader}></div>
        {hero?.map((item, index) => (
          <div
            key={item.id}
            className={`circle ${arr[active] === item ? "active" : ""}`}
            onClick={() => {
              setManualClick(item);
            }}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
}
