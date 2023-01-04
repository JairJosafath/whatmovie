import { AiOutlineArrowLeft } from "react-icons/ai";
import { Wrapper, Content, TopBar } from "./style";

interface Props {
  setSearchmode: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
}
export default function SearchMode({ setSearchmode, query }: Props) {
  return (
    <Wrapper>
      <Content>
        <AiOutlineArrowLeft
          onClick={() => {
            setSearchmode(false);
          }}
        />
        <TopBar>{query} Results</TopBar>
      </Content>
    </Wrapper>
  );
}
