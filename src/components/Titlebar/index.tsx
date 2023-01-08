import { useContext, useEffect, useState } from "react";
import { Wrapper, Content, Left, Title, Right } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import Search from "../Search";
import { DarkmodeContext } from "../../contexts/contexts";

interface Props {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Titlebar({ setShowNav }: Props) {
  const context = useContext(DarkmodeContext);
  const [search, setSearch] = useState(false);
  const [solidBar, setSolidBar] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const nav = useNavigate();

  useEffect(() => {
    function handleEvent() {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 400) setSolidBar(true);
        else setSolidBar(false);
      });
    }
    window.addEventListener("scroll", handleEvent, false);

    return () => window.removeEventListener("scroll", handleEvent, false);
  }, []);

  return (
    <Wrapper className="title-bar" solid={solidBar} search={search}>
      <Content>
        <Left>
          <AiOutlineMenu onClick={() => setShowNav(true)} />
          <div>
            {/* <span onClick={() => nav("movies")}>movies</span>
            <span onClick={() => nav("shows")}>shows</span> */}
          </div>
        </Left>
        <Title
          onClick={() => {
            nav("/", { replace: true });
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          What Movie
        </Title>
        <Right search={search}>
          <BsSearch
            onClick={() => {
              if (search)
                setSearchParams("?search=reset&clear=true", {
                  replace: true,
                });
              setSearch(!search);
            }}
          />
          {context?.darkMode ? (
            <BsFillMoonFill
              onClick={() => context?.setDarkmode(!context?.darkMode)}
            />
          ) : (
            <BsFillSunFill
              onClick={() => context?.setDarkmode(!context?.darkMode)}
            />
          )}
        </Right>
      </Content>
      <Search search={search} setSearch={setSearch} />
    </Wrapper>
  );
}
