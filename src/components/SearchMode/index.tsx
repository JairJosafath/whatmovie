import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { Wrapper, Content, TopBar } from "./style";

interface Props {
  setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
  query: { type: "movies" | "shows" | undefined; query: string } | undefined;
}
export default function SearchMode({ setSearchmode, query }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Wrapper>
      <Content>
        <AiOutlineArrowLeft
          onClick={() => {
            setSearchParams("?search=reset&clear=true", {
              replace: true,
            });
            setSearchmode(false);
          }}
        />
        <TopBar>{query?.query} Results</TopBar>
      </Content>
    </Wrapper>
  );
}
