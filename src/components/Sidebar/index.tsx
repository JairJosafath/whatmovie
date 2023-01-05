import { useEffect, useState } from "react";
import { Bar, Content, Dimmed, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
interface Props {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const listItems = [
  { label: "Home", path: "/" },
  {
    label: "Shows",
    path: "/?type2=none&name=none&type=shows",
  },
  { label: "Movies", path: "/?type2=none&name=none&type=movies" },
  { label: "Popular", path: "/?type2=featured&name=Popular&type=movies" },
  { label: "Top Rated", path: "/?type2=featured&name=Top%20Rated&type=movies" },
  { label: "Upcoming", path: "/?type2=featured&name=Upcoming&type=movies" },
  {
    label: "Now Playing",
    path: "/?type2=featured&name=Now%20Playing&type=movies",
  },
  {
    label: "Airing Today",
    path: "/?type2=featured&name=Airing%20Today&type=shows",
  },
  // { label: "On the Air", path: "?type2=featured&name=ontheair&type=shows" },
];

export default function Sidebar({ showNav, setShowNav }: Props) {
  const nav = useNavigate();
  const [delayed, setDelayed] = useState(false);
  useEffect(() => {
    if (!showNav)
      setTimeout(() => {
        setDelayed(showNav);
      }, 600);
    // setTimeout(() => {
    else setDelayed(showNav);
    // }, 300);
  }, [showNav]);

  return (
    <>
      {delayed ? (
        <Wrapper
          onLoad={() => console.log("loaded")}
          onScroll={(e) => e.preventDefault}
        >
          <Content>
            <Bar showNav={showNav}>
              <ul>
                {listItems.map((item) => (
                  <li
                    key={item.label}
                    onClick={() => {
                      if (item.label === "Home") {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }
                      nav(item.path, { replace: true });
                      setShowNav(false);
                    }}
                  >
                    <p>{item.label}</p>
                  </li>
                ))}
              </ul>
            </Bar>
            <Dimmed
              showNav={showNav}
              delayed={delayed}
              onClick={() => setShowNav(false)}
            ></Dimmed>
          </Content>
        </Wrapper>
      ) : null}
    </>
  );
}
