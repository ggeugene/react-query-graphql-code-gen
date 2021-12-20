import { useParams, Link } from "react-router-dom";
import Loader from "../../shared/Loader";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Fab from "@mui/material/Fab";

import { Character } from "./components/Character/Character";
import { useEpisodeQuery } from "./hooks/EpisodeById.query.generated";

import styles from "./Episode.module.scss";

export function Episode() {
  const { episodeId } = useParams();

  const episodeQuery = useEpisodeQuery(
    { id: episodeId as string },
    { enabled: !!episodeId }
  );

  if (episodeQuery.isFetching) {
    return <Loader loading={true} />;
  }

  if (episodeQuery.isSuccess) {
    const { name, air_date, episode, characters } =
      episodeQuery.data?.episode || {};

    return (
      <div>
        <Link to="/" className={styles.floatingLink}>
          <Fab
            variant="extended"
            sx={{ bgcolor: (theme) => theme.palette.primary.main }}
          >
            <ArrowBackIosIcon sx={{ mr: 1 }} />
            Episodes
          </Fab>
        </Link>
        <div>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="subtitle1">{episode}</Typography>
          <Typography variant="subtitle2">Air date: {air_date}</Typography>
        </div>
        <Divider
          sx={{ bgcolor: (theme) => theme.palette.primary.main, marginTop: 6 }}
        />
        <div className={styles.container}>
          {characters?.map((item) => {
            const { id, name, image, species, origin } = item || {};
            return (
              <Character
                key={id}
                image={image}
                name={name}
                species={species}
                origin={origin}
              />
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}
