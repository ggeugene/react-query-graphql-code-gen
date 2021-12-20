import { render } from "react-dom";

import Frame from "./modules/Frame";
import client from "./api/client";
import theme from "./shared/theme";
import reportWebVitals from "./reportWebVitals";

render(
  <Frame client={client} theme={theme} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
