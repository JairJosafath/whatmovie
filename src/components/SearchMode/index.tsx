import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { SearchmodeContext } from "../../contexts/contexts";
import { Wrapper, Content, TopBar } from "./style";
import { useContext } from "react";

interface Props {
  query: { type: "movies" | "shows" | undefined; query: string } | undefined;
}
export default function SearchMode({ query }: Props) {
  const [, setSearchParams] = useSearchParams();
  const Searchmodectx:
    | {
        searchmode: boolean;
        setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
      }
    | undefined = useContext(SearchmodeContext);

  return (
    <Wrapper>
      <Content>
        <AiOutlineArrowLeft
          onClick={() => {
            setSearchParams("?search=reset&clear=true", {
              replace: true,
            });
            Searchmodectx?.setSearchmode(false);
          }}
        />
        <TopBar>{query?.query} Results</TopBar>
      </Content>
    </Wrapper>
  );
}
