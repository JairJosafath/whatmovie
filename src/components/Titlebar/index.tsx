import { useContext, useEffect, useMemo, useState } from "react";
import { Wrapper, Content, Left, Title, Right, Search } from "./style";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import { DarkmodeContext } from "../../GlobalStyles";
import { useNavigate } from "react-router-dom";

export default function Titlebar() {
  const context = useContext(DarkmodeContext);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [solidBar, setSolidBar] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    function handleEvent() {
      window.requestAnimationFrame(() => {
        // console.log("scrollin", window.scrollY);
        if (window.scrollY > 400) setSolidBar(true);
        else setSolidBar(false);
      });
    }
    window.addEventListener("scroll", handleEvent, false);

    return () => window.removeEventListener("scroll", handleEvent, false);
  }, []);

  useEffect(() => console.log(solidBar, "solid?"), [solidBar]);
  return (
    <Wrapper className="title-bar" solid={solidBar} search={search}>
      <Content>
        <Left>
          <AiOutlineMenu />
          <div>
            {/* <span onClick={() => nav("movies")}>movies</span>
            <span onClick={() => nav("shows")}>shows</span> */}
          </div>
        </Left>

        <Title onClick={() => nav("/")}>What Movie</Title>
        <Right search={search}>
          <BsSearch onClick={() => setSearch(!search)} />
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
      <Search search={search}>
        <input
          type={"text"}
          placeholder={"search"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AiOutlineClose onClick={() => setSearch(false)} />
      </Search>
    </Wrapper>
  );
}
