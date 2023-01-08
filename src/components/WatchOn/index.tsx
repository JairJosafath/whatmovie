import { useEffect } from "react";
import { gapiId, gKey, gsource } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import { Wrapper } from "../Home.Filters/style";
import { Content } from "./style";

const services = [
  { label: "HBO MAX", logo: "", query: "" },
  { label: "Disney+", logo: "", query: "" },
  { label: "Netflix", logo: "", query: "" },
];

interface Props {
  name: string;
}

export default function WatchOn({ name }: Props) {
  // const [searchUrl, setSearchUrl] = useState("");
  const { data, setLink } = useFetch();
  useEffect(() => {
    const res = data;
    console.log("data", data);
    if (res && data) window.open(res?.items[0].link);
  }, [data]);

  function handleClick(service: {
    label: string;
    logo: string;
    query: string;
  }) {
    const temp = `watch ${name} on ${service.label}`.replaceAll(",", " ");
    console.log(temp);
    setLink(
      `${gsource}?cx=${gapiId}&key=${gKey}&q=${new URLSearchParams(temp)}`
    );
    console.log(
      `${gsource}?cx=${gapiId}&key=${gKey}&q=${new URLSearchParams(temp)}`
    );
  }

  return (
    <>
      <Wrapper>
        <Content>
          <ul>
            {services.map((service) => (
              <li onClick={(e) => handleClick(service)}>{service.label}</li>
            ))}
          </ul>
        </Content>
      </Wrapper>
    </>
  );
}
