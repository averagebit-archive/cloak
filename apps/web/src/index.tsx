/* @refresh reload */
import { render } from "solid-js/web";

import "./assets/styles/index.css";
import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
