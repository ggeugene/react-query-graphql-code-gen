import { Episode } from "../../../../types/gql.types";

export type EpisodeListItemProps = Pick<
  Episode,
  "name" | "air_date" | "episode"
>;
