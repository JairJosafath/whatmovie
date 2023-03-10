import { useEffect, useState } from "react";
import { shows } from "../../../api/api";
import { useFetch } from "../../useFetch";

export function useShow() {
  const [loading, setLoading] = useState(false);
  const [isError] = useState(false);
  const [showId, setShowId] = useState("");
  const [seasonId, setSeasonId] = useState("1");

  const { setLink: setShowLink, data: show } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (showId) setShowLink(shows.getShow(showId).show);
  }, [setShowLink, showId]);

  const { setLink: setSimilarLink, data: similar } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (showId) setSimilarLink(shows.getShow(showId).similar);
  }, [showId, setSimilarLink]);
  const { setLink: setCreditsLink, data: credits } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (showId) setCreditsLink(shows.getShow(showId).credits);
  }, [showId, setCreditsLink]);

  const { setLink: setSeasonLink, data: season } = useFetch();

  useEffect(() => {
    setLoading(true);
    if (showId) {
      setSeasonLink(shows.getSeason(showId, seasonId));
    }
  }, [showId, setSeasonLink, seasonId]);

  useEffect(() => {
    if (show && similar && credits && season) {
      setLoading(false);
    }
  }, [show, similar, credits, season]);
  return {
    show,
    setShowId,
    similar,
    credits,
    season,
    setSeasonId,
    seasonId,
    loading,
    isError,
  };
}
