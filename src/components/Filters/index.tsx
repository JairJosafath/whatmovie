// interface Genre {
//   genres: { id: number; name: string }[];
// }

import { useCallback, useEffect, useState } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";
import { companies, img_base_url, poster_size } from "../../api/api";
import { options } from "../../Pages/Home";
import { Wrapper, Genre, Content, Menu } from "./style";

// export interface Type {
//   type: "movies" | "shows" | "companies";
// }
const featuredNames = [
  "Popular",
  "Top Rated",
  "Upcoming",
  "Now Playing",
  "Popular",
  "Top Rated",
  "Airing Today",
  "On the Air",
];
export interface Filter {
  label: string;
  type: string;
  type2: string;
}

interface Props {
  filters:
    | { id: number; name: string; type: "movies" | "shows" | "companies" }[]
    | undefined;
  setFilter: React.Dispatch<
    React.SetStateAction<
      | { id: number; name: string; type: "movies" | "shows" | "companies" }
      | undefined
    >
  >;
  filter:
    | { id: number; name: string; type: "movies" | "shows" | "companies" }
    | undefined;

  type: Filter | undefined;
  setType: React.Dispatch<React.SetStateAction<Filter | undefined>>;
}

export function Genres({ filters, setFilter, type, setType }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState<string>("HBO");

  useEffect(() => {
    console.log("running");
    const temp = filters?.filter((item) =>
      type?.label.includes("Featured")
        ? item.type === type?.type && featuredNames.includes(item.name)
        : item.type === type?.type
    );

    if (temp) {
      setFilter(temp[0]);
      setActive(temp[0].name);
    }
  }, [type, filters, setFilter]);
  return (
    <>
      <Wrapper>
        <Content show={showMenu}>
          <Genre onClick={() => setShowMenu(!showMenu)}>
            <>
              {type?.label}
              {showMenu ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
              {
                <Menu show={showMenu}>
                  <ul>
                    {options.map((item) => (
                      <li key={item.label} onClick={() => setType(item)}>
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </Menu>
              }
            </>
          </Genre>
          {filters
            ? filters
                ?.filter((item) =>
                  type?.label.includes("Featured")
                    ? item.type === type?.type &&
                      featuredNames.includes(item.name)
                    : item.type === type?.type
                )
                .map(({ id, name, type }, index) => (
                  <Genre
                    isCompany={type === "companies" ? true : false}
                    isDark={
                      name.includes("HBO") ||
                      name.includes("YouTube") ||
                      name.includes("Disney")
                        ? true
                        : false
                    }
                    isActive={name === active ? true : false}
                    key={`${type}-${id}-${index}`}
                    onClick={() => {
                      setFilter({ id, name, type: type });
                      setActive(name);
                    }}
                    className={name === active ? "active" : ""}
                  >
                    {type === "companies" ? (
                      <img
                        src={`${img_base_url}${poster_size.xs}${
                          companies.filter((company) => id === company.id)[0]
                            .logo_path
                        }`}
                        alt={name}
                      />
                    ) : (
                      name
                    )}
                  </Genre>
                ))
            : null}
        </Content>
      </Wrapper>
    </>
  );
}
