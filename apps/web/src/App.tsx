import { createSignal, Show, Suspense } from "solid-js";
import { Router, useRoutes } from "@solidjs/router";
import { routes } from "./router";
import { useStore } from "./store";

export const App = () => {
    const Routes = useRoutes(routes);
    const [state, actions] = useStore();
    const [loaded, setLoaded] = createSignal(true);

    if (!state.token) {
        setLoaded(true);
    } else {
        actions.user.login();
        actions.user.me();
        state.token && setLoaded(true);
    }

    return (
        <Suspense fallback={<span>app is loading...</span>}>
            <Show when={loaded()}>
                <Router children={[Routes]} />
            </Show>
        </Suspense>
    );
};
