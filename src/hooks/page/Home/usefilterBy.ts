import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { Movie, Show } from "../../../../trash/types";
import { addAttr, compare, uniqueArray } from "../../../util/utilities";
import { useFetch } from "../../useFetch";

export function useFilterBy() {
  //show grid of movies when filter is activated
  const [list, setList] = useState<Movie[] | Show[] | any>();
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
// const {
//   data: onTheAir,
//   loading: onTheAirLoading,
//   isErr: onTheAirErr,
//   setLink: setOnTheAirLink,
// } = useFetch();
// const temp = [
//   ...addAttr(topRated, {
//     featured: "topRated",
//     type: "movies",
//   }),
//   ...addAttr(popular, { featured: "popular", type: "movies" }),
//   ...addAttr(upcoming, {
//     featured: "upcoming",
//     type: "movies",
//   }),
//   latest,
//   ...addAttr(nowPlaying, {
//     featured: "nowPlaying",
//     type: "movies",
//   }),
//   ...addAttr(topRatedShow, {
//     featured: "topRatedShow",
//     type: "shows",
//   }),
//   ...addAttr(popularShow, {
//     featured: "popularShow",
//     type: "shows",
//   }),
//   latestShow,
//   ...addAttr(airingToday, {
//     featured: "airingToday",
//     type: "shows",
//   }),
//   ...addAttr(onTheAir, { featured: "onTheAir", type: "shows" }),
// ];
// console.log(temp);
// useEffect(() => {
//   if (!loading) {
//     setLoading(true);
//   }
//   console.log("fetching toprated");
//   setOnTheAirLink(shows.getShowsBy("on_the_air"));
//   return () => {
//     setOnTheAirLink("");
//   };
// }, [setOnTheAirLink]);
// useEffect(() => {
//   if (
//     loading &&
//     topRated &&
//     popular &&
//     upcoming &&
//     latest &&
//     nowPlaying &&
//     topRatedShow &&
//     popularShow &&
//     latestShow &&
//     airingToday &&
//     onTheAir &&
//     !compare(
//       list,
//       uniqueArray([
//         ...addAttr(topRated.results, { type: "movies" }),
//         ...addAttr(popular.results, { type: "movies" }),
//         ...addAttr(upcoming.results, { type: "movies" }),
//         latest,
//         ...addAttr(nowPlaying.results, { type: "movies" }),
//         ...addAttr(topRatedShow.results, { type: "shows" }),
//         ...addAttr(popularShow.results, { type: "shows" }),
//         latestShow,
//         ...addAttr(airingToday.results, { type: "shows" }),
//         ...addAttr(onTheAir.results, { type: "shows" }),
//       ])
//     )
//   ) {
//     const temp2 = uniqueArray([
//       ...addAttr(topRated.results, { type: "movies" }),
//       ...addAttr(popular.results, { type: "movies" }),
//       ...addAttr(upcoming.results, { type: "movies" }),
//       latest,
//       ...addAttr(nowPlaying.results, { type: "movies" }),
//       ...addAttr(topRatedShow.results, { type: "shows" }),
//       ...addAttr(popularShow.results, { type: "shows" }),
//       latestShow,
//       ...addAttr(airingToday.results, { type: "shows" }),
//       ...addAttr(onTheAir.results, { type: "shows" }),
//     ]);

//     setList(uniqueArray(temp2));
//     setLoading(false);
//   }
// }, [
//   topRated,
//   popular,
//   upcoming,
//   latest,
//   nowPlaying,
//   topRatedShow,
//   popularShow,
//   latestShow,
//   airingToday,
//   onTheAir,
//   list,
//   loading,
// ]);
// useEffect(() => console.log("filter loading", loading));

// const {
//   data: latestShow,
//   loading: latestLoadingShow,
//   isErr: latestErrShow,
//   setLink: setLatestLinkShow,
// } = useFetch();
// useEffect(() => {
//   if (!loading) {
//     setLoading(true);
//   }

//   setLatestLinkShow(shows.getShowsBy("latest"));
//   return () => {
//     setLatestLinkShow("");
//   };
// }, [setLatestLinkShow]);
