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
import { Wrapper, Genre, Content, Menu } from "./style";

// export interface Type {
//   type: "movies" | "shows" | "companies";
// }

export interface Filter {
  label: string;
  type: string;
  type2: string;
}

interface Props {
  filters:
    | { id: number; name: string; type: "movies" | "shows" | "companies" }[]
    | undefined;
  setFilterType: React.Dispatch<React.SetStateAction<Filter | undefined>>;
  filterType: Filter | undefined;
}

const options = [
  { label: "Movies by Genre", type: "movies", type2: "genre" },
  { label: "Shows by Genre", type: "shows", type2: "genre" },
  { label: "Featured Movies", type: "movies", type2: "featured" },
  { label: "Featured Shows", type: "shows", type2: "featured" },
  { label: "By Company", type: "companies", type2: "companies" },
];
export function Genres({ filters, setFilterType, filterType }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [type, setType] = useState<Filter>(options[0]);
  // function handleMenuClick(type: Type) {
  //   setType(type);
  // }
  // function handleFilterClick(
  //   type: {
  //     label: string;
  //     type: "movies" | "shows" | string;
  //     type2: string;
  //   },
  //   value: any
  // ) {
  //   // switch (type.label) {
  //   //   case options[0].label:
  //   //     setFilterType({ type: type, value: {} });
  //   //     break;

  //   //   case options[1].label:
  //   //     setFilterType({ type: type, value: {} });
  //   //     break;

  //   //   case options[2].label:
  //   //     setFilterType({ type: type, value: {} });
  //   //     break;

  //   //   case options[3].label:
  //   //     setFilterType({ type: type, value: {} });
  //   //     break;

  //   //   case options[4].label:
  //   //     setFilterType({ type: type, value: {} });
  //   //     break;

  //   //   case options[5].label:
  //   //     setFilterType({ type: type, value: {} });
  //   //     break;

  //   //   default:
  //   //     break;
  //   // }
  //   setType(type);
  // }
  return (
    <>
      <Wrapper>
        <Content show={showMenu}>
          <Genre onClick={() => setShowMenu(!showMenu)}>
            <>
              {type.label}
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
                ?.filter((item) => item.type === type.type)
                .map(({ id, name, type: localType }, index) => (
                  <Genre
                    isCompany={localType === "companies" ? true : false}
                    isDark={
                      name.includes("HBO") ||
                      name.includes("YouTube") ||
                      name.includes("Disney")
                        ? true
                        : false
                    }
                    key={`${localType}-${id}-${index}`}
                    // onClick={() => handleFilterClick(type,localType)}
                    // className={name === genre?.name ? "active" : ""}
                  >
                    {localType === "companies" ? (
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
