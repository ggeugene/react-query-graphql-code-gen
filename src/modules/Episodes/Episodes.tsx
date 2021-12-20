import { Link } from "react-router-dom";

import EpisodeListItem from "./components/EpisodeListItem";
import Loader from "../../shared/Loader";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useEpisodesQuery } from "./hooks/Episodes.query.generated";

import styles from "./Episodes.module.scss";

export function Episodes() {
  const episodesQuery = useEpisodesQuery();

  if (episodesQuery.isFetching) {
    return <Loader loading={episodesQuery.isFetching} />;
  }

  return episodesQuery.isSuccess ? (
    <div className={styles.container}>
      {episodesQuery.data?.episodes?.results?.map((item) => {
        const { id, name, air_date, episode } = item || {};
        return (
          <Link to={`/episode/${id}`} key={id}>
            <Card>
              <CardContent>
                <EpisodeListItem
                  name={name}
                  air_date={air_date}
                  episode={episode}
                />
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  ) : null;
}
