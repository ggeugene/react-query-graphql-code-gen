import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider } from "react-query";

import Episode from "../Episode";
import Episodes from "../Episodes";

import { FrameProps } from "./Frame.interfaces";
import styles from "./Frame.module.scss";

export function Frame({ client, theme }: FrameProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={client}>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Episodes />} />
              <Route path="episode/:episodeId" element={<Episode />} />
            </Routes>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
