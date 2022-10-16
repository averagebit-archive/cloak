import { createSignal, Show, Suspense } from "solid-js";
import { useStore } from "../store";

export const Auth = (props: any) => {
    const [state, actions] = useStore();
    const [loaded, setLoaded] = createSignal(true);

    if (state.user.token.length) {
        actions.user.setUserAuthenticated();
    }

    setLoaded(true);

    return (
        <Suspense fallback={<span>app is loading...</span>}>
            <Show when={loaded()} keyed>
                {props.children}
            </Show>
        </Suspense>
    );
};
