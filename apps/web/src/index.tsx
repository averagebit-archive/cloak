/* @refresh reload */
import { DevtoolsOverlay } from "@solid-devtools/overlay";
import { render } from "solid-js/web";

import "./assets/styles/index.css";
import { Provider } from "./store";
import { App } from "./App";

render(
    () => (
        <Provider>
            <App />
            <DevtoolsOverlay />
        </Provider>
    ),
    document.getElementById("root") as HTMLElement
);
