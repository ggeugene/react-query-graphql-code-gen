import { Theme } from "@mui/material";
import { QueryClient } from "react-query";

export type FrameProps = {
  client: QueryClient;
  theme: Theme;
};