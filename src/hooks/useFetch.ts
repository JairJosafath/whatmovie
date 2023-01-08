import { useEffect, useState } from "react";

export function useFetch() {
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [data, setData] = useState<any>();
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    // console.log(link, "link");
    async function fetchData() {
      setLoading(true);
      console.log("fetching" + link.substring(0, -10));
      await fetch(link)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setIsErr(true);
          console.log(err);
        });
      setLoading(false);
    }
    if (link) fetchData();
  }, [link]);

  return {
    loading,
    isErr,
    data,
    setLink,
  };
}
