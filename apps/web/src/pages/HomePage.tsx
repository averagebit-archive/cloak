import { Component, Show } from "solid-js";
import { useStore } from "../store";

const HomePage: Component = () => {
    const [state, actions] = useStore();

    return (
        <>
            <h1>HomePage, {state.user() && state.user()?.username}</h1>
            <Show
                when={state.token}
                fallback={
                    <button onClick={() => actions.user.login()}>Login</button>
                }
            >
                <button onClick={() => actions.user.logout()}>Logout</button>
            </Show>
        </>
    );
};

export default HomePage;
