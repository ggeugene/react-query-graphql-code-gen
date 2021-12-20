import CircularProgress from "@mui/material/CircularProgress";

import styles from "./Loader.module.scss";

export function Loader({ loading = false }) {
  return loading ? (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  ) : null;
}
