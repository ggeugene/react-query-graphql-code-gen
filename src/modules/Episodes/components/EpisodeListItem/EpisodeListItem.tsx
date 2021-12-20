import { Typography } from "@mui/material";

import { EpisodeListItemProps } from "./EpisodeListItem.interfaces";
import styles from "./EpisodeListItem.module.scss";

export function EpisodeListItem(props: EpisodeListItemProps) {
  const { name, air_date, episode } = props || {};
  return (
    <div className={styles.container}>
      <div className={styles.episode}>{episode}</div>
      <div className={styles.textContainer}>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="subtitle1" component="h3">
          {air_date}
        </Typography>
      </div>
    </div>
  );
}
