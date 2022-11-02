/* @refresh reload */
import {DevtoolsOverlay} from "@solid-devtools/overlay";
import {render} from "solid-js/web";

import "./assets/styles/index.css";
import {App} from "./App";

render(
    () => (
        <>
            <App />
            <DevtoolsOverlay />
        </>
    ),
    document.getElementById("root") as HTMLElement
);
