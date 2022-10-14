/* @refresh reload */
import { DevtoolsOverlay } from "@solid-devtools/overlay";
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { StoreProvider } from "./store";

import "./assets/styles/index.css";
import App from "./App";

function Tester() {
    return (<div>Hello World</div>);
}

render(
    () => (
        <StoreProvider>
            <Router children={[App ]} />
            <DevtoolsOverlay />
        </StoreProvider>
    ),
    document.getElementById("root") as HTMLElement
);
