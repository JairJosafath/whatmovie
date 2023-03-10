import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { Movie } from "../../../types/movie";
import { Show } from "../../../types/show";
import { addAttr, compare, uniqueArray } from "../../../util/utilities";
import { useFetch } from "../../useFetch";

export function useFilterBy() {
  //show grid of movies when filter is activated
  const [list, setList] = useState<(Movie | Show)[]>();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //filter by
  //movies popular" | "top_rated" | "latest" | "now_playing" | "upcoming"
  const {
    data: topRated,
    loading: topRatedLoading,
    isErr: topRatedErr,
    setLink: setTopRatedLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching toprated");
    setTopRatedLink(movies.getMoviesBy("top_rated"));
    return () => {
      setTopRatedLink("");
    };
  }, [setTopRatedLink]);
  const {
    data: popular,
    loading: popularLoading,
    isErr: popularErr,
    setLink: setPopularLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching popular");
    setPopularLink(movies.getMoviesBy("popular"));
    return () => {
      setPopularLink("");
    };
  }, [setPopularLink]);
  // const {
  //   data: latest,
  //   loading: latestLoading,
  //   isErr: latestErr,
  //   setLink: setLatestLink,
  // } = useFetch();
  // useEffect(() => {
  //   if (!loading) {
  //     setLoading(true);
  //   }

  //   setLatestLink(movies.getMoviesBy("latest"));
  //   return () => {
  //     setLatestLink("");
  //   };
  // }, [setLatestLink]);
  const {
    data: nowPlaying,
    loading: nowPlayingLoading,
    isErr: nowPlayingErr,
    setLink: setNowPlayingLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching nowplaying");
    setNowPlayingLink(movies.getMoviesBy("now_playing"));
    return () => {
      setNowPlayingLink("");
    };
  }, [setNowPlayingLink]);
  const {
    data: upcoming,
    loading: upcomingLoading,
    isErr: upcomingErr,
    setLink: setUpcomingLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching upcoming");
    setUpcomingLink(movies.getMoviesBy("upcoming"));
    return () => {
      setUpcomingLink("");
    };
  }, [setUpcomingLink]);
  //filter by
  //shows "popular" | "top_rated" | "latest" | "airing_today" | "on_the_air"
  const {
    data: topRatedShow,
    loading: topRatedLoadingShow,
    isErr: topRatedErrShow,
    setLink: setTopRatedLinkShow,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching toprated shows");
    setTopRatedLinkShow(shows.getShowsBy("top_rated"));
    return () => {
      setTopRatedLinkShow("");
    };
  }, [setTopRatedLinkShow]);
  const {
    data: popularShow,
    loading: popularLoadingShow,
    isErr: popularErrShow,
    setLink: setPopularLinkShow,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching popular shows");
    setPopularLinkShow(shows.getShowsBy("popular"));
    return () => {
      setPopularLinkShow("");
    };
  }, [setPopularLinkShow]);

  const {
    data: airingToday,
    loading: airingTodayLoading,
    isErr: airingTodayErr,
    setLink: setAiringTodayLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching airting today");
    setAiringTodayLink(shows.getShowsBy("airing_today"));
    return () => {
      setAiringTodayLink("");
    };
  }, [setAiringTodayLink]);

  useEffect(() => {
    if (
      loading &&
      topRated &&
      popular &&
      upcoming &&
      nowPlaying &&
      topRatedShow &&
      popularShow &&
      airingToday &&
      !compare(
        list,
        uniqueArray([
          ...addAttr(topRated.results, { type: "movies" }),
          ...addAttr(popular.results, { type: "movies" }),
          ...addAttr(upcoming.results, { type: "movies" }),

          ...addAttr(nowPlaying.results, { type: "movies" }),
          ...addAttr(topRatedShow.results, { type: "shows" }),
          ...addAttr(popularShow.results, { type: "shows" }),

          ...addAttr(airingToday.results, { type: "shows" }),
        ])
      )
    ) {
      const temp2 = uniqueArray([
        ...addAttr(topRated.results, { type: "movies" }),
        ...addAttr(popular.results, { type: "movies" }),
        ...addAttr(upcoming.results, { type: "movies" }),

        ...addAttr(nowPlaying.results, { type: "movies" }),
        ...addAttr(topRatedShow.results, { type: "shows" }),
        ...addAttr(popularShow.results, { type: "shows" }),

        ...addAttr(airingToday.results, { type: "shows" }),
      ]);

      setList(uniqueArray(temp2));
      setLoading(false);
    }
  }, [
    topRated,
    popular,
    upcoming,

    nowPlaying,
    topRatedShow,
    popularShow,

    airingToday,

    list,
    loading,
  ]);

  return {
    list,
    topRated,
    popular,
    upcoming,
    nowPlaying,
    topRatedShow,
    popularShow,
    airingToday,
    loading,
    isError,
  };
}
