import { useEffect, useState } from "react";
import { movies, shows } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useFilterBy() {
  //show grid of movies when filter is activated
  const [filtered, setFiltered] = useState<{}>();
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
    setPopularLink(movies.getMoviesBy("popular"));
    return () => {
      setPopularLink("");
    };
  }, [setPopularLink]);
  const {
    data: latest,
    loading: latestLoading,
    isErr: latestErr,
    setLink: setLatestLink,
  } = useFetch();
  useEffect(() => {
    setLatestLink(movies.getMoviesBy("latest"));
    return () => {
      setLatestLink("");
    };
  }, [setLatestLink]);
  const {
    data: nowPlaying,
    loading: nowPlayingLoading,
    isErr: nowPlayingErr,
    setLink: setNowPlayingLink,
  } = useFetch();
  useEffect(() => {
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
    setPopularLinkShow(shows.getShowsBy("popular"));
    return () => {
      setPopularLinkShow("");
    };
  }, [setPopularLinkShow]);
  const {
    data: latestShow,
    loading: latestLoadingShow,
    isErr: latestErrShow,
    setLink: setLatestLinkShow,
  } = useFetch();
  useEffect(() => {
    setLatestLinkShow(shows.getShowsBy("latest"));
    return () => {
      setLatestLinkShow("");
    };
  }, [setLatestLinkShow]);
  const {
    data: airingToday,
    loading: airingTodayLoading,
    isErr: airingTodayErr,
    setLink: setAiringTodayLink,
  } = useFetch();
  useEffect(() => {
    setAiringTodayLink(shows.getShowsBy("airing_today"));
    return () => {
      setAiringTodayLink("");
    };
  }, [setAiringTodayLink]);
  const {
    data: onTheAir,
    loading: onTheAirLoading,
    isErr: onTheAirErr,
    setLink: setOnTheAirLink,
  } = useFetch();
  useEffect(() => {
    setOnTheAirLink(shows.getShowsBy("on_the_air"));
    return () => {
      setOnTheAirLink("");
    };
  }, [setOnTheAirLink]);
  return {
    movies: { topRated, popular, upcoming, latest, nowPlaying },
    shows: { topRatedShow, popularShow, latestShow, airingToday, onTheAir },
    loading,
    isError,
  };
}
