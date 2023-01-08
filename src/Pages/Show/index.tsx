import { useParams } from "react-router-dom";
import ShowHero from "../../components/Show.Hero";
import Similar from "../../components/Show.Similar";
import Staff from "../../components/Movie.Staff";
import { useShow } from "../../hooks/page/Show/useShow";
import { useEffect } from "react";
import Season from "../../components/Season";

export default function Show() {
  const { id } = useParams();

  const {
    show,
    setShowId,
    setSeasonId,
    seasonId,
    similar,
    credits,
    season,
    loading,
  } = useShow();

  useEffect(() => console.log("loading", loading), [loading]);
  useEffect(() => console.log("season", season), [season]);
  useEffect(() => {
    if (id) setShowId(id);
  }, [id, setShowId]);

  return (
    <>
      {!false ? (
        <>
          <ShowHero
            show={show}
            setSeasonId={setSeasonId}
            seasonId={seasonId}
            season={season}
          />

          <Season season={season} />

          <Staff credits={credits} />
          <Similar similar={similar} />
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}
