import { useContext, useState } from "react";
import { Wrapper, Content, Left, Title, Right, Search } from "./style";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsSearch } from "react-icons/bs";
import { DarkmodeContext } from "../../GlobalStyles";
import { useNavigate } from "react-router-dom";

export default function Titlebar() {
  const context = useContext(DarkmodeContext);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const nav = useNavigate();
  return (
    <Wrapper className="title-bar">
      <Content>
        <Left>
          <AiOutlineMenu />
          <div>
            <span onClick={() => nav("movies")}>movies</span>
            <span onClick={() => nav("shows")}>shows</span>
          </div>
        </Left>

        <Title onClick={() => nav("/")}>title</Title>
        <Right search={search}>
          <BsSearch onClick={() => setSearch(!search)} />
          <BsFillMoonFill
            onClick={() => context?.setDarkmode(!context?.darkMode)}
          />
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
