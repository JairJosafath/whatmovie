import { Movie } from "../../types/movie";
import { Wrapper } from "../Home.Filters/style";
import { Content } from "./style";

const services = [
  { label: "HBO MAX", logo: "", query: "" },
  { label: "Amazon Prime", logo: "", query: "" },
  { label: "Disney+", logo: "", query: "" },
  { label: "Netflix", logo: "", query: "" },
];

interface Props {
  movie: Movie;
}

export default function WatchOn() {
  return (
    <>
      <Wrapper>
        <Content>
          <ul>
            {services.map((service) => (
              <li>{service.label}</li>
            ))}
          </ul>
        </Content>
      </Wrapper>
    </>
  );
}
