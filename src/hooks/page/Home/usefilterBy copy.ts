import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { Movie } from "../../../types/movie";
import { Show } from "../../../types/show";
import {
  addAttr,
  compare,
  compareLite,
  uniqueArray,
} from "../../../util/utilities";
import { useFetch } from "../../useFetch";

export function useFilterBy() {
  //show grid of movies when filter is activated
  const [list, setList] = useState<(Movie | Show)[]>();
  const [loading, setLoading] = useState(false);
  const [isError] = useState(false);
  //filter by
  //movies popular" | "top_rated" | "latest" | "now_playing" | "upcoming"
  const {
    data: topRated,
    loading: topRatedLoading,
    setLink: setTopRatedLink,
  } = useFetch();
  useEffect(() => {
    console.log("USEFILTERBY,TOPRATED");
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching toprated");
    setTopRatedLink(movies.getMoviesBy("top_rated"));
  }, [setTopRatedLink, loading]);
  const {
    data: popular,
    loading: popularLoading,
    setLink: setPopularLink,
  } = useFetch();
  useEffect(() => {
    console.log("USEFILTERBY,POP");
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching popular");
    setPopularLink(movies.getMoviesBy("popular"));
  }, [setPopularLink, loading]);
  const {
    data: nowPlaying,
    loading: nowPlayingLoading,
    setLink: setNowPlayingLink,
  } = useFetch();
  useEffect(() => {
    console.log("USEFILTERBY,setNowPlaying");
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching nowplaying");
    setNowPlayingLink(movies.getMoviesBy("now_playing"));
  }, [setNowPlayingLink, loading]);
  const {
    data: upcoming,
    loading: upcomingLoading,
    setLink: setUpcomingLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching upcoming");
    setUpcomingLink(movies.getMoviesBy("upcoming"));
  }, [setUpcomingLink, loading]);
  //filter by
  //shows "popular" | "top_rated" | "latest,loading:latestLoading" | "airing_today" | "on_the_air"
  const { data: topRatedShow, setLink: setTopRatedLinkShow } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching toprated shows");
    setTopRatedLinkShow(shows.getShowsBy("top_rated"));
  }, [setTopRatedLinkShow, loading]);
  const {
    data: popularShow,
    loading: popularShowLoading,
    setLink: setPopularLinkShow,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching popular shows");
    setPopularLinkShow(shows.getShowsBy("popular"));
  }, [setPopularLinkShow, loading]);

  const {
    data: airingToday,
    loading: airingTodayLoading,
    setLink: setAiringTodayLink,
  } = useFetch();
  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    console.log("fetching airting today");
    setAiringTodayLink(shows.getShowsBy("airing_today"));
  }, [setAiringTodayLink, loading]);

  useEffect(() => {
    const temp2 = uniqueArray(
      topRated &&
        popular &&
        upcoming &&
        nowPlaying &&
        topRatedShow &&
        popularShow &&
        airingToday
        ? [
            ...addAttr(topRated?.results, { type: "movies" }),
            ...addAttr(popular?.results, { type: "movies" }),
            ...addAttr(upcoming?.results, { type: "movies" }),

            ...addAttr(nowPlaying?.results, { type: "movies" }),
            ...addAttr(topRatedShow?.results, { type: "shows" }),
            ...addAttr(popularShow?.results, { type: "shows" }),

            ...addAttr(airingToday?.results, { type: "shows" }),
          ]
        : []
    );

    if (
      loading &&
      topRated &&
      popular &&
      upcoming &&
      nowPlaying &&
      topRatedShow &&
      popularShow &&
      airingToday &&
      !compareLite(temp2, list)
    ) {
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

  useEffect(() => console.log(list, "list"), [list]);

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
